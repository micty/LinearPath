﻿


module.exports = function (grunt) {


    'use strict';

    var LinearPath = require('./lib/LinearPath');
    var Tasks = require('./lib/Tasks');
    var pkg = grunt.file.readJSON('package.json');

    Tasks.setConfig({
        pkg: pkg,
        dir: pkg.dir
    });

   

    Tasks.load(grunt);
    Tasks.register();


    require('./tasks/node.js')(grunt);
    require('./tasks/default.js')(grunt);


};