# Podfile常用三方库及其配置二：Pod常用框架



## 关联文章:
[Podfile常用三方库及其配置一：基础配置与说明](/src/iOS/CocoaPods/Podfile常用三方库及其配置一：基础配置与说明) \
[Podfile常用三方库及其配置二：Pod常用框架](/src/iOS/CocoaPods/Podfile常用三方库及其配置二：Pod常用框架) \
[Podfile常用三方库及其配置三：工具推荐](/src/iOS/CocoaPods/Podfile常用三方库及其配置三：工具推荐)


## 常用框架记录：

## 基础-TK
```
pod 'TKBaseKit'                       #通用基础库，使用时最好指定某个版本
    包含：
        pod 'Masonry'
        pod 'YYModel'
        pod 'MBProgressHUD'
        pod 'GTMBase64'           , '~> 1.0.1'
        pod 'MJRefresh'           , '~> 3.4'
        pod 'AFNetworking'        , '~> 4.0'


pod 'TKPermissionKit'                #权限管理   ，按需导入   
pod 'TKCrashNilSafe'                 #iOS防奔溃处理！
pod 'TKMultipleDelegate'            #iOS 多delegate，多代理，多委托实现方案
pod 'TKAnimationKit'                  #动画-Demo    ->  test
pod 'TKUIKit'                            #一些常用的UI控件与工具类集成    ->  test
pod 'IQKeyboardManager'           #键盘 OC
pod 'IQKeyboardManagerSwift'     #键盘 Swift
pod 'JKCategories'                     #一个有用的Objective-C类别的集合
pod 'SwifterSwift'                       #包含 500 多个原生 Swift 扩展的便捷集合，可提高您的工作效率。
pod 'SPPermissions                    #使用现成的界面询问权限。您可以检查状态权限以及之前是否已请求。支持 SwiftUI。 -> 需要按需加载
pod 'CTMediator'                       #组件化
```

## 响应式
```
pod 'RxSwift',                      #Swift响应式编程
pod 'RxCocoa', 
pod 'ReactiveCocoa'
pod 'Epoxy'                          #一套声明式 UI API，用于在 Swift 中构建 UIKit 应用程序
componentkit                        #一个受 React 启发的 iOS 视图框架。
```

## 布局，约束
```
pod 'Masonry'                                           #布局约束           推荐
pod 'SnapKit'                                            #布局约束   Swift   推荐
pod 'SDAutoLayout'                                    #布局约束
pod 'SnapKitExtend'                                   #对SnapKit的补充,同时补充九宫格布局方式，对Arry的设置和对等间距排列的布局等
pod 'CHTCollectionViewWaterfallLayout'        #瀑布流库
pod 'LXMWaterfallLayout'                            #瀑布流库       Swift
pod 'CollectionViewPagingLayout'                  #一个简单但高度可定制的 UICollectionViewLayout -> 支持SwiftUI  -> 推荐
UITableView-FDTemplateLayoutCell                #用于自动计算 UITableViewCell 高度的模板自动布局单元格  -> https://github.com/forkingdog/UITableView-FDTemplateLayoutCell
pod 'IBPCollectionViewCompositionalLayout'    #UICollectionView组合布局
pod 'LxGridView'    
```

## 网络，蓝牙
```
pod 'Alamofire'                               #Swift
pod 'Moya'                                     #用Swift 编写的网络抽象层。即对网络请求工具(如Alamofire)的抽象 ->  有多个版本
pod 'AFNetworking'                         #OC
pod 'YTKNetwork'                            #一个基于 AFNetworking 的高级请求工具。
AsyncHTTPClient                             #Swift 在Linux上开发时推荐使用该框架(URLSession在Linux下有严重的问题)  -> https://github.com/swift-server/async-http-client
pod 'Reachability'                            #替代Apple Reachability,  fix
pod 'SocketRocket'                          #WebSocket  OC      推荐
pod 'CocoaAsyncSocket'                  #WebSocket
pod 'Starscream'                            #WebSocket  Swift   推荐
pod 'SwiftWebSocket'                      #WebSocket  Swift
pod 'PusherSwift'                           #websocket  Swift
pod 'Socket.IO-Client-Swift'             # Socket.IO
pod 'ZYNetworkAccessibity'             #iOS网络权限的监控和判断
pod 'CocoaHTTPServer'                   #HTTP服务器
pod 'GCDWebServer'                       # HTTP server for iOS, macOS & tvOS
pod 'Telegraph'                              #适用于 iOS、tvOS 和 macOS 的安全 Web 服务器
pod 'XMPPFramework'                     #
pod 'MQTTClient'                             #MQTT Client Framework
pod 'BabyBluetooth'                         #一个非常容易使用的蓝牙库,适用于ios和os
pod 'BluetoothKit'                            #使用 BLE 在 iOS/OSX 设备之间轻松通信
```

