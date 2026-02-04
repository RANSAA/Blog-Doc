import{_ as a,c as n,o as p,ag as e}from"./chunks/framework.Bee44SUS.js";const h=JSON.parse('{"title":"Podfile常用三方库及其配置一：基础配置与说明","description":"","frontmatter":{},"headers":[],"relativePath":"src/iOS/CocoaPods/Podfile常用三方库及其配置一：基础配置与说明.md","filePath":"src/iOS/CocoaPods/Podfile常用三方库及其配置一：基础配置与说明.md","lastUpdated":1770199621000}'),t={name:"src/iOS/CocoaPods/Podfile常用三方库及其配置一：基础配置与说明.md"};function i(o,s,l,c,d,r){return p(),n("div",null,[...s[0]||(s[0]=[e(`<h1 id="podfile常用三方库及其配置一-基础配置与说明" tabindex="-1">Podfile常用三方库及其配置一：基础配置与说明 <a class="header-anchor" href="#podfile常用三方库及其配置一-基础配置与说明" aria-label="Permalink to &quot;Podfile常用三方库及其配置一：基础配置与说明&quot;">​</a></h1><h2 id="关联文章" tabindex="-1">关联文章: <a class="header-anchor" href="#关联文章" aria-label="Permalink to &quot;关联文章:&quot;">​</a></h2><p><a href="/Blog-Doc/src/iOS/CocoaPods/Podfile常用三方库及其配置一：基础配置与说明">Podfile常用三方库及其配置一：基础配置与说明</a> <br><a href="/Blog-Doc/src/iOS/CocoaPods/Podfile常用三方库及其配置二：Pod常用框架">Podfile常用三方库及其配置二：Pod常用框架</a> <br><a href="/Blog-Doc/src/iOS/CocoaPods/Podfile常用三方库及其配置三：工具推荐">Podfile常用三方库及其配置三：工具推荐</a></p><h2 id="基础" tabindex="-1">基础： <a class="header-anchor" href="#基础" aria-label="Permalink to &quot;基础：&quot;">​</a></h2><p><strong>忽略cocoapods中多个specs源引起的警告问题:</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>install! &#39;cocoapods&#39;, :warn_for_unused_master_specs_repo =&gt; false</span></span></code></pre></div><p><strong>推荐使用CDN trunk源：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>source &#39;https://cdn.cocoapods.org/&#39;</span></span></code></pre></div><p><strong>Podfile源配置</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#添加源方式，任选一，推荐使用CDN trunk源</span></span>
<span class="line"><span>## 1. cdn trunk源：通过CDN实时获取https://github.com/CocoaPods/Specs.git最新数据。</span></span>
<span class="line"><span>source &#39;https://cdn.cocoapods.org/&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 2. Specs源：旧版CocoaPods不支持CDN，直接获取https://github.com/CocoaPods/Specs.git最新数据。</span></span>
<span class="line"><span>source &#39;https://github.com/CocoaPods/Specs.git&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 3. 清华大学镜像源：注意有缓存，获取的数据不是最新的，但是解决了国内网络访问问题。</span></span>
<span class="line"><span>source &#39;https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git&#39;</span></span></code></pre></div><h2 id="podfile-配置文件说明" tabindex="-1">Podfile 配置文件说明： <a class="header-anchor" href="#podfile-配置文件说明" aria-label="Permalink to &quot;Podfile 配置文件说明：&quot;">​</a></h2><p><strong>build configurations (编译配置) 默认情况下，依赖项会被安装在所有target的build configrations中：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//为了调试或者其他原因，他们可以在给定的configurations中启用</span></span>
<span class="line"><span>pod &#39;PonyDebugger&#39;, :configurations =&gt; [&#39;Debug&#39;, &#39;Beta&#39;]</span></span>
<span class="line"><span>//或者，你可以至指定一个build configration</span></span>
<span class="line"><span>pod &#39;PonyDebugger&#39;, :configuration =&gt; ‘Debug&#39;</span></span></code></pre></div><p><strong>source： 默认被指定的依赖项会在全局级别的指定源中匹配搜索。可以为特依赖关系指定源</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//指定特定源中搜索，并忽略任何全局源*</span></span>
<span class="line"><span>pod &#39;PonyDebugger&#39;, :source =&gt; &#39;https://github.com/CocoaPods/Specs.git&#39;</span></span></code></pre></div><p><strong>Subspecs： 当使用依赖库名字引入依赖库时，也会默认安装依赖库中的所有子模块。</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//指定引用指定子模块</span></span>
<span class="line"><span>pod &#39;QueryKit/Attribute’</span></span>
<span class="line"><span>//指定一个子模块集合</span></span>
<span class="line"><span>pod &#39;QueryKit&#39;, :subspecs =&gt; [&#39;Attribute&#39;, &#39;QuerySet&#39;]</span></span></code></pre></div><h2 id="依赖-dependencies" tabindex="-1">依赖（Dependencies） <a class="header-anchor" href="#依赖-dependencies" aria-label="Permalink to &quot;依赖（Dependencies）&quot;">​</a></h2><ol><li>pod： 指明项目依赖，一个依赖是由一个pod名称和一个可选版本定义</li></ol><blockquote><p>a. 如果不添加版本号，pod默认使用最新的 如：pod ’SSZipArchive’ b. 如果项目需要一个指定的pod，需要添加版本号，如： pod ‘objection’, ‘0.9’ c. 指定版本范围</p><blockquote><p>. = 0.1 版本是0.1 . &gt;0.1 任何大于0.1版本 · &gt;=0.1 0.1和大于0.1版本 · &lt;0.1 小于0.1版本 · &lt;=0.1 0.1和小于0.1版本 · ~=0.1.2 0.1.2&lt;= pod &lt; 0.2 版本 ，安装这个范围内最新的版本</p></blockquote></blockquote><ol start="2"><li>podspec : 引用仓库根目录的(from a pod spec in the root of a library repository)引用pod在指定节点或者分支</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>主分支：</span></span>
<span class="line"><span>pod &#39;AFNetworking&#39;, :git =&gt; &#39;https:github.com/gowalla/AFNetworking.git&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>指定分支： :branch =&gt; &#39;dev&#39;</span></span>
<span class="line"><span>pod &#39;AFNetworking&#39;, :git =&gt; &#39;https:github.com/a/AFNetworking.git&#39;, :branch =&gt; &#39;dev&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>指定的tag:  :tag =&gt; &#39;0.7.0&#39;</span></span>
<span class="line"><span>pod &#39;AFNetworking&#39;, :git =&gt; &#39;https:github.com/b/AFNetworking.git&#39;, :tag =&gt; &#39;0.7.0&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>指定的节点： :commit =&gt; &#39;082f8319af&#39;</span></span>
<span class="line"><span>pod &#39;AFNetworking&#39;, :git =&gt; &#39;https:github.com/c/AFNetworking.git&#39;, :commit =&gt;  ‘082f8319af&#39;</span></span></code></pre></div><ol start="3"><li>添加本地框架</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>添加本地框架  path后面跟本地框架的详细路径</span></span>
<span class="line"><span>pod &#39;TKPermissionKit&#39; , :path =&gt; &quot;.. /&quot;</span></span></code></pre></div><ol start="4"><li>abstract_target :定义一个抽象的target，为了方便target目标依赖继承。 这个target是没有被定义在xcode中的。 例子：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>a.定义一个抽象target</span></span>
<span class="line"><span> abstract_target &#39;Networking&#39; do     </span></span>
<span class="line"><span>     pod ‘AlamoFire&#39;</span></span>
<span class="line"><span>     target &#39;Networking App 1’</span></span>
<span class="line"><span>     target &#39;Networking App 2’</span></span>
<span class="line"><span> end</span></span>
<span class="line"><span>b. 定义一个包含多个target的抽象target</span></span>
<span class="line"><span># 注意：这是个抽象的target工程中并没有这个target.引入ShowsKit </span></span>
<span class="line"><span> abstract_target &#39;Shows&#39; do </span></span>
<span class="line"><span>     pod &#39;ShowsKit’ </span></span>
<span class="line"><span>     # ShowsiOS target会引入ShowWebAuth库以及继承自Shows的ShowsKit库 </span></span>
<span class="line"><span>     target &#39;ShowsiOS&#39; do </span></span>
<span class="line"><span>         pod &#39;ShowWebAuth’ </span></span>
<span class="line"><span>     end</span></span>
<span class="line"><span>     # ShowsTV target会引入ShowTVAuth库以及继承自Shows的ShowsKit库 </span></span>
<span class="line"><span>     target &#39;ShowsTV’ do</span></span>
<span class="line"><span>         pod ‘ShowTVAuth&#39;</span></span>
<span class="line"><span>     end </span></span>
<span class="line"><span>     # ShowsTests target引入了Specta和Expecta库，并且指明继承Shows，所以也会引入ShowsKit</span></span>
<span class="line"><span>     target &#39;ShowsTests’ do</span></span>
<span class="line"><span>         inherit! :search_paths </span></span>
<span class="line"><span>         pod &#39;Specta’ </span></span>
<span class="line"><span>         pod &#39;Expecta’ </span></span>
<span class="line"><span>     end </span></span>
<span class="line"><span>end</span></span></code></pre></div><ol start="5"><li>script_phase 使用这个命令给target添加shell脚本</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>target ‘A’ do</span></span>
<span class="line"><span>    script_phase :name =&gt; &#39;HelloWorldScript&#39;, :script =&gt; &#39;echo &quot;Hello World”&#39;</span></span>
<span class="line"><span>    script_phase :name =&gt; &#39;HelloWorldScript&#39;, :script =&gt; &#39;puts &quot;Hello World&quot;&#39;, :shell_path =&gt; &#39;/usr/bin/ruby&#39;</span></span>
<span class="line"><span>end</span></span></code></pre></div><ol start="6"><li>abstract! 指定当前target是抽象target</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>target ‘A’ do</span></span>
<span class="line"><span>    abstract!</span></span>
<span class="line"><span>end</span></span></code></pre></div><ol start="7"><li>inherit! 设置当前target的继承关系</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>target &#39;App’ do</span></span>
<span class="line"><span>    target ‘A’ do</span></span>
<span class="line"><span>        #这个target 继承 父级所有行为</span></span>
<span class="line"><span>        inherit! :complete  </span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>    target ‘B’ do</span></span>
<span class="line"><span>        #这个target 不继承 父级所有行为</span></span>
<span class="line"><span>        inherit! :none </span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>    target ‘C’ do</span></span>
<span class="line"><span>        #target 仅继承 父级的搜索路劲</span></span>
<span class="line"><span>        inherit! :search_paths </span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>end</span></span></code></pre></div>`,32)])])}const u=a(t,[["render",i]]);export{h as __pageData,u as default};
