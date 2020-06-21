

### 	`` CSS``水平、垂直居中的写法，请至少写出4种？

``` css
水平居中 
<!--块级元素-->
  1: margin: 0 auto;
  2: position: absolute;
     left:50%;
	transform:translate(-50%,0)
  3:display:flex;
    justify-content: space-around;
 <!--行级元素-->
   1:text-align:center;

垂直居中
<!--块级元素-->
  1:position: absolute;
     top:50%;
	transform:translateY(-50%)
   2:display:flex;
     align-items: center;
<!--行级元素-->
1:line-height:本身的高度
```

### 画一条0.5px的直线？

```  css
height: 1px;
transform: scale(0.5);
```

### 画一个三角形

``` css
height:0;
width:0;
border:100px solid;
border-color: transparent transparent red transparent;
```

### 说一下继承的几种方式及优缺点？

> 说比较经典的几种继承方式并比较优缺点就可以了

1. 借用构造函数继承，使用call或apply方法，将父对象的构造函数绑定在子对象上
2. 原型继承，将子对象的prototype指向父对象的一个实例
3. 组合继承

原型链继承的缺点

- 字面量重写原型会中断关系，使用引用类型的原型，并且子类型还无法给超类型传递参数。

借用构造函数（类式继承）

- 借用构造函数虽然解决了刚才两种问题，但没有原型，则复用无从谈起。

组合式继承

- 组合式继承是比较常用的一种继承方法，其背后的思路是使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承。这样，既通过在原型上定义方法实现了函数复用，又保证每个实例都有它自己的属性。