## Model，Json，XML，HTML,Yaml,Markdown解析; JS交互
```
pod 'YYModel'                   #json OC    推荐
pod 'JSONModel'                 #json OC
pod 'MJExtension'               #json OC
pod 'ExCodable'                 #json Swift -> 推荐 -> 对Codable协议做了大量优化(作者说，自己还没有看)
pod 'Codextended'               #json Swift -> 可推荐 -> 对Codable做了一些简化
                                #就Swift Json to Model工具，系统自带的Codable协议就能完成常见的需求量，就是繁琐了一点；可推荐使用ExCodable
pod 'KakaJSON'                  #json Swift 推荐
pod 'SwiftyJSON',               #json Swift
pod 'HandyJSON',                #json Swift 可推荐 fix
pod 'CleanJSON'                 #json Swift NO USE
pod 'ObjectMapper'              #json swift NO USE
pod 'Ono'                       #xml,html OC
pod 'Kanna'                     #xml,html
pod 'SwiftSoup'                 #html,css,jquery,DOM
pod 'SWXMLHash'                 #xml
pod 'SwiftyXMLParser'           #xml
pod 'Yaml'                      #yaml -> 该库存在严重bug
pod 'Yams'                      #yaml Swift 推荐使用
scout                           #JSON、Plist、YAML、XML。Swift -> 可以 ->  并且提供二进制工具
scout                           #https://github.com/ABridoux/scout
yaml-to-swift                   #JSON、Plist、YAML、XML。 在线转Swift代码 -> https://jsonformatter.org/yaml-to-swift
https://yaml.org                #各种语言yaml解析库
CommonMarkAttributedString      #markdown
CommonMark                      #markdown https://github.com/SwiftDocOrg/CommonMark
MarkdownUI                      #markdown SwiftUI
pod 'WebViewJavascriptBridge'   #OC与js交互
KKQuickDraw                     #iOS实现HTML H5秒开、拦截请求替换资源、优化HTML加载速度
```

## 指示器，进度条，弹窗,菜单Menu
```
pod 'M13ProgressSuite'          #带动画的进度条
pod 'MBProgressHUD'             #OC
pod 'JGProgressHUD'             #OC
pod 'SVProgressHUD'             #OC
pod 'WSProgressHUD'             #OC
pod 'ProgressHUD'               #Swift  iOS 13.0+
pod 'KRProgressHUD'             #Swift
pod 'PKHUD'                     #Swift
pod 'ZKProgressHUD'             #Swift
pod 'APESuperHUD'               #Swift
pod 'VHUD'                      #Swift
pod 'SPAlert'                   #来自 Apple Music 和反馈的本机警报。包含 Done、Heart & Message 和其他预设。支持 SwiftUI。
pod 'KLCPopup'                  #一个自定义弹出窗口（old）
pod 'FFDropDownMenu'            #下拉菜单，你可以自定义菜单样式，自由性高。 
pod 'GKCover'                   #一行代码实现遮罩视图，让你的弹窗更easy
pod 'PanModal'                  #An elegant and highly customizable presentation API for constructing bottom sheet modals on iOS.
UIContextMenuInteraction        #Apple system 上下文菜单
UIMenuController                #Apple system 编辑菜单
UIActivityViewController        #Apple system 分享
```

## 数据，缓存，加密，解压，数据库，sqlite
```
#https://www.modb.pro/db/224238
pod 'FMDB'                      #有多个版本，按需选择 -> 关于加密操作：https://www.jianshu.com/p/36609966490e
pod 'LKDBHelper'                #FMDB的二次封装，支持ORM -> https://github.com/li6185377/LKDBHelper-SQLite-ORM
pod 'BGFMDB'
pod 'SQLite.swift'              #纯Swift SQLite数据库，使用比较简单
pod 'WCDB'                      #微信封装的sqlite库   OC      推荐使用微信的WCDB
pod 'WCDB.swift'                #微信封装的sqlite库   Swift
pod 'Realm'                     #Core Data与SQLite的替代品   OC
pod 'RealmSwift'                #Core Data与SQLite的替代品   Swift
pod "EJDB2"                     #一个json通用数据库框架 -> https://github.com/Softmotions/ejdb
SQLite.swift                    #基于SQLite3的数据库，同时支持liunx。 -> https://github.com/stephencelis/SQLite.swift
GRDB.swift                      #一个面向 SQLite 数据库的工具包，重点是应用开发  -> https://github.com/groue/GRDB.swift
    说明：
        1.WCDB和FMDB都是基于Sqlite；
        2.WCDB，Realm支持ORM，FMDB不支持ORM。
        3.WCDB与FMDB都有基于SQLCipher的加密功能。
        4.WCDB，Realm都有Swift版本
        5.推荐等级：WCDB > FMDB > Realm


pod 'YYCache'                   #缓存
pod 'CocoaSecurity'             #数据加密  OC
pod 'CryptoSwift'               #数据加密  Swift  推荐
pod 'SSZipArchive'              #压缩包 -> 压缩，解压   OC
pod 'Zip'                       #压缩包 -> 压缩，解压   Swift
pod 'DataCompression'           #Data -> 压缩，解压
pod 'GZIP'                      #Data -> 压缩，解压
pod 'GzipSwift'                 #Data -> 压缩，解压
GTMBase64                       #GTMBase64加解密 优化版本 -> https://github.com/yanglei3kyou/GTMBase64
pod 'UICKeyChainStore'          #Keychain   OC
pod 'KeychainAccess'            #Keychain   Swift
pod 'SSKeychain'                #Keychain   OC
pod 'TKKeychain'                #Keychain
```

