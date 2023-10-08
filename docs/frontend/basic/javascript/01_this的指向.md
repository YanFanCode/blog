---
title: this 指向
date: 2023-10-08
category:
  - JavaScript
tag:
  - this
---

在 javascript 中，this 是一个很重要的概念，它的指向是动态的，根据函数的调用方式不同而不同。

## 指向特点

在实际编写代码中，关于 this 的指向我们可以总结出来以下四个特性：

- 函数在调用的时候，JavaScript 会自动为函数添加一个隐式参数 this，this 指向函数的调用者。
- this 的绑定跟函数的声明位置没有任何关系。
- this 的指向在函数调用的时候才能确定。
- this 是在运行时进行绑定的，而不是在编写时绑定，它的上下文取决于函数调用时的各种条件。

## 全局上下文

无论是否处于严格模式，全局上下文中的 this 都指向全局对象。

```js
console.log(this === window) // true
```

## 绑定规则

在函数上下文中，this 指向取决于函数的调用方式，一共分为四种。

- 默认绑定
- 隐式绑定
- 显式绑定
- new 绑定

### 默认绑定

默认绑定即为独立函数调用，可以理解为没有绑定到某个对象上进行调用。

严格模式和非严格模式下 this 的指向会有所不同。

非严格模式下，独立调用函数的 this 指向为全局对象，在浏览器中为 window，node 中为 global。

```js
function f1() {
  return this
}

f1 === window // true
```

而严格模式下，独立调用函数的 this 指向为 `undefined`。

```js
function f2() {
  'use strict'
  return this
}
f2 === window //false
f2 === undefined // true
```

### 隐式绑定

通过对象发起的调用，this 会指向调用者本身。

```js
function foo() {
  console.log('this', this.name)
}
// 案例一
const obj = {
  name: 'yanfan',
  bar: foo
}

obj.foo() // this yanfan 此时foo函数中this指向obj对象

const bar = obj.foo
bar() // this undefined 此时foo函数中this指向window对象

// 案例二
const obj1 = {
  name: 'yanfan',
  bar: foo
}
const obj2 = {
  name: 'fanyan',
  bar: obj1.bar
}

obj2.bar() // this fanyan 此时foo函数中this指向obj2对象
```

### 显式绑定

当我们不想费力去分析调用位置，只想在函数调用的时候固定 this 的指向，这时候我们可以使用显式绑定。

JavaScript 提供了三个改变 this 指向的函数：`call()`、`apply()` 和 `bind()`。它们都能改变 this 指向，但是都有一些细微的区别。

### new 绑定

使用 new 操作符调用构造函数生成对象时，会自动执行以下操作：

1. 创建一个新的空对象；
2. 这个对象的 `[[proto]]` 属性会被赋值为构造函数的 `prototype` 属性；
3. 将 this 指向这个新对象；
4. 执行构造函数内部代码；
5. 如果没有显式返回对象，则默认返回刚刚创建的新对象；

```js
function Person(name) {
  this.name = name

  this.sayName = function () {
    console.log(this.name)
  }

  console.log(this) // Person { name: 'yanfan', sayName: [Function (anonymous)] }
}

const person = new Person('yanfan')
```
