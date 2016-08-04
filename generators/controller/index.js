'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  
  prompting: function () {
    var done = this.async();

    var prompts = [{
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
      controllerName: this.controllerName
    };
    this.template('controller.js', 'client/app/'+ this.controllerName + '/' + this.controllerName + '.controller.js', context);
  },

  installing: function () {
    this.runInstall('gulp');
  }
});