## View
```
pod 'QMUIKit'                   #致力于提高项目 UI 开发效率的解决方案
pod 'SDWebImage'                #网络图片展示
pod 'SDWebImageFLPlugin'        #gif
pod 'Kingfisher'                #Swift   ->  一个轻量级的纯 Swift 库，用于从 Web 下载和缓存图像。
pod 'FLAnimatedImage'           #适用于 iOS 的高性能动画 GIF 引擎
pod 'SVGKit'                    #SVG图片加载
pod 'AlamofireImage'            #是Alamofire的图像组件库
pod 'MJRefresh'                 #刷新控件
pod 'KafkaRefresh'              #内置多种动画、可自定义和灵活的iOS下拉刷新框架

pod 'SDCycleScrollView'         #Banner轮播       OC
pod 'FSPagerView'               #Banner轮播       Swift
pod 'iCarousel'                 #高度可定制的3D轮播图
pod 'GKCycleScrollView'         #Banner轮播

pod 'JXCategoryView'            #分段选择器 OC   ->  还有多种样式，具体需要查看作者首页
pod 'JXSegmentedView'           #分段选择器 Swift
pod 'JXPagingView/Pager'        #联动-多页面嵌套   OC
pod 'JXPagingView/Paging'       #联动-多页面嵌套   Swift
pod 'JXBottomSheetView'         #UITableView向上拖动嵌套
pod 'SGPagingView'              #分段，联动
pod 'GKPageScrollView'          #分段，联动，类似微博、抖音、网易云等个人详情页滑动嵌套效果
pod 'Tabman'                    #一个功能强大的分页视图控制器，带交互式指示器栏
pod 'GSKStretchyHeaderView'     #一个简单的Header下拉放大
pod 'ParallaxHeader'            #Header下拉放大

pod 'GKNavigationBarViewController'     #iOS自定义导航栏-导航栏联动
pod 'GKNavigationBar'                   #iOS自定义导航栏-导航栏联动
pod 'WRNavigationBar'                   #一行代码设置状态栏、导航栏按钮、标题、颜色、透明度，移动等    ->   不错
pod 'HBDNavigationBar'                  #

pod 'PYSearch'                  #搜索控制器
pod 'SGAdvertScrollView'        #文字广告轮播，跑马灯
pod 'JXMarqueeView'             #跑马灯
pod 'FXBlurView'                #模糊处理



StarRate                        #星星评分控件 -> https://github.com/chenjie1219/StarRate

pod 'DropDown'                  #适用于 iOS 的“材质设计”下拉列表
GHDropMenu                      #仿京东/美团电商筛选菜单  -> https://github.com/shabake/GHDropMenuDemo

pod 'LTMorphingLabel'           #可变形、动态的UILabel。  OC、Swift、SwiftUI

pod 'UITextView-WZB'            #一个强大的UITextView分类，三大功能，让系统TextView自带placeholder属性、自动高度、支持输入图片
pod 'UITextView+Placeholder'    #placeholder for UITextView

pod 'TORoundedButton'           #高性能的圆角Button

pod 'TORoundedTableView'        #UITableView分组样式（即iOS新增的UITableViewStyleInsetGrouped样式）， 支持10.0+ 
pod 'TOInsetGroupedTableView'   #UITableView分组样式（即iOS新增的UITableViewStyleInsetGrouped样式）， 支持11.0+ 
pod 'UICountingLabel'           #为 UILabel 添加动画计数支持。
pod 'JKCountDownButton'         #IOS倒计时按钮,常常用于注册等发送验证码的时候进行倒计时操作
pod 'EFAutoScrollLabel'         #当文本长度超过标签宽度时可以滚动的标签。
RealtimeGradientText            #渐变文本       ->  https://github.com/kevinzhow/RealtimeGradientText
pod 'TOScrollBar'               #https://github.com/TimOliver/TOScrollBar
pod 'TOSplitViewController'     #https://github.com/TimOliver/TOSplitViewController

pod 'WMDragView'                #WMDragView致力于让任意View都可以自由悬浮拖曳（可拖动，悬浮按钮），类似于iOS的AssistiveTouch效果，微信浮窗。

VVeboTableViewDemo              #如何进行TableView流畅度优化的。  -> https://github.com/johnil/VVeboTableViewDemo

LGApplications                  #小demo集合:①ActionSheet; ②PickerView; ③ScrollView嵌套; ④渐变文字Label; ⑤tableView实现单选; -> https://github.com/MrLee767201403/LGApplications

```

