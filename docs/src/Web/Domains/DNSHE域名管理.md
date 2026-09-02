## DNSHE免费域名申请
官网：https://dnshe.com \
注意： 
1. DNSHE中申请的域名如果进行过DNS解析那么这个域名将不能被删除，只有等到域名到期后才能自动删除。
2. 推荐使用cloudflare来托管域名。
3. 如果必须要使用ddns功能时不要申请ddns.ge类型的域名，推荐申请cc.cd类型的域名然后托管到cloudflare上再用ddns-go来动态管理DNS。
4. 如果申请的域名能托管到cloudflare上，则可以使用它的Tunnel功能，它比DDNS更好且自动支持HTTPS。所以如果需要DDNS功能时推荐使用Tunnel。

## 域名类型说明
cloudflare支持托管的域名类型：
* cc.cd：推荐申请这种类型的域名，因为他在Cloudflare Tunnel 中能完美的支持HTTPS，不管是几级域名。
* de5.net：它在Cloudflare Tunnel 中的HTTPS支持不是那么好，使用时浏览器会提示不安全，即使是HTTPS类型。
* ccwu.cc



cloudflare不支持托管的域名类型：
* l.cd
* ddns.ge
* bbroot.com
* bot.cd

## 已经申请的域名：
**1337470736@qq.com**：
* itunnel.cc.cd         ->   已经用于Cloudflare Tunnel 并且需要长期保存。
* bombcloud.cc.cd  ->    未来可能用于bomb云的域名。

**1352892108@qq.com**:
* ctscloud.de5.net
* bombcloud.de5.net
* rans.cc.cd
*  rans-ddns.cc.cd
*  注：这几个域名后期可以保存，即域名延期时可以包含他们。
*  
* 
*  rans-tunnel.de5.net
*  ctstunnel.cc.cd
*  ran-api.de5.net
*  rans-osx.ddns.ge
*  rans.ddns.ge
* 注：这几个域名后期不需要了，即域名延期操作时不要延期它们
*
*


