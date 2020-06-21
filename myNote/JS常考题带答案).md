

## 	一、 浅拷贝

**对于浅拷贝而言，就是只拷贝对象的引用，而不深层次的拷贝对象的值，多个对象指向堆内存中的同一对象，任何一个修改都会使得所有对象的值修改，因为它们公用一条数据**



## 二、深拷贝

我们在实际的项目中，肯定不能让每个对象的值都指向同一个堆内存，这样的话不便于我们做操作，所以自然而然的诞生了深拷贝
 **深拷贝作用在引用类型上！例如：Object，Array**
 **深拷贝不会拷贝引用类型的引用，而是将引用类型的值全部拷贝一份，形成一个新的引用类型，这样就不会发生引用错乱的问题，使得我们可以多次使用同样的数据，而不用担心数据之间会起冲突**

``` js
var obj = { name: '小明', age: '18' }
//深拷贝
function deepCopy(target) {
    let resulte;
    if (typeof(target) === 'object') {
        //target是一个数组
        if (Array.isArray(target)) {
            resulte = []
            for (let i in target) {
                //应该考虑到这个数组是对象数组
                //所以应该使用递归的方式
                resulte.push(deepCopy(target[i]))
            }
        }/*空对象*/ else if (target === null) {  
            resulte = null
        } else if (target.constructor === RegExp) {
            //正则表达式
            resulte = target
        } else {
            //普通对象
            resulte = {}
            for (let i in target) {
                console.log(i);
                resulte[i] = deepCopy(target[i])
            }
        }
    } /*不是对象类型*/else {
        resulte = target
    }
    return resulte
}
var obj2 = deepCopy(obj)
console.log(obj2);
console.log(obj);
console.log("------------------------------");
obj2.name = '小红'
console.log(obj2);
console.log(obj);
```

## 找到字符串中重复次数最多的字符和重复的次数

``` js
//判断一个字符串中出现次数最多的字符，统计这个次数
var str = 'ancksaklvnascxzkla'

function getMaxRepeat(str) {
    //放置str中的字符
    let container = []
    //用来接收的对象
    let resulte 
    //放置str中的字符和重复次数
    let arr = []
    //记录最大重复的次数
    let time = 1
    if (str === '') {
        console.log("这是一个字符串");
        return;
    }
    for (let i = 0; i < str.length; i++) {
        if (container.indexOf(str[i]) == -1) {
            arr.push({ content: str[i], times: 1 })
            container.push(str[i])
        } else {
            for (let item of arr) {
                if (item.content === str[i]) {
                    item.times++
                }
                if (item.times > time) {
                    time = item.times
                    resulte = item
                }
            }
        }
    }
    console.log("出现最多的字符是:" + resulte.content + "    出现的次数为:" + resulte.times);
}
getMaxRepeat(str)
```

## JS中的变量提升

``` js
//经典面试题
console.log(v1) //undefined
var v1 = 100
function foo() {
    console.log(v1)//undefined
    var v1 = 200
    console.log(v1)//200
}
foo()
console.log(v1) //100
```

原因与`js`中创建变量的方式有关系:

 `js`是怎么创建变量的呢？

如下面的代码：

```
var a = 1;
var b = 2;
```

`js`在解析上面的代码的时候，其实会按照下面的方式进行解析的：

```js
var a;
var b;
//而变量的声明都会被提升到其作用域的顶部
//从而导致了 在未给a,b赋值时就进行操作时,a与b都是undefined
a = 1;
b = 2;
```

