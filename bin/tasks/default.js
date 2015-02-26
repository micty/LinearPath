


module.exports = function (grunt) {

    'use strict';

    var LinearPath = require('../lib/LinearPath');
    var Tasks = require('../lib/Tasks');

    var name = 'default';

    var list = LinearPath.linearize({
        dir: '<%=dir.src%>',
        files: [
            'partial/' + name + '/begin.js',
            {
                dir: 'core',
                files: [
                    '$Array.js',
                    'LinearPath.js',
                ]
            },
            'partial/' + name + '/end.js',
            
        ]
    });


    /*
    * 运行 grunt default 即可调用本任务
    */
    grunt.registerTask(name, function (level) {

        var home = '<%=dir.build%>' + name;

        var files = LinearPath.linearize({
            dir: home,
            files: [
                'linearpath.debug.js',
                'linearpath.min.js',
                'linearpath.min.js.map'
            ]
        });


        Tasks.run('clean', name, {
            src: home,
            options: {
                force: true //允许删除当前工作目录外的其他文件
            }
        });

        Tasks.run('copy', name, {
            dest: home + '/src/',
            src: list
        });

        Tasks.run('concat', name, {
            dest: files[0],
            src: list,
            options: {
                banner: '\n' +
                    '/*!\n' +
                    '* <%=pkg.description%> for ' + name + '\n' +
                    '* version: <%=pkg.version%>\n' +
                    '*/'
            },
        });

        Tasks.run('uglify', name, {
            src: files[0],
            dest: files[1],
            options: {
                sourceMap: level > 0
            }
        });



    });


};