## UITableView/UICollectionView
```
pod 'IGListKit'                 #一个数据驱动的 UICollectionView 框架，用于构建快速灵活的列表。 -> 推荐 -> ，适用于类似空间的复杂布局
pod 'DZNEmptyDataSet'          `#视图空白视图模板，一般不直接使用它，需要根据实情自定义
pod 'JXMovableCellTableView'    #长按即可移动cell的UITableView
JXBorderCellll                  #一个有边框的基类cell test -> https://github.com/pujiaxin33/JXBorderCellll
TableViewAnimationKit           #TableView Cell展示动画  -> 可以参考    ->  https://github.com/alanwangmodify/TableViewAnimationKit
pod 'TagListView'               #简单且高度可自定义的 iOS 标签列表视图 Swift  -> 可以  -> 可用于搜索历史展示
pod "TTGTagCollectionView"      #标签流显示控件，同时支持文字或自定义View -> 可以
pod "GSKStretchyHeaderView"     #UITableView 和 UICollectionView 的通用弹性标头
```

## TabBar，UITabBarController
```
pod 'ESTabBarController-swift'          #用于自定义UI、徽章和向选项卡项添加动画。支持lottie！ ->  Swift  -> 推荐    
pod 'SwipeableTabBarController'        #UITabBar控制器，其选项卡之间具有滑动交互功能。
pod 'MCTabBarController'                 #快速定制TabBar中间按钮凸起   -> 也有Swift版本    ->  https://github.com/Ccalary/MCTabBarController
pod 'AxcAE_TabBar'                         #多种样式的TabBar        ->  https://github.com/axclogo/AxcAE_TabBar
pod 'FancyTabBar'                           #可扩展且可自定义的选项卡栏
pod 'CYLTabBarController'                #一行代码实现 Lottie 动画TabBar，支持中间带+号的
pod 'Pageboy'                                 #简单、信息丰富的页面视图控制器   ->  Swift 

TabBar样式，自带红点角标，支持动态刷新。
pod 'QWTabBar'                              #自定义TabBar动画
pod 'BATabBarController'                 #一个带有独特动画的 TabBarController 供选择
IrregularTabbarCustom                    #定义不规则的tabbar   ->  https://github.com/singer1026/IrregularTabbarCustom
LLRiseTabBar-iOS                           #中间凸起的TabBar        ->  https://github.com/NoCodeNoWife/LLRiseTabBar-iOS
```

## 异步绘制View
```
pod 'Texture'                   #优秀的异步绘制库（旧：AsyncDisplayKit），一个完整的UI体系库
pod 'YYText'
pod 'BSText'                    #The Swift Version of YYText
pod 'MPITextKit'                #YYText的替代库
pod 'STULabel'                  #一个比UILabel和UITextView更快，的异步绘制库
pod 'Nimbus'                    #一个全新的UIVie框架
pod 'YYLable'
```

## 富文本，公式，KaTeX
```
pod 'DTCoreText'                #支持HTML，富文本显示
pod 'DTRichTextEditor'          #富文本编辑器
pod 'ZSSRichTextEditor'         #一个漂亮的 iOS 富文本所见即所得编辑器，带有语法突出显示的源视图
YYRichEditor                    #富文本编辑器实现   ->  https://github.com/WillkYang/YYRichEditor
pod 'AttributedString'          #基于Swift插值方式优雅的构建富文本, 支持点击长按事件, 支持不同类型过滤, 支持自定义视图等
pod 'iosMath'                   #KaTeX公式展示
pod 'MathEditor'                #KaTeX公式编辑器
pod 'iosMathEditor'             #KaTeX公式编辑器
MathJax-src                     #KaTeX公式展示，一个js框架   ->  https://github.com/mathjax/MathJax-src
KaTeX                           #js框架  ->  https://github.com/KaTeX/KaTeX
SPMathKit                       #aTeX公式展示 ->  https://github.com/CodingSha/SPMathKit
MathStringExpression            #计算数学表达(算术表达式)式框架，开发iOS计算器  -> https://github.com/Meterwhite/MathStringExpression
UXReader                        #适用于 iOS 的 UXReader PDF 框架 -> https://github.com/vfr/UXReader-iOS
pod 'SIXRichEditor'             #iOS 一个简洁 易用 支持html 的富文本编辑器
LMNote                          #原生 iOS 文本编辑器。 -> https://github.com/littleMeaning/LMNote
```

## 相册选择，图片,视频，浏览，裁剪，编辑
```
pod 'TZImagePickerController'       #照片选择器
pod 'TZImagePreviewController'      #对TZImagePickerController库的增强，支持用UIImage、NSURL预览照片和用NSURL预览视频。
pod 'HXPhotoPicker'                 #图片/视频选择,编辑器，滤镜  ->   ✅✅推荐  ->  有多个版本，到主页查看
pod 'HXPHPicker'                    #图片/视频选择器  Swift iOS 12.0+  (转移到HXPhotoPicker)
pod 'GKPhotoBrowser'                #iOS仿微信、今日头条等图片浏览器
pod 'KSPhotoBrowser'                #一个小而美的图片浏览器。
pod 'YBImageBrowser'                #图片浏览器-注意依耐
pod 'ZLPhotoBrowser'                #微信样式的图片选择器，支持预览/相册内拍照及录视频、拖拽/滑动选择，编辑图片/视频，支持多语言国际化等功能
pod 'SKPhotoBrowser'                #简单的照片浏览器/查看器
pod 'PYPhotoBrowser'                #简单的图片浏览器  ->  有多个版本，到主页查看
pod 'MWPhotoBrowser'                #一个简单的iOS照片和视频浏览器
SDPhotoBrowser                      #图片浏览器  ->  https://github.com/gsdios/SDPhotoBrowser
pod 'JPImageresizerView'            #专门裁剪图片、GIF、视频      ->  推荐
pod 'JPCrop'                        #图片裁剪       ->  推荐
pod 'RSKImageCropper'               #图片裁剪       -> 也不错
pod 'TOCropViewController'          #UImage裁剪视图控制器
pod 'RSKImageCropViewController'    #相册剪裁
pod 'VisionCamera'                  #Vision Camera  ->  https://github.com/mrousavy/react-native-vision-camera
pod 'GPUImage3'                     #图形处理
pod 'Harbeth'                       #基于Metal   -> 图像、视频、相机滤镜框架
pod 'OpencvQueen'                   #基于OpenCV  -> 图像、视频、相机滤镜框架
EnjoyCamera                         #含了50多种滤镜，可以选择图片和编辑图片，可以拍照和实时滤镜等   ->  https://github.com/QinminiOS/EnjoyCamera
pod 'ZWHTMLImage'                   #iOS快速实现对WEB网页、HTML的native图片预览功能。两行代码调用、同时支持UIWebView与WKWebView。支持懒加载（滚动加载）类型HTML网页
pod 'UIImageColors'                 #从图像中获取最主要和最突出的颜色
```

## 播放器，视频，音乐
```
pod 'AliyunPlayer_iOS'          #阿里云播放器 v3.x    ->  https://github.com/aliyunvideo/AliyunPlayer_iOS
pod 'AliPlayerSDK_iOS'          #阿里云播放器 v4.x+   ->  https://help.aliyun.com/document_detail/124708.html
    如果需要支持artc、artp或rts:
    pod 'AliPlayerSDK_iOS', '5.3.0'
    pod 'AliPlayerSDK_iOS_ARTP', '5.3.0'
    pod 'AliPlayerSDK_iOS_ARTC', '5.3.0'
    pod 'RtsSDK', '1.5.0'

