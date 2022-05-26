# php和json
* php的数据结构要是能够生成JSON,那么我们就可以通过ajax读取到前台页面，用JS来解析。
* 知识点
    1. 在php中数组，可以非常轻松的通过json_encode()来转换为JSON。
        ```
        $a = array("东", "西", "南", "北");
        $b = json_encode($a);
        ```
    2. 数组起别名
        ```
        $a = array("name"=>"hello", "age"=> 12, "qq"=> 123456);
        // 转换为json
        $b = json_encode($a);
        // {"name": "\uxxxx\uxxxx",...};
        ```
        * 别名数组： for in循环
            ```
            forease($arr as $key => $value){
                echo "$value";
            }
            ```
        * 对于别名数组来说，如果数组的每一项都有别名，那么使用json_encode()来转换为json就是一个正常的json
    3. 二维数组
        ```
        $arr = array("东", "西", "南", "北");
        $result = array("state" => 1, "res" => $arr);
        ```
        ```
        $json = json_encode($result);
        print_r($json);
        // {"state": 1, "res": ["\uxxxx", "\uxxxx"]};
        ```
    4. 想要的json
        ```
        {
            res : [
                {
                    name: xxx,
                    age: 12,
                    qq: 123456
                },
                {
                    name: xxx,
                    age: 44,
                    qq: 345678
                }
            ]
        }
        ```
        * [生成想要的json数据格式](file/01_getMyData.php)
        
* 登陆注册案例
    * 会话 --> 在网页中在一个页面登陆了，在其他页面会保持登陆       
    