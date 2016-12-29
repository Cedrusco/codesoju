'use strict';
var yeoman = require('yeoman-generator'),
    chalk = require('chalk');

module.exports = yeoman.extend({

    prompting: function () {

        this.log('Welcome to ' + chalk.red('CodeSoju Generator'));
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

            this.fs.copy(this.templatePath('angular1'), this.destinationRoot());

        } else if (this.angularVersion === 'Angular-2') {

            this.fs.copy(this.templatePath('angular2'), this.destinationRoot());

        } else {
            this.fs.copy(this.templatePath('cordova-mobile'), this.destinationRoot());
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