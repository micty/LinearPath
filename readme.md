
# linearpath

linearpath 主要用于把以对象方式表示的路径结构转换成一个一维的数组表示形式，从而可以进一步用自动化处理脚本中。

##应用场景
在很多基于 node.js 的自动化处理任务中，经常需要用到文件路径。对于多个文件路径，常规用法是使用数组。一维的数组表示的文件路径，不直观，也不方便修改基于某个目录内的文件名。因此，有必要把文件路径结构化表示出来，且是对应于原目录结构的。


##示例

把一个对象结构化的路径线性化成一个一维的数组。
``` javascript

var linearpath = require('linearpath');
var list = linearpath({
    dir: 'C:/demo',
    files: [
        'partial/default/begin.js',
        {
            dir: 'core',
            files: [
                'Array.js',
                'Boolean.js',
                'Date.js',
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
            ]
        },
        {
            dir: 'partial/default',
            files: [
                'end.js',
            ]
        },
    ]
});


```
则 list = 

``` json
[
    'C:/demo/partial/default/begin.js',
    'C:/demo/core/Array.js',
    'C:/demo/core/Boolean.js',
    'C:/demo/core/Date.js',
    'C:/demo/excore/Emitter/Tree.js',
    'C:/demo/excore/Emitter.js',
    'C:/demo/excore/Mapper.js',
    'C:/demo/partial/default/end.js'
];
```




###结构中的字段

名称 | 类型 | 必选 | 默认值 | 描述 
---- | ---- | ---- |---- |---- |
`dir` | `string` | 是 | `` | 当前目录的名称。
`files` | `Array` | 是 | `[]` | 当前目录下的下级文件/目录。

