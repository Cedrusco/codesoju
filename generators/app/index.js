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
    }];

    return this.prompt(prompts).then(function (props) {
      this.appName = props.name;
      done();
    }.bind(this));
  },

  writing: function () {
    var context = {
      appName: this.appName,
      appDescription: this.appDescription
    };
    this.template('angular1/README.md', 'README.md', context);
    this.template('angular1/package.json', 'package.json', context);
    this.directory('angular1/client', 'client');
    this.directory('angular1/server', 'server');
    this.directory('angular1/.hooks', '.hooks');
    this.bulkCopy('angular1/bower.json', 'bower.json');
    this.bulkCopy('angular1/Gruntfile.js', 'Gruntfile.js');
    this.bulkCopy('angular1/Gulpfile.js', 'Gulpfile.js');
    this.bulkCopy('angular1/setup_hooks.sh', 'setup_hooks.sh');
    this.bulkCopy('angular1/setup.sh', 'setup.sh');
    this.bulkCopy('angular1/.gitignore', '.gitignore');
    this.template('angular1/_files/toolbar.html', 'client/app/shared/templates/toolbar.html', context);
    this.template('angular1/_files/index.html', 'server/views/index.html', context);
  },

  installing: function () {
    this.installDependencies();
  }
});
