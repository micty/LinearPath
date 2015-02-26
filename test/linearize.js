

var LinearPath = require('../bin/lib/LinearPath');
var FS = require('fs');

var list = LinearPath.linearize({
    dir: 'C:/demo',
    files: [
        'partial/default/begin.js',
        {
            dir: 'core',
            files: [
                'Module.js',
                '$.js',
                'Array.js',
                'Boolean.js',
                'Date.js',
                'Math.js',
                'Object.js',
                'String.js',
            ]
        },
        {
            dir: 'excore',
            files: [
                {
                    dir: 'Emitter',
                    files: [
                        'Tree.js'
                    ],
                },
                'Emitter.js',
                'Mapper.js',
                'Module.js',
                'Url.js',
            ]
        },
        {
            dir: 'partial/default',
            files: [
                'MiniQuery.js',
                'expose.js',
                'end.js',
            ]
        },
    ]
});


list = JSON.stringify(list, null, 4);
console.log(list);
FS.writeFileSync('./linearize.json', list);
    
    