pod 'KDEAudioPlayer'            #AudioPlayer 是 AVPlayer 的语法和功能糖。它播放您的音频文件（本地和远程）。
QPlayer                         #QPlayer是一款你不容错过的视频播放器  ->  https://github.com/dgynfi/QPlayer
GKWYMusic                       #iOS基于FreeStreamer的仿网易云音乐播放器 -> https://github.com/QuintGao/GKWYMusic
pod 'KTVHTTPCache'              #一个强大的媒体缓存框架。
pod 'WMPlayer'                  #WMPlayer-AVPlayer的封装，继承UIView，支持pods，手势快进、快退，全面适配全面屏，同时支持网络和本地视频的播放
pod 'SJVideoPlayer'             #短视频播放器 可接入 ijkplayer aliplayer alivodplayer plplayer       ->  可以（支持弹幕）
pod 'ZFPlayer'                  #支持定制任何播放器SDK和控制层
ijkplayer                       #bilibili开源的播放器 ->  https://github.com/bilibili/ijkplayer
其它：腾讯，七牛云的播放器也可以试试
```

## K线图，Chart
```
pod 'DGCharts'                  #一个优秀的Swift Chart库，PS:原名Charts，Apple 推出了一个名为Charts的SwiftUI Charts库
pod 'AAChartKit'                #Chart  OC
pod 'AAInfographics'            #Chart  Swift
pod 'PNChart'                   #Chart  OC
pod 'PNChartSwift'              #Chart  Swift
YYKline                         #Kline、Chart、Volume、Scroll、Scale、MACD、KDJ、K线图、分时图... -> https://github.com/WillkYang/YYKline
YYStock                         #k线图 （old）
pod 'KSChart'                   #k线图
```

## Crash崩溃，日志收集 - 可参考：编码工具与Debug
```
pod 'Bugly'                     #BUG收集
pod 'TKCrashNilSafe'            #iOS防奔溃处理！
pod 'AvoidCrash'                #防止APP崩溃
pod 'LSSafeProtector'           #强大的防止crash框架，不改变原代码支持KVO自释放，可以检测到dealloc时未释放的kvo，等19种crash
pod 'NSObjectSafe'
pod 'FLEX'                      #适用于 iOS 的应用内调试和探索工具
pod 'JXCaptain'                 #像美国队长一样威猛的应用调试工具箱！
pod 'DoraemonKit'           #一款面向泛前端产品研发全生命周期的效率平台。 ->  https://github.com/didi/DoKit
EarlGrey                        #iOS UI 自动化测试框架 -> https://github.com/google/EarlGrey
MTHawkeye                       #iOS 的分析/调试辅助工具。 （内存泄漏、OOM、ANR、Hard Stalling、网络、OpenGL、时间配置文件...）
```

## 支付、内购、In App Purchases
```
pod 'AlipaySDK-iOS'             #支付宝支付
pod 'WechatOpenSDK'             #微信支付
pod 'SwiftyStoreKit'            #In App Purchases -> 可以
pod 'IAPHelper'                 #In App Purchases
pod 'XYIAPKit'                  #In App Purchases
LQThirdParty                    #三方支付，登录，分享Demo -> https://github.com/LQi2009/LQThirdParty
pod 'FGIAPService'              #iap内购实现解决方案
pod 'DYFStoreKit'               #一个用于应用内购买的轻量级易用 iOS 库。(Objective-C)
TKPayKit                        #支付SDK，支持微信，支付宝 ->  https://github.com/RANSAA/TKPayKit
DemoStore                       # -> https://github.com/RANSAA/DemoStore
ApplePayDemo                    #ApplePay苹果支付demo -> https://github.com/YasinZhou/ApplePayDemo
DLInAppPurchase                 #苹果内购最详细教程      ->  https://github.com/Liqiankun/DLInAppPurchase
RevenueCat                      #RevenueCat 是一款功能强大、可靠且免费使用的应用内购买服务器，具有跨平台支持。我们的开源框架提供了 StoreKit 和 Google Play 结算的后端和包装器，使应用内购买和订阅的实施变得容易。
                                : https://github.com/RevenueCat/purchases-ios
