/*
使用API: ajax.get("check.php", {"name": "lcwspr", "age": 18},function(err, data){});
 */
// js中，只要变量能够出现的地方，函数就能够出现
// 增加了jsonp的发送


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
        xhr.open("get", queryString ? (URL + "?" + queryString) : URL, true);

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



    ajax.jsonp = function(URL, queryJSON, callbackName ,callback){
        // 在window对象上面强行增加一个属性，这个属性就是全局变量，是一个函数的名字，值是一个函数。
        window[callbackName] = callback;

        // 创建添加节点
        var scriptObj = document.createElement("script");
        document.body.appendChild(scriptObj);

        // 拼接查询字符串
        var queryString = ajax._queryjson2string(queryJSON);

        // 设置新创建的script标签的src属性，http上行请求将会发出
        scriptObj.src = queryString ? (URL + "?" + queryString) : URL;

        // 删除这个script标签
        document.body.removeChild(scriptObj);

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
