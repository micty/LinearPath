
## LinearPath JavaScript Library

LinearPath 是一个 JavaScript 库，主要用于把以 JSON|Object 方式表示的路径结构转换成一个一维的数组表示形式，从而可以进一步用自动化处理脚本中。

###结构中的字段

名称 | 类型 | 必选 | 默认值 | 描述 
---- |
`dir` | `string` | 是 | `null` | 当前目录的名称
`files` | `Array` | 是 |  `null` | 当前目录下的下级文件/目录


###示例

####把一个 JSON|Object 结构化的路径线性化成一个数组
``` javascript

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


```
则 list = 

``` json
[
    "C:/demo/partial/default/begin.js",
    "C:/demo/core/Module.js",
    "C:/demo/core/$.js",
    "C:/demo/core/Array.js",
    "C:/demo/core/Boolean.js",
    "C:/demo/core/Date.js",
    "C:/demo/core/Math.js",
    "C:/demo/core/Object.js",
    "C:/demo/core/String.js",
    "C:/demo/excore/Emitter/Tree.js",
    "C:/demo/excore/Emitter.js",
    "C:/demo/excore/Mapper.js",
    "C:/demo/excore/Module.js",
    "C:/demo/excore/Url.js",
    "C:/demo/partial/default/MiniQuery.js",
    "C:/demo/partial/default/expose.js",
    "C:/demo/partial/default/end.js"
];
```


####把一个 JSON|Object 结构化的路径线性化并且两两组合成一个数组

``` javascript
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


```
得到 list =  

``` json
[
    {
        "src": "C:/from/begin.js",
        "dest": "D:/to/begin.js"
    },
    {
        "src": "C:/from/src/Array.js",
        "dest": "D:/to/src/Array.js"
    },
    {
        "src": "C:/from/src/Boolean.js",
        "dest": "D:/to/src/Boolean.js"
    },
    {
        "src": "C:/from/end.js",
        "dest": "D:/to/end.js"
    }
]

```