PurchaseX                       #一个基于Swift的内购处理方案
```

## 地图，定位
```
pod 'BMKLocationKit'            #百度地图定位
```

## 推送，通知与消息显示
```
pod 'JPush'                              #极光推送
pod 'JDStatusBarNotification'            #高度可定制且功能丰富的通知显示在状态栏下方。iOS 13+ （有点像灵动岛）
pod 'SimulatorRemoteNotifications'       #用于将模拟远程通知发送到 iOS 模拟器的库
pod 'SwiftMessages'                      #一个非常灵活的 UIKit 和 SwiftUI 消息栏
```

## 人脸识别
```
FaceDemo                        #人脸识别   ->  https://github.com/RANSAA/FaceDemo
KJVisionDemo                    #人脸检测、人脸识别、目标跟踪     ->   https://github.com/yangKJ/KJVisionDemo
FaceComparison                  #人脸识别、人脸比对、人脸对齐、人脸特征，iPad项目  -> https://github.com/haidong-li/FaceComparison
```

## OCR、身份证、银行卡
```
BankCardID                      #依据银行卡号码，判断是什么银行的卡  ->   https://github.com/zhengwenming/BankCardID
JYBDAVCapture                   #OCR扫描身份证及银行卡   -> https://github.com/tiantianios/JYBDAVCapture
pod 'Tesseract-OCR-iOS'         #Tesseract OCR iOS
PaddleOCR                       #Python -> https://github.com/PaddlePaddle/PaddleOCR
tesseract                       #C++  ->  https://github.com/tesseract-ocr/tesseract
chineseocr                      #Python -> https://github.com/chineseocr/chineseocr
```

## 国际化
```
pod 'Localize'                  #本地化
```

## Font、字体
```
pod 'FontBlaster'               #以编程方式将自定义字体加载到您的 iOS、macOS 和 tvOS 应用程序中。
```

## 定时器，任务，Task
```
pod 'Schedule'                   #使用 Fluent API 在 Swift 中调度计时任务。（计时器的友好替代品）
pod 'SwiftyTimer'               #SwiftyTimer 允许您使用方便的闭包语法即时安排延迟和重复计时器。是时候摆脱 Objective-C 的废话了。
```

## AR
```
pod 'ARVideoKit'                #捕捉和录制 ARKit 视频、照片、实况照片和 GIF。
```

## 手势解锁，密码
```
pod 'TOPasscodeViewController'  #iOS 的模式密码输入和验证视图控制器
pod 'TQGestureLockView'         #手势密码，类似支付宝手势解锁
pod 'DYFAuthIDAndGestureLock'   #手势密码解锁和 TouchID (指纹) / FaceID(面容) 解锁，代码简洁高效。
pod 'JXPatternLock'             # 图形解锁／手势解锁 / 手势密码 / 图案密码 / 九宫格密码
YZAuthID                        #iOS TouchID / FaceID验证类库
```

## 选择器，城市选择器，日历选择器
```
pod 'JTCalendar'                #日历选择器
pod 'FSCalendar'                #日历选择器
pod 'HorizonCalendar'           #日历控件
pod 'STPickerView'              #一个多功能的选择器,有城市选择，日期选择和单数组源自定的功能（old）
pod 'EFColorPicker'             #颜色选择器
pod 'BRPickerView'              #iOS中常用的选择器组件，主要包括：日期选择器，城市，一,二,三级联动选择 
TKSimplePicker                  #日历，单列选择器 -> https://github.com/RANSAA/TKUIKit
```

## 二维码
```
pod 'EFQRCode'                              #二维码    Swift
pod 'LBXScan'                               #二维码、扫码、扫一扫、ZXing、ZBar、iOS系统AVFoundation扫码封装，扫码界面效果封装 -> 有多个版本
pod 'swiftScan'                             #二维码生成，识别   Swift
pod 'SGQRCode'                              #二维码生成，识别
pod 'QRCodeReader.swift',                   #Simple QRCode reader in Swift
pod 'QRCode'                                #A QRCode generator written in Swift.
pod 'QRCodeReaderViewController'            #二维码
pod 'QRCodeScan'                            #二维码/条形码扫描、生成/识别、仿微信、支付宝
pod 'MMScan'                                #轻量级的二维码以及条码扫描-> 使用iOS自带API开发
ZFScan                                      #二维码/条形码 扫描和生成  -> https://github.com/Zirkfied/ZFScan
```

## 设备信息相关
```
pod "Device"                                #轻量级工具，用于检测当前设备和用 swift 编写的屏幕尺寸
```

## 日期与时间，DATE
```
pod 'SwiftDate'                #Swift  ->  用于在 Swift 中解析、验证、操作、比较和显示日期、时间和时区的工具包。
```

## 扩展、效率，一致性，日志
```
pod 'SwifterSwift'                   #包含 500 多个原生 Swift 扩展的便捷集合，可提高您的工作效率。
pod "TypographyKit"                # iOS 上一致且易于访问的视觉样式，支持动态类型。
pod 'SwiftState'                     # Elegant state machine for Swift.
pod 'Swinject'                        #一个Swift 的轻量级依赖注入框架  ->   HOOK ?
pod 'CocoaLumberjack'           #一个快速简单，但功能强大且灵活的Mac和iOS日志记录框架
pod 'SwiftTrace'                     #跟踪 Swift 和 Objective-C 方法调用
pod 'SpeedySwift'                   #这是一个app开发的加速库
```

## 动画与转场
```
#动画与转场
pod 'NVActivityIndicatorView'       #一组很棒的加载动画  -> 很不错 -> Swift
pod 'lottie-ios'                    #优秀动画库 -> 直接加载动画设计资文件
pod 'Koloda'                        #卡片动画 -> 类似陌陌首页动画 -> 很不错 -> Swift
pod 'Spring'                        #一个在 Swift 中简化 iOS 动画的库。
pod 'Hero'                          #适用于 iOS 和 tvOS 的优雅过渡库
pod 'WXSTransition'                 #界面转场动画         ->  推荐
pod 'HHTransition'                  #主流转场动画，无侵入，API简单易用。        ->  推荐
pod 'RBBAnimation'                  #基于块的动画制作简单，带有简化功能和一个 CASpringAnimation 替换。
pod 'TABAnimated'                   #-> 很不错(TableView Cell加载动画)  -> 一个由iOS原生组件映射出骨架屏的框架，包含快速植入，低耦合，兼容复杂视图等特点，提供国内主流骨架屏动画的加载方案，同时支持上拉加载更多、自定制动画。
pod 'VCTransitionsLibrary'          #vc push, tabvc 转场动画
pod 'SXWaveAnimate'                 #水波纹,圆圈进度条与动画  ->  不错
pod 'PopupDialog'                   #弹窗动画                   
pod 'PopMenu'                       #PopMenu 是受新浪微博/网易应用启发的弹出动画菜单。
pod 'pop'                           #facebook开源的一套动画，有卡片动画效果，类似陌陌首页发现动画
pod 'IBAnimatable'                  #使用 IBAnimatable 在 Interface Builder 中为 App Store 就绪的应用程序设计和原型定制 UI、交互、导航、过渡和动画。
JXTransition                        #自定义转场动画  -> 可以  -> https://github.com/pujiaxin33/JXTransition
popping                             #动画集 ->https://github.com/schneiderandre/popping
ShareOfCoreAnimation                #一些基础动画 -> https://github.com/rjinxx/ShareOfCoreAnimation

