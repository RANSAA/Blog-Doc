import{_ as s,c as n,o as e,ag as p}from"./chunks/framework.Bee44SUS.js";const h=JSON.parse('{"title":"Shell 计算代码执行时长","description":"","frontmatter":{},"headers":[],"relativePath":"src/Linux/Shell 计算代码执行时长.md","filePath":"src/Linux/Shell 计算代码执行时长.md","lastUpdated":1770199621000}'),l={name:"src/Linux/Shell 计算代码执行时长.md"};function t(i,a,c,o,r,_){return e(),n("div",null,[...a[0]||(a[0]=[p(`<h1 id="shell-计算代码执行时长" tabindex="-1">Shell 计算代码执行时长 <a class="header-anchor" href="#shell-计算代码执行时长" aria-label="Permalink to &quot;Shell 计算代码执行时长&quot;">​</a></h1><h3 id="代码如下" tabindex="-1">代码如下 <a class="header-anchor" href="#代码如下" aria-label="Permalink to &quot;代码如下&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#!/usr/bin/env bash </span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo 开始时间：$(date)</span></span>
<span class="line"><span>start_time=$(date +%s)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#执行代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo 结束时间：$(date)</span></span>
<span class="line"><span>end_time=$(date +%s)</span></span>
<span class="line"><span>cost_time=$[$end_time - start_time]</span></span>
<span class="line"><span>echo &quot;总共耗时：$(($cost_time)) s&quot;</span></span></code></pre></div>`,3)])])}const u=s(l,[["render",t]]);export{h as __pageData,u as default};
