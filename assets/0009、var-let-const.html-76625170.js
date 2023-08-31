import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as d,c as r,f as o}from"./app-067d7015.js";const n={},s=o("<p>首先，三者都是 JavaScript 声明变量的方式。区别在于：</p><table><thead><tr><th></th><th>var</th><th>let</th><th>const</th></tr></thead><tbody><tr><td><strong>作用域</strong></td><td>全局作用域和函数作用域</td><td>块级作用域</td><td>块级作用域</td></tr><tr><td><strong>变量提升</strong></td><td>自动提升到作用域顶部</td><td>提升，暂时性死区</td><td>提升，暂时性死区</td></tr><tr><td><strong>冗余声明</strong></td><td>允许冗余声明</td><td>不允许</td><td>不允许</td></tr><tr><td><strong>赋值</strong></td><td>可以重新赋值，且不需初始化</td><td>可以重新赋值，且不需初始化</td><td>不可以重新赋值，必须初始化</td></tr><tr><td><strong>全局声明</strong></td><td>成为window对象的属性</td><td>不会</td><td>不会</td></tr></tbody></table><p>关于变量提升，var、let、const 三者<strong>都存在变量提升</strong>，但是区别在于 let、const 存在暂时性死区。</p><p>let、const 在声明变量之前，不能以任何方式使用该变量。在 let、const 声明之前的执行瞬间被称为“暂时性死区”。</p><p>在此阶段引用任何后面才声明的变量都会抛出错误。</p>",5),e=[s];function c(a,_){return d(),r("div",null,e)}const p=t(n,[["render",c],["__file","0009、var-let-const.html.vue"]]);export{p as default};
