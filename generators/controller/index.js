'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
  
    prompting: function () {

        var done = this.async(),
            prompts = [{
                type: 'input',
                name: 'name',
                message: 'What is the name of your controller?'
            }];

        return this.prompt(prompts).then(function (props) {

            this.controllerName = props.name;
            done();
        
        }.bind(this));
  
    },

    writing: function () {

        var context = {
            controllerName: this.controllerName,
            appName: this.determineAppname()
        };
        this.template('controller.js', 'client/app/' + this.controllerName + '/' + this.controllerName + '.controller.js', context);
  
    },

    installing: function () {

        this.runInstall('gulp buildApp');
  
    }
});
