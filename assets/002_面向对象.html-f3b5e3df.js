import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-4c45a663.js";const p="/blog/assets/函数重载-887e1afe.png",t={},o=e(`<h2 id="函数类型" tabindex="-1"><a class="header-anchor" href="#函数类型" aria-hidden="true">#</a> 函数类型</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义函数的类型</span>
<span class="token comment">// 1.使用函数类型表达式来定义</span>
type <span class="token function-variable function">fooType</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">arg</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> number
<span class="token keyword">function</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token function">fooType</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">arg</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arg
<span class="token punctuation">}</span>
<span class="token comment">// 2.函数的调用签名来表达</span>
<span class="token keyword">interface</span> <span class="token class-name">barType</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string
  <span class="token comment">// 表示该函数可以被调用，调用签名方式表达</span>
  <span class="token punctuation">(</span>arg<span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> number
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token function">barType</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">arg</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arg
<span class="token punctuation">}</span>
bar<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span>
<span class="token function">bar</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>tips: 如果只是描述函数本身，使用函数表达式定义类型，如果将函数看作对象来描述，使用函数的调用签名来定义类型。</p></blockquote><h2 id="函数的重载" tabindex="-1"><a class="header-anchor" href="#函数的重载" aria-hidden="true">#</a> 函数的重载</h2><figure><img src="`+p+`" alt="函数重载" tabindex="0" loading="lazy"><figcaption>函数重载</figcaption></figure><h2 id="类的使用" tabindex="-1"><a class="header-anchor" href="#类的使用" aria-hidden="true">#</a> 类的使用</h2><h3 id="ts-声明类" tabindex="-1"><a class="header-anchor" href="#ts-声明类" aria-hidden="true">#</a> ts 声明类</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 使用class</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token comment">// 必须先声明才能使用</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string
  <span class="token literal-property property">age</span><span class="token operator">:</span> number
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;kobe&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>类的修饰符：public 表示公共的都可以访问默认就是 public，private 表示私有只有在类中可以访问实例中访问不到，protected 只有在当前类或者继承后的子类可以访问实例中不可访问。</p></blockquote><h3 id="类的-setter-和-getter" tabindex="-1"><a class="header-anchor" href="#类的-setter-和-getter" aria-hidden="true">#</a> 类的 setter 和 getter</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 类中有private私有成员时，可以使用setter和getter来访问和修改</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token comment">// 必须先声明才能使用</span>
  <span class="token keyword">private</span> <span class="token literal-property property">_name</span><span class="token operator">:</span> string
  <span class="token literal-property property">age</span><span class="token operator">:</span> number
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token punctuation">}</span>

  <span class="token comment">// setter 方法来设置值</span>
  <span class="token keyword">set</span> <span class="token function">_name</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">newValue</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> newValue
  <span class="token punctuation">}</span>
  <span class="token comment">// getter方法来获取值</span>
  <span class="token keyword">get</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> string <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_name
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;kobe&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数属性" tabindex="-1"><a class="header-anchor" href="#参数属性" aria-hidden="true">#</a> 参数属性</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 在构造函数参数前添加一个可见性修饰符来创建参数属性，在类属性被创建之后会直接得到这些修饰符。</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token comment">// 必须先声明才能使用</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string
  <span class="token literal-property property">age</span><span class="token operator">:</span> number
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">public</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token keyword">private</span> <span class="token literal-property property">age</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;kobe&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="抽象类-abstract" tabindex="-1"><a class="header-anchor" href="#抽象类-abstract" aria-hidden="true">#</a> 抽象类 abstract</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>abstract <span class="token keyword">class</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
  <span class="token comment">// getArea 方法只有声明没有实现体</span>
  <span class="token comment">// 子类在new的时候必须实现该抽象方法</span>
  <span class="token comment">// 抽象方法必须在抽象类当中，且都必须加abstract关键字</span>
  abstract <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 子类必须实现抽象类的抽象方法</span>
<span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">public</span> <span class="token literal-property property">width</span><span class="token operator">:</span> string<span class="token punctuation">,</span> height age<span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 实现抽象方法</span>
  <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>height
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 通用函数</span>
<span class="token keyword">function</span> <span class="token function">calcArea</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">shape</span><span class="token operator">:</span> Shape</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 因为继承自抽象类，一定有抽象方法 getArea</span>
  <span class="token keyword">return</span> shape<span class="token punctuation">.</span><span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">calcArea</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="索引签名" tabindex="-1"><a class="header-anchor" href="#索引签名" aria-hidden="true">#</a> 索引签名</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 当我们不知道对象内部具有什么属性但是知道内部属性的“形状”的时候，可以定义索引签名来限制类型</span>
