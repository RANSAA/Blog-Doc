import{_ as a,c as n,o as e,ag as p}from"./chunks/framework.Bee44SUS.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/Server/Vapor/TKAppManager-WebServer.md","filePath":"src/Server/Vapor/TKAppManager-WebServer.md","lastUpdated":1788418940000}'),t={name:"src/Server/Vapor/TKAppManager-WebServer.md"};function l(i,s,o,c,r,d){return e(),n("div",null,[...s[0]||(s[0]=[p(`<h2 id="⚠️警告⚠️" tabindex="-1">⚠️警告⚠️ <a class="header-anchor" href="#⚠️警告⚠️" aria-label="Permalink to &quot;⚠️警告⚠️&quot;">​</a></h2><p>⚠️⚠️关于直接将构建好的文件直接从<code>.build</code>目录中使用<code>Ctrl+C</code>，<code>Ctrl+V</code>和<code>鼠标右键</code>选择复制到和.build目录不在同一分区的任何目录时， 产生的副本会出现错误(无法运行，内容被修改)，这是因为Finder在夸卷复制文件时修改了文件内容造成的错误。</p><p>✅✅如果直接使用<code>cp</code>或者<code>ditto</code>命令复制文件就不会出现这个错误。 <br> ✅✅所以在构建发布程序时需使用<code>cp</code>命令复制文件这样最安全。</p><h2 id="tkappmanager-webserver" tabindex="-1">TKAppManager-WebServer <a class="header-anchor" href="#tkappmanager-webserver" aria-label="Permalink to &quot;TKAppManager-WebServer&quot;">​</a></h2><p>这是AppManager控制程序的后端服务<strong>Swift</strong>实现，用于替代LeanCloud,Bomb云的自定义实现。可以自定部署与控制。</p><p>并且WebServer支持多种数据库，其中:</p><ul><li><strong>CTSServer-DBJS</strong>：不使用任何数据库，直接采用JOSN文件的方式管理数据，并且支持加密。 - 任何平台都支持部署</li><li><strong>CTSServer-SQLite</strong>：使用SQLite数据库的方式来管理数据。 - 只要有设备上能安装SQLite的都支持部署。 Heroku平台就不支持。</li><li><strong>CTSServer-PostgreSQL</strong>：使用PostgreSQL数据库的方式来管理数据。 - 只要提供PostgreSQL的平台都能部署。</li><li><strong>CTSServer-MySQL</strong>：使用MySQL数据库的方式来管理数据。 - 只要提供MySQL的平台都能部署。</li></ul><h2 id="webserver依赖的vapor" tabindex="-1">WebServer依赖的Vapor <a class="header-anchor" href="#webserver依赖的vapor" aria-label="Permalink to &quot;WebServer依赖的Vapor&quot;">​</a></h2><p>由于这是一个比较老的Vapor项目，并且使用的是<strong>swift-tools-version:5.2</strong>所有固定的vapor版本较低：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 版本规则说明：</span></span>
<span class="line"><span>//           .exact(&quot;4.1.0&quot;) -&gt; 指定版本  Ver == 4.1.0</span></span>
<span class="line"><span>//           from: &quot;4.1.0&quot;   -&gt; 版本满足  4.1.0 &lt;= Ver &lt; 5.0.0</span></span>
<span class="line"><span>//           from: &quot;4.0.0&quot;   -&gt; 版本满足  4.0.0 &lt;= Ver &lt; 5.0.0</span></span>
<span class="line"><span>//</span></span>
<span class="line"><span>//.package(url: &quot;https://github.com/vapor/vapor.git&quot;, .exact(&quot;4.1.0&quot;)),</span></span>
<span class="line"><span>.package(url: &quot;https://github.com/vapor/vapor.git&quot;, from: &quot;4.1.0&quot;),</span></span></code></pre></div><h2 id="编译与运行" tabindex="-1">编译与运行 <a class="header-anchor" href="#编译与运行" aria-label="Permalink to &quot;编译与运行&quot;">​</a></h2><p>这个项目是一个多Target项目，所以在编译，运行时就需要指定对应的<em>Target</em>或<strong>Product</strong> 其中的Target分别为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//1.</span></span>
<span class="line"><span>CTSServer-DBJS</span></span>
<span class="line"><span>//2.</span></span>
<span class="line"><span>CTSServer-SQLite</span></span>
<span class="line"><span>//3.</span></span>
<span class="line"><span>CTSServer-PostgreSQL</span></span>
<span class="line"><span>//4.</span></span>
<span class="line"><span>CTSServer-MySQL</span></span></code></pre></div><p>常规的单Target命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> swift run</span></span>
<span class="line"><span> swift test</span></span>
<span class="line"><span> swift build</span></span>
<span class="line"><span> swift build -c release</span></span>
<span class="line"><span> swift build -c release --show-bin-path</span></span></code></pre></div><p>多Target命令:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> 运行: swift run TargetName:</span></span>
<span class="line"><span> swift run CTSServer-SQLite</span></span>
<span class="line"><span> swift run CTSServer-PostgreSQL</span></span>
<span class="line"><span> swift run CTSServer-MySQL</span></span>
<span class="line"><span> swift run CTSServer-DBJS</span></span></code></pre></div><p>测试：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>swift test</span></span></code></pre></div><p>构建命令： 使用<code>--product</code>或<code>--target</code>指定target名称。 区别：一个product可以包含多个target</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> swift build --product CTSServer-SQLite</span></span>
<span class="line"><span> swift build --product CTSServer-PostgreSQL</span></span>
<span class="line"><span> swift build --product CTSServer-MySQL</span></span>
<span class="line"><span> swift build --product CTSServer-DBJS</span></span>
<span class="line"><span> 或者  - ⚠️⚠️不能使用target构建，使用target表示构建这个target目标，而不是可执行程序</span></span>
<span class="line"><span> swift build --target CTSServer-SQLite</span></span>
<span class="line"><span> swift build --target CTSServer-PostgreSQL</span></span>
<span class="line"><span> swift build --target CTSServer-MySQL</span></span>
<span class="line"><span> swift build --target CTSServer-DBJS</span></span></code></pre></div><p>发布命令: 发布时在构建命令后面追加<code>-c release</code>命令即可</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> swift build --product CTSServer-SQLite -c release</span></span>
<span class="line"><span> swift build --product CTSServer-PostgreSQL -c release</span></span>
<span class="line"><span> swift build --product CTSServer-MySQL -c release</span></span>
<span class="line"><span> swift build --product CTSServer-DBJS -c release</span></span>
<span class="line"><span> 或  - ⚠️⚠️不能使用target构建，使用target表示构建这个target目标，而不是可执行程序</span></span>
<span class="line"><span> swift build --target CTSServer-SQLite -c release</span></span>
<span class="line"><span> swift build --target CTSServer-PostgreSQL -c release</span></span>
<span class="line"><span> swift build --target CTSServer-MySQL -c release</span></span>
<span class="line"><span> swift build --target CTSServer-DBJS -c release</span></span></code></pre></div><p>清整个构建缓存:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>swift package clean</span></span></code></pre></div><p>依赖变动后:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> swift package update</span></span>
<span class="line"><span> swift package resolve</span></span></code></pre></div><p>全量重编某个<code>release</code>产品:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>swift package clean &amp;&amp; swift build -c release --product CTSServer-SQLite</span></span></code></pre></div><p>Vapor 启动参数：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> swift run CTSServer-SQLite serve --port 8080</span></span>
<span class="line"><span> 或</span></span>
<span class="line"><span> swift run CTSServer-SQLite --env production</span></span></code></pre></div><h2 id="环境变量" tabindex="-1">环境变量 <a class="header-anchor" href="#环境变量" aria-label="Permalink to &quot;环境变量&quot;">​</a></h2><p>本程序中有很多配置是并没有固定，而是通过环境变量来动态实现的；并且通过环境变量会使程序更灵活，更安全。 下面是一个带环境变量的swift run 运行示例:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>killport=1 killname=1 online=1 hostname=0.0.0.0 port=8080 username=sayaDev  password=asd123456 swift run CTSServer-DBJS</span></span></code></pre></div><p>直接运行程序时：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>killport=1 killname=1 online=1 hostname=0.0.0.0 port=8080 username=sayaDev  password=asd123456 CTSServer-DBJS</span></span></code></pre></div><p>✅环境变量规则说明✅</p><ul><li><strong>命名规则</strong>：支持全大小写的方式，比如程序需要获取环境变量端口<code>port</code>的值，那么如：<code>port</code>，<code>PORT</code>形式的就是正确的，形如：<code>Port</code>样式的就是错误的命名。</li><li><strong>变量值规则</strong>：一般都是作为字符串类型处理，但是用作条件判断的值就会使用：<code>1</code>或<code>true</code>来表示真值，<code>0</code>或<code>flase</code>来表示假值。</li></ul><p>✅支持的环境变量✅</p><ul><li><strong>killport</strong>：值为1或true时，就会在程序启动时执行Kill.killPort终止程序，检测方式：所有符合port的绑定和使用的程序都会被终止。 注意：一般开发的时候需要使用。</li><li><strong>killname</strong>：值为1或true时，就会在程序启动时执行Kill.killProcess终止程序，检测方式：所有和当前进程名(全名称匹配)相同的程序都会被终止。 注意：一般开发的时候需要使用。</li><li><strong>logger</strong>：是否启用日志记录，1,true表示启用(默认)，0，false表示禁用。</li><li><strong>online</strong>：如果online=1，online=true 会启动保活任务，即定时向硬盘写入文件，请求外部网址数据。 注：形如heroku平台如果30分钟应用不活跃就会暂停服务，此时就需要配置online。</li><li></li><li><strong>hostname</strong>：当前vapor应用启动的绑定地址，如果该值不存在则会使用默认绑定地址。</li><li><strong>port</strong>：当前vapor应用启动的绑定端口，如果该值不存在则会使用默认绑定端口(8080)。</li><li></li><li><strong>username</strong>：请求API认证时需要的认证用户名自定义，如果不存在则会使用默认值。</li><li><strong>password</strong>：请求API认证时需要的认证密码自定义，如果不存在则会使用默认值。</li><li></li><li><strong>heanders</strong>：这不是直接设置在命令行的环境变量，而是在Resources/Private/env.headers.json 文件中的环境变量，如果要修改直接修改文件中的数据即可。</li><li></li></ul><h2 id="接口" tabindex="-1">接口 <a class="header-anchor" href="#接口" aria-label="Permalink to &quot;接口&quot;">​</a></h2><h4 id="api请求权限配置" tabindex="-1">API请求权限配置 <a class="header-anchor" href="#api请求权限配置" aria-label="Permalink to &quot;API请求权限配置&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>X-CTSServer-App：CTSServer-Client</span></span>
<span class="line"><span>X-CTSServer-Secretkey：a85a214cb0c5eb47c648147f16e19ad84f576a6e</span></span></code></pre></div><p><strong>位置</strong>：这两个参数是位于header部分</p><p><strong>说明</strong>：所有请求是否需要这两个参数进行认证，是由<code>Resources/Private/env.headers.json</code>文件决定的。如果文件中的<code>X-CTSServer-App</code>或<code>X-CTSServer-Secretkey</code> 的变量名不存在，或者它的值为空就不会校验。比如：</p><ol><li>如果X-CTSServer-App和X-CTSServer-Secretkey都存在并且值都不为空，那么API请求时header中传输的参数名与值都要与他们匹配才能校验成功。 - 默认</li><li>如果只有X-CTSServer-App存在且值不为空，那么API请求时header中只需要传输X-CTSServer-App及其值就能校验成功。</li><li>如果X-CTSServer-App与值存在，并且X-CTSServer-Secretkey也存在但是值为空，那么API请求时header中只需要传输X-CTSServer-App及其值就能校验成功。</li><li>如果X-CTSServer-App和X-CTSServer-Secretkey都不存在，那么API请求时就不需要检验</li></ol><h4 id="api请求用户认证配置" tabindex="-1">API请求用户认证配置 <a class="header-anchor" href="#api请求用户认证配置" aria-label="Permalink to &quot;API请求用户认证配置&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>username：sayaDev</span></span>
<span class="line"><span>password：asd123456</span></span></code></pre></div><p><strong>位置</strong>：这两个参数是位于header部分</p><p><strong>说明</strong>：这两个用户认证参数与环境变量中的<code>username</code>，<code>password</code>有关，如果配置了环境变量则需要与环境变量的值匹配；如果没有配置则使用这个默认值</p><h4 id="api接口" tabindex="-1">API接口 <a class="header-anchor" href="#api接口" aria-label="Permalink to &quot;API接口&quot;">​</a></h4><p>cts表的相关操作：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> 功能：新建</span></span>
<span class="line"><span> 方式：Post</span></span>
<span class="line"><span> API：/v1/class/cts</span></span>
<span class="line"><span> Body参数：{&quot;k&quot;:&quot;k&quot;,&quot;v&quot;:&quot;v&quot;}</span></span>
<span class="line"><span> 解释：</span></span>
<span class="line"><span> 1. {&quot;k&quot;:&quot;k&quot;,&quot;v&quot;:&quot;v&quot;} -&gt; 新建数据时的Body参数，格式为JSON</span></span>
<span class="line"><span> 2. 实际新建数据逻辑：先根据k的值查询数据，如果查询到数据就不新建，没有则新建数据</span></span>
<span class="line"><span> **/</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> 功能：更新</span></span>
<span class="line"><span> 方式：Put</span></span>
<span class="line"><span> API：/v1/class/cts/objectID</span></span>
<span class="line"><span> Body参数：{&quot;v&quot;:&quot;v-value&quot;}</span></span>
<span class="line"><span> 解释：</span></span>
<span class="line"><span> 1. objectID -&gt; 需要更新记录的objectID动态值</span></span>
<span class="line"><span> 2. {&quot;v&quot;:&quot;v-value&quot;} -&gt; 更新数据时的Body参数，格式为JSON</span></span>
<span class="line"><span> **/</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> 功能：删除</span></span>
<span class="line"><span> 方式：Detele</span></span>
<span class="line"><span> API：/v1/class/cts/objectID</span></span>
<span class="line"><span> 解释：</span></span>
<span class="line"><span> 1. objectID -&gt; 需要删除记录的objectID动态值</span></span>
<span class="line"><span> **/</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> 功能：查询 - 查询全部数据</span></span>
<span class="line"><span> 方式：GET</span></span>
<span class="line"><span> API：/v1/class/cts</span></span>
<span class="line"><span> **/</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> 功能：查询 - 根据条件查询指定数据</span></span>
<span class="line"><span> 方式：GET</span></span>
<span class="line"><span> API：/v1/class/cts?where={&quot;k&quot;:&quot;k-value&quot;}</span></span>
<span class="line"><span> 解释：</span></span>
<span class="line"><span> 1. where={&quot;k&quot;:&quot;k-value&quot;} -&gt; 为URL查询条件，表示查询数据库中字段名为k且值为&quot;k-value&quot;的所有记录</span></span>
<span class="line"><span> **/</span></span></code></pre></div><p>cts-v3文件部署相关：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> 功能：获取cts-v3文件</span></span>
<span class="line"><span> 方式：GGET/POST</span></span>
<span class="line"><span> API：/v1/deploy/cts-v3</span></span>
<span class="line"><span> **/</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> 功能：上传cts-v3文件 - 支持json/urlencoded/multipart + 小文件的上传方式</span></span>
<span class="line"><span> 方式：POST</span></span>
<span class="line"><span> API：/v1/deploy/upload/cts-v3</span></span>
<span class="line"><span> Body参数：</span></span>
<span class="line"><span> file：用于接收文件的字段名称，它的数据类型可以是String 和 File</span></span>
<span class="line"><span> 注意：如果请求&#39;Content-Type: application/octet-stream&#39;，那么就可以不要file参数名了，直接接收整个body数据为cts-v3文件。</span></span>
<span class="line"><span> 认证参数：</span></span>
<span class="line"><span> headers[&quot;username&quot;]</span></span>
<span class="line"><span> headers[&quot;password&quot;]</span></span>
<span class="line"><span> **/</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> 功能：通过stream流的方式接收任意上传文件   -   注：只有在DEBUG模式下启用</span></span>
<span class="line"><span> 方式：POST</span></span>
<span class="line"><span> API：/v1/deploy/upload/stream</span></span>
<span class="line"><span> Query参数：</span></span>
<span class="line"><span> filename：URL中的参数，用于接收上传文件的文件名，如果该参数不存在则使用随机名称。</span></span>
<span class="line"><span> 认证参数：</span></span>
<span class="line"><span> headers[&quot;username&quot;]</span></span>
<span class="line"><span> headers[&quot;password&quot;]</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> </span></span>
<span class="line"><span> 功能：使用stream流的方式接收上传的数据。 -&gt; ⚠️⚠️现在不校验Content-Type了，直接将body中的数据写入到一个文件中了。</span></span>
<span class="line"><span> 说明：</span></span>
<span class="line"><span> 1. body数据请求方式必须为Content-Type: application/octet-stream （Paw中应该选择File类型）；即body中只能有上传文件的数据，该方法会将body中的数据都写入到一个文件中。</span></span>
<span class="line"><span> 2. 如果请求还需要其它参数，可以通过URL Query或者Header传送</span></span>
<span class="line"><span> 3. ⚠️一定要注意不是使用multipart/form-data的方式上传文件</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> 使用stream流的方式接收上传文件的优点：</span></span>
<span class="line"><span> ✅ 支持大文件</span></span>
<span class="line"><span> ✅ 内存只缓冲 chunk（NIO 内部），即应用不会出现高内存的情况</span></span>
<span class="line"><span> ✅ 没有 multipart 解析成本</span></span>
<span class="line"><span> */</span></span></code></pre></div><p>数据备份：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> 功能：导出数据</span></span>
<span class="line"><span> 方式：Post/GET</span></span>
<span class="line"><span> API：/v1/backup/export</span></span>
<span class="line"><span> 认证参数：</span></span>
<span class="line"><span> headers[&quot;username&quot;]</span></span>
<span class="line"><span> headers[&quot;password&quot;]</span></span>
<span class="line"><span> **/</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> 功能：导入数据</span></span>
<span class="line"><span> 方式：Post/GET</span></span>
<span class="line"><span> API：/v1/backup/import</span></span>
<span class="line"><span> 认证参数：</span></span>
<span class="line"><span> headers[&quot;username&quot;]</span></span>
<span class="line"><span> headers[&quot;password&quot;]</span></span>
<span class="line"><span> **/</span></span></code></pre></div><h2 id="关于cts-v3文件" tabindex="-1">关于cts-v3文件 <a class="header-anchor" href="#关于cts-v3文件" aria-label="Permalink to &quot;关于cts-v3文件&quot;">​</a></h2><p>cts-v3文件部署平台：</p><ol><li>当前应用部署平台</li><li>Gitee</li><li>Github</li><li>Github 镜像站点： <code>https://gh-proxy.com</code>，<code>https://gh-proxy.net</code>，<code>https://ghproxy.net</code></li><li>Netlify</li></ol>`,67)])])}const g=a(t,[["render",l]]);export{h as __pageData,g as default};
