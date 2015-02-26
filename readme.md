
## LinearPath JavaScript Library

LinearPath ��һ�� JavaScript �⣬��Ҫ���ڰ��� JSON|Object ��ʽ��ʾ��·���ṹת����һ��һά�������ʾ��ʽ���Ӷ����Խ�һ�����Զ�������ű��С�

###�ṹ�е��ֶ�

���� | ���� | ��ѡ | Ĭ��ֵ | ���� 
---- |
`dir` | `string` | �� | `null` | ��ǰĿ¼������
`files` | `Array` | �� |  `null` | ��ǰĿ¼�µ��¼��ļ�/Ŀ¼


###ʾ��

####��һ�� JSON|Object �ṹ����·�����Ի���һ������
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
�� list = 

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


####��һ�� JSON|Object �ṹ����·�����Ի�����������ϳ�һ������

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
�õ� list =  

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

