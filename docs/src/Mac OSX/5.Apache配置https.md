# Apache配置https


## Apache

Apache命令
```
 开启apache:          sudo apachectl start
 重启apache:          sudo apachectl restart
 关闭apache:          sudo apachectl stop
 apache配置检测是否正确 sudo apachectl configtest
```

### Apache开启https
SSL生成证书：
步骤1：生成密钥 
```
openssl genrsa 1024 > server.key
```

步骤2: 生成证书请求文件
```
openssl req -new -key server.key > server.csr
```
根据提示信息输入相关信息,生成crt文件
```
Country Name：									Zh
State or Province Name :						Sichuan
Locality Name：									Chengdu
Organization Name:								Ruirui Software
Organizational Unit Name:						Ruirui
Common Name (eg, fully qualified host name):	localhost
Email Address:									1352892108@qq.com
A challenge password:							asd123456789

```

步骤3: 生成证书
```
openssl req -x509 -days 7300 -key server.key -in server.csr > server.crt
```



配置Apache SSL
拷贝证书相关文件到配置路径
```
cp server.key server.crt /private/etc/apache2/
```
修改httpd.conf,以下三行取消注释
```
LoadModule ssl_module libexec/apache2/mod_ssl.so

Include /private/etc/apache2/extra/httpd-ssl.conf

LoadModule socache_shmcb_module libexec/apache2/mod_socache_shmcb.so
```

修改httpd-ssl.conf,找到VirtualHost，修改主机名（绿色区域），证书相关文件路径（蓝色区域）
```
<VirtualHost www.segmentfault.com.gao:443>
#   General setup for the virtual host
#  DocumentRoot "/Library/WebServer/Documents"
DocumentRoot "/Users/kimi/WebServer"
ServerName www.segmentfault.com.gao:443
ServerAdmin you@example.com
ErrorLog "/private/var/log/apache2/error_log"
TransferLog "/private/var/log/apache2/access_log"

SSLCertificateFile "/private/etc/apache2/ssl/server.crt"

SSLCertificateKeyFile "/private/etc/apache2/ssl/server.key"
```

## https证书生成
1.证书生成可以直接使用[KeyManager](https://keymanager.org)软件生成
2.使用 [KeyManager - FreeSSL.cn](https://blog.freessl.cn/tag/keymanager/)
3.[FreeSSL.cn](https://freessl.cn/)

