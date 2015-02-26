

var LinearPath = require('../bin/lib/LinearPath');
var FS = require('fs');

var list = LinearPath.pair('C:/from', 'D:/to', [
    'begin.js',
    {
        dir: 'src',
        files: [
            'Array.js',
            'Boolean.js'
        ]
    },
    'end.js'
]);

list = JSON.stringify(list, null, 4);
console.log(list);
FS.writeFileSync('./pair.json', list);
    
    

