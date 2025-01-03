# Site-Font站点说明
用于管理字体的站点

# 说明：项目使用Netlify静态部署 

# 警告
    对于一些特殊字符不同的平台处理方式不一样，所以会出现看起来一样的字符，但是它们却是不一样的字符。
因为Mac平台的默认字符集为Unicode，在处理一些特殊字符时会自动追加对应的组合字符，Windows平台不会添加，这就某些字符看起来相同但实际上却是不同字符的原因。\
    由于Netlify CLI在Mac和Windows平台下处理路径是有区别的，Mac上对某些特殊字符会添加对应的组合字符。\
    所以：在Windows上使用Netlify CLI上传的项目访问资源路径时须使用带 「.win」的请求路径。在Mac上上传的项目访问资源路径时使用正常的访问接口即可。
    
     注意：这儿特指url路径中的字符
    
# 上传平台：Mac
    如果整个项目很大，并且文件也很多，并且存储在NTFS分区上时，一般在Windows上面部署项目，因为黑苹果读取NTFS上的数据时容易出错。
  Windows：使用带「.win」的API资源访问路径 \
  Mac：使用不带「.win」的API资源访问路径
   


# 请求接口
font请求地址：
https://ranstar-font.netlify.app/fonts.json

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
说明：字体文件访问路径：path+fileName；\
字体样式预览访问路径：path+preview。

# 站点字体文件命名规则
例如：LXGWWenKaiMono-Regular+霞鹜文楷等宽 Regular.ttf \
\
字体文件命名规则：文件名+文件后缀。其中文件名由 "+" 分割。\
"+" 之前的表示字体文件的fontName \
"+" 之后的表示该文件的描述 \
注意：\
    1. "+" 可以不存在，但是文件名必须与改字体文件的fontName相匹配。\
    2. 如果有预览图片，那么图片的名称必须与fontName保持一致(图片格式不限)