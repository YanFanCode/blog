---
title: 浏览器概述
date: 2022-01-13
category:
 - 浏览器
tag:
 - 浏览器
---

## 浏览器内核

浏览器内核是浏览器的核心，也就是浏览器的**排版引擎**，分为两部分：

* 将 HTML 和 CSS 渲染到浏览器上的**渲染引擎**，
* 解析 JavaScript 的 **JavaScript 引擎**。

最开始渲染引擎和 JS 引擎并没有明确的区分，后来 JS 引擎开始独立起来，慢慢发展到现在，内核一般指的是渲染引擎。

不同的浏览器有不同的内核组成：

* Gecko：早期是 Netscape 和 Firefox 浏览器的内核；
* Trident：IE4 - IE11 的内核；
* Webkit：Safari 内核，Google Chrome 之前也使用过；
* Blink： Webkit 的一个分支，目前用于 Chrome、Edge、Opera 等。

## JavaScript 引擎

**JavaScript 引擎**是一个专门处理 JavaScript 脚本的虚拟机，一般会附带在网页浏览器之中，能为程序员提供部分操作浏览器的功能（网络、DOM、外部事件、HTML5 视频、canvas 和存储），并且用于将 JavaScript 代码翻译成 CPU 指令。比较常见的引擎有：

* SpiderMonkey：第一款 JavaScript 引擎，由 Brendan Eich 开发（也就是 JavaScript 作者）；
* Chakra（JScript 引擎）：微软开发，用于 IE 浏览器；
* Chakra（JavaScript 引擎）：微软开发，用于 Edge 浏览器；
* JavaScriptCore：WebKit 中的 JavaScript 引擎，Apple 公司开发，用于 Safari；
* V8：Google 开发的强大 JavaScript 引擎，C++ 编写。