import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-ae0028d9.js";const p="/blog/assets/provide-inject-89199c09.png",t={},l=e('<p>通常，当需要从父组件向子组件传递数据时，我们使用 <code>props</code>。但是有一些深度嵌套的组件，而深层的子组件只需要父组件的部分内容。在这种情况下，如果仍然将 <code>prop</code> 沿着组件链逐级传递下去，可能会很麻烦。</p><p>对于这种情况，我们可以使用一对 <code>provide</code> 和 <code>inject</code>。无论组件层次结构有多深，父组件都可以作为其所有子组件的依赖提供者。这个特性有两个部分：父组件有一个 <code>provide</code> 选项来提供数据，子组件有一个 <code>inject</code> 选项来开始使用这些数据。</p><figure><img src="'+p+`" alt="provide" tabindex="0" loading="lazy"><figcaption>provide</figcaption></figure><h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2><p>如果有一个这样的目录结构：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>App
└─ Home
   └─ HomeContent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要在 App 中向 <code>HomeContent</code> 传值，我们要将 <code>prop</code> 逐级传递下去：<code>App</code> -&gt; <code>Home</code> -&gt; <code>HomeContent</code>。但是通过 <code>provide/inject</code> 的方式，我们可以直接执行以下操作：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- App.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>home</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>home</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&quot;./Home.vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    Home
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">provide</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;wang&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- Home --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>home-content</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>home-content</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> HomeContent <span class="token keyword">from</span> <span class="token string">&#39;./HomeContent.vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    HomeContent
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- HomeContent --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- HomeContent: wang - 18 --&gt;</span>
    HomeContent: {{name}} - {{age}}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="provide-组件实例-property" tabindex="-1"><a class="header-anchor" href="#provide-组件实例-property" aria-hidden="true">#</a> provide 组件实例 property</h2><p>如果现在修改 <code>App</code>，让它 provide 一些组件的实例 property，这会不起作用：</p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> &lt;!-- App.vue --&gt;
