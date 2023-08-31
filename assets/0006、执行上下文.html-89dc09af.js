import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as i,c as l,a as n,b as s,e as a,w as u,f as o}from"./app-067d7015.js";const d="/blog/assets/example1-87654d2c.png",r="/blog/assets/example2-2dd27053.png",k={},v=o(`<h2 id="执行上下文" tabindex="-1"><a class="header-anchor" href="#执行上下文" aria-hidden="true">#</a> 执行上下文</h2><p>执行上下文（Execution Context）是 JavaScript 代码执行时所在的环境，一共有三种不同的执行上下文：</p><ul><li>全局执行上下文（Global Execution Context, GEC）：最基本的执行上下文，在一开始就会进行初始化：创建全局上下文，将 this 指向这个对象；一个 JavaScript 程序只有一个 GEC；浏览器环境中的全局对象是 window，在 node 环境中全局对象是 global；</li><li>函数执行上下文（Function Execution Context, FEC）：函数只有在调用时才会产生一个函数执行上下文；</li><li>Eval执行上下文（Eval Execution Context, EEC）：eval 函数执行时产生的执行上下文。</li></ul><p>下面是一个简单的例子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* global execution context */</span>
<span class="token keyword">function</span> <span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// FEC of baz</span>
  <span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// FEC of bar</span>
  <span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//2</span>
  <span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//GEC</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//1</span>
<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//1</span>
<span class="token comment">/* global execution context */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>当程序执行时，首先 JS 引擎会创建一个 GEC，不在函数内的代码都是 GEC 的一部分；</li><li>当函数被调用时，会创建对应的 FEC，函数内部的代码会马上执行；</li><li><strong>每一个执行上下文都有自己的变量环境</strong>，因此尽管 <code>foo</code> 被声明了三次，但因为它们在不同的上下文，因此它们是独立的，不会相互影响；</li></ol><img src="`+d+`" width="60%"><h2 id="执行上下文栈" tabindex="-1"><a class="header-anchor" href="#执行上下文栈" aria-hidden="true">#</a> 执行上下文栈</h2><p>执行上下文栈（Execution Context Stack）也叫调用栈。</p><p>当程序执行时，JS 引擎会创建<strong>全局执行上下文</strong>，并将它压入当前调用栈。每当函数调用时，JS 引擎会创建对应的函数上下文，并将它压入栈顶，当函数执行完毕时，则会将该函数的执行上下文从调用栈弹出。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;global execution context&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;foo 正在执行&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;foo 结束执行&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;bar 正在执行&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;bar 结束执行&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;baz 正在执行&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;baz 结束执行&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;program successfully executed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// global execution context</span>
<span class="token comment">// baz 正在执行</span>
<span class="token comment">// bar 正在执行</span>
<span class="token comment">// foo 正在执行</span>
<span class="token comment">// foo 结束执行</span>
<span class="token comment">// bar 结束执行</span>
<span class="token comment">// baz 结束执行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示意图如下：</p><figure><img src="`+r+`" alt="执行上下文栈" tabindex="0" loading="lazy"><figcaption>执行上下文栈</figcaption></figure><h2 id="es3-中的执行上下文" tabindex="-1"><a class="header-anchor" href="#es3-中的执行上下文" aria-hidden="true">#</a> ES3 中的执行上下文</h2><p>上面从宏观角度分析了 JavaScript 执行机制，接下来看看执行上下文中的详细内容。</p><h3 id="变量对象-variable-object-vo" tabindex="-1"><a class="header-anchor" href="#变量对象-variable-object-vo" aria-hidden="true">#</a> 变量对象（variable object, VO）</h3><p>每个执行上下文都有一个存储变量的对象，称为变量对象，包含当前函数定义的变量、函数、参数。</p><ol><li>检查当前上下文的参数列表，将 VO 中的 <code>arguments</code> 属性赋值为 <code>Arguments</code> 对象；</li><li>检查当前上下文中的函数声明，每检查到一个函数声明，则在 VO 中以函数名建立一个属性，指向函数所在的内存地址；</li><li>检查所有 var 变量声明，为其赋值。</li></ol><blockquote><p>这个操作就是变量提升，但是函数声明会比 var 声明更加靠前。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">baz</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;baz&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> v1<span class="token punctuation">;</span>
  <span class="token keyword">var</span> v2 <span class="token operator">=</span> <span class="token string">&quot;v2&quot;</span>
<span class="token punctuation">}</span>

<span class="token function">baz</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token constant">VO</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">arguments</span><span class="token operator">:</span> Arguments Object<span class="token punctuation">,</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">0x111</span> Function<span class="token punctuation">,</span>
  <span class="token literal-property property">v1</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  <span class="token literal-property property">v2</span><span class="token operator">:</span> <span class="token string">&quot;v2&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="活动对象-activation-object-ao" tabindex="-1"><a class="header-anchor" href="#活动对象-activation-object-ao" aria-hidden="true">#</a> 活动对象（activation object, AO）</h3><p>当函数进入执行阶段时，变量对象则会变成一个活动对象，能访问到其中的各种属性。</p><blockquote><p>变量对象和活动对象就是同一个东西，只是处于不同时期而已。</p></blockquote><h3 id="作用域链-scope-chain" tabindex="-1"><a class="header-anchor" href="#作用域链-scope-chain" aria-hidden="true">#</a> 作用域链（scope chain）</h3><p>作用域链由当前 AO 和父级 VO 组成。当函数创建时，会有一个名为 <code>[[scope]]</code> 的内部属性保存所有父变量对象到其中。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Scope <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token constant">AO</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>Scope<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>作用域链决定了各级上下文的代码在访问变量和函数时的顺序，在搜索变量时会从最前端开始查找，然后逐级往后，直到找到变量。</p><h3 id="this" tabindex="-1"><a class="header-anchor" href="#this" aria-hidden="true">#</a> this</h3>`,28),m=o(`<h2 id="es5-中的执行上下文" tabindex="-1"><a class="header-anchor" href="#es5-中的执行上下文" aria-hidden="true">#</a> ES5 中的执行上下文</h2><p>ES5 中去除了 ES3 里变量对象和活动对象，取而代之的是词法环境（Lexical Environment）和变量环境（Variable Environment）。</p><p>ES5 中的词法环境和变量环境和 ES3 中的变量环境是一样的，只不过分成了两部分而已。其中词法环境绑定的是 <code>let</code>、<code>const</code> 声明的变量，而变量环境绑定的是 <code>var</code> 声明的值。</p><h2 id="面试题" tabindex="-1"><a class="header-anchor" href="#面试题" aria-hidden="true">#</a> 面试题</h2><h3 id="面试题一" tabindex="-1"><a class="header-anchor" href="#面试题一" aria-hidden="true">#</a> 面试题一</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  n <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 200</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>foo()</code> 内的 <code>n</code> 会通过作用域链访问到全局执行上下文中的变量 <code>n</code>，因此会打印 200。</p><h3 id="面试题二" tabindex="-1"><a class="header-anchor" href="#面试题二" aria-hidden="true">#</a> 面试题二</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
  <span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 200</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于变量提升，首先输出 undefined，然后输出 200。</p><h3 id="面试题三" tabindex="-1"><a class="header-anchor" href="#面试题三" aria-hidden="true">#</a> 面试题三</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然 <code>a = 200</code> 不会执行，但是会被变量提升。</p><h3 id="面试题四" tabindex="-1"><a class="header-anchor" href="#面试题四" aria-hidden="true">#</a> 面试题四</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> b <span class="token operator">=</span> <span class="token number">10</span>
  <span class="token comment">// =&gt; 转成下面的两行代码</span>
  <span class="token comment">// var a = 10</span>
  <span class="token comment">// b = 10</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a is not undefined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="面试题五" tabindex="-1"><a class="header-anchor" href="#面试题五" aria-hidden="true">#</a> 面试题五</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">bar</span> <span class="token punctuation">(</span><span class="token parameter">foo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123</span>
  foo <span class="token operator">=</span> <span class="token number">234</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">bar</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行 <code>bar</code> 函数的时候将 <code>123</code> 数字作为实参传入，所以操作的还是本地作用域的 <code>foo</code>。</p><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,19),b={href:"https://dev.to/ahmedtahir/what-is-the-execution-context-execution-stack-scope-chain-in-js-26nc",target:"_blank",rel:"noopener noreferrer"},f={href:"https://juejin.cn/post/6844904158957404167",target:"_blank",rel:"noopener noreferrer"};function h(g,x){const p=e("RouterLink"),t=e("ExternalLinkIcon");return i(),l("div",null,[v,n("p",null,[s("执行上下文的最后一个部分为当前函数的调用者，关于 this 的各种问题，见 "),a(p,{to:"/frontend/basic/javascript/0007%E3%80%81this%E6%8C%87%E5%90%91.html"},{default:u(()=>[s("this指向")]),_:1}),s("。")]),m,n("p",null,[n("a",b,[s("What is the Execution Context, Execution Stack & Scope Chain in JS - DEV Community"),a(t)])]),n("p",null,[n("a",f,[s("面试官：说说执行上下文吧 - 掘金 (juejin.cn)"),a(t)])])])}const y=c(k,[["render",h],["__file","0006、执行上下文.html.vue"]]);export{y as default};
