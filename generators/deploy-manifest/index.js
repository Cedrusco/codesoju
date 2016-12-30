'use strict';
var yeoman = require('yeoman-generator'),
    chalk = require('chalk');

module.exports = yeoman.extend({

    prompting: function () {

        var done = this.async(),
            prompts = [{
                type: 'input',
                name: 'name',
                message: 'What is the name of your application?'
            }, {
                type: 'list',
                name: 'memory',
                message: 'How much memory do you want to set for this app?',
                choices: ['256M', '512M']
            }];
        this.log('Welcome to ' + chalk.red('CodeSoju Generator'));
        this.log();

        return this.prompt(prompts).then(function (props) {

            this.appName = props.name;
            this.appMemory = props.memory;
            done();

        }.bind(this));

    },

    writing: function () {

        var context = {
            appName: this.appName,
            appMemory: this.appMemory
        };
        this.fs.copyTpl(this.templatePath('manifest.yml'), this.destinationPath('manifest.yml'), context);
        this.fs.copy(this.templatePath('.cfignore'), this.destinationPath('.cfignore'));

    }

});