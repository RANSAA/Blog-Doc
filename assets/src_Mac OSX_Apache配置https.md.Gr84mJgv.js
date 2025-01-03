import{_ as s,c as e,a2 as t,o as n}from"./chunks/framework.8y2HsME2.js";const u=JSON.parse('{"title":"Apache配置https","description":"","frontmatter":{},"headers":[],"relativePath":"src/Mac OSX/Apache配置https.md","filePath":"src/Mac OSX/Apache配置https.md","lastUpdated":1735893746000}'),p={name:"src/Mac OSX/Apache配置https.md"};function l(c,a,i,o,r,h){return n(),e("div",null,a[0]||(a[0]=[t(`<h1 id="apache配置https" tabindex="-1">Apache配置https <a class="header-anchor" href="#apache配置https" aria-label="Permalink to &quot;Apache配置https&quot;">​</a></h1><h2 id="apache" tabindex="-1">Apache <a class="header-anchor" href="#apache" aria-label="Permalink to &quot;Apache&quot;">​</a></h2><p>Apache命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> 开启apache:          sudo apachectl start</span></span>
<span class="line"><span> 重启apache:          sudo apachectl restart</span></span>
<span class="line"><span> 关闭apache:          sudo apachectl stop</span></span>
<span class="line"><span> apache配置检测是否正确 sudo apachectl configtest</span></span></code></pre></div><h3 id="apache开启https" tabindex="-1">Apache开启https <a class="header-anchor" href="#apache开启https" aria-label="Permalink to &quot;Apache开启https&quot;">​</a></h3><p>SSL生成证书： 步骤1：生成密钥</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>openssl genrsa 1024 &gt; server.key</span></span></code></pre></div><p>步骤2: 生成证书请求文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>openssl req -new -key server.key &gt; server.csr</span></span></code></pre></div><p>根据提示信息输入相关信息,生成crt文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Country Name：									Zh</span></span>
<span class="line"><span>State or Province Name :						Sichuan</span></span>
<span class="line"><span>Locality Name：									Chengdu</span></span>
<span class="line"><span>Organization Name:								Ruirui Software</span></span>
<span class="line"><span>Organizational Unit Name:						Ruirui</span></span>
<span class="line"><span>Common Name (eg, fully qualified host name):	localhost</span></span>
<span class="line"><span>Email Address:									1352892108@qq.com</span></span>
<span class="line"><span>A challenge password:							asd123456789</span></span></code></pre></div><p>步骤3: 生成证书</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>openssl req -x509 -days 7300 -key server.key -in server.csr &gt; server.crt</span></span></code></pre></div><p>配置Apache SSL 拷贝证书相关文件到配置路径</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cp server.key server.crt /private/etc/apache2/</span></span></code></pre></div><p>修改httpd.conf,以下三行取消注释</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>LoadModule ssl_module libexec/apache2/mod_ssl.so</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Include /private/etc/apache2/extra/httpd-ssl.conf</span></span>
<span class="line"><span></span></span>
<span class="line"><span>LoadModule socache_shmcb_module libexec/apache2/mod_socache_shmcb.so</span></span></code></pre></div><p>修改httpd-ssl.conf,找到VirtualHost，修改主机名（绿色区域），证书相关文件路径（蓝色区域）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;VirtualHost www.segmentfault.com.gao:443&gt;</span></span>
<span class="line"><span>#   General setup for the virtual host</span></span>
<span class="line"><span>#  DocumentRoot &quot;/Library/WebServer/Documents&quot;</span></span>
<span class="line"><span>DocumentRoot &quot;/Users/kimi/WebServer&quot;</span></span>
<span class="line"><span>ServerName www.segmentfault.com.gao:443</span></span>
<span class="line"><span>ServerAdmin you@example.com</span></span>
<span class="line"><span>ErrorLog &quot;/private/var/log/apache2/error_log&quot;</span></span>
<span class="line"><span>TransferLog &quot;/private/var/log/apache2/access_log&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SSLCertificateFile &quot;/private/etc/apache2/ssl/server.crt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SSLCertificateKeyFile &quot;/private/etc/apache2/ssl/server.key&quot;</span></span></code></pre></div><h2 id="https证书生成" tabindex="-1">https证书生成 <a class="header-anchor" href="#https证书生成" aria-label="Permalink to &quot;https证书生成&quot;">​</a></h2><p>1.证书生成可以直接使用<a href="https://keymanager.org" target="_blank" rel="noreferrer">KeyManager</a>软件生成 2.使用 <a href="https://blog.freessl.cn/tag/keymanager/" target="_blank" rel="noreferrer">KeyManager - FreeSSL.cn</a> 3.<a href="https://freessl.cn/" target="_blank" rel="noreferrer">FreeSSL.cn</a></p>`,21)]))}const g=s(p,[["render",l]]);export{u as __pageData,g as default};
