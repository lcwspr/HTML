# jQuery中的Ajax
1. 原生ajax
    ```
    // 1. new xhr对象
    var xhr = new XMLHttpRequest();  // 不兼容使用能力检测
    
    // 2. 监听对象
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
                // 正面的http状态码
                
            }
        }
    }
    
    xhr.open("get", "first.php?id=111", true);
    
    xhr.send(null);
    ```

2. jQuery中的ajax
   *  jQuery很重要，小公司如果有自己的框架，也是模拟jQuery,因为没有时间成本用来培训员工，所有jQuery已经是事实上的标准，因为大家都会使用jQuery,所以必须会用。
   * 组件开发中，组件可以脱离运动框架，可以自己内部有小的运动函数，是一个例外，通常一个jQuery压缩包只有90k,比图片都小得多
      ```
      $.get("a.json", {"id": 1, "name": "lcwspr"}, funtion(){
        alert(typeof text);
      });
      ```
    * jQuery帮我们做的事情 
        1. encodingURIComponent中文了 
        2. 2如果请求时404等错误信息，不会执行回调函数
        3. jQuery识别传回来的东西是json,会帮我们做转换
   
2. $.post()方法    
    ```
      $.post("a.json", {"id": 1, "name": "lcwspr"}, funtion(){
        alert(typeof text);
      });
    ```
    
3. $.ajax() 方法
    ```
    $.ajax("a.json", {
        "type": "get",
        "data": {
            "name":"命名",
            "age": 30 
        }
        "success": function(){
            alert("hahah")
        }
        "error": function(XMLHttpRequest, textStatus, errorThrown){
        
        }
    })
    ```
    * 配置信息非常多，可以精确的控制。
   
4. serialize()方法
    * `var str = $("$myform").serialize();`
    * 注意： 能够调用serialize的元素，不一定非要是form标签，一个div中嵌套form也可以
    * 就可以直接提交了
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    
    