</span><span class="token prefix unchanged"> </span><span class="token line"> &lt;template&gt;
</span><span class="token prefix unchanged"> </span><span class="token line">   &lt;home&gt;&lt;/home&gt;
</span><span class="token prefix unchanged"> </span><span class="token line"> &lt;/template&gt;
</span><span class="token prefix unchanged"> </span><span class="token line"> 
</span><span class="token prefix unchanged"> </span><span class="token line"> &lt;script&gt;
</span><span class="token prefix unchanged"> </span><span class="token line"> import Home from &quot;./Home.vue&quot;;
</span><span class="token prefix unchanged"> </span><span class="token line"> 
</span><span class="token prefix unchanged"> </span><span class="token line"> export default {
</span><span class="token prefix unchanged"> </span><span class="token line">   components: {
</span><span class="token prefix unchanged"> </span><span class="token line">     Home
</span><span class="token prefix unchanged"> </span><span class="token line">   },
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   data() {
</span><span class="token prefix inserted">+</span><span class="token line">     return {
</span><span class="token prefix inserted">+</span><span class="token line">       content: [&quot;abc&quot;, &quot;cab&quot;, &quot;bac&quot;]
</span><span class="token prefix inserted">+</span><span class="token line">     }
</span><span class="token prefix inserted">+</span><span class="token line">   },
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   provide: {
</span><span class="token prefix unchanged"> </span><span class="token line">     name: &quot;wang&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     age: 18,
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">     length: this.content.length // 这将导致错误：\`Cannot read property &#39;length&#39; of undefined\`
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   }
</span><span class="token prefix unchanged"> </span><span class="token line"> };
</span><span class="token prefix unchanged"> </span><span class="token line"> &lt;/script&gt;
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要访问组件实例 property，必须将 <code>provide</code> 转换为返回对象的函数：</p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> &lt;!-- App.vue --&gt;
</span><span class="token prefix unchanged"> </span><span class="token line"> &lt;template&gt;
</span><span class="token prefix unchanged"> </span><span class="token line">   &lt;home&gt;&lt;/home&gt;
</span><span class="token prefix unchanged"> </span><span class="token line"> &lt;/template&gt;
</span><span class="token prefix unchanged"> </span><span class="token line"> 
</span><span class="token prefix unchanged"> </span><span class="token line"> &lt;script&gt;
</span><span class="token prefix unchanged"> </span><span class="token line"> import Home from &quot;./Home.vue&quot;;
</span><span class="token prefix unchanged"> </span><span class="token line"> 
</span><span class="token prefix unchanged"> </span><span class="token line"> export default {
</span><span class="token prefix unchanged"> </span><span class="token line">   components: {
</span><span class="token prefix unchanged"> </span><span class="token line">     Home
</span><span class="token prefix unchanged"> </span><span class="token line">   },
</span><span class="token prefix unchanged"> </span><span class="token line">   data() {
</span><span class="token prefix unchanged"> </span><span class="token line">     return {
</span><span class="token prefix unchanged"> </span><span class="token line">       content: [&quot;abc&quot;, &quot;cab&quot;, &quot;bac&quot;]
</span><span class="token prefix unchanged"> </span><span class="token line">     }
</span><span class="token prefix unchanged"> </span><span class="token line">   },
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">   provide: {
</span><span class="token prefix deleted">-</span><span class="token line">     name: &quot;wang&quot;,
</span><span class="token prefix deleted">-</span><span class="token line">     age: 18,
</span><span class="token prefix deleted">-</span><span class="token line">     length: this.content.length // 这将导致错误：\`Cannot read property &#39;length&#39; of undefined\`
</span><span class="token prefix deleted">-</span><span class="token line">   }
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   provide() {
</span><span class="token prefix inserted">+</span><span class="token line">     return {
</span><span class="token prefix inserted">+</span><span class="token line">       name: &quot;wang&quot;,
</span><span class="token prefix inserted">+</span><span class="token line">       age: 18,
</span><span class="token prefix inserted">+</span><span class="token line">       length: this.content.length
</span><span class="token prefix inserted">+</span><span class="token line">     }
</span><span class="token prefix inserted">+</span><span class="token line">   }
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> };
</span><span class="token prefix unchanged"> </span><span class="token line"> &lt;/script&gt;
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="响应式" tabindex="-1"><a class="header-anchor" href="#响应式" aria-hidden="true">#</a> 响应式</h2><p>虽然上面的修改能够正确注入 <code>HomeContent</code>，但是如果更改了 <code>content</code> 的内容，这个变化并不会反映在 inject 的 <code>length</code> property 中。<strong>因为默认情况下，<code>provide/inject</code> 的绑定不是响应式的</strong>。</p><p>如果想要将它变成响应式，可以分配一个组合式 API <code>computed</code> property：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token function">provide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>content<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为 <code>computed</code> 返回的是一个 ref 对象，因此在子组件中需要用 <code>length.value</code> 进行调用：</p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> &lt;!-- HomeContent --&gt;
</span><span class="token prefix unchanged"> </span><span class="token line"> &lt;template&gt;
</span><span class="token prefix unchanged"> </span><span class="token line">   &lt;div&gt;
</span><span class="token prefix unchanged"> </span><span class="token line">     &lt;!-- HomeContent: wang - 18 --&gt;
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">     HomeContent: {{name}} - {{age}} - {{ length }}
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">     HomeContent: {{name}} - {{age}} - {{ length.value }}
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   &lt;/div&gt;
</span><span class="token prefix unchanged"> </span><span class="token line"> &lt;/template&gt;
</span></span>
<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> &lt;script&gt;
</span><span class="token prefix unchanged"> </span><span class="token line"> export default {
</span><span class="token prefix unchanged"> </span><span class="token line">   inject: [&quot;name&quot;, &quot;age&quot;, &quot;length&quot;],
</span><span class="token prefix unchanged"> </span><span class="token line"> }
</span><span class="token prefix unchanged"> </span><span class="token line"> &lt;/script&gt;
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>经过上述处理，任何对 <code>content.length</code> 的改变都会被正确地反映在注入 <code>length</code> 的组件中。</p>`,22),i=[l];function c(o,d){return s(),a("div",null,i)}const v=n(t,[["render",c],["__file","02、provide-inject.html.vue"]]);export{v as default};