<span class="token comment">// 可以写多个索引签名</span>
<span class="token keyword">interface</span> <span class="token class-name">InfoType</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> InfoType <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">abc</span><span class="token operator">:</span> any <span class="token operator">=</span> <span class="token string">&#39;bbbbb&#39;</span>
  <span class="token keyword">return</span> abc
<span class="token punctuation">}</span>

<span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 此时可以根据类型推导出name一定为string</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> info<span class="token punctuation">[</span>name<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="枚举类型" tabindex="-1"><a class="header-anchor" href="#枚举类型" aria-hidden="true">#</a> 枚举类型</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 枚举类型，使用enum关键字定义，举出全部的可能的值</span>
<span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
  up<span class="token punctuation">,</span>
  down<span class="token punctuation">,</span>
  left<span class="token punctuation">,</span>
  right
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token literal-property property">di</span><span class="token operator">:</span> Direction <span class="token operator">=</span> Direction<span class="token punctuation">.</span>up
<span class="token comment">// 枚举类型可以赋值</span>
<span class="token keyword">enum</span> demo <span class="token punctuation">{</span>
  num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
  age <span class="token operator">=</span> <span class="token number">18</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型" aria-hidden="true">#</a> 泛型</h2><h3 id="泛型的基本使用" tabindex="-1"><a class="header-anchor" href="#泛型的基本使用" aria-hidden="true">#</a> 泛型的基本使用</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 更加灵活的使用类型，Type代表着传入的类型，用于参数与返回值身上</span>
<span class="token keyword">function</span> bar<span class="token operator">&lt;</span>Type<span class="token operator">&gt;</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> Type<span class="token punctuation">)</span><span class="token operator">:</span> Type <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arg
<span class="token punctuation">}</span>

<span class="token comment">// 调用时，传入对应的类型</span>
<span class="token keyword">const</span> arg1 <span class="token operator">=</span> bar <span class="token operator">&lt;</span> string <span class="token operator">&gt;</span> <span class="token string">&#39;111&#39;</span> <span class="token comment">// 此时arg1 为 string类型</span>
<span class="token keyword">const</span> arg1 <span class="token operator">=</span> bar <span class="token operator">&lt;</span> number <span class="token operator">&gt;</span> <span class="token number">123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型接口的使用" tabindex="-1"><a class="header-anchor" href="#泛型接口的使用" aria-hidden="true">#</a> 泛型接口的使用</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 在使用接口定义类型的时候，可以跟泛型一起使用</span>
<span class="token keyword">interface</span> <span class="token class-name">Ikun</span><span class="token operator">&lt;</span>Type<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> Type
  <span class="token literal-property property">age</span><span class="token operator">:</span> number
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token literal-property property">kunkun</span><span class="token operator">:</span> Ikun<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;kobe&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>
<span class="token comment">// 泛型的类型可以有默认值，类似参数的默认值，当有默认值且使用时不传type会自动推导</span>
<span class="token keyword">interface</span> <span class="token class-name">Ikun2</span><span class="token operator">&lt;</span>Type <span class="token operator">=</span> number<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> Type
  <span class="token literal-property property">age</span><span class="token operator">:</span> number
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token literal-property property">kunkun</span><span class="token operator">:</span> Ikun <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token number">666</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类与泛型的使用" tabindex="-1"><a class="header-anchor" href="#类与泛型的使用" aria-hidden="true">#</a> 类与泛型的使用</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 在定义class的时候可以使用泛型来定义内部成员类型。可以有默认值。</span>
<span class="token keyword">class</span> <span class="token class-name">Point</span><span class="token operator">&lt;</span>Type <span class="token operator">=</span> string<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">x</span><span class="token operator">:</span> Type
  <span class="token literal-property property">y</span><span class="token operator">:</span> Type

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">x</span><span class="token operator">:</span> Type<span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> Type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x
    <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> y
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 有默认值时不传类型也可以正确推断类型</span>
<span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Poinr</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> string <span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token string">&#39;aaa&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bbb&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>x<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p2<span class="token punctuation">.</span>x<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型约束的使用" tabindex="-1"><a class="header-anchor" href="#泛型约束的使用" aria-hidden="true">#</a> 泛型约束的使用</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 为了更精确的得到某个函数处理过的数据的类型，可以结合泛型来保留住他原有的类型</span>
<span class="token comment">// 示例要求传入的数据拥有 length 属性</span>
<span class="token keyword">interface</span> <span class="token class-name">Ilength</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">length</span><span class="token operator">:</span> number
<span class="token punctuation">}</span>
<span class="token comment">// Type 继承于 Ilength ，要求传入的参数类型满足Ilength要求的类型(即可以有其他属性，但是必须有length属性！)</span>
<span class="token keyword">function</span> getLength<span class="token operator">&lt;</span>Type <span class="token keyword">extends</span> <span class="token class-name">Ilength</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> Type<span class="token punctuation">)</span><span class="token operator">:</span> Type <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arg
<span class="token punctuation">}</span>

