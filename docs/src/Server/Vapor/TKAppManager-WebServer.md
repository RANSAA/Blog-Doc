## ⚠️警告⚠️
⚠️⚠️关于直接将构建好的文件直接从`.build`目录中使用`Ctrl+C`，`Ctrl+V`和`鼠标右键`选择复制到和.build目录不在同一分区的任何目录时， 
产生的副本会出现错误(无法运行，内容被修改)，这是因为Finder在夸卷复制文件时修改了文件内容造成的错误。 

✅✅如果直接使用`cp`或者`ditto`命令复制文件就不会出现这个错误。 \
✅✅所以在构建发布程序时需使用`cp`命令复制文件这样最安全。




## TKAppManager-WebServer
这是AppManager控制程序的后端服务**Swift**实现，用于替代LeanCloud,Bomb云的自定义实现。可以自定部署与控制。 


并且WebServer支持多种数据库，其中:
* **CTSServer-DBJS**：不使用任何数据库，直接采用JOSN文件的方式管理数据，并且支持加密。 - 任何平台都支持部署
* **CTSServer-SQLite**：使用SQLite数据库的方式来管理数据。 -  只要有设备上能安装SQLite的都支持部署。 Heroku平台就不支持。
* **CTSServer-PostgreSQL**：使用PostgreSQL数据库的方式来管理数据。 -  只要提供PostgreSQL的平台都能部署。
* **CTSServer-MySQL**：使用MySQL数据库的方式来管理数据。 -  只要提供MySQL的平台都能部署。





## WebServer依赖的Vapor
由于这是一个比较老的Vapor项目，并且使用的是**swift-tools-version:5.2**所有固定的vapor版本较低：
```
// 版本规则说明：
//           .exact("4.1.0") -> 指定版本  Ver == 4.1.0
//           from: "4.1.0"   -> 版本满足  4.1.0 <= Ver < 5.0.0
//           from: "4.0.0"   -> 版本满足  4.0.0 <= Ver < 5.0.0
//
//.package(url: "https://github.com/vapor/vapor.git", .exact("4.1.0")),
.package(url: "https://github.com/vapor/vapor.git", from: "4.1.0"),
```




## 编译与运行
这个项目是一个多Target项目，所以在编译，运行时就需要指定对应的*Target*或**Product**
其中的Target分别为：
```
//1.
CTSServer-DBJS
//2.
CTSServer-SQLite
//3.
CTSServer-PostgreSQL
//4.
CTSServer-MySQL
```

常规的单Target命令：
```
 swift run
 swift test
 swift build
 swift build -c release
 swift build -c release --show-bin-path
```

多Target命令:
```
 运行: swift run TargetName:
 swift run CTSServer-SQLite
 swift run CTSServer-PostgreSQL
 swift run CTSServer-MySQL
 swift run CTSServer-DBJS
```

测试：
```
swift test
```


构建命令：
使用`--product`或`--target`指定target名称。
区别：一个product可以包含多个target
```
 swift build --product CTSServer-SQLite
 swift build --product CTSServer-PostgreSQL
 swift build --product CTSServer-MySQL
 swift build --product CTSServer-DBJS
 或者  - ⚠️⚠️不能使用target构建，使用target表示构建这个target目标，而不是可执行程序
 swift build --target CTSServer-SQLite
 swift build --target CTSServer-PostgreSQL
 swift build --target CTSServer-MySQL
 swift build --target CTSServer-DBJS
```


发布命令:
发布时在构建命令后面追加`-c release`命令即可
```
 swift build --product CTSServer-SQLite -c release
 swift build --product CTSServer-PostgreSQL -c release
 swift build --product CTSServer-MySQL -c release
 swift build --product CTSServer-DBJS -c release
 或  - ⚠️⚠️不能使用target构建，使用target表示构建这个target目标，而不是可执行程序
 swift build --target CTSServer-SQLite -c release
 swift build --target CTSServer-PostgreSQL -c release
 swift build --target CTSServer-MySQL -c release
 swift build --target CTSServer-DBJS -c release
```

