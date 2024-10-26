# MacCatalyst禁用全屏按钮(以及：关闭，最小化，全屏三个按钮相关操作)与macOS AppKit框架操作


## 需求

1. 指定 MacCatalyst 窗口的最大值与最小值
2. 禁止左上角的全屏按钮(及其相关的 3 个按钮:关闭，最小化，全屏)的相关操作

## 思路

由于直接使用 iOS 开发而支持 MacCatalyst 使用的是 UIKit 实现界面的，UIKit 不能直接操作那 3 个按钮及其顶部编辑工具条(SwiftUI 未知)，所以这儿需要借助 AppKit 框架来实现上面的操作。
使用 AppKit 的具体实现思路:
在 iOS Target 中嵌入一个 Mac OS Bundle Target，来使用 AppKit。
具体实现:

1. 在已知的 iOS 项目中: File -> New -> Target -> macOS -> Bundle
2. 新建 macOS Bundle 取名为：MacBundle (名字任意)
3. 新建 MacApp 类，并将它加入在 MacBundle 中，然后在 MacApp 中操作 AppKit 以实现上面的需求
4. 在 iOS 的 SceneDelegate 中通过 Bunlde 加载 MacApp，即可实现上面需求。

## 参考

https://www.coder.work/article/7142258 \
https://www.5axxw.com/questions/content/vfnohi \
https://crunchybagel.com/disabling-the-mac-zoom-maximise-button-in-catalyst/

## 代码示例

## MacApp

```objective-c
//
//  MacApp.m
//  MacBundle
//
//  Created by kimi on 2023/5/9.
//

#import "MacApp.h"
#import <Foundation/Foundation.h>
#import <AppKit/AppKit.h>

typedef NS_ENUM(NSInteger,MacAppType){
    MacAppTypeMaxButtonDisable = 0,     //全屏按钮禁用
    MacAppTypeMaxButtonHidden,          //全屏按钮隐藏
    MacAppTypeMinButtonDisable,         //最小化按钮禁用
    MacAppTypeMinButtonHidden,          //最小化按钮隐藏
    MacAppTypeCloseButtonDisable,       //关闭按钮禁用
    MacAppTypeCloseButtonHidden,        //关闭按钮隐藏
};



@implementation MacApp

//MARK: - 切换全屏状态(即：原始大小与全屏之间负向切换)
+ (void)toggleFullScreen
{
    NSLog(@"MacBundle builtInPlugIns --> toggleFullScreen --> window:%@",NSApplication.sharedApplication.windows);
    NSWindow *window = [[self windows] firstObject];
    [window toggleFullScreen:nil];
}


//MARK: - 操作左上角的三个按钮(close,min,max)
+ (void)disableMaxButton
{
    [self disableButtonWith:MacAppTypeMaxButtonDisable];
}

+ (void)hiddenMaxButton
{
    [self disableButtonWith:MacAppTypeMaxButtonHidden];
}


+ (void)disableMinButton
{
    [self disableButtonWith:MacAppTypeMinButtonDisable];
}

+ (void)hiddenMinButton
{
    [self disableButtonWith:MacAppTypeMinButtonHidden];
}

+ (void)disableCloseButton
{
        [self disableButtonWith:MacAppTypeCloseButtonDisable];
}

+ (void)hiddenCloseButton
{
    [self disableButtonWith:MacAppTypeCloseButtonHidden];
}


//MARK: - 公共部分
+ (void)disableButtonWith:(MacAppType)type
{
    for (NSWindow *window in [self windows]) {
//        [window setCollectionBehavior:[self behavior]];
        NSButton *button = nil;
        switch(type){
            case MacAppTypeMaxButtonHidden:
            case MacAppTypeMaxButtonDisable:
            {
                button = [window standardWindowButton:NSWindowZoomButton];
                break;
            }
            case MacAppTypeMinButtonHidden:
            case MacAppTypeMinButtonDisable:
            {
                button = [window standardWindowButton:NSWindowMiniaturizeButton];
                break;
            }
            case MacAppTypeCloseButtonHidden:
            case MacAppTypeCloseButtonDisable:
            {
                button = [window standardWindowButton:NSWindowCloseButton];
                break;
            }
        }

        switch(type){
            case MacAppTypeMaxButtonHidden:
            case MacAppTypeMinButtonHidden:
            case MacAppTypeCloseButtonHidden:
                button.hidden = YES;
                break;

            case MacAppTypeMaxButtonDisable:
            case MacAppTypeMinButtonDisable:
            case MacAppTypeCloseButtonDisable:
                button.enabled = NO;
                break;
        }

    }
}

+ (NSArray *)windows
{
    NSArray *windows = NSApplication.sharedApplication.windows;
    return windows;
}

+ (NSWindowCollectionBehavior)behavior
{
    NSWindowCollectionBehavior behavior = NSWindowCollectionBehaviorFullScreenAuxiliary | NSWindowCollectionBehaviorFullScreenNone;
    return behavior;
}

@end

```

## SceneDelegate 加载

```objective-c
//通过加载MacOS Bunlde中的AppKit来修改MacCatalyst的左上角：关闭，最小化，全屏按钮的状态
- (void)loadMacBoundleWithMacCatalyst
{
#pragma clang diagnostic push
#pragma clang diagnostic ignored"-Warc-performSelector-leaks"
#if TARGET_OS_MACCATALYST

    NSString *path = [NSBundle.mainBundle.builtInPlugInsPath stringByAppendingPathComponent:@"MacBundle.bundle"];
    [[NSBundle bundleWithPath:path] load];
    id macApp = NSClassFromString(@"MacApp");
    NSLog(@"load MacBoundle:%@",macApp);

    //设置MacCatalyst窗口的最大与最小化的值
    [UIApplication.sharedApplication.connectedScenes.allObjects enumerateObjectsUsingBlock:^(UIScene * _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
        UIWindowScene *win = (UIWindowScene *)obj;
        win.sizeRestrictions.minimumSize = CGSizeMake(375, 648);
        win.sizeRestrictions.maximumSize = CGSizeMake(375, 648);
    }];

    //左上角三个按钮状态
    dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(0.5 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
        [macApp performSelector:NSSelectorFromString(@"disableMaxButton")];
        [macApp performSelector:NSSelectorFromString(@"disableMinButton")];
        [macApp performSelector:NSSelectorFromString(@"hiddenCloseButton")];
    });

    //全屏状态相互切换
    dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(2 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
        [macApp performSelector:NSSelectorFromString(@"toggleFullScreen")];
        dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(1.5 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
            [macApp performSelector:NSSelectorFromString(@"toggleFullScreen")];
        });
    });

#endif
#pragma clang diagnostic pop
}

- (void)scene:(UIScene *)scene willConnectToSession:(UISceneSession *)session options:(UISceneConnectionOptions *)connectionOptions {
  [self loadMacBoundleWithMacCatalyst];
}
```

让后在`scene:willConnectToSession:options:`方法中加载:`loadMacBoundleWithMacCatalyst`方法即可。
即可实现以上需求。

# 思考

在 MacCatalyst 中所有 AppKit 的操作都可以通过嵌入 macOS Bundle 来操作。
