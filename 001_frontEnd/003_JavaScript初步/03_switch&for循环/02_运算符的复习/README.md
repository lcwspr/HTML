# 运算符的复习
## 快速写答案
1. 基本表达式
    1. 1 + 3 * 6 % 3          // 1
    2. false + true * null    // 0
    3. 6 + undefined          // NaN
    4. 0 / 0                  // NaN
    5. 6 / 0                  // Infinity
    6. Infinity - Infinity    // NaN
2. 比较运算符
    1. 5 == "5"              // true
    2. 5 === "5"             // false
    3. "66" < "8"            // true
    4. 66 < "8"              // false,有一个是数字就按照数字比较
    5. "66" < 8              // false
    6. false == 0            // true
    7.  true == 1            // true
    8. NaN == NaN            // false
    9. null == 0             // false
    
3. 逻辑运算符
    1. false || true && !!! false  // true
    2. false && 8                  // false
    3. 3 && 4                      // 4
    4. "" && 6                     // ""
    5. 6 && undefined              // undefined
    6. null && undefined           // null
    7. 3 || 4                      // 3
    8. "" || 18                    // 18
    
4. 加加运算符
    ```
    var a = 1;
    var b = a++;    // b = 1   a = 2
    a += ++b;       // a = 4   b = 2
    console.log(a); // 4
    console.log(b); // 2
    ```
    
5. 运算顺序-》 贴身的，数学，关系，逻辑，赋值
    * var a = 4;  1 && 2 + 3 * a++ % 5 || 6 > 7 == 8 / ! false   // 4