
# linearpath

linearpath ��Ҫ���ڰ��Զ���ʽ��ʾ��·���ṹת����һ��һά�������ʾ��ʽ���Ӷ����Խ�һ�����Զ�������ű��С�

##Ӧ�ó���
�ںܶ���� node.js ���Զ������������У�������Ҫ�õ��ļ�·�������ڶ���ļ�·���������÷���ʹ�����顣һά�������ʾ���ļ�·������ֱ�ۣ�Ҳ�������޸Ļ���ĳ��Ŀ¼�ڵ��ļ�������ˣ��б�Ҫ���ļ�·���ṹ����ʾ���������Ƕ�Ӧ��ԭĿ¼�ṹ�ġ�


##ʾ��

��һ������ṹ����·�����Ի���һ��һά�����顣
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
�� list = 

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




###�ṹ�е��ֶ�

���� | ���� | ��ѡ | Ĭ��ֵ | ���� 
---- | ---- | ---- |---- |---- |
`dir` | `string` | �� | `` | ��ǰĿ¼�����ơ�
`files` | `Array` | �� | `[]` | ��ǰĿ¼�µ��¼��ļ�/Ŀ¼��

