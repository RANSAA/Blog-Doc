import { defineConfig } from 'vitepress';


// 动态导入配置
//获取环境变量CONFIG_ENV的值，可选值： github， netlify。
//根据不同的值配置不同的参数，默认使用 netlify 配置。
const env = process.env.CONFIG_ENV || 'netlify'; 



//自定义的参数
//部署到站点时，使用的基础路径，当前值为：“/”
let InputBase = '/'
//部署到站点时，VITE_BASE_URL需要添加基础路径，当前值为：""
let InputViteBaseURL = ''


switch (env) {
  case 'github':
    InputBase = '/Blog-Doc/'         // GitHub Pages 一般需要仓库名作为 base
    InputViteBaseURL = '/Blog-Doc'  // Vite 资源路径
    break

  case 'netlify':
  default:
    InputBase = '/'
    InputViteBaseURL = ''
    break
}







// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "芮淼一线",
  titleTemplate: '芮淼一线的个人文档',
  cleanUrls: true,
  description: "个人文档博客",

  //部署到Netlify站点时，使用“/”作为基础路径
  base: InputBase ,  //默认：'/'
  vite: {
    define: {
      //'process.env.VITE_BASE_URL': JSON.stringify(''), //用于给形如_introduction-iOS.m格式文档中的链接添加BASE URL，-> 部署到Netlify站点时不需要添加基础路径
      'process.env.VITE_BASE_URL': JSON.stringify(InputViteBaseURL),
    },
  },

  head: [
    //['link', { rel: 'icon', href: '/favicon.ico' },
    // 将 favicon.ico 放在公共目录中，如果设置了 base，则使用 /base/favicon.ico
    //['link', { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' }],
    //['link', { rel: 'stylesheet', href: '/css/sidebar-left.css' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: InputViteBaseURL + '/img/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: InputViteBaseURL + "/css/sidebar-left.css" }],
  ],

  themeConfig: {
    logo: '/img/logo.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/RANSAA/Blog-Doc' }
    ],
    footer: {
      //message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-2025 芮淼一线'
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    lastUpdated: {
      text: '更新',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    outline: {
      label: '页面导航',
      level: [2,4]
    },
    markdown: {
      lineNumbers: true
    },



    //顶部导航条配置
    nav: [
      //{ text: 'Home', link: '/' },
      {
        text: 'iOS',
        items: [
          { 
            text: 'CocoaPods', link: '/src/iOS/_introduction-CocoaPods' 
          },
          {
            items: [
              { text: 'Objective-C', link: '/src/iOS/_introduction-Objective-C' },
            ]
          },
          {
            items: [
              { text: 'Swift', link: '/src/iOS/_introduction-Swift' },
            ]
          },
          {
            items: [
              { text: 'SwiftUI', link: '/src/iOS/_introduction-SwiftUI' },
            ]
          },
          {
            items: [
              { text: 'Mac Catalyst', link: '/src/iOS/_introduction-Mac Catalyst' },
            ]
          },
        ]
      },
      {
        text: 'Mac OSX',
        items: [
          { text: 'Mac OSX', link: '/src/Mac OSX/_introduction-Mac OSX' },
        ]
      },
      {
        text: 'Linux',
        items: [{ text: 'Linux', link: '/src/Linux/_introduction-Linux' }]
      },
      {
        text: '玩机',
        items: [{ text: '玩机', link: '/src/玩机/_introduction-玩机' }]
      },
      {
        text: 'Netfity',
        items: [{ text: 'Netfity', link: '/src/Netfity/_introduction-Netfity' }]
      }
    ],



    //侧边栏 - 左侧的sidebar侧边栏配置
    sidebar: {
      //多侧边栏： 默认侧边栏
      '/': [
        {
          text: '默认',
          collapsed: true,
          items: [
//            { text: 'SwiftUI：Toggle详解', link: '/src/iOS/SwiftUI/SwiftUI：Toggle详解' },
          ]
        }
      ],

      '/src/iOS/': [
        {
          text: 'CocoaPods',
          collapsed: true,
          link: '/src/iOS/_introduction-CocoaPods',
          items: [
            { text: 'Podfile常用三方库及其配置一：基础配置与说明', link: '/src/iOS/CocoaPods/Podfile常用三方库及其配置一：基础配置与说明' },
            { text: 'Podfile常用三方库及其配置二：Pod常用框架', link: '/src/iOS/CocoaPods/Podfile常用三方库及其配置二：Pod常用框架' },
            { text: 'Podfile常用三方库及其配置三：工具推荐', link: '/src/iOS/CocoaPods/Podfile常用三方库及其配置三：工具推荐' },
            { text: '发布个人开源框架到CocoaPods', link: '/src/iOS/CocoaPods/发布个人开源框架到CocoaPods' },
          ]
        },
        {
          text: 'Objective-C',
          collapsed: true,
          link: '/src/iOS/_introduction-Objective-C',
          items: [
            { text: 'iOS 动态获取TeamID(又名AppIdentifierPrefix)', link: '/src/iOS/Objective-C/iOS 动态获取TeamID(又名AppIdentifierPrefix)' },
          ]
        },
        {
          text: 'Swift',
          collapsed: true,
          link: '/src/iOS/_introduction-Swift',
          items: [
            { text: 'Swift 中文GBK乱码解决方案', link: '/src/iOS/Swift/Swift 中文GBK乱码解决方案' },
            { text: 'Swift 获取变量地址,自定义description,获取对象的属性,变量', link: '/src/iOS/Swift/Swift 获取变量地址,自定义description,获取对象的属性,变量' },
            { text: 'Swift 属性包装器：让不可变属性拥有一个默认值', link: '/src/iOS/Swift/Swift 属性包装器：让不可变属性拥有一个默认值' },
            { text: 'Swift 中不同Model的转换与合并', link: '/src/iOS/Swift/Swift 中不同Model的转换与合并' },
          ]
        },
        {
          text: 'SwiftUI',
          collapsed: true,
          link: '/src/iOS/_introduction-SwiftUI',
          items: [
            { text: 'SwiftUI：Toggle详解', link: '/src/iOS/SwiftUI/SwiftUI：Toggle详解' },
            { text: 'SwiftUI：自定义返回按钮', link: '/src/iOS/SwiftUI/SwiftUI：自定义返回按钮' },
            { text: 'SwiftUI：List详解', link: '/src/iOS/SwiftUI/SwiftUI：List详解' },
          ]
        },
        {
          text: 'Mac Catalyst',
          collapsed: true,
          link: '/src/iOS/_introduction-Mac Catalyst',
          items: [
            { text: 'MacCatalyst禁用全屏按钮(以及：关闭，最小化，全屏三个按钮相关操作)与macOS AppKit框架操作', link: '/src/iOS/Mac Catalyst/MacCatalyst禁用全屏按钮(以及：关闭，最小化，全屏三个按钮相关操作)与macOS AppKit框架操作' },
          ]
        },
      ],

      //多侧边栏：可能会根据页面路径显示不同的侧边栏
      '/src/Mac OSX/': [
        {
          text: 'Mac OSX',
          collapsed: false,
          link: '/src/Mac OSX/_introduction-Mac OSX',
          items: [
            { text: 'Shell执行sudo命令时，自动输入密码', link: '/src/Mac OSX/1.Shell执行sudo命令时，自动输入密码' },
            { text: 'Github创建SSH：Sourcetree自动创建与手动创建', link: '/src/Mac OSX/2.Github创建SSH：Sourcetree自动创建与手动创建' },
            { text: 'Github多帐号解决方案', link: '/src/Mac OSX/3.Github多帐号解决方案' },
            { text: 'Github通过Hosts文件解决访问问题', link: '/src/Mac OSX/4.Github通过Hosts文件解决访问问题' },
            { text: 'Apache配置https', link: '/src/Mac OSX/5.Apache配置https' },
            { text: '使用networksetup命令手动设置IP地址', link: '/src/Mac OSX/6.使用 networksetup命令手动设置IP地址' },
            { text: 'SideStore + LiveContainer 实现自签名与安装任意应用', link: '/src/Mac OSX/7.SideStore + LiveContainer 实现自签名与安装任意应用' },
          ]
        }
      ],
      '/src/Linux/': [
        {
          text: 'Linux',
          collapsed: false,
          link: '/src/Linux/_introduction-Linux',
          items: [
            { text: 'Linux查看版本信息', link: '/src/Linux/Linux查看版本信息' },
            { text: 'Ubuntu中文支持,及中文乱码问题', link: '/src/Linux/Ubuntu中文支持,及中文乱码问题' },
            { text: 'Ubuntu sources.list软件源配置', link: '/src/Linux/Ubuntu sources.list软件源配置' },
            { text: 'Ubuntu自定义程序图标', link: '/src/Linux/Ubuntu自定义程序图标' },
            { text: 'Ubuntu22.04安装PostgreSQL 16 教程', link: '/src/Linux/Ubuntu22.04安装PostgreSQL 16 教程' },
            { text: 'Swift安装教程', link: '/src/Linux/Swift安装教程' },
            { text: 'Shell 计算代码执行时长', link: '/src/Linux/Shell 计算代码执行时长' },
            { text: '利用shell脚本实现监控程序自动重启', link: '/src/Linux/利用shell脚本实现监控程序自动重启' },
          ]
        }
      ],
      '/src/玩机/': [
        {
          text: '玩机',
          collapsed: false,
          link: '/src/玩机/_introduction-玩机',
          items: [
            { text: 'Termux+macOS自定义端口记录', link: '/src/玩机/Termux+macOS自定义端口记录' },
            { text: 'Termux+Ubuntu+SSH+SFTP+Swift+Code-Server', link: '/src/玩机/Termux+Ubuntu+SSH+SFTP+Swift+Code-Server' },
            { text: 'Open-vm-tools工具的安装与使用', link: '/src/玩机/open-vm-tools工具的安装与使用' },
            { text: 'Anlinux-Resources Netlify 资源同步', link: '/src/玩机/Anlinux-Resources Netlify 资源同步' },
          ]
        }
      ],
      '/src/Netfity/': [
        {
          text: 'Netfity',
          collapsed: false,
          link: '/src/Netfity/_introduction-Netfity',
          items: [
            { text: 'Site-Font站点说明', link: '/src/Netfity/Site-Font站点说明' },
            { text: 'Site-Music站点说明', link: '/src/Netfity/Site-Music站点说明' },
            { text: 'Site-MV站点说明', link: '/src/Netfity/Site-MV站点说明' },
            { text: 'Site-Picture站点说明', link: '/src/Netfity/Site-Picture站点说明' },
            { text: 'Site-NovalSetApp站点说明', link: '/src/Netfity/Site-NovalSetApp站点说明' },
            { text: 'Site-AV站点说明', link: '/src/Netfity/Site-AV站点说明' }
          ]
        }
      ],
    }
//侧边栏-END    

  }

})
