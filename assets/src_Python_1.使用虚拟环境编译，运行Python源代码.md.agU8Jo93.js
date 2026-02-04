import{_ as n,c as a,o as p,ag as l}from"./chunks/framework.Bee44SUS.js";const r=JSON.parse('{"title":"使用虚拟环境编译，运行Python源代码","description":"","frontmatter":{},"headers":[],"relativePath":"src/Python/1.使用虚拟环境编译，运行Python源代码.md","filePath":"src/Python/1.使用虚拟环境编译，运行Python源代码.md","lastUpdated":1770199621000}'),e={name:"src/Python/1.使用虚拟环境编译，运行Python源代码.md"};function t(i,s,c,o,d,h){return p(),a("div",null,[...s[0]||(s[0]=[l(`<h1 id="使用虚拟环境编译-运行python源代码" tabindex="-1">使用虚拟环境编译，运行Python源代码 <a class="header-anchor" href="#使用虚拟环境编译-运行python源代码" aria-label="Permalink to &quot;使用虚拟环境编译，运行Python源代码&quot;">​</a></h1><p>在使用Python项目时，一般会依赖很多外部的软件或者安装包。但是直接使用Python安装会污染系统安装的软件， 这时就需要虚拟环境来运行Python以隔绝对系统的污染以达到安全运行的目的。</p><h1 id="虚拟环境的使用" tabindex="-1">虚拟环境的使用 <a class="header-anchor" href="#虚拟环境的使用" aria-label="Permalink to &quot;虚拟环境的使用&quot;">​</a></h1><ol><li>创建并进入虚拟环境</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 创建并进入虚拟环境</span></span>
<span class="line"><span>python3 -m venv venv</span></span>
<span class="line"><span>source venv/bin/activate</span></span></code></pre></div><ol start="2"><li>可在venv虚拟环境中执行依赖安装，例如：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 例如：在虚拟环境中编译yt-dlp</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 更新工具包</span></span>
<span class="line"><span>python -m pip install --upgrade pip setuptools wheel</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 安装依赖</span></span>
<span class="line"><span>python3 devscripts/install_deps.py --include pyinstaller</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 构建</span></span>
<span class="line"><span>python3 devscripts/make_lazy_extractors.py</span></span>
<span class="line"><span>python3 -m bundle.pyinstaller</span></span></code></pre></div><ol start="3"><li>退出虚拟环境</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 退出虚拟环境</span></span>
<span class="line"><span>deactivate</span></span></code></pre></div><h1 id="下列是一个yt-dlp在虚拟环境中编译的一个脚本示例" tabindex="-1">下列是一个yt-dlp在虚拟环境中编译的一个脚本示例 <a class="header-anchor" href="#下列是一个yt-dlp在虚拟环境中编译的一个脚本示例" aria-label="Permalink to &quot;下列是一个yt-dlp在虚拟环境中编译的一个脚本示例&quot;">​</a></h1><p>build-yt-dlp.sh</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#!/usr/bin/env bash</span></span>
<span class="line"><span>set -euo pipefail</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;🚀 开始构建 yt-dlp（完全隔离的虚拟环境）&quot;</span></span>
<span class="line"><span>echo &quot;----------------------------------------&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># # === [1] 克隆最新源码 ===</span></span>
<span class="line"><span># if [ ! -d &quot;yt-dlp&quot; ]; then</span></span>
<span class="line"><span>#     echo &quot;🔽 克隆 yt-dlp 源码...&quot;</span></span>
<span class="line"><span>#     git clone https://github.com/yt-dlp/yt-dlp.git</span></span>
<span class="line"><span># else</span></span>
<span class="line"><span>#     echo &quot;♻️  更新 yt-dlp 源码...&quot;</span></span>
<span class="line"><span>#     cd yt-dlp</span></span>
<span class="line"><span>#     git fetch origin</span></span>
<span class="line"><span>#     git pull</span></span>
<span class="line"><span>#     cd ..</span></span>
<span class="line"><span># fi</span></span>
<span class="line"><span># cd yt-dlp</span></span>
<span class="line"><span># # 可选：切换到稳定 tag（建议与官方 Release 一致）</span></span>
<span class="line"><span># # git checkout 2025.10.07</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># === [2] 创建虚拟环境 ===</span></span>
<span class="line"><span>if [ -d &quot;venv&quot; ]; then</span></span>
<span class="line"><span>    echo &quot;⚠️  已存在 venv 环境，删除旧的...&quot;</span></span>
<span class="line"><span>    rm -rf venv</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;🧱 创建新的 Python 虚拟环境...&quot;</span></span>
<span class="line"><span>python3 -m venv venv</span></span>
<span class="line"><span>source venv/bin/activate</span></span>
<span class="line"><span></span></span>
<span class="line"><span># === [3] 升级基础工具 ===</span></span>
<span class="line"><span>echo &quot;⬆️  升级 pip、setuptools、wheel...&quot;</span></span>
<span class="line"><span>python -m pip install --upgrade pip setuptools wheel</span></span>
<span class="line"><span></span></span>
<span class="line"><span># === [4] 安装构建依赖 ===</span></span>
<span class="line"><span>echo &quot;📦 安装官方构建依赖（包括 pyinstaller）...&quot;</span></span>
<span class="line"><span>python devscripts/install_deps.py --include pyinstaller</span></span>
<span class="line"><span></span></span>
<span class="line"><span># === [5] 生成懒加载提取器 ===</span></span>
<span class="line"><span>echo &quot;🧩 生成 lazy extractors...&quot;</span></span>
<span class="line"><span>python devscripts/make_lazy_extractors.py</span></span>
<span class="line"><span></span></span>
<span class="line"><span># === [6] 打包 ===</span></span>
<span class="line"><span>echo &quot;🏗️ 使用官方 PyInstaller 脚本打包...&quot;</span></span>
<span class="line"><span>python -m bundle.pyinstaller</span></span>
<span class="line"><span></span></span>
<span class="line"><span># # 构建 arm64</span></span>
<span class="line"><span># arch -arm64 python -m bundle.pyinstaller</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># === [7] 输出结果 ===</span></span>
<span class="line"><span>echo &quot;✅ 构建完成！&quot;</span></span>
<span class="line"><span>echo &quot;👉 可执行文件路径: $(pwd)/dist/&quot;</span></span>
<span class="line"><span>ls -lh dist/</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># echo &quot;👉 可执行文件路径: $(pwd)/dist/yt-dlp&quot;</span></span>
<span class="line"><span># file dist/yt-dlp_macos</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># echo &quot;🧹 清理临时文件（可选）&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># === [8] 退出虚拟环境 ===</span></span>
<span class="line"><span>deactivate</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;✅✅✅ 构建完成！✅✅✅&quot;</span></span></code></pre></div>`,12)])])}const y=n(e,[["render",t]]);export{r as __pageData,y as default};
