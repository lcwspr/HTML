/*
使用API: ajax.get("check.php", {"name": "lcwspr", "age": 18},function(err, data){});
 */
// js中，只要变量能够出现的地方，函数就能够出现

(function () {
    var ajax = window.ajax = {};
    // 这个对象有两个属性，get,post属性，都是函数
    ajax.get = function (URL, queryJSON, callback) {
        // 解决兼容问题, 创建xhr
        if(window.XMLHttpRequest){
            var xhr = new window.XMLHttpRequest();
        }else if(window.ActiveXObject){
            var xhr = new window.ActiveXObject("Microsoft XMLHTTP");
        }
        // 监听事件
        // 2. 结果返回之后做的事情
        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4){
                if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304){
                    callback(null, xhr.responseText);
                }else{
                    callback(new Error("没有找到请求的文件"), undefined);
                }
            }
        };

        // 拼接查询字符串
        var queryString = ajax._queryjson2string(queryJSON);
        // 3. 配置get参数
        xhr.open("get", URL + "?" + queryString, true);

        // 4. 发送xhr
        xhr.send(null);
    };

    ajax.post = function (URL, queryJSON, callback) {
        // 解决兼容问题, 创建xhr
        if(window.XMLHttpRequest){
            var xhr = new window.XMLHttpRequest();
        }else if(window.ActiveXObject){
            var xhr = new window.ActiveXObject("Microsoft XMLHTTP");
        }
        // 监听事件
        // 2. 结果返回之后做的事情
        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4){
                if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304){
                    callback(null, xhr.responseText);
                }else{
                    callback(new Error("没有找到请求的文件"), undefined);
                }
            }
        };

        // 拼接查询字符串
        var queryString = ajax._queryjson2string(queryJSON);
        // 3. 配置get参数
        xhr.open("post", URL , true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

        // 4. 发送xhr    post参数
        xhr.send(queryString);
    };



    // 查询json变为字符串
    ajax._queryjson2string = function(json){
        var arr = [];
        for(var k in json){
            arr.push(encodeURIComponent(k) + "=" + encodeURIComponent(json[k]));
        }
        return arr.join("&");
    }
})();


