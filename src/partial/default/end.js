

if (typeof define == 'function' && (define.amd || define.cmd)) { //amd|cmd
    define(function (require) {
        return LinearPath;
    });
}
else { //browser 普通方式
    global.LinearPath = LinearPath;
}




})(
    this  // 在浏览器环境中，全局对象是 this
    /*, undefined -> undefined */
);
