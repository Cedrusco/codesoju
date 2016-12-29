'use strict';
var yeoman = require('yeoman-generator'),
    chalk = require('chalk');

module.exports = yeoman.Base.extend({

    prompting: function () {

        this.log('Welcome to ' + chalk.red('Soju Generator') + ' v 1.0');
        this.log();

        var done = this.async(),
            prompts = [{
                type: 'input',
                name: 'name',
                message: 'What is the name of your application?'
            }, {
                type: 'list',
                name: 'angularVersion',
                message: 'Choose what type of app you would like to buld:',
                choices: ['Angular-1', 'Angular-2', 'Cordova-Mobile']
            }];

        return this.prompt(prompts).then(function (props) {

            this.appName = props.name;
            this.angularVersion = props.angularVersion;
            done();
    
        }.bind(this));
  
    },

    writing: function () {

        if (this.angularVersion === 'Angular-1') {

            this.directory('angular1', this.destinationRoot());
    
        } else if (this.angularVersion === 'Angular-2') {

            this.directory('angular2', this.destinationRoot());
    
        } else {

            this.directory('cordova-mobile', this.destinationRoot());
    
        }
  
    },

    installing: function () {

        if (this.angularVersion === 'Angular-1') {

            this.runInstall('./setup.sh');
    
        } else if (this.angularVersion === 'Angular-2') {

            this.npmInstall();
    
        } else {

            this.runInstall('./setup_mobile.sh');
    
        }
  
    }
});