LearniOSAnimations                  #系统学习iOS动画，有很多代码示例  -> 很不错      -> https://github.com/andyRon/LearniOSAnimations 
                                    #LearniOSAnimations动画详细讲解地址 ->  ttps://blog.devtang.com/2016/03/13/iOS-transition-guide/
IOSAnimationDemo                    #IOS动画总结     ->  https://github.com/yixiangboy/IOSAnimationDemo     

YSLDraggableCardContainer           #卡片动画，类似陌陌首页发现动画 -> https://github.com/ColinEberhardt/VCTransitionsLibrary
pod 'CYLTabBarController'           #一行代码实现 Lottie 动画TabBar，支持中间带+号的TabBar样式，自带红点角标，支持动态刷新。
RippleTableViewController           #为静止的图片添加水滴涟漪效果(水滴滴落荡开效果)   ->  https://github.com/appcornerit/RippleTableViewController
pod 'DBSphereTagCloud'              #3D效果,  自动旋转效果,  惯性滚动效果
pod 'DBSphereTagCloudSwift'         #3D效果,  自动旋转效果,  惯性滚动效果
pod 'BAFluidView'                   #UIView模拟运动中流体的2D动画 -> 水波纹效果
MLMProgressCollection               #进度，刻度，水波纹，统计   ->  https://github.com/MengLiMing/MLMProgressCollection
DaiNavigationTransition             #push转场动画 -> https://github.com/DaidoujiChen/DaiNavigationTransition
pod 'QWTabBar'                      #自定义TabBar动画
pod 'BATabBarController'            #一个带有独特动画的 TabBarController 供选择
pod 'FDFullscreenPopGesture'        #UINavigationController的类别，用于启用具有iOS7+系统样式的全屏弹出手势。 有点老可以用于参考。