清整个构建缓存:
```
swift package clean
```

依赖变动后:
```
 swift package update
 swift package resolve
```

全量重编某个`release`产品:
```
swift package clean && swift build -c release --product CTSServer-SQLite
```

Vapor 启动参数：
```
 swift run CTSServer-SQLite serve --port 8080
 或
 swift run CTSServer-SQLite --env production
```




## 环境变量
本程序中有很多配置是并没有固定，而是通过环境变量来动态实现的；并且通过环境变量会使程序更灵活，更安全。
下面是一个带环境变量的swift run 运行示例:
```
killport=1 killname=1 online=1 hostname=0.0.0.0 port=8080 username=sayaDev  password=asd123456 swift run CTSServer-DBJS
```
直接运行程序时：
```
killport=1 killname=1 online=1 hostname=0.0.0.0 port=8080 username=sayaDev  password=asd123456 CTSServer-DBJS
```



✅环境变量规则说明✅
* **命名规则**：支持全大小写的方式，比如程序需要获取环境变量端口`port`的值，那么如：`port`，`PORT`形式的就是正确的，形如：`Port`样式的就是错误的命名。
* **变量值规则**：一般都是作为字符串类型处理，但是用作条件判断的值就会使用：`1`或`true`来表示真值，`0`或`flase`来表示假值。



✅支持的环境变量✅
* **killport**：值为1或true时，就会在程序启动时执行Kill.killPort终止程序，检测方式：所有符合port的绑定和使用的程序都会被终止。 注意：一般开发的时候需要使用。
* **killname**：值为1或true时，就会在程序启动时执行Kill.killProcess终止程序，检测方式：所有和当前进程名(全名称匹配)相同的程序都会被终止。 注意：一般开发的时候需要使用。
* **logger**：是否启用日志记录，1,true表示启用(默认)，0，false表示禁用。
* **online**：如果online=1，online=true 会启动保活任务，即定时向硬盘写入文件，请求外部网址数据。 注：形如heroku平台如果30分钟应用不活跃就会暂停服务，此时就需要配置online。
*
* **hostname**：当前vapor应用启动的绑定地址，如果该值不存在则会使用默认绑定地址。
* **port**：当前vapor应用启动的绑定端口，如果该值不存在则会使用默认绑定端口(8080)。
*
* **username**：请求API认证时需要的认证用户名自定义，如果不存在则会使用默认值。
* **password**：请求API认证时需要的认证密码自定义，如果不存在则会使用默认值。
*
* **heanders**：这不是直接设置在命令行的环境变量，而是在Resources/Private/env.headers.json 文件中的环境变量，如果要修改直接修改文件中的数据即可。
*






## 接口
#### API请求权限配置
```
X-CTSServer-App：CTSServer-Client
X-CTSServer-Secretkey：a85a214cb0c5eb47c648147f16e19ad84f576a6e
```
**位置**：这两个参数是位于header部分 

**说明**：所有请求是否需要这两个参数进行认证，是由`Resources/Private/env.headers.json`文件决定的。如果文件中的`X-CTSServer-App`或`X-CTSServer-Secretkey`
的变量名不存在，或者它的值为空就不会校验。比如：
   1. 如果X-CTSServer-App和X-CTSServer-Secretkey都存在并且值都不为空，那么API请求时header中传输的参数名与值都要与他们匹配才能校验成功。 - 默认
   2. 如果只有X-CTSServer-App存在且值不为空，那么API请求时header中只需要传输X-CTSServer-App及其值就能校验成功。
   3. 如果X-CTSServer-App与值存在，并且X-CTSServer-Secretkey也存在但是值为空，那么API请求时header中只需要传输X-CTSServer-App及其值就能校验成功。
   4. 如果X-CTSServer-App和X-CTSServer-Secretkey都不存在，那么API请求时就不需要检验


