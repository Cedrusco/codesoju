'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({

  prompting: function () {
    var done = this.async();
    // Have Yeoman greet the user.
    // this.log(yosay(
    //   'Welcome to the prime ' + chalk.red('generator-soju') + ' generator!'
    // ));
    this.log('Welcome to ' + chalk.red('Soju Generator') + ' v 1.0');
    this.log()

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'What is the name of your application?'
    }, {
      type: 'list',
      name: 'angularVersion',
      message: 'Do you want to use Angular 1 or Angular 2?',
      choices: ['Angular-1', 'Angular-2']
    }];

    return this.prompt(prompts).then(function (props) {
      console.log('What is props?', props);
      this.appName = props.name;
      this.angularVersion = props.angularVersion;
      done();
    }.bind(this));
  },

  writing: function () {
    var context = {
      appName: this.appName
    };
    if(this.angularVersion === 'Angular-1') {
      this.directory('angular1', this.destinationRoot());
    }
    else {
      this.directory('angular2', this.destinationRoot());
    }
  },

  installing: function () {
    if(this.angularVersion === 'Angular-1') {
      this.runInstall('./setup.sh');
    }
    else {
      this.npmInstall();
    }
  }
});