TableViewAnimationKit               #TableView Cell展示动画  -> 可以参考    ->  https://github.com/alanwangmodify/TableViewAnimationKit
AWPolygonView                       #能力分布图是（如人物角色属相值图）  ->  https://github.com/alanwangmodify/AWPolygonView

DMHeartFlyAnimation                 #直播点赞动画 -> https://github.com/singer1026/DMHeartFlyAnimation
FloatingHearts                      #直播点赞动画（Swift原版） -> https://github.com/saidmarouf/FloatingHearts

AxcDrawPath_Tool                    #AxcAEKit系列拆分出来的一个贝塞尔曲线绘制工具，以科技风为主，动画为辅  ->  https://github.com/axclogo/AxcDrawPath_Tool

GKDYVideo                           #iOS仿抖音短视频，点赞，加载动画, ->  https://github.com/QuintGao/GKDYVideo

pod 'SkeletonView'                  #一个骨架显示动画View,用于在数据未加载时显示的结构动画   -> 推荐   ->   Swift

pod 'DynamicButton'               #Swift 中的另一个动画扁平按钮  -> 可以

pod 'Splitflap'                         #Splitflap 是一个简单易用的组件，用于呈现可变的字母数字文本，例如经常用作机场或火车站的公共交通时刻表或一些翻转时钟。

pod 'SwiftEntryKit'                   #SwiftEntryKit 是 iOS 的演示库。它可用于在您的 iOS 应用程序中轻松显示叠加层。 -> 一些显示动画
```

## SwiftUI
```
About-SwiftUI                        #收集 Apple 和其他公司发布的有关新框架 SwiftUI 的所有信息。  -> https://github.com/Juanpe/About-SwiftUI

SwiftUIX                               #对标准 SwiftUI 库的扩展和添加。  -> https://github.com/SwiftUIX/SwiftUIX
```

## 编码工具与Debug - 可参考： Crash崩溃，日志收集
```
pod 'LifetimeTracker'                #LifetimeTracker 可以在您开发应用程序时发现保留周期/内存问题，并立即向您显示这些问题，因此您可以更轻松地找到它们。
pod 'CocoaDebug'                    #iOS 调试工具

Sourcery                                 #Swift 语言的代码生成器，允许您自动生成样板代码。
SwiftLint                                 #SwiftLint 是一个用于强制检查 Swift 代码风格和规定的一个工具
pod 'KMCGeigerCounter'           #一个帧率计，当您的动画丢帧时，它会像盖革计数器一样发出咔哒声
SwiftGen                                 #适用于assets, storyboards, Localizable.strings的Swift代码生成器  ->   支持多种方式  ->   https://github.com/SwiftGen/SwiftGen
swift-coreml-diffusers                #Swift 应用程序演示 Core ML 稳定扩散   ->  https://github.com/huggingface/swift-coreml-diffusers
ShapeScript                             #适用于 macOS 的 ShapeScript 3D 建模应用程序的源代码   ->  https://github.com/nicklockwood/ShapeScript
```

## Core ML
```
Swift Core ML Diffusers         #演示 Core ML 稳定扩散的 Swift 应用程序  -> https://github.com/huggingface/swift-coreml-diffusers
```

## 精选iOS 生态系统列表。技术分享与Demo
```
QMKKXProduct                   #技术分享示例（很多）  -> 可以  -> 比如有一直需要的内购 -> https://github.com/HansenCCC/QMKKXProduct
Awesome                        #iOS精选列表，包括Objective-C和Swift项目。->  一个优秀的三方库精选列表  ->  https://github.com/chenxing640/Awesome
Some-Many-Books                #个人收藏书籍列表
AwemeDemoTransition            #iOS抖音个人作品页转场实现demo

awesome-ios                          #精选的 iOS 生态系统列表，包括 Objective-C 和 Swift 项目  ->  https://github.com/vsouza/awesome-ios
awesome-objective-c               #精选的 Objective-C 框架、库和软件列表。 ->  https://github.com/uhub/awesome-objective-c

awesome-ios-chart                  #精选的 iOS 图表库列表，包括 Objective-C 和 Swift  ->  https://github.com/ameizi/awesome-ios-chart

```