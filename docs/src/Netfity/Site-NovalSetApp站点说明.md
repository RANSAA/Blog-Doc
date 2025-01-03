# Site-NovalSetApp
用于存放叶子阅读的想相关资源文件，当然也可以存放其它文件。

# 说明：
项目使用Netlify静态部署 

# 警告
    对于一些特殊字符不同的平台处理方式不一样，所以会出现看起来一样的字符，但是它们却是不一样的字符。 
    因为Mac平台的默认字符集为Unicode，在处理一些特殊字符时会自动追加对应的组合字符，Windows平台不会添加，这就某些字符看起来相同但实际上却是不同字符的原因。 
    由于Netlify CLI在Mac和Windows平台下处理路径是有区别的，Mac上对某些特殊字符会添加对应的组合字符。 
    所以：在Windows上使用Netlify CLI上传的项目访问资源路径时须使用带 「.win」的请求路径。在Mac上上传的项目访问资源路径时使用正常的访问接口即可。
    
    注意：这儿特指url路径中的字符
    
# 上传平台：Mac
    如果整个项目很大，并且文件也很多，并且存储在NTFS分区上时，一般在Windows上面部署项目，因为黑苹果读取NTFS上的数据时容易出错。  
    Windows：使用带「.win」的API资源访问路径  
    Mac：使用不带「.win」的API资源访问路径
   


# 目录说明

api:   用于存放所有请求接口的路径 \
playlist： 用于存放用处测试的播放列表 \
leafReader： 用于存放叶子阅读相关资源文件

 # fonts
公共字体库请求路径:https://ranstar-font.netlify.app/fonts.json
格式：
```
{
    "path": "https://ranstar-font.netlify.app/",
    "mark": "说明：字体文件访问路径：path+fileName；\n字体样式预览访问路径：path+preview。\n字体文件命名规则：文件名+文件后缀。其中文件名由 \"+\" 分割。\n\"+\" 之前的表示字体文件的fontName\n\"+\" 之后的表示该文件的描述\n注意：\n    1. \"+\" 可以不存在，但是文件名必须与改字体文件的fontName相匹配。\n    2. 如果有预览图片，那么图片的名称必须与fontName保持一致(图片格式不限)",
    "list": [
        {
            "preview": "LXGWWenKaiMono-Regular.png",
            "fontName": "LXGWWenKaiMono-Regular",
            "fileName": "LXGWWenKaiMono-Regular+霞鹜文楷等宽 Regular.ttf",
            "mark": "霞鹜文楷等宽 Regular"
        }
    ],
    "example1": "https://ranstar-font.netlify.app/LXGWWenKaiMono-Regular.png",
    "example": "https://ranstar-font.netlify.app/LXGWWenKaiMono-Regular+霞鹜文楷等宽 Regular.ttf"
}
```
字段解释： \
path：字体文件路径 \
preview: 字体样式预览图 \
fileName：字体文件名称 \
fontName：对应的字体名称 \
mark：对字体的描述 \
字体资源访问路径：path+fileName \
示例: https://ranstar-font.netlify.app/LXGWWenKai-Regular.ttf \
字体样式预览访问路径：path+preview \
示例：https://ranstar-font.netlify.app/LXGWWenKai-Regular.png


# leafReader
说明： leafReader用于存放叶子阅读相关数据
### 子目录：meiriyiwen
图片地址：
https://noval.netlify.app/api/meiriyiwen-images.json
```
{
  "path": "https://noval.netlify.app/leafReader/meiriyiwen/images/",
  "mark": "资源访问路径：path+fileName",
  "example": "https://noval.netlify.app/leafReader/meiriyiwen/images/bg_45.jpg",
  "list": [
    {
      "fileName": "bg_45.jpg"
    },
    {
      "fileName": "bg_51.jpg"
    }
  ]
}
```
文章地址：
https://noval.netlify.app/api/meiriyiwen-articles.json
```
{
  "path": "https://noval.netlify.app/leafReader/meiriyiwen/articles/",
  "mark": "资源访问路径：path+fileName",
  "example": "https://noval.netlify.app/leafReader/meiriyiwen/articles/一天长一点----刘瑜.txt",
  "list": [
    {
      "fileName": "已经很好了----雪小禅.txt",
      "title":"已经很好了",
      "author":"雪小禅"
    }
  ]
}
```

