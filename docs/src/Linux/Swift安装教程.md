# Swift安装教程




1. 下载，安装环境，解压
参考： https://www.swift.org/install/linux/#installation-via-docker


2. 创建软连接，支持快速切换swift版本，命令示例：
```
sudo ln -s /opt/swift/swift-5.7.3/usr/ /opt/swift/current/
```



**注意**:需要切换swift版本时直接创建swift-xx的软连接



3. 添加环境变量
打开 .bashrc 文件添加下列命令：
```
export PATH=/opt/swift/current/usr/bin:"${PATH}"
```
	

	
