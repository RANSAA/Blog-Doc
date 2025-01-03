# 发布个人开源框架到CocoaPods

**主题**：如何让自己的项目支持CocoaPods,将自己的开源框架发布到CocoaPods上呢！\
**准备工作**：项目要托管到github上面，并且需要有Release版本，准备好之后就可以按下面的步骤进行操作！\
**PS**:一切与CDN trunk 相关的错误可以先在hosts文件中添加：\
199.232.4.133  raw.githubusercontent.com \
***准备工作：添加hosts文件***
```
# GitHub Start
#199.232.4.133 raw.githubusercontent.com
151.101.76.133 raw.githubusercontent.com
52.74.223.119 github.com
192.30.253.119 gist.github.com
54.169.195.247 api.github.com
185.199.111.153 assets-cdn.github.com
151.101.108.133 user-images.githubusercontent.com
151.101.76.133 gist.githubusercontent.com
151.101.76.133 cloud.githubusercontent.com
151.101.76.133 camo.githubusercontent.com
151.101.76.133 avatars0.githubusercontent.com
151.101.76.133 avatars1.githubusercontent.com
151.101.76.133 avatars2.githubusercontent.com
151.101.76.133 avatars3.githubusercontent.com
151.101.76.133 avatars4.githubusercontent.com
151.101.76.133 avatars5.githubusercontent.com
151.101.76.133 avatars6.githubusercontent.com
151.101.76.133 avatars7.githubusercontent.com
151.101.76.133 avatars8.githubusercontent.com
# GitHub End
```


## 第一步：创建podspec
>  进入项目工作目录  cd xx/xx，
使用：pod spec create name 
创建podspec文件。

## 第二步：编辑podspec（具体的可以查看Podspec语法）
```
name = "TKPermissionKit"

Pod::Spec.new do |spec|
  spec.name         = "TKPermissionKit"   #框架名称
  spec.version      = "1.0"         #版本
  spec.summary      = "权限管理工具"          #简短的描述
  spec.description  = <<-DESC
                      在这儿可以对框架进行详细描述
                   DESC                     #详细的描述
  spec.homepage     = "https://github.com/RANSAA/TKPermissionKit"   #github项目首页
  spec.license      = "MIT"     #开源协议方式
  spec.author       = { "sayaDev" => "1352892108@qq.com" }    #作者
  spec.platform     = :ios, "8.0"         #支持版本
  spec.source       = { :git => "https://github.com/RANSAA/TKPermissionKit.git", :tag => "#{spec.version}" }  #对应github资源与版本
  spec.source_files  =  "TKPermissionKit/*.{h,m}"   #源文件路径相关，可添加多个路径如："TKPermissionKit/*.{h,m}", "TKPermissionKit/xx/"
  spec.frameworks = "Foundation", "UIKit"   #引入的系统框架
  spec.requires_arc = true    #支持arc
  spec.source_files         = "#{name}/TKPermissionKit.h"  #如果有多层级资源，直接在后面追加以","分隔即可
  spec.public_header_files  = "#{name}/TKPermissionKit.h"
end
```

## 第三步：检验podspec文件是否正确
> 使用命令：
pod lib lint \
或(输出校验信息) \
pod lib lint --verbose \
pod lib lint --no-clean --verbose    \
或(添加了三方静态依赖库) \
pod lib lint --verbose --use-libraries \
> 如果出现CDN: trunk相关错误可以使用下面的命令：\
pod lib lint --no-clean --sources=https://github.com/CocoaPods/Specs.git \
或者： \
pod lib lint --no-clean --sources=https://cdn.cocoapods.org \
>命令说明：\
--verbose：显示检查编译的详细信息 \
--no-clean：不清除校验产生的数据 \
--allow-warnings ：验证时允许有警告 \
--use-libraries：依赖了三方静态framework库时添加


###### 注意：xcode12中会生成模拟器arm64架构(与真机arm64不同)，pod验证时会出现模拟器与真机arm64链接错误。
###### 解决方法：
方法一：添加跳过架构检测命令（不推荐）
> --skip-import-validation

