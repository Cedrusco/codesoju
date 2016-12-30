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
                message: 'What is the name of your application?',
                default : this.appname
            }, {
                type: 'list',
                name: 'angularVersion',
                message: 'Choose what type of app you would like to buld:',
                choices: [ // 'Angular-1', 'Angular-2', 'Cordova-Mobile'
                    {
                        name: 'Angular-1',
                        value: 'Angular-1',
                        checked: true
                    }, {
                        name: 'Angular-2 - comming soon',
                        value: 'Angular-2',
                        disabled: true
                    }, {
                        name: 'Cordova-Mobile',
                        value: 'Cordova-Mobile'
                    }
                ]
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
            this.fs.copyTpl(this.templatePath('angular1/**/*.{json,md,html}'), this.destinationRoot(), this);


        } else if (this.angularVersion === 'Angular-2') {

            this.fs.copyTpl(this.templatePath('angular2'), this.destinationRoot(), this);

        } else {
            this.fs.copy(this.templatePath('cordova-mobile'), this.destinationRoot(), this);
            this.fs.copyTpl(this.templatePath('cordova-mobile/**/*.{json,md,html}'), this.destinationRoot(), this);
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