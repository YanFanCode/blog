import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as i,c as r,a as e,b as t,e as o,f as n}from"./app-067d7015.js";const c="/blog/assets/image/computer-science/networking/010/parse-url.png",h="/blog/assets/image/computer-science/networking/010/message.png",p="/blog/assets/image/computer-science/networking/010/DNS.png",d="/blog/assets/image/computer-science/networking/010/TCP-IP.png",m={},g=n('<p>先看看大致流程：</p><ol><li>生成 HTTP 请求消息：当用户在浏览器中输入网址，浏览器就会对 URL 进行解析；然后浏览器会根据网址的含义来生成请求消息；</li><li>向 DNS 服务器查询 Web 服务器的 IP 地址：请求消息生成后，浏览器向 DNS 服务器查询域名对应的 IP 地址，然后委托操作系统（浏览器本身并没有网络通讯的能力）向 Web 服务器发送请求。</li><li>委托协议栈发送消息：查询到 IP 地址之后，浏览器就可以将消息委托给操作系统的协议栈（TCP/IP）发送给服务器。</li><li>数字信息转换为电信号：通过协议栈将数据变成网络包后，网卡负责将数字信号转换为电信号。</li><li></li></ol><h2 id="生成-http-请求消息" tabindex="-1"><a class="header-anchor" href="#生成-http-请求消息" aria-hidden="true">#</a> 生成 HTTP 请求消息</h2><p>浏览器要做的第一步工作就是对 URL 进行解析，从而生成发送给 Web 服务器的请求消息。</p><img src="'+c+'" alt="Web浏览器解析URL" style="zoom:60%;"><h3 id="省略文件名的情况" tabindex="-1"><a class="header-anchor" href="#省略文件名的情况" aria-hidden="true">#</a> 省略文件名的情况</h3>',6),_={href:"http://www.lab.glasscom.com/dir/",target:"_blank",rel:"noopener noreferrer"},u=e("p",null,[t("以 "),e("code",null,"/"),t(" 结尾代表访问默认文件，大多数情况下是 "),e("code",null,"index.html"),t(" 或者 "),e("code",null,"default.htm"),t(" 之类的文件。")],-1),f={href:"http://www.lab.glasscom.com",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,[t("省略结尾的 "),e("code",null,"/"),t(" 符，代表访问服务器根目录下的默认文件，也就是 "),e("code",null,"index.html"),t(" 或者 "),e("code",null,"default.htm"),t("。")],-1),w={href:"http://www.lab.glasscom.com/whatisthis",target:"_blank",rel:"noopener noreferrer"},P=e("p",null,"如果 Web 服务器上存在名 whatisthis 的文件，则作为文件名来处理；如果存在名为 whatisthis 的目录，则作为目录名来处。",-1),I=n('<h3 id="生成请求消息" tabindex="-1"><a class="header-anchor" href="#生成请求消息" aria-hidden="true">#</a> 生成请求消息</h3><p>对 URL 进行解析之后，浏览器确定了 Web 服务器和文件名，接下来就是根据这些信息来生成 HTTP 请求消息了。</p><img src="'+h+'" alt="消息格式" style="zoom:60%;"><h2 id="向-dns-服务器查询域名-ip-地址" tabindex="-1"><a class="header-anchor" href="#向-dns-服务器查询域名-ip-地址" aria-hidden="true">#</a> 向 DNS 服务器查询域名 IP 地址</h2><p>浏览器解析完 URL 并生成请求消息后，需要委托操作系统向服务器发送请求消息。</p><p>但是在这之前，还需要知道服务器域名对应的 IP 地址。因此需要使用 DNS 服务器查询 IP 地址。</p><p>DNS 服务器保存了域名和 IP 的对应关系。</p><p>域名中用 <code>.</code> 来分隔，比如 <code>www.lab.glasscom.com.</code>，越往右层级越高，最后的一个点代表根域名，一般可以省略。</p><p>根域的服务器信息保存在互联网中的所有 DNS 服务器中，这样任意一台服务器都可以找到并访问根服务器，从而找到其它服务器。</p><figure><img src="'+p+'" alt="DNS" tabindex="0" loading="lazy"><figcaption>DNS</figcaption></figure><h2 id="协议栈" tabindex="-1"><a class="header-anchor" href="#协议栈" aria-hidden="true">#</a> 协议栈</h2><p>通过 DNS 获取到服务器的 IP 地址后，浏览器就可以通过 socket 库把 HTTP 报文的传输工作委托给操作系统中的<strong>协议栈</strong>。</p><figure><img src="'+d+'" alt="客户端" tabindex="0" loading="lazy"><figcaption>客户端</figcaption></figure><p>其中应用程序当然为应用层，协议栈中的 TCP/UDP 为传输层，他们会接收应用程序的委托执行收发数据的操作。</p><blockquote><p>像浏览器、邮件等一般的应用程序都是使用 TCP 收发数据的，而像 DNS 查询等收发较短的控制数据的时候则使用 UDP。</p></blockquote><p>在传送数据时，数据会切分成一个个网络包，而 IP 协议为网络层，负责控制网络包的发给通信对象。</p><p>IP 中还包括 ICMP 协议和 ARP 协议。ICMP 用于告知网络包传输过程中产生的错误及各种控制消息，ARP 用于根据 IP 地址查询相应的 MAC 地址。</p><h2 id="网卡" tabindex="-1"><a class="header-anchor" href="#网卡" aria-hidden="true">#</a> 网卡</h2>',18);function x(N,k){const a=s("ExternalLinkIcon");return i(),r("div",null,[g,e("ol",null,[e("li",null,[e("p",null,[e("a",_,[t("http://www.lab.glasscom.com/dir/"),o(a)])]),u]),e("li",null,[e("p",null,[e("a",f,[t("http://www.lab.glasscom.com"),o(a)])]),b]),e("li",null,[e("p",null,[e("a",w,[t("http://www.lab.glasscom.com/whatisthis"),o(a)])]),P])]),I])}const S=l(m,[["render",x],["__file","010-what-happens-after-entering-the-URL.html.vue"]]);export{S as default};