方法二：直接配置podspec文件 (推荐) 
> 参数解释：移出模拟器构建中的arm64架构；\
> ```spec.xcconfig = {  'EXCLUDED_ARCHS[sdk=iphonesimulator*]' => 'arm64'}```
> 
> 项目优化：在SDK项目中设置Build Settings -> Excluded Architectures ->Release中选择Any iOS Simulator SDK -> 添加arm64。可以排除模拟器arm64位架构生成。
>

**附加：** 解决不同平台同种架构无法共存的最好的方法就是使用**XCFramework**

其它相关命令：
```
pod lib lint （从本地验证你的pod能否通过验证）
pod spec lint （从本地和远程验证你的pod能否通过验证）

pod lib lint --verbose （加--verbose可以显示详细的检测过程，出错时会显示详细的错误信息）
pod lib lint --no-clean --verbose  (--no-clean不清除验证时的编译项目信息)
pod lib lint --allow-warnings (允许警告，用来解决由于代码中存在警告导致不能通过校验的问题)
pod lib lint --help （查看所有可选参数，可选参数可以加多个）
pod lib lint --skip-import-validation （跳过引用其它framework时的架构检测）
```



## 第四步：获取令牌（注册Trunk）
>  使用：pod trunk register 1352892108@qq.com  sayaDev    
作用：获取令牌信息，验证邮箱中的链接，就可以向cocoaPods推送 \
PS: \
如果你的pod是由多人维护的，你也可以添加其他维护者: \
添加作者：pod trunk add-owner 框架名称  other@qq.com \
移出作者：pod trunk remove-owner 框架名称  other@qq.com 



## 第五步：检查当前邮箱有多少个框架（可跳过）
> 使用：pod trunk me \
如果在这一步出现了CDN: trunk相关错误，那么在host文件中添加： \
199.232.4.133 raw.githubusercontent.com



## 第六步：将框架推送到Cocoapods
> 使用：pod trunk push


## 第七步：更新pod
> 使用：pod setup


## 第八步：如果该框架无法更新到最新版
> 第一步：open ~/Library/Caches/CocoaPods \
> 第二步：将目录中所有与本框架有关的文件全部删除 \
> 第三步：先删除Podfile.lock文件，再pod install 或者 pod update 即可， 
>
> 或者直接更新***repo***： \
> 更新cocoapods：pod repo update     \
> 更新trunk ：pod repo update trunk


## 后续，如果推送成功之后搜索不到的解决方法：
> 先：rm ~/Library/Caches/CocoaPods/search_index.json \
在： pod search xxx \
PS：[https://blog.csdn.net/Felicity294250051/article/details/53924210](https://blog.csdn.net/Felicity294250051/article/details/53924210)


删除：将已经发布到Cocoapods的框架移出
> pod trunk delete TKPermissionKit 1.0


\
## 其它：\
CocoaPods使用指南:[https://guides.cocoapods.org/making/specs-and-specs-repo.html](https://guides.cocoapods.org/making/specs-and-specs-repo.html) \
Podspec Syntax Reference：[https://guides.cocoapods.org/syntax/podspec.html](https://guides.cocoapods.org/syntax/podspec.html) \
引用:[https://blog.csdn.net/sinat_31807529/article/details/80486589](https://blog.csdn.net/sinat_31807529/article/details/80486589) \
CocoaPods更新: 直接```sudo gem install cocoapods```


**注意**：如果在操作CocoaPods时，频繁出现CDN问题而无法解决时，可以使用CocoaPods-1.7.5即之前的版本


## 附加检测框架pod导入的文件结构
>先在你的框架项目中新建一个TKPermissionKitTest项目，和podspec文件处与同一级目录
>再在TKPermissionKitTest中创建Podfile文件，然后查看框架结构即可
>Podfile文件内容如下：
```
target 'TKPermissionKitTest' do
  # Comment the next line if you don't want to use dynamic frameworks
  use_frameworks!

  pod 'TKPermissionKit' , :path => "../"
end
```

