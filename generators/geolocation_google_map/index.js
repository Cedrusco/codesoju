'use strict';
var yeoman = require('yeoman-generator'),
    chalk = require('chalk'),
    html_wiring = require('html-wiring');

module.exports = yeoman.Base.extend({
    prompting: function () {


        this.log('Welcome to ' + chalk.red('Codesoju Generator') + ' v 1.0');
        this.log(chalk.green('This operator lets you to add a geolocation/Google Map feature'));
        this.log();

        var done = this.async(),
            prompts = [{
                type: 'confirm',
                name: 'mobile',
                message: 'Is it a Codesoju mobile application?'
            },
                {
                    type: 'input',
                    name: 'google_dev_key',
                    message: 'Please provide us with your Google developer key',
                    when: function (answers) {

                        return answers.mobile;
        
                    }
                }];

        return this.prompt(prompts).then(function (props) {

            this.google_dev_key = props.google_dev_key;
            this.mobile = props.mobile;
            done();
    
        }.bind(this));
  
    },

    writing: function () {

        if (this.mobile) {

            this.log('Updating your html...');
			// construct and insert a script tag
            var index_file = html_wiring.readFileAsString('www/index.html'),
                re = /<\/body>/,
                geolocation_url = 'https://maps.googleapis.com/maps/api/js?key=' + this.google_dev_key + '&libraries=places',
                subst = '\t<script src=\'' + geolocation_url + '\'></script>\n\t<\/body>';
            index_file = index_file.replace(re, subst);

            html_wiring.writeFileFromString(index_file, 'www/index.html');

			// insert identifier to notify app that the key is available
            var google_map_html = html_wiring.readFileAsString('client/app/google_map/google_map.html'),
                regex = /class="intro"/,
                str_subst = 'class="intro" id="mapExecute"';

            google_map_html = google_map_html.replace(regex, str_subst);
            html_wiring.writeFileFromString(google_map_html, 'client/app/google_map/google_map.html');
            this.log(chalk.green('Please run ') + chalk.red('gulp build-mobile ' + chalk.green('and ' + chalk.red('cordova build'))));
    
        } else {

            this.log(chalk.green('Sorry, it has to be a mobile Codesoju app to use a geolocation plugin'));
    
        }
  
    }
});
