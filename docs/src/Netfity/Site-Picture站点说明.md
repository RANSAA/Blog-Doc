# Site-Picture
用于存放我的图片的站点

# 说明：项目使用Netlify静态部署 

# 警告
    对于一些特殊字符不同的平台处理方式不一样，所以会出现看起来一样的字符，但是它们却是不一样的字符。
因为Mac平台的默认字符集为Unicode，在处理一些特殊字符时会自动追加对应的组合字符，Windows平台不会添加，这就某些字符看起来相同但实际上却是不同字符的原因。
    由于Netlify CLI在Mac和Windows平台下处理路径是有区别的，Mac上对某些特殊字符会添加对应的组合字符。
    所以：在Windows上使用Netlify CLI上传的项目访问资源路径时须使用带 「.win」的请求路径。在Mac上上传的项目访问资源路径时使用正常的访问接口即可。
    
    注意：这儿特指url路径中的字符
    
# 上传平台：Windows 
   如果整个项目很大，并且文件也很多，并且存储在NTFS分区上时，一般在Windows上面部署项目，因为黑苹果读取NTFS上的数据时容易出错。
  Windows：使用带「.win」的API资源访问路径
  Mac：使用不带「.win」的API资源访问路径


# 请求接口
请求路径： \
https://ranstar-picture.netlify.app/api/picture.json \
https://ranstar-picture.netlify.app/api/picture.full.json \
https://ranstar-picture.netlify.app/api/picture.win.json \
https://ranstar-picture.netlify.app/api/picture.full.win.json \
https://ranstar-picture.netlify.app/api/picture.group.json \
https://ranstar-picture.netlify.app/api/picture.group.full.json \
https://ranstar-picture.netlify.app/api/picture.group.win.json \
https://ranstar-picture.netlify.app/api/picture.group.full.win.json


# api
关于api接口资源的具体接口可以直接查看对应的资源文件即可

# CDN分发站点说明
请求接口与数据模式相同，只有域名和文件前缀不同

# Site-Picture-CDN1同步站点：
https://ranstar-picture-cdn1.netlify.app/api/cdn1-picture.json \
https://ranstar-picture-cdn1.netlify.app/api/cdn1-picture.full.json \
https://ranstar-picture-cdn1.netlify.app/api/cdn1-picture.win.json \
https://ranstar-picture-cdn1.netlify.app/api/cdn1-picture.full.win.json \
https://ranstar-picture-cdn1.netlify.app/api/cdn1-picture.group.json \
https://ranstar-picture-cdn1.netlify.app/api/cdn1-picture.group.full.json \
https://ranstar-picture-cdn1.netlify.app/api/cdn1-picture.group.win.json \
https://ranstar-picture-cdn1.netlify.app/api/cdn1-picture.group.full.win.json \


# Site-Picture
https://ranstar-picture.netlify.app

# Site-Picture-CDN1
https://ranstar-picture-cdn1.netlify.app



