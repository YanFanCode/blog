import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as d,c as o,a as s,b as n,e,w as i,f as p}from"./app-976ecff9.js";const r={},u={href:"https://github.com/Stephen-wzw/webpack-demo",target:"_blank",rel:"noopener noreferrer"},v=p(`<p><strong>index.html</strong></p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">&lt;!DOCTYPE html&gt;
</span><span class="token prefix unchanged"> </span><span class="token line">&lt;html lang=&quot;en&quot;&gt;
</span><span class="token prefix unchanged"> </span><span class="token line">&lt;head&gt;
</span><span class="token prefix unchanged"> </span><span class="token line">  &lt;meta charset=&quot;UTF-8&quot;&gt;
</span><span class="token prefix unchanged"> </span><span class="token line">  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
</span><span class="token prefix unchanged"> </span><span class="token line">  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">  &lt;title&gt;webpack-demo&lt;/title&gt;
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  &lt;title&gt;webpack-css&lt;/title&gt;
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">&lt;/head&gt;
</span><span class="token prefix unchanged"> </span><span class="token line">&lt;body&gt;
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">  &lt;script src=&quot;./dist/main.js&quot; type=&quot;module&quot;&gt;&lt;/script&gt;
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  &lt;script src=&quot;./dist/bundle.js&quot; type=&quot;module&quot;&gt;&lt;/script&gt;
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">&lt;/body&gt;
</span><span class="token prefix unchanged"> </span><span class="token line">&lt;/html&gt;
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>webpack.config.js</strong></p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">const path = require(&quot;path&quot;);
</span><span class="token prefix unchanged"> </span><span class="token line">
</span><span class="token prefix unchanged"> </span><span class="token line">module.exports = {
</span><span class="token prefix unchanged"> </span><span class="token line">  entry: &quot;./src/index.js&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">  output: {
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">    filename: &quot;main.js&quot;,
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">    filename: &quot;bundle.js&quot;,
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">    path: path.resolve(__dirname, &quot;dist&quot;),  // 需要使用绝对路径
</span><span class="token prefix unchanged"> </span><span class="token line">  },
</span><span class="token prefix unchanged"> </span><span class="token line">};
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>bundle.js 表示为打包的文件，见名知意。</p></blockquote><p>修改完配置文件后，下面在项目中添加一个 <code>style.css</code> 文件，并将其 <code>import</code> 到 <code>index.js</code> 中：</p><p><strong>project</strong></p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> webpack-demo
</span><span class="token prefix unchanged"> </span><span class="token line"> |- node_modules
</span><span class="token prefix unchanged"> </span><span class="token line"> |- package-lock.json
</span><span class="token prefix unchanged"> </span><span class="token line"> |- package.json
</span><span class="token prefix unchanged"> </span><span class="token line"> |- index.html
</span><span class="token prefix unchanged"> </span><span class="token line"> |- /src
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   |- /css
</span><span class="token prefix inserted">+</span><span class="token line">     |- style.css
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   |- /js
</span><span class="token prefix unchanged"> </span><span class="token line">     |- format.js
</span><span class="token prefix unchanged"> </span><span class="token line">     |- math.js  
</span><span class="token prefix unchanged"> </span><span class="token line">   |- index.js
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>style.css</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.title</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 700<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>

  <span class="token property">user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>index.js</strong></p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">import { sum } from &quot;./js/math.js&quot;;
</span><span class="token prefix unchanged"> </span><span class="token line">const { priceFormat } = require(&quot;./js/format&quot;);
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">import &quot;../css/style.css&quot;;
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">
</span><span class="token prefix unchanged"> </span><span class="token line">console.log(sum(10, 20));
</span><span class="token prefix unchanged"> </span><span class="token line">console.log(priceFormat());
</span><span class="token prefix unchanged"> </span><span class="token line">
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">const div = document.createElement(&quot;div&quot;);
</span><span class="token prefix inserted">+</span><span class="token line">div.className = &quot;title&quot;;
</span><span class="token prefix inserted">+</span><span class="token line">div.innerHTML = &quot;webpack-css&quot;;
</span><span class="token prefix inserted">+</span><span class="token line">document.body.appendChild(div);
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css-loader" tabindex="-1"><a class="header-anchor" href="#css-loader" aria-hidden="true">#</a> <code>css-loader</code></h2><p>现在执行 <code>npm run build</code>，会看到报错：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ERROR <span class="token keyword">in</span> ./src/css/style.css <span class="token number">1</span>:0
Module parse failed: Unexpected token <span class="token punctuation">(</span><span class="token number">1</span>:0<span class="token punctuation">)</span>
You may need an appropriate loader to handle this <span class="token function">file</span> type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts<span class="token comment">#loaders</span>
<span class="token operator">&gt;</span> .title <span class="token punctuation">{</span>
<span class="token operator">|</span>   color: <span class="token comment">#000;</span>
<span class="token operator">|</span>   font-weight: <span class="token number">700</span><span class="token punctuation">;</span>
 @ ./src/index.js <span class="token number">3</span>:0-25
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从报错信息中可以知道，需要用一个 loader 处理 css 文件。那么什么是 loader 呢？</p><ul><li>loader 用于对模块的源代码进行转换；</li><li>loader 可以使你在 import 或 &quot;load(加载)&quot; 模块时预处理文件；</li><li>loader 甚至允许你直接在 JavaScript 模块中 import CSS 文件！</li></ul><p>而为了能在项目中正常使用 css，需要用到 <code>css-loader</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> css-loader <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接下来需要在 <code>webpack.config.js</code> 中配置 <code>css-loader</code> 的使用：</p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">const path = require(&#39;path&#39;);
</span></span>
<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">module.exports = {
</span><span class="token prefix unchanged"> </span><span class="token line">  entry: &#39;./src/index.js&#39;,
</span><span class="token prefix unchanged"> </span><span class="token line">  output: {
</span><span class="token prefix unchanged"> </span><span class="token line">    filename: &#39;bundle.js&#39;,
</span><span class="token prefix unchanged"> </span><span class="token line">    path: path.resolve(__dirname, &#39;dist&#39;),
</span><span class="token prefix unchanged"> </span><span class="token line">  },
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> module: {
</span><span class="token prefix inserted">+</span><span class="token line">   rules: [
</span><span class="token prefix inserted">+</span><span class="token line">     {
</span><span class="token prefix inserted">+</span><span class="token line">       test: /\\.css$/i,
</span><span class="token prefix inserted">+</span><span class="token line">       use: [&#39;css-loader&#39;],
</span><span class="token prefix inserted">+</span><span class="token line">     },
</span><span class="token prefix inserted">+</span><span class="token line">   ],
</span><span class="token prefix inserted">+</span><span class="token line"> },
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">};
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时再次执行 <code>npm run build</code>，虽然不报错了，但是样式并没有应用成功，这是为什么呢？难道是 css-loader 不起作用吗？</p><p>这是因为 <code>css-loader</code> 只能将 .css 文件导入到 JavaScript 文件中，也就是它只负责<strong>解析</strong>，不负责<strong>将解析后的 css 插入到页面中</strong>。</p><p>如果希望完成这个插入操作，需要用到 <code>style-loader</code>。</p><h2 id="style-loader" tabindex="-1"><a class="header-anchor" href="#style-loader" aria-hidden="true">#</a> <code>style-loader</code></h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> style-loader <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>同时在 <code>webpack.config.js</code> 中配置 <code>style-loader</code> 的使用：</p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">const path = require(&quot;path&quot;);
</span><span class="token prefix unchanged"> </span><span class="token line">
</span><span class="token prefix unchanged"> </span><span class="token line">module.exports = {
</span><span class="token prefix unchanged"> </span><span class="token line">  entry: &quot;./src/index.js&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">  output: {
</span><span class="token prefix unchanged"> </span><span class="token line">    filename: &quot;bundle.js&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">    path: path.resolve(__dirname, &quot;dist&quot;),  // 需要使用绝对路径
</span><span class="token prefix unchanged"> </span><span class="token line">  },
</span><span class="token prefix unchanged"> </span><span class="token line">  module: {
</span><span class="token prefix unchanged"> </span><span class="token line">    rules: [
</span><span class="token prefix unchanged"> </span><span class="token line">      {
</span><span class="token prefix unchanged"> </span><span class="token line">        test: /\\.css$/i,
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">        use: [&#39;css-loader&#39;],
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">        use: [&#39;style-loader&#39;, &#39;css-loader&#39;],
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">      },
</span><span class="token prefix unchanged"> </span><span class="token line">    ],
</span><span class="token prefix unchanged"> </span><span class="token line">  },
</span><span class="token prefix unchanged"> </span><span class="token line">};
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>style-loader</code> 需要写在 <code>css-loader</code> 之前，因为 loader 的执行顺序是从后往前的。</p><p>现在重新执行 <code>npm run build</code>，可以发现样式已经生效了。</p><h2 id="less-loader" tabindex="-1"><a class="header-anchor" href="#less-loader" aria-hidden="true">#</a> less-loader</h2><p>在实际开发中，我们可能会使用 less、sass 等预处理器来编写 css 样式，那么如何让项目中支持这些预处理器呢？比如说支持 less。</p><p>现在在项目中新增 <code>title.less</code> 文件：</p><p><strong>project</strong></p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> webpack-demo
</span><span class="token prefix unchanged"> </span><span class="token line"> |- node_modules
</span><span class="token prefix unchanged"> </span><span class="token line"> |- package-lock.json
</span><span class="token prefix unchanged"> </span><span class="token line"> |- package.json
</span><span class="token prefix unchanged"> </span><span class="token line"> |- index.html
</span><span class="token prefix unchanged"> </span><span class="token line"> |- /src
</span><span class="token prefix unchanged"> </span><span class="token line">   |- /css
</span><span class="token prefix unchanged"> </span><span class="token line">     |- style.css
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">     |- title.less
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   |- /js
</span><span class="token prefix unchanged"> </span><span class="token line">     |- format.js
</span><span class="token prefix unchanged"> </span><span class="token line">     |- math.js  
</span><span class="token prefix unchanged"> </span><span class="token line">   |- index.js
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>title.less</strong></p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@bgColor<span class="token punctuation">:</span></span> blue<span class="token punctuation">;</span>
<span class="token variable">@textDecoration<span class="token punctuation">:</span></span> underline<span class="token punctuation">;</span>

<span class="token selector">.title</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">@bgColor</span><span class="token punctuation">;</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> <span class="token variable">@textDecoration</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>index.js</strong></p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">import { sum } from &quot;./js/math.js&quot;;
</span><span class="token prefix unchanged"> </span><span class="token line">const { priceFormat } = require(&quot;./js/format&quot;);
</span><span class="token prefix unchanged"> </span><span class="token line">import &quot;./css/style.css&quot;;
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">import &quot;./css/title.less&quot;;
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">
</span><span class="token prefix unchanged"> </span><span class="token line">console.log(sum(10, 20));
</span><span class="token prefix unchanged"> </span><span class="token line">console.log(priceFormat());
</span><span class="token prefix unchanged"> </span><span class="token line">
</span><span class="token prefix unchanged"> </span><span class="token line">const div = document.createElement(&quot;div&quot;);
</span><span class="token prefix unchanged"> </span><span class="token line">div.className = &quot;title&quot;;
</span><span class="token prefix unchanged"> </span><span class="token line">div.innerHTML = &quot;webpack-css&quot;;
</span><span class="token prefix unchanged"> </span><span class="token line">
</span><span class="token prefix unchanged"> </span><span class="token line">document.body.appendChild(div);
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在我们需要安装 <code>less-loader</code> 来处理 .less 文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> less-loader <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><code>less-loader</code> 会自动使用 less 工具将 .less 文件转换为 .css 文件。</p></blockquote><p>同时在 <code>webpack.config.js</code> 中配置 <code>less-loader</code> 的使用：</p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">const path = require(&quot;path&quot;);
</span><span class="token prefix unchanged"> </span><span class="token line">
</span><span class="token prefix unchanged"> </span><span class="token line">module.exports = {
</span><span class="token prefix unchanged"> </span><span class="token line">  entry: &quot;./src/index.js&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">  output: {
</span><span class="token prefix unchanged"> </span><span class="token line">    filename: &quot;bundle.js&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">    path: path.resolve(__dirname, &quot;dist&quot;),  // 需要使用绝对路径
</span><span class="token prefix unchanged"> </span><span class="token line">  },
</span><span class="token prefix unchanged"> </span><span class="token line">  module: {
</span><span class="token prefix unchanged"> </span><span class="token line">    rules: [
</span><span class="token prefix unchanged"> </span><span class="token line">      {
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">        test: /\\.css$/i,
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">        test: /\\.(less|css)$/,
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">        use: [&#39;style-loader&#39;, &#39;css-loader&#39;],
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">        use: [&#39;style-loader&#39;, &#39;css-loader&#39;, &#39;less-loader&#39;],
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">      },
</span><span class="token prefix unchanged"> </span><span class="token line">    ],
</span><span class="token prefix unchanged"> </span><span class="token line">  },
</span><span class="token prefix unchanged"> </span><span class="token line">};
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在重新执行 <code>npm run build</code>，可以发现 less 样式已经生效了。</p><h2 id="post-css-loader" tabindex="-1"><a class="header-anchor" href="#post-css-loader" aria-hidden="true">#</a> <code>post-css-loader</code></h2><p>开发中除了使用预处理器外，还可能需要使用 CSS 后处理器 <code>postcss</code>。他能帮我们进行 CSS 的转换和适配，比如自动添加浏览器前缀、CSS 样式的重置。</p><p>首先安装 <code>postcss</code> 和 <code>postcss-loader</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> postcss postcss-loader <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>还需要安装自动添加前缀的插件 <code>autoprefixer</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> autoprefixer <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时配置 <code>webpack.config.js</code>：</p><p><strong>webpack.config.js</strong></p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> const path = require(&quot;path&quot;);
</span><span class="token prefix unchanged"> </span><span class="token line"> 
</span><span class="token prefix unchanged"> </span><span class="token line"> module.exports = {
</span><span class="token prefix unchanged"> </span><span class="token line">   entry: &quot;./src/index.js&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">   output: {
</span><span class="token prefix unchanged"> </span><span class="token line">     filename: &quot;bundle.js&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     path: path.resolve(__dirname, &quot;dist&quot;),  // 需要使用绝对路径
</span><span class="token prefix unchanged"> </span><span class="token line">   },
</span><span class="token prefix unchanged"> </span><span class="token line">   module: {
</span><span class="token prefix unchanged"> </span><span class="token line">     rules: [
</span><span class="token prefix unchanged"> </span><span class="token line">       {
</span><span class="token prefix unchanged"> </span><span class="token line">         test: /\\.(less|css)$/,
</span><span class="token prefix unchanged"> </span><span class="token line">         use: [
</span><span class="token prefix unchanged"> </span><span class="token line">           &#39;style-loader&#39;, 
</span><span class="token prefix unchanged"> </span><span class="token line">           &#39;css-loader&#39;, 
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">           {
</span><span class="token prefix inserted">+</span><span class="token line">             loader: &#39;postcss-loader&#39;,
</span><span class="token prefix inserted">+</span><span class="token line">             options: {
</span><span class="token prefix inserted">+</span><span class="token line">               postcssOptions: {
</span><span class="token prefix inserted">+</span><span class="token line">                 plugins: [
</span><span class="token prefix inserted">+</span><span class="token line">                   require(&quot;autoprefixer&quot;)
</span><span class="token prefix inserted">+</span><span class="token line">                 ]
</span><span class="token prefix inserted">+</span><span class="token line">               }
</span><span class="token prefix inserted">+</span><span class="token line">             }
</span><span class="token prefix inserted">+</span><span class="token line">           },
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">          &#39;less-loader&#39;],
</span><span class="token prefix unchanged"> </span><span class="token line">       },
</span><span class="token prefix unchanged"> </span><span class="token line">     ],
</span><span class="token prefix unchanged"> </span><span class="token line">   },
</span><span class="token prefix unchanged"> </span><span class="token line"> };
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>npm run build</code> 打包，在浏览器中查看样式，即可看到 <code>postcss</code> 为我们自动添加了前缀：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.title</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 700<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
  <span class="token property">-webkit-user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
     <span class="token property">-moz-user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
      <span class="token property">-ms-user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
          <span class="token property">user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="postcss-config-js" tabindex="-1"><a class="header-anchor" href="#postcss-config-js" aria-hidden="true">#</a> <code>postcss.config.js</code></h3><p>以上的这些配置信息太长了，我们可以将它们单独在一个文件中进行配置，在项目根目录下新建 <code>postcss.config.js</code>。</p><p><strong>postcss.config.js</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;autoprefixer&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>webpack.config.js</strong></p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code>const path = require(&quot;path&quot;);

module.exports = {
<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> entry: &quot;./src/index.js&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line"> output: {
</span><span class="token prefix unchanged"> </span><span class="token line">   filename: &quot;bundle.js&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">   path: path.resolve(__dirname, &quot;dist&quot;), // 需要使用绝对路径
</span><span class="token prefix unchanged"> </span><span class="token line"> },
</span><span class="token prefix unchanged"> </span><span class="token line"> module: {
</span><span class="token prefix unchanged"> </span><span class="token line">   rules: [
</span><span class="token prefix unchanged"> </span><span class="token line">     {
</span><span class="token prefix unchanged"> </span><span class="token line">       test: /\\.(less|css)$/,
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">       use: [&quot;style-loader&quot;, &quot;css-loader&quot;, &quot;postcss-loader&quot;, &quot;less-loader&quot;],
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">     },
</span><span class="token prefix unchanged"> </span><span class="token line">   ],
</span><span class="token prefix unchanged"> </span><span class="token line"> },
</span></span>};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新打包后打开浏览器样式依然生效。</p><h3 id="postcss-preset-env" tabindex="-1"><a class="header-anchor" href="#postcss-preset-env" aria-hidden="true">#</a> <code>postcss-preset-env</code></h3><p>事实上，在配置 <code>postcss-loader</code> 的时候，配置插件并不需要使用 <code>autoprefixer</code>。可以使用另一个插件 <code>postscc-preset-env</code>，它可以帮助我们将一些现代的 CSS 特性，转成大多数浏览器认识的 CSS，并且会根据目标浏览器或者运行时环境添加所需的 ployfill。</p><blockquote><p>ployfill 用来为旧浏览器提供它没有原生支持的较新的功能。比如说 polyfill 可以让 IE7 使用 Silverlight 插件来模拟 HTML Canvas 元素的功能，或模拟 CSS 实现 rem 单位的支持，或 text-shadow，或其他任何你想要的功能。</p></blockquote><p>这个插件也会自动帮我们添加 autoprefixer。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> postcss-preset-env <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后修改下 <code>postcss.config.js</code> 文件。</p><p><strong>postcss.config.js</strong></p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">module.exports = {
</span><span class="token prefix unchanged"> </span><span class="token line">  plugins: [
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">    require(&quot;autoprefixer&quot;)
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">    // 在使用某些插件时，也可以直接传入字符串
</span><span class="token prefix inserted">+</span><span class="token line">    &quot;postcss-preset-env&quot;
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">  ]
</span><span class="token prefix unchanged"> </span><span class="token line">};
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新打包后打开浏览器样式依然生效。</p><h3 id="postcss-px-to-viewport" tabindex="-1"><a class="header-anchor" href="#postcss-px-to-viewport" aria-hidden="true">#</a> <code>postcss-px-to-viewport</code></h3>`,73),k=p('<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>在这个案例里，我们分别使用了 <code>style-loader</code> 加载 css 样式， <code>css-loader</code> 处理 .css 文件， <code>less-loader</code> 处理 .less 文件，以及使用 <code>postcss</code> 给样式自动添加前缀。</p><p>loader 的执行顺序是从后往前的，因此需要配置规则中写成 <code>use: [&quot;style-loader&quot;, &quot;css-loader&quot;, &quot;postcss-loader&quot;, &quot;less-loader&quot;]</code>。</p>',3);function m(g,b){const c=l("ExternalLinkIcon"),a=l("RouterLink");return d(),o("div",null,[s("blockquote",null,[s("p",null,[n("项目地址："),s("a",u,[n("https://github.com/Stephen-wzw/webpack-demo"),e(c)])])]),s("p",null,[n("继续使用"),e(a,{to:"/frontend/tool/webpack/0005%E3%80%81webpack%E5%9F%BA%E7%A1%80%E6%89%93%E5%8C%85.html"},{default:i(()=>[n("之前的项目")]),_:1}),n("，不过在以下文件做点修改：")]),v,s("p",null,[n("这个插件可以帮助我们将 px 单位转换为视口单位，这在进行移动端适配时尤为重要。详细使用见 "),e(a,{to:"/frontend/tool/css/0003%E3%80%81postcss-px-to-viewport.html"},{default:i(()=>[n("postcss-px-to-view")]),_:1}),n("。")]),k])}const x=t(r,[["render",m],["__file","002-webpack-css.html.vue"]]);export{x as default};
