# 字符串 数组的增强

## 字符串
* 原来我们只能用A.indexOf(B)来判定A字符串中含不含有B字符串
    * 现在有了includes(): 返回布尔值，标识是否找到了参数字符串
    * startsWith(): 返回布尔值，表示参数字符串是否在元字符串的头部
    * endsWith()： 返回布尔值，表示参数字符串是否在源字符串的尾部
* repeat()
    * 重复多少次: `"hhh".repeat(5)`
* 模板字符串
    ```
    var a = 10;
    var b = '高兴'
    var c = "手机"
    var str = `好高兴呀，我买了一个${c}, 花了${a}元钱，我很${b}`
    ```
    * 可以有轻微运算，不能有复杂语法
    * 能够合法的换行，直接当作模板来使用
    
## 数值
1. isNaN和Number.isNaN
    * 用于检查一个值是否是NaN
    
## 数组的拓展
1. Array.from方法用来将两类对象转为真正的数组
    1. 类数组对象
        ```
        let obj = {
            "0": "白板",
            "1": "幺鸡",
            "2": "二筒",
            length: 3
        };
        let arr = Array.from(obj);
        console.log(arr);
        // es5的写法
        var arr = [].slice.call(obj);
        ```
    2. 可遍历的对象  
    
2. Array.of()
    * 用于将一组值，转换为数组  
    ```
    var arr = Array.of(1, 2, 3);
    console.log(arr);
    ```
3. find(), findindex()   
    * 用于找出第一个符合条件的数组成员，他的参数是一个回掉函数，所有数组成员依次执行该回调，直到找到第一个返回值为true的成员，然后返回给成员
    * 回掉函数三个参数，value, index, arr
    * findindex()如果没有一项要返回会返回-1
    ```
    var arr = [33, 44, 55, 66, 77, 88];
    var item = arr.find(function(value, index, arr){
        console.log(value, index, arr)
        if(value % 5 == 0 && value % 6 == 0){
            return true;  // 着第一个return true的值
        }
    })
    ```
4. 增加了一种数组的遍历方法，for of遍历
    ```
    let arr = [222, 333, 444, 55, 666, 777, 888];
    for(let [k, v] of arr.entries()){
        console.log(k, v);
    }
    ```
    * 通常配合arr.entries()和arr.key使用    
    
5. includes()
    * 返回一个布尔值表示这个值是否存在   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    