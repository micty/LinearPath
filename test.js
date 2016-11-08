
var linearpath = require('./linearpath');



//测试 linearpath(dir, files);
var list = linearpath('C:/demo', [
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
]);
console.dir(list);



//测试 linearpath({ dir: '', files: [], });

var list = linearpath({
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

console.dir(list);







//测试 linearpath([]);

var list = linearpath([
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
]);

console.dir(list);