<span class="token comment">// 可以正确推导出返回值的类型</span>
<span class="token keyword">const</span> l1 <span class="token operator">=</span> <span class="token function">getLength</span><span class="token punctuation">(</span><span class="token string">&#39;1111&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> l2 <span class="token operator">=</span> <span class="token function">getLength</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// 扩展： 泛型参数约束的使用</span>
<span class="token keyword">interface</span> <span class="token class-name">Ikun</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string
  <span class="token literal-property property">age</span><span class="token operator">:</span> number
<span class="token punctuation">}</span>
<span class="token comment">// 此时 IkunKeys 的类型是 Ikun中key的联合类型（可以视为字面量类型的集合）</span>
type IkunKeys <span class="token operator">=</span> keyof Ikun <span class="token comment">// &#39;name&#39; | &#39;age&#39;</span>


<span class="token comment">// 示例 使用 keyof 限制传入进的参数的具体类型</span>
<span class="token comment">// 此时 key参数的类型，代表继承于 O的 键的联合类型（满足其中一个就视为正确）</span>
<span class="token comment">// 此约束可以避免拿不到具体的对象中的值</span>
<span class="token keyword">function</span> getObejectProperty<span class="token operator">&lt;</span><span class="token constant">O</span><span class="token punctuation">,</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token class-name">keyof</span> <span class="token constant">O</span><span class="token operator">&gt;</span> <span class="token punctuation">(</span>Obj<span class="token operator">:</span> <span class="token constant">O</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token constant">K</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;kobe&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>
<span class="token function">getObejectProperty</span><span class="token punctuation">(</span>info<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="映射类型" tabindex="-1"><a class="header-anchor" href="#映射类型" aria-hidden="true">#</a> 映射类型</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 映射类型通过索引签名可以将另一个类型拷贝一份</span>
type mapPerson<span class="token operator">&lt;</span>Type<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 相当于对传进来的类型 Type 进行遍历</span>
  <span class="token punctuation">[</span>property <span class="token keyword">in</span> keyof Type<span class="token punctuation">]</span><span class="token operator">:</span> Type<span class="token punctuation">[</span>property<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Iperson</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string
  <span class="token literal-property property">age</span><span class="token operator">:</span> number
<span class="token punctuation">}</span>

<span class="token comment">// 获取一样的类型</span>
type tooPerson <span class="token operator">=</span> mapPerson<span class="token operator">&lt;</span>Iperson<span class="token operator">&gt;</span>

<span class="token comment">// 扩展：通过映射签名复制类型后改变原有类型</span>
type mapPerson<span class="token operator">&lt;</span>Type<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 增加修饰符 来控制复制后的类型情况</span>
  <span class="token punctuation">[</span>property <span class="token keyword">in</span> keyof Type<span class="token punctuation">]</span><span class="token operator">?</span><span class="token operator">:</span> Type<span class="token punctuation">[</span>property<span class="token punctuation">]</span>
  <span class="token comment">// readonly [property in keyof Type]: Type[property]</span>
  <span class="token comment">// + - 符号代表是否删除原有类型的修饰符 -?代表 将可选全部变成必穿</span>
  <span class="token comment">// -readonly [property in keyof Type]-?: Type[property]</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Iperson</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string
  <span class="token literal-property property">age</span><span class="token operator">:</span> number
<span class="token punctuation">}</span>

<span class="token comment">// 获取一样的类型,但是成员是可选的</span>
type tooPerson <span class="token operator">=</span> mapPerson<span class="token operator">&lt;</span>Iperson<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30),c=[o];function l(i,r){return s(),a("div",null,c)}const k=n(t,[["render",l],["__file","002_面向对象.html.vue"]]);export{k as default};
