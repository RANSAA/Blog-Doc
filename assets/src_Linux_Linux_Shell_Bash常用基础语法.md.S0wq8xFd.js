import{_ as n,c as a,o as p,ag as l}from"./chunks/framework.Bee44SUS.js";const h=JSON.parse('{"title":"Shell/Bash常用基础语法","description":"","frontmatter":{},"headers":[],"relativePath":"src/Linux/Linux/Shell:Bash常用基础语法.md","filePath":"src/Linux/Linux/Shell:Bash常用基础语法.md","lastUpdated":1786698688000}'),e={name:"src/Linux/Linux/Shell:Bash常用基础语法.md"};function i(t,s,c,o,u,r){return p(),a("div",null,[...s[0]||(s[0]=[l(`<h1 id="shell-bash常用基础语法" tabindex="-1">Shell/Bash常用基础语法 <a class="header-anchor" href="#shell-bash常用基础语法" aria-label="Permalink to &quot;Shell/Bash常用基础语法&quot;">​</a></h1><h2 id="常用符号解释" tabindex="-1">常用符号解释 <a class="header-anchor" href="#常用符号解释" aria-label="Permalink to &quot;常用符号解释&quot;">​</a></h2><ul><li><code>-z &quot;$2&quot;</code>：检查 $2是否为空。 --&gt; 字符串长度为0（空），例：[[ -z &quot;$var&quot; ]]</li><li><code>-n &quot;$2&quot;</code>：检查 $2是否不为空。 --&gt; 字符串长度不为0（非空），例：[[ -n &quot;$var&quot; ]]</li><li><code>! -z &quot;$2&quot;</code>：检查 $2是否不为空，同 -n。</li><li><code>string或 &quot;$string&quot;</code>：字符串非空时为真，例：[[ &quot;$var&quot; ]]</li><li><code>&quot;$2&quot; =~ ^-</code>：检查 $2是否以 - 开头</li></ul><h2 id="常用的判断" tabindex="-1">常用的判断 <a class="header-anchor" href="#常用的判断" aria-label="Permalink to &quot;常用的判断&quot;">​</a></h2><ul><li>判断一个变量是否是<code>整数(包含负数)</code>:</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>if [[ &quot;$argSize&quot; =~ ^-?[0-9]+$ ]]; then</span></span>
<span class="line"><span>    echo &quot;$argSize 是整数&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    echo &quot;$argSize 不是整数&quot;</span></span>
<span class="line"><span>fi</span></span></code></pre></div><h2 id="常用方法" tabindex="-1">常用方法 <a class="header-anchor" href="#常用方法" aria-label="Permalink to &quot;常用方法&quot;">​</a></h2><ul><li>去除变量的首尾空格：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 去除首尾空格</span></span>
<span class="line"><span># 使用：arg=$(trim &quot;$arg&quot;)</span></span>
<span class="line"><span>trim(){</span></span>
<span class="line"><span>    # 使用sed去除首尾空格和制表符</span></span>
<span class="line"><span>    echo &quot;$1&quot; | sed &#39;s/^[[:space:]]*//;s/[[:space:]]*$//&#39;</span></span>
<span class="line"><span>    # 或者使用变量替换（bash 4.0+）</span></span>
<span class="line"><span>    # local var=&quot;\${1}&quot;</span></span>
<span class="line"><span>    # var=&quot;\${var#&quot;\${var%%[![:space:]]*}&quot;}&quot;</span></span>
<span class="line"><span>    # var=&quot;\${var%&quot;\${var##*[![:space:]]}&quot;}&quot;</span></span>
<span class="line"><span>    # echo -n &quot;$var&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="命令参数解析" tabindex="-1">命令参数解析 <a class="header-anchor" href="#命令参数解析" aria-label="Permalink to &quot;命令参数解析&quot;">​</a></h2><p>可解析命令形如下:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//格式1 - 短选项</span></span>
<span class="line"><span>./script.sh -u https://Baidu.com -n filename -s 256</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//格式2 - 长选项</span></span>
<span class="line"><span>./script.sh --url  https://Baidu.com --name filename --size 256</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//格式3 - 最后一个参数为非选参数项</span></span>
<span class="line"><span>./script.sh -n filename -s 256  https://Baidu.com</span></span></code></pre></div><p>具体解析参数的方法如下:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## ----------------------------------------解析参数----------------------------------------</span></span>
<span class="line"><span>argUrl=&quot;&quot;</span></span>
<span class="line"><span>argName=&quot;&quot;</span></span>
<span class="line"><span>argSize=&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># 统一错误处理</span></span>
<span class="line"><span>error_exit() {</span></span>
<span class="line"><span>    echo &quot;参数错误：$1&quot; &gt;&amp;2</span></span>
<span class="line"><span>    exit 1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>help_msg(){</span></span>
<span class="line"><span>echo &quot;用法:</span></span>
<span class="line"><span>$0 -u &lt;URL&gt; [-n &lt;name&gt;] &lt;argName&gt; [-s &lt;size&gt;] &lt;argSize&gt; [-v]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-u|--url        : 图集地址</span></span>
<span class="line"><span>-n|--name       : 图集指定的名称，可选</span></span>
<span class="line"><span>-s|--size       : 图集的图片数量，可选</span></span>
<span class="line"><span>-v|--verbose    : 打印参数信息</span></span>
<span class="line"><span>-h|--help       : 帮助</span></span>
<span class="line"><span>&quot;</span></span>
<span class="line"><span>exit 0</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>verbose_msg(){</span></span>
<span class="line"><span>echo &quot;=================参数详情=================</span></span>
<span class="line"><span>url:  [$argUrl]</span></span>
<span class="line"><span>name: $argName</span></span>
<span class="line"><span>size: $argSize</span></span>
<span class="line"><span>=================参数详情=================</span></span>
<span class="line"><span>&quot;</span></span>
<span class="line"><span>exit 0</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 保存原始参数</span></span>
<span class="line"><span>## 注意：下面解析参数方法操作后$@的值将为空，因为shift操作会删除参数，也可以使用其它的方法解析参数（这儿不实现了）</span></span>
<span class="line"><span>original_args=(&quot;$@&quot;)</span></span>
<span class="line"><span>original_value=&quot;$@&quot;</span></span>
<span class="line"><span># echo &quot;original_args:\${original_args[@]}&quot;</span></span>
<span class="line"><span># echo &quot;original_value@:$original_value&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># 解析所有参数</span></span>
<span class="line"><span># -z &quot;$2&quot;：检查 $2是否为空</span></span>
<span class="line"><span># &quot;$2&quot; =~ ^-：检查 $2是否以 - 开头</span></span>
<span class="line"><span>while [ $# -gt 0 ]; do</span></span>
<span class="line"><span>    case &quot;$1&quot; in</span></span>
<span class="line"><span>        -u|--url)</span></span>
<span class="line"><span>            # 检查是否提供了参数值，或者是否以 - 开头（表示下一个选项）</span></span>
<span class="line"><span>            # if [[ -z &quot;$2&quot; ]]; then</span></span>
<span class="line"><span>            if [[ -z &quot;$2&quot; || &quot;$2&quot; =~ ^- ]]; then</span></span>
<span class="line"><span>                # echo &quot;参数错误：选项 -n/--name 需要参数值&quot;</span></span>
<span class="line"><span>                error_exit &quot;选项 -u/--url 需要参数值&quot;</span></span>
<span class="line"><span>            fi</span></span>
<span class="line"><span>            argUrl=&quot;$2&quot;</span></span>
<span class="line"><span>            shift 2</span></span>
<span class="line"><span>            ;;</span></span>
<span class="line"><span>        -n|--name)            </span></span>
<span class="line"><span>            if [[ -z &quot;$2&quot; || &quot;$2&quot; =~ ^- ]]; then</span></span>
<span class="line"><span>                error_exit &quot;选项 -n/--name 需要参数值&quot;</span></span>
<span class="line"><span>            fi</span></span>
<span class="line"><span>            argName=&quot;$2&quot;</span></span>
<span class="line"><span>            shift 2</span></span>
<span class="line"><span>            ;;</span></span>
<span class="line"><span>        -s|--size)</span></span>
<span class="line"><span>            if [[ -z &quot;$2&quot; ]]; then</span></span>
<span class="line"><span>                error_exit &quot;选项 -s/--size 需要参数值&quot;</span></span>
<span class="line"><span>            fi</span></span>
<span class="line"><span>            if [[ $2 =~ ^-?[0-9]+$ ]]; then</span></span>
<span class="line"><span>                argSize=&quot;$2&quot;</span></span>
<span class="line"><span>            else</span></span>
<span class="line"><span>                error_exit &quot;选项 -s/--size 的值必须是数字&quot;</span></span>
<span class="line"><span>            fi</span></span>
<span class="line"><span>            shift 2</span></span>
<span class="line"><span>            ;;</span></span>
<span class="line"><span>        -v|--verbose)</span></span>
<span class="line"><span>            verbose_msg</span></span>
<span class="line"><span>            shift</span></span>
<span class="line"><span>            ;;</span></span>
<span class="line"><span>        -h|--help)</span></span>
<span class="line"><span>            help_msg</span></span>
<span class="line"><span>            shift</span></span>
<span class="line"><span>            ;;</span></span>
<span class="line"><span>        -*)</span></span>
<span class="line"><span>            # 非选项参数（位置参数）以-开头</span></span>
<span class="line"><span>            error_exit &quot;未知选项 $1&quot;</span></span>
<span class="line"><span>            exit 1</span></span>
<span class="line"><span>            ;;</span></span>
<span class="line"><span>        *)</span></span>
<span class="line"><span>            # 非选项参数（位置参数）</span></span>
<span class="line"><span>            error_exit &quot;未知选项 $1&quot;</span></span>
<span class="line"><span>            exit 1</span></span>
<span class="line"><span>            ;;</span></span>
<span class="line"><span>    esac</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># 去除参数首尾空格</span></span>
<span class="line"><span>argUrl=$(trim &quot;$argUrl&quot;)</span></span>
<span class="line"><span>argName=$(trim &quot;$argName&quot;)</span></span>
<span class="line"><span>argSize=$(trim &quot;$argSize&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># 验证必要参数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## -z 判断参数是否为空，参数-u|--url必须存在</span></span>
<span class="line"><span>if [[ -z &quot;$argUrl&quot; ]]; then</span></span>
<span class="line"><span>    error_exit &quot;必须指定-u|--url&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span># if [[ -z &quot;$argName&quot; ]]; then</span></span>
<span class="line"><span>#     error_exit &quot;必须指定-n|--name&quot;</span></span>
<span class="line"><span># fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## ----------------------------------------解析参数----------------------------------------</span></span></code></pre></div>`,14)])])}const d=n(e,[["render",i]]);export{h as __pageData,d as default};
