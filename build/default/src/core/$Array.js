

//数组辅助工具类
var $Array = {

    keep: function (array, fn) {
        var a = [];
        for (var i = 0, len = array.length; i < len; i++) {
            var item = array[i];
            var value = fn(item, i);
            a.push(value);
        }
        return a;
    },

    /**
    * 给数组降维，返回一个新数组。
    * 可以指定降维次数，当不指定次数，默认为 1 次。
    */
    reduceDimension: function (array, count) {
        count = count || 1;

        var a = array;
        var concat = [].concat; //缓存一下方法引用，以提高循环中的性能

        for (var i = 0; i < count; i++) {
            a = concat.apply([], a);
        }

        return a;
    },

};