#### API请求用户认证配置
```
username：sayaDev
password：asd123456
```
**位置**：这两个参数是位于header部分 

**说明**：这两个用户认证参数与环境变量中的`username`，`password`有关，如果配置了环境变量则需要与环境变量的值匹配；如果没有配置则使用这个默认值




#### API接口
cts表的相关操作：
```
/**
 功能：新建
 方式：Post
 API：/v1/class/cts
 Body参数：{"k":"k","v":"v"}
 解释：
 1. {"k":"k","v":"v"} -> 新建数据时的Body参数，格式为JSON
 2. 实际新建数据逻辑：先根据k的值查询数据，如果查询到数据就不新建，没有则新建数据
 **/
```

```
/**
 功能：更新
 方式：Put
 API：/v1/class/cts/objectID
 Body参数：{"v":"v-value"}
 解释：
 1. objectID -> 需要更新记录的objectID动态值
 2. {"v":"v-value"} -> 更新数据时的Body参数，格式为JSON
 **/
```

```
/**
 功能：删除
 方式：Detele
 API：/v1/class/cts/objectID
 解释：
 1. objectID -> 需要删除记录的objectID动态值
 **/
```


```
/**
 功能：查询 - 查询全部数据
 方式：GET
 API：/v1/class/cts
 **/
```

```
/**
 功能：查询 - 根据条件查询指定数据
 方式：GET
 API：/v1/class/cts?where={"k":"k-value"}
 解释：
 1. where={"k":"k-value"} -> 为URL查询条件，表示查询数据库中字段名为k且值为"k-value"的所有记录
 **/
```



cts-v3文件部署相关：
```
/**
 功能：获取cts-v3文件
 方式：GGET/POST
 API：/v1/deploy/cts-v3
 **/
```

```
/**
 功能：上传cts-v3文件 - 支持json/urlencoded/multipart + 小文件的上传方式
 方式：POST
 API：/v1/deploy/upload/cts-v3
 Body参数：
 file：用于接收文件的字段名称，它的数据类型可以是String 和 File
 认证参数：
 headers["username"]
 headers["password"]
 **/
```

```
/**
 功能：通过stream流的方式接收任意上传文件   -   注：只有在DEBUG模式下启用
 方式：POST
 API：/v1/deploy/upload/stream
 Query参数：
 filename：URL中的参数，用于接收上传文件的文件名，如果该参数不存在则使用随机名称。
 认证参数：
 headers["username"]
 headers["password"]
 
 
 功能：使用stream流的方式接收上传的数据。 -> ⚠️⚠️现在不校验Content-Type了，直接将body中的数据写入到一个文件中了。
 说明：
 1. body数据请求方式必须为Content-Type: application/octet-stream （Paw中应该选择File类型）；即body中只能有上传文件的数据，该方法会将body中的数据都写入到一个文件中。
 2. 如果请求还需要其它参数，可以通过URL Query或者Header传送
 3. ⚠️一定要注意不是使用multipart/form-data的方式上传文件
 
 使用stream流的方式接收上传文件的优点：
 ✅ 支持大文件
 ✅ 内存只缓冲 chunk（NIO 内部），即应用不会出现高内存的情况
 ✅ 没有 multipart 解析成本
 */
```




数据备份：
```
/**
 功能：导出数据
 方式：Post/GET
 API：/v1/backup/export
 认证参数：
 headers["username"]
 headers["password"]
 **/
```


```
/**
 功能：导入数据
 方式：Post/GET
 API：/v1/backup/import
 认证参数：
 headers["username"]
 headers["password"]
 **/
```






## 关于cts-v3文件
cts-v3文件部署平台：
1. 当前应用部署平台
2. Gitee
3. Github
4. Github 镜像站点： `https://gh-proxy.com`，`https://gh-proxy.net`，`https://ghproxy.net`
5. Netlify




