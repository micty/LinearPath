

var LinearPath = (function ($Array) {

    /**
    * 内部方法
    * @inner
    */
    function combine(dir, files, state) {

        if (dir && dir.slice(-1) != '/') { //确保以 '/' 结束，统一约定，不易出错
            dir += '/';
        }

        var depth = 1;

        return $Array.keep(files, function (item, index) {

            if (typeof item == 'string') {
                return dir + item;
            }

            depth++;

            if (state) {
                state.depth = depth;
            }

            return combine(dir + item.dir, item.files, state); //递归
        });
    }

    /**
    * 把一个对象/数组表示的路径结构线性化成一个一维的数组。
    */
    function linearize(dir, files) {

        if (dir instanceof Array) { //linearize([]);
            files = dir;
            dir = '';
        }
        else if (typeof dir == 'object') { //linearize( { dir: '', files: [] } );
            files = dir.files;
            dir = dir.dir;
        }

        var state = {
            depth: 0
        };

        var a = combine(dir, files, state);
        var b = $Array.reduceDimension(a, state.depth); //降维

        return b;
    }



    /**
    * 组合路径，主要用于 grunt-copy 中的路径表示。
    */
    function pair(src, dest, files) {
        if (typeof src == 'object') { //pair( { src: '', dest: '', files: [] })
            files = src.files;
            dest = src.dest;
            src = src.src;
        }


        var srcs = linearize(src, files);
        var dests = linearize(dest, files);

        return $Array.keep(srcs, function (src, index) {
            return {
                src: src,
                dest: dests[index]
            };
        });
    }



    return {
        linearize: linearize,
        pair: pair
    };

})($Array);