声音地址：
https://noval.netlify.app/api/meiriyiwen-sounds.json
```
{
  "path": "https://noval.netlify.app/leafReader/meiriyiwen/sounds/",
  "mark": "说明：音频访问路径：path+fileName",
  "example": "https://noval.netlify.app/leafReader/meiriyiwen/sounds/别让自己努力得满腹委屈.mp3",
  "list": [
    {
      "fileName": "爱，有时候是一种错觉.mp3"
    },
    {
      "fileName": "别让自己努力得满腹委屈.mp3"
    }
  ]
}
```


# api 说明
关于api接口资源的具体接口可以直接查看对应的资源文件即可
1. 其中包含「.full」的文件表示json内部有一个可以直接访问资源路径的listfull属性
2. 其中包含「.group」的文件表示对文件目录进行了分组，但是只对第一级子目录进行分组
3. 其中包括「.win」的文件表示对应资源是在Windows上部署的项目使用，如果没有表示在Mac部署的的项目使用。


### 字体
字体路径：https://ranstar-font.netlify.app/fonts.json

### 每日一文
文章地址：https://noval.netlify.app/api/meiriyiwen-articles.json \
图片地址：https://noval.netlify.app/api/meiriyiwen-images.json \
声音地址：https://noval.netlify.app/api/meiriyiwen-sounds.json


### 我的图片
https://ranstar-picture.netlify.app/api/picture.json \
https://ranstar-picture.netlify.app/api/picture.full.json \
https://ranstar-picture.netlify.app/api/picture.win.json \
https://ranstar-picture.netlify.app/api/picture.full.win.json \
https://ranstar-picture.netlify.app/api/picture.group.json \
https://ranstar-picture.netlify.app/api/picture.group.full.json \
https://ranstar-picture.netlify.app/api/picture.group.win.json \
https://ranstar-picture.netlify.app/api/picture.group.full.win.json


### 我的图片CDN1
https://ranstar-picture-cdn1.netlify.app/api/cdn1-picture.json \
https://ranstar-picture-cdn1.netlify.app/api/cdn1-picture.full.json \
https://ranstar-picture-cdn1.netlify.app/api/cdn1-picture.win.json \
https://ranstar-picture-cdn1.netlify.app/api/cdn1-picture.full.win.json \
https://ranstar-picture-cdn1.netlify.app/api/cdn1-picture.group.json \
https://ranstar-picture-cdn1.netlify.app/api/cdn1-picture.group.full.json \
https://ranstar-picture-cdn1.netlify.app/api/cdn1-picture.group.win.json \
https://ranstar-picture-cdn1.netlify.app/api/cdn1-picture.group.full.win.json


### 我的音乐
https://ranstar-music.netlify.app/api/music.json \
https://ranstar-music.netlify.app/api/music.full.json \
https://ranstar-music.netlify.app/api/music.win.json \
https://ranstar-music.netlify.app/api/music.full.win.json \
https://ranstar-music.netlify.app/api/music.group.json \
https://ranstar-music.netlify.app/api/music.group.full.json \
https://ranstar-music.netlify.app/api/music.group.win.json \
https://ranstar-music.netlify.app/api/music.group.full.win.json


### 我的MV
https://ranstar-mv.netlify.app/api/mv.json \
https://ranstar-mv.netlify.app/api/mv.full.json \
https://ranstar-mv.netlify.app/api/mv.win.json \
https://ranstar-mv.netlify.app/api/mv.full.win.json \
https://ranstar-mv.netlify.app/api/mv.group.json \
https://ranstar-mv.netlify.app/api/mv.group.full.json \
https://ranstar-mv.netlify.app/api/mv.group.win.json \
https://ranstar-mv.netlify.app/api/mv.group.full.win.json


### R-18
https://ranstar-av.netlify.app/video-R18.json \
https://ranstar-av.netlify.app/video-R18.full.json \
https://ranstar-av.netlify.app/video-R18.win.json \
https://ranstar-av.netlify.app/video-R18.full.win.json



### playlist 测试播放列表
https://noval.netlify.app/playlist/meiriyiwen.playlist \
https://noval.netlify.app/playlist/meiriyiwen.win.playlist \
https://noval.netlify.app/playlist/music.playlist \
https://noval.netlify.app/playlist/music.win.playlist \
https://noval.netlify.app/playlist/mv.playlist \
https://noval.netlify.app/playlist/mv.win.playlist \
https://noval.netlify.app/playlist/video-R18.playlist \
https://noval.netlify.app/playlist/video-R18.win.playlist



