import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-4148853a.js";const o={},t=e(`<p>在 JavaScript 中，对象是一组属性的无序集合，由键值对组成。创建对象共有两种方式：字面量和 <code>new</code>。一般开发中为了方便通常使用字面量来创建对象。</p><p>对象中的属性有一些内部特性，这些内部特性的名称会用两个中括号括起来，如 <code>[[Enumerable]]</code>，根据内部特性的不同，可以将属性分为<strong>数据属性</strong>和<strong>访问器属性</strong>。</p><h2 id="数据属性" tabindex="-1"><a class="header-anchor" href="#数据属性" aria-hidden="true">#</a> 数据属性</h2><p>数据属性，顾名思义，它是包含一个值的属性，数据属性一共以下四个特性：</p><ul><li><code>[[configurable]]</code>：属性是否可配置：是否可以 <code>delete</code> 删除，是否可以修改特性，以及是否可以改成访问器属性。默认为 <code>true</code>。</li><li><code>[[enumerable]]</code>：属性是否可以枚举（使用 <code>for-in</code>）。默认为 <code>true</code>。</li><li><code>[[writable]]</code>：属性的值是否可以被修改。默认为 <code>true</code>。</li><li><code>[[value]]</code>：属性的值。默认为 <code>undefined</code>。</li></ul><p>使用字面量或 <code>new</code> 操作符定义对象时，默认就是一个数据属性。前三个特性都默认为 <code>true</code>，而 <code>[[value]]</code> 则为指定的值。</p><p>可以使用 <code>Object.getOwnPropertyDescriptor()</code> 查看属性的描述符，他接收两个参数，第一个参数为对象，第二个参数为需要查看描述符的属性。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> o <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;wang&#39;</span> <span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// {</span>
<span class="token comment">//   value: &#39;wang&#39;,</span>
<span class="token comment">//   writable: true,</span>
<span class="token comment">//   enumerable: true,</span>
<span class="token comment">//   configurable: true</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外除了使用字面量声明属性，还可以通过 <code>Object.defineProperty()</code> 定义属性，同时定义多个属性则可以使用 <code>Object.defineProperties()</code>，</p><blockquote><p>在调用 <code>Object.defineProperty()</code> 时，<code>configurable</code>、<code>enumerable</code> 和 <code>writable</code> 的值如果不指定，则都默认为 <code>false</code>。<br> 在严格模式下，尝试删除不可配置属性会抛出错误，尝试修改只读属性也会抛出错误。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> o <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;wang&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// {</span>
<span class="token comment">//   value: &#39;wang&#39;,</span>
<span class="token comment">//   writable: false,</span>
<span class="token comment">//   enumerable: false,</span>
<span class="token comment">//   configurable: false</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="访问器属性" tabindex="-1"><a class="header-anchor" href="#访问器属性" aria-hidden="true">#</a> 访问器属性</h2><p>访问器属性不包含值，而是有一个 <code>getter()</code> 函数和一个 <code>setter()</code> 函数。在写入访问器属性时，会调用设置（<code>setter()</code>）函数，在读取时，会调用获取（<code>getter()</code>）函数。它一共包括四种特性：</p><ul><li><code>[[configurable]]</code>：属性是否可配置：是否可以 <code>delete</code>，是否可以修改特性，以及是否可以改成数据属性。默认为 <code>true</code>。</li><li><code>[[enumerable]]</code>：属性是否可以枚举。默认为 <code>true</code>。</li><li><code>[[get]]</code>：获取函数，读取属性时调用。默认为 <code>undefined</code>。</li><li><code>[[set]]</code>：设置函数，写入属性时调用。默认为 <code>undefined</code>。</li></ul><p>访问器属性<strong>只能</strong>通过 <code>Object.defineProperty()</code> 或 <code>Object.defineProperties()</code> 定义：</p><blockquote><p>在调用 <code>Object.defineProperty()</code> 时，<code>configurable</code> 和 <code>enumerable</code> 的值如果不指定，则都默认为 <code>false</code>。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义一个对象，包含伪私有成员year_和公共成员edition</span>
<span class="token keyword">let</span> book <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">year_</span><span class="token operator">:</span> <span class="token number">2017</span><span class="token punctuation">,</span>
  <span class="token literal-property property">edition</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>book<span class="token punctuation">,</span> <span class="token string">&#39;year&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>year_
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>newValue <span class="token operator">&gt;</span> <span class="token number">2017</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>year_ <span class="token operator">=</span> newValue
      <span class="token keyword">this</span><span class="token punctuation">.</span>edition <span class="token operator">+=</span> newValue <span class="token operator">-</span> <span class="token number">2017</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 设置时，会调用 setter 函数</span>
book<span class="token punctuation">.</span>year <span class="token operator">=</span> <span class="token number">2018</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>book<span class="token punctuation">.</span>edition<span class="token punctuation">)</span> <span class="token comment">// 2</span>

<span class="token comment">// 读取时，会调用 getter 函数</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>book<span class="token punctuation">.</span>year_<span class="token punctuation">)</span> <span class="token comment">// 2018</span>

<span class="token comment">// configurable 和 enumerable 的值如果不指定，则都默认为 false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>book<span class="token punctuation">,</span> <span class="token string">&#39;year&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// {</span>
<span class="token comment">//   get: [Function: get],</span>
<span class="token comment">//   set: [Function: set],</span>
<span class="token comment">//   enumerable: false,</span>
<span class="token comment">//   configurable: false</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Vue 中的计算属性就是访问器属性中的 <code>getter()</code> 和 <code>setter</code>。</p></blockquote>`,18),c=[t];function p(l,i){return s(),a("div",null,c)}const r=n(o,[["render",p],["__file","001-深入理解对象属性.html.vue"]]);export{r as default};
