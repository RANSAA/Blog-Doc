# Podfile常用三方库及其配置一：基础配置与说明


## 关联文章:
[Podfile常用三方库及其配置一：基础配置与说明](/src/iOS/CocoaPods/Podfile常用三方库及其配置一：基础配置与说明) \
[Podfile常用三方库及其配置二：Pod常用框架](/src/iOS/CocoaPods/Podfile常用三方库及其配置二：Pod常用框架) \
[Podfile常用三方库及其配置三：工具推荐](/src/iOS/CocoaPods/Podfile常用三方库及其配置三：工具推荐)


## 基础：
**忽略cocoapods中多个specs源引起的警告问题:**
```
install! 'cocoapods', :warn_for_unused_master_specs_repo => false
```
**推荐使用CDN trunk源：**
```
source 'https://cdn.cocoapods.org/'
```
**Podfile源配置**
```
#添加源方式，任选一，推荐使用CDN trunk源
## 1. cdn trunk源：通过CDN实时获取https://github.com/CocoaPods/Specs.git最新数据。
source 'https://cdn.cocoapods.org/'

## 2. Specs源：旧版CocoaPods不支持CDN，直接获取https://github.com/CocoaPods/Specs.git最新数据。
source 'https://github.com/CocoaPods/Specs.git'

## 3. 清华大学镜像源：注意有缓存，获取的数据不是最新的，但是解决了国内网络访问问题。
source 'https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git'
```


## Podfile 配置文件说明：
**build configurations (编译配置) 默认情况下，依赖项会被安装在所有target的build configrations中：**
```
//为了调试或者其他原因，他们可以在给定的configurations中启用
pod 'PonyDebugger', :configurations => ['Debug', 'Beta']
//或者，你可以至指定一个build configration
pod 'PonyDebugger', :configuration => ‘Debug'
```
**source： 默认被指定的依赖项会在全局级别的指定源中匹配搜索。可以为特依赖关系指定源**
```
//指定特定源中搜索，并忽略任何全局源*
pod 'PonyDebugger', :source => 'https://github.com/CocoaPods/Specs.git'
```
**Subspecs： 当使用依赖库名字引入依赖库时，也会默认安装依赖库中的所有子模块。**
```
//指定引用指定子模块
pod 'QueryKit/Attribute’
//指定一个子模块集合
pod 'QueryKit', :subspecs => ['Attribute', 'QuerySet']
```

## 依赖（Dependencies）

1. pod： 指明项目依赖，一个依赖是由一个pod名称和一个可选版本定义
>a. 如果不添加版本号，pod默认使用最新的 如：pod ’SSZipArchive’
>b. 如果项目需要一个指定的pod，需要添加版本号，如： pod ‘objection’, ‘0.9’
>c. 指定版本范围
>
>> .   = 0.1 版本是0.1
>> .   >0.1 任何大于0.1版本
>>· >=0.1 0.1和大于0.1版本
>>· <0.1 小于0.1版本
>>· <=0.1 0.1和小于0.1版本
>> · ~=0.1.2 0.1.2<= pod < 0.2 版本 ，安装这个范围内最新的版本

2. podspec : 引用仓库根目录的(from a pod spec in the root of a library repository)引用pod在指定节点或者分支
```
主分支：
pod 'AFNetworking', :git => 'https:github.com/gowalla/AFNetworking.git'

指定分支： :branch => 'dev'
pod 'AFNetworking', :git => 'https:github.com/a/AFNetworking.git', :branch => 'dev'

指定的tag:  :tag => '0.7.0'
pod 'AFNetworking', :git => 'https:github.com/b/AFNetworking.git', :tag => '0.7.0'

指定的节点： :commit => '082f8319af'
pod 'AFNetworking', :git => 'https:github.com/c/AFNetworking.git', :commit =>  ‘082f8319af'
```
3. 添加本地框架
```
添加本地框架  path后面跟本地框架的详细路径
pod 'TKPermissionKit' , :path => ".. /"
```
4. abstract_target :定义一个抽象的target，为了方便target目标依赖继承。 这个target是没有被定义在xcode中的。 例子：
```
a.定义一个抽象target
 abstract_target 'Networking' do     
     pod ‘AlamoFire'
     target 'Networking App 1’
     target 'Networking App 2’
 end
b. 定义一个包含多个target的抽象target
# 注意：这是个抽象的target工程中并没有这个target.引入ShowsKit 
 abstract_target 'Shows' do 
     pod 'ShowsKit’ 
     # ShowsiOS target会引入ShowWebAuth库以及继承自Shows的ShowsKit库 
     target 'ShowsiOS' do 
         pod 'ShowWebAuth’ 
     end
     # ShowsTV target会引入ShowTVAuth库以及继承自Shows的ShowsKit库 
     target 'ShowsTV’ do
         pod ‘ShowTVAuth'
     end 
     # ShowsTests target引入了Specta和Expecta库，并且指明继承Shows，所以也会引入ShowsKit
     target 'ShowsTests’ do
         inherit! :search_paths 
         pod 'Specta’ 
         pod 'Expecta’ 
     end 
end
```
5. script_phase 使用这个命令给target添加shell脚本
```
target ‘A’ do
    script_phase :name => 'HelloWorldScript', :script => 'echo "Hello World”'
    script_phase :name => 'HelloWorldScript', :script => 'puts "Hello World"', :shell_path => '/usr/bin/ruby'
end
```
6. abstract! 指定当前target是抽象target
```
target ‘A’ do
    abstract!
end
```
7. inherit! 设置当前target的继承关系
```
target 'App’ do
    target ‘A’ do
        #这个target 继承 父级所有行为
        inherit! :complete  
    end
    target ‘B’ do
        #这个target 不继承 父级所有行为
        inherit! :none 
    end
    target ‘C’ do
        #target 仅继承 父级的搜索路劲
        inherit! :search_paths 
    end
end
```



















