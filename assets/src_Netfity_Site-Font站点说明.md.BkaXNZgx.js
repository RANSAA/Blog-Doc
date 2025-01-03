import{_ as n,c as t,a2 as e,o as s}from"./chunks/framework.8y2HsME2.js";const f=JSON.parse('{"title":"Site-Font站点说明","description":"","frontmatter":{},"headers":[],"relativePath":"src/Netfity/Site-Font站点说明.md","filePath":"src/Netfity/Site-Font站点说明.md","lastUpdated":1735893746000}'),o={name:"src/Netfity/Site-Font站点说明.md"};function p(i,a,r,l,u,c){return s(),t("div",null,a[0]||(a[0]=[e(`<h1 id="site-font站点说明" tabindex="-1">Site-Font站点说明 <a class="header-anchor" href="#site-font站点说明" aria-label="Permalink to &quot;Site-Font站点说明&quot;">​</a></h1><p>用于管理字体的站点</p><h1 id="说明-项目使用netlify静态部署" tabindex="-1">说明：项目使用Netlify静态部署 <a class="header-anchor" href="#说明-项目使用netlify静态部署" aria-label="Permalink to &quot;说明：项目使用Netlify静态部署&quot;">​</a></h1><h1 id="警告" tabindex="-1">警告 <a class="header-anchor" href="#警告" aria-label="Permalink to &quot;警告&quot;">​</a></h1><pre><code>对于一些特殊字符不同的平台处理方式不一样，所以会出现看起来一样的字符，但是它们却是不一样的字符。
</code></pre><p>因为Mac平台的默认字符集为Unicode，在处理一些特殊字符时会自动追加对应的组合字符，Windows平台不会添加，这就某些字符看起来相同但实际上却是不同字符的原因。<br> 由于Netlify CLI在Mac和Windows平台下处理路径是有区别的，Mac上对某些特殊字符会添加对应的组合字符。<br> 所以：在Windows上使用Netlify CLI上传的项目访问资源路径时须使用带 「.win」的请求路径。在Mac上上传的项目访问资源路径时使用正常的访问接口即可。</p><pre><code> 注意：这儿特指url路径中的字符
</code></pre><h1 id="上传平台-mac" tabindex="-1">上传平台：Mac <a class="header-anchor" href="#上传平台-mac" aria-label="Permalink to &quot;上传平台：Mac&quot;">​</a></h1><pre><code>如果整个项目很大，并且文件也很多，并且存储在NTFS分区上时，一般在Windows上面部署项目，因为黑苹果读取NTFS上的数据时容易出错。
</code></pre><p>Windows：使用带「.win」的API资源访问路径 <br> Mac：使用不带「.win」的API资源访问路径</p><h1 id="请求接口" tabindex="-1">请求接口 <a class="header-anchor" href="#请求接口" aria-label="Permalink to &quot;请求接口&quot;">​</a></h1><p>font请求地址： <a href="https://ranstar-font.netlify.app/fonts.json" target="_blank" rel="noreferrer">https://ranstar-font.netlify.app/fonts.json</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;path&quot;: &quot;https://ranstar-font.netlify.app/&quot;,</span></span>
<span class="line"><span>    &quot;mark&quot;: &quot;说明：字体文件访问路径：path+fileName；\\n字体样式预览访问路径：path+preview。\\n字体文件命名规则：文件名+文件后缀。其中文件名由 \\&quot;+\\&quot; 分割。\\n\\&quot;+\\&quot; 之前的表示字体文件的fontName\\n\\&quot;+\\&quot; 之后的表示该文件的描述\\n注意：\\n    1. \\&quot;+\\&quot; 可以不存在，但是文件名必须与改字体文件的fontName相匹配。\\n    2. 如果有预览图片，那么图片的名称必须与fontName保持一致(图片格式不限)&quot;,</span></span>
<span class="line"><span>    &quot;list&quot;: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;preview&quot;: &quot;LXGWWenKaiMono-Regular.png&quot;,</span></span>
<span class="line"><span>            &quot;fontName&quot;: &quot;LXGWWenKaiMono-Regular&quot;,</span></span>
<span class="line"><span>            &quot;fileName&quot;: &quot;LXGWWenKaiMono-Regular+霞鹜文楷等宽 Regular.ttf&quot;,</span></span>
<span class="line"><span>            &quot;mark&quot;: &quot;霞鹜文楷等宽 Regular&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &quot;example1&quot;: &quot;https://ranstar-font.netlify.app/LXGWWenKaiMono-Regular.png&quot;,</span></span>
<span class="line"><span>    &quot;example&quot;: &quot;https://ranstar-font.netlify.app/LXGWWenKaiMono-Regular+霞鹜文楷等宽 Regular.ttf&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>说明：字体文件访问路径：path+fileName；<br> 字体样式预览访问路径：path+preview。</p><h1 id="站点字体文件命名规则" tabindex="-1">站点字体文件命名规则 <a class="header-anchor" href="#站点字体文件命名规则" aria-label="Permalink to &quot;站点字体文件命名规则&quot;">​</a></h1><p>例如：LXGWWenKaiMono-Regular+霞鹜文楷等宽 Regular.ttf <br><br> 字体文件命名规则：文件名+文件后缀。其中文件名由 &quot;+&quot; 分割。<br> &quot;+&quot; 之前的表示字体文件的fontName <br> &quot;+&quot; 之后的表示该文件的描述 <br> 注意：<br> 1. &quot;+&quot; 可以不存在，但是文件名必须与改字体文件的fontName相匹配。<br> 2. 如果有预览图片，那么图片的名称必须与fontName保持一致(图片格式不限)</p>`,16)]))}const d=n(o,[["render",p]]);export{f as __pageData,d as default};
