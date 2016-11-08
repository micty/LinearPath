
/**
* 把文件路径标准化。
*/
function normalize(file, isDir) {
    file = file.replace(/\\/g, '/');    //把 `\` 替换成 `/`
    file = file.replace(/\/+/g, '/');   //把多个连续的 `/` 替换成一个。

    if (isDir && !file.endsWith('/')) {     //确保目录是以 `/` 结束。
        file += '/';
    }

    return file;
}


/**
* 核心方法，把复合路径对象线性化成一维数组。
*/
function linearize(dir, files) {

    var list = [];

    dir = normalize(dir, true);

    files.forEach(function (item) {

        if (typeof item == 'string') {
            item = normalize(dir + item);
            list.push(item);
            return;
        }

        //是一个 object
        var sdir = normalize(dir + item.dir);
        var slist = linearize(sdir, item.files); //递归

        list = list.concat(slist);
    });

    return list;

}


/**
* 包装方法，针对各种情况进行重载，方便用户在多种场景下调用。
* 已重载:
*   linearpath(dir, files);
*   linearpath([]);
*   linearpath({ dir: '', files: [] });
*/
function linearpath(dir, files) {

    //重载 linearpath([]);
    if (Array.isArray(dir)) {
        var list = dir.map(function (item) {
            if (typeof item == 'string') {
                return item;
            }

            return linearize(item.dir, item.files);
        });

        list = [].concat.apply([], list); //降维。
        return list;
    }


    //重载 linearpath({ dir: '', files: [] });
    if (typeof dir == 'object') {
        var item = dir;
        dir = item.dir;
        files = item.files;
    }

    return linearize(dir, files);
}



//导出对象。
module.exports = linearpath;



