# Termux+Ubuntu+SSH+SFTP+Swift+Code-Server


## Android Termux 运行Linux系统
## 安装Termux
通过**F-Droid**或者**Github**下载安装Termux
### 更新Termux源
使用清华镜像源：https://mirrors.tuna.tsinghua.edu.cn/help/termux/
直接输入一下命令更新源：
```
sed -i 's@^\(deb.*stable main\)$@#\1\ndeb https://mirrors.tuna.tsinghua.edu.cn/termux/apt/termux-main stable main@' $PREFIX/etc/apt/sources.list
```
更新源:
```
apt update && apt upgrade
```
提供访问手机存储权限：
```
termux-setup-storage
```


# Termux安装并运行ftp，ssh服务
```
pkg install pure-ftpd
pure-ftpd --bind 8000
```
快速启动脚本:sftpgo-start.sh
```
#!/usr/bin/env bash 

# termux安装并运行ftp服务
# 安装并运行pure-ftpd
# pkg install pure-ftpd
# pure-ftpd - -bind 8000

clear
echo "Termux pure-ftpd服务启动中.......
Termux SSH正在启动......
Termux SSH端口:8022
Termux SSH用户名:termux

Termux FTP正在启动......
Termux FTP端口:8000
"
pure-ftpd --bind 8000 &
```


# Termux安装Linux

安装基础件proot-distro：
```
 pkg install proot-distro 
```
或者
```
apt install proot-distro
```
查看proot-distro的使用帮助为：
```
proot-distro help
```
可以查看可安装的Linux系统:
```
proot-distro list
```
安装以上系统就简单了：
```
proot-distro install <alias> 
```
比如，我要安装ubuntu 22.04，指令为：
```
proot-distro install ubuntu
```
不同的版本安装名称可能不同，输入proot-distro list显示的可安装alias名称即可。

安装完成后，进入 Linux发行版环境的指令为，比如我安装的ubuntu为：
```
proot-distro login ubuntu
```
如果认为每次进入 ubuntu的命令太长，可以在 Termux 环境新建一个sh文件，比如新建start-ubunt22.sh。
vim start-ubunt22.sh 编辑内容并保存:
```
proot-distro login ubuntu
```
启动：
```
./start-ubunt22.sh
```
就进入了真正的linux环境了。之后，传统操作比如换源，安装软件等等，一条龙走起来吧。
输入exit可以退出登录的linux系统：
自此Termux安装Linux步骤完毕。



# Ubuntu 初始化
### 换源
如果速度不行，可以换成清华镜像源：
https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu-ports/
然后
```
apt update && apt upgrade
```

### 安装中文
1. 安装中文支持包language-pack-zh-hans：
```
sudo apt-get install language-pack-zh-hans
```
2. 修改： vim /etc/environment   (在文件的末尾追加):
```
LANG="zh_CN.UTF-8"
LANGUAGE="zh_CN:zh:en_US:en"
```
3. 再修改:  vim /var/lib/locales/supported.d/local   (没有这个文件就新建，同样在末尾追加)：
```
en_US.UTF-8 UTF-8
zh_CN.UTF-8 UTF-8
zh_CN.GBK GBK
zh_CN GB2312
```
最后，执行命令：
```
sudo locale-gen
```
对于中文乱码是空格的情况，安装中文字体解决:
```
sudo apt-get install fonts-droid-fallback ttf-wqy-zenhei ttf-wqy-microhei fonts-arphic-ukai fonts-arphic-uming
```



### 安装openssh-server
命令:
```
apt install openssh-server
```
修改配置: 
```
vim /etc/ssh/sshd_config
```
修改端口 \
查找：#Port 22 \
修改为: Port 2222 \
注意： 端口最好是4位数即以上的端口号，否则容易造成ssh启动失败，这儿Termux上Linux存在的问题。 \
 \
支持root用户 \
查找：#PermitRootLogin prohibit-password 或者 #PermitRootLogin yes \
修改为:PermitRootLogin yes \
 \
支持密码认证 \
查找：#PasswordAuthentication yes \
修改为:PasswordAuthentication yes


启动ssh:
```
service ssh start | stop | restart
或者:
/usr/sbin/sshd
```
通过命令查看ssh是否启动成功:
```
ps -e | grep ssh
```
连接ssh：
```
ssh -p 2222 root@192.168.1.111
或者
ssh -p 2222 192.168.1.111
免密登录后可以
ssh 192.168.1.111
```
参考:
https://docs.andronix.app/ssh/ssh-basics/#ssh-via-linux



### 要重新生成openssh-server服务器的主机密钥，您可以按照以下步骤进行操作：
/etc/ssh/ssh_host_rsa_key
/etc/ssh/ssh_host_ecdsa_key  
/etc/ssh/ssh_host_ed25519_key

1. 先删除旧的主机密钥文件：
```
sudo rm /etc/ssh/ssh_host_*
```

2. 然后重新生成新的主机密钥，这将会创建新的RSA、ECDSA和ED25519密钥文件：
```
sudo dpkg-reconfigure openssh-server
```
这将会删除旧的主机密钥并重新生成新的密钥文件/etc/ssh/ssh_host_rsa_key、/etc/ssh/ssh_host_ecdsa_key 和 /etc/ssh/ssh_host_ed25519_key。在此过程中，可能会提示您接受一些默认的配置选项。 \
 \
注意：在执行这些步骤之前，请确保您有权限访问系统以及相应的sudo权限。重新生成密钥后，所有以前连接到该服务器的客户端都将看到一个关于主机密钥已更改的警告，要求验证新的密钥指纹。这是正常的，是SSH为了保护您的连接不受中间人攻击而采取的安全措施。





### SSH免密登录
#### 创建密钥, 使用下面命令生成公私密钥
```
ssh-keygen -t rsa
```
#### 将公钥添加到远程服务器认证列表
方式1：直接使用命令
```
ssh-copy-id -i ~/.ssh/android-liunx.pub root@192.168.1.111 -p 2222
-p 2222: 标识ssh使用自定义端口
```
方式2：直接拷贝android-liunx.pub公钥
1. 将xxx.pub 上传到远程服务器
2. 使用下列命令添加远程服务器认证
```
cat ~/home/android-liunx.pub >> ~/.ssh/authorized_keys
```
退出主机，即可发现已经能够免认证访问主机。
免密登录:
```
ssh -p 2222 root@192.168.1.111
```
#### 添加快捷登录方式
进入客户机，编辑下面文件
```
vim ~./ssh/config
```
添加如下示例:
```
Host 192.168.1.111									#自定义别名
	HostName 192.168.1.111							#主机
	User root										#用户
	Port 2222										#端口
	IdentityFile /Users/kimi/.ssh/android-liunx 	#私钥
```
接下来就可以使用快捷命令: ssh name
```
ssh 192.168.1.111
```
参考:
https://www.jianshu.com/p/974f9e164c6e/
https://zhuanlan.zhihu.com/p/73024008


### 安装sqlite3
```
sudo apt-get install sqlite3
sudo apt-get install libsqlite3-dev
```






##  SFTPGO安装与配置: SFTP, FTP WebDAV
使用SFTPGO的原因：vsftp和openssh-server中的sftp总是配置不成功，而导致无法使用。

### 安装sftpgo
1. 首先，通过在终端中运行以下命令，确保所有系统包都是最新的。
```
sudo apt update & apt upgrade
sudo apt install curl gnupg2 gnupg wget
```
2. 在 Ubuntu 22.04 上安装 SFTPGo
默认情况下，SFTPGo 在 Ubuntu 22.04 基础存储库中不可用。现在运行以下命令将 SFTPGo PPA 存储库添加到您的 Ubuntu 系统：
```
sudo add-apt-repository ppa:sftpgo/sftpgo
```
如果出现:sudo: add-apt-repository：找不到命令
需要安装:
```
sudo apt-get install software-properties-common
```
启用存储库后，现在使用以下命令安装最新版本的 SFTPGo：
```
sudo apt update
sudo apt install sftpgo
```
### sftpgo配置
sftpgo配置文件:/etc/sftpgo/sftpgo.json
```
vim /etc/sftpgo/sftpgo.json
```
配置：sftp，ftp，webdav
打开/etc/sftpgo/sftpgo.json找到对应的位置分别配置sftp，ftp，webdav服务
```
sftp: 2022
sftpd.bindings.port = 2022

ftp: 2021
ftpd.bindings.port = 2021

webdav: 2020
webdavd.bindings.port = 2020

#web 管理 默认8080
httpd.bindings.port = 2000   
```
sftpgo配置完毕，进入```http://localhost:2000``` 的Users下创建账号即可使用S/FTP,WEBDAV等服务了。

### sftpgo 启动和停止
为了方便使用写了两个启动和停止sftpgo服务的脚本

启动sftpgo： sftpgo-start.sh
```
#!/usr/bin/env bash 
start()
{	
	mkdir -p /root/.config/sftpgo
	cd /root/.config/sftpgo
	sftpgo serve
}
echo "开启sftpgo服务"
echo "sftpgo config: /etc/sftpgo/sftpgo.json"
echo "sftpgo sftp port: 2022"
echo "sftpgo ftp port: 2021"
echo "sftpgo webdav port: 2020"
echo "sftpgo manage web: http://localhost:8080"
start 
##
## 如果使用 start 启动可以不需要sftpgo-stop停止服务，直接结束当前终端即可。
## 使用 start & 启动则可以终止当前终端，停止服务需要sftpgo-stop命令。
##
```
停止sftpgo服务:  sftpgo-stop.sh
```
#!/usr/bin/env bash 

## 关闭sftpgo服务
stop()
{
	#KillPort脚本需要拷贝到/usr/local/bin/
	#在arm Linux上无法跑
	#KillPort 8080
	list=$(ps -a | grep sftpgo)
	for var in ${list[@]};
	do
	    echo $var
	    kill -9 $var
	    break
	done
}
echo "关闭sftpgo服务"
echo "如果无法关闭可以使用下列命令，查找对应的进程号"
echo '进程检测命令: echo $(ps -a | grep sftpgo) '
echo '进程检测命令: echo $(ps -ax | grep sftpgo) '
echo '进程检测命令: echo $(ps -axu | grep sftpgo) '
stop 
echo
```
创建软连接方便直接调用
```
sudo ln -s /opt/script/sftpgo-start.sh /usr/local/bin/sftpgo-start
sudo ln -s /opt/script/sftpgo-stop.sh /usr/local/bin/sftpgo-stop
```
现在可直接使用命令:
```
sftpgo-start  
sftpgo-stop   
```
参考连接: \
https://www.xtuos.com/6091.html \
https://cloud.tencent.com/developer/article/2021019 \
https://blog.csdn.net/qq_45661358/article/details/126580800


# 桌面与VNC
可以通过**AnLinux**应用提供的命令安装桌面与VNC
LXQT这个左面比较好看，可以安装试试。

桌面安装至少需要500MB甚至更多的控件，如果不需要可以不安装，直接使用SSH即可。




# 备份
到这儿通过Termux安装Ubuntu已经完成，这儿可以进行一个系统的备份，防止误操作。
备份命令:
```
proot-distro backup ubuntu --output ubuntu22.0.4.backup
```
恢复:
```
proot-distro restore ubuntu22.0.4.backup
```

# Swift 安装
Swift安装环境参考:  \
https://www.swift.org/download/ \
Arm Swift下载: \
https://github.com/futurejones/swift-arm64/releases \
Ubuntu-22.0.4:  \
https://download.swift.org/swift-5.7-release/ubuntu2204-aarch64/swift-5.7-RELEASE/swift-5.7-RELEASE-ubuntu22.04-aarch64.tar.gz

###  Linux Swift 安装需要环境:
Ubuntu 18.04
```
apt-get install \
          binutils \
          git \
          libc6-dev \
          libcurl4 \
          libedit2 \
          libgcc-5-dev \
          libpython2.7 \
          libsqlite3-0 \
          libstdc++-5-dev \
          libxml2 \
          pkg-config \
          tzdata \
          zlib1g-dev
```
Ubuntu 20.04
```
apt-get install \
          binutils \
          git \
          gnupg2 \
          libc6-dev \
          libcurl4 \
          libedit2 \
          libgcc-9-dev \
          libpython2.7 \
          libsqlite3-0 \
          libstdc++-9-dev \
          libxml2 \
          libz3-dev \
          pkg-config \
          tzdata \
          uuid-dev \
          zlib1g-dev
```
Ubuntu 22.04
```
apt-get install \
          binutils \
          git \
          gnupg2 \
          libc6-dev \
          libcurl4-openssl-dev \
          libedit2 \
          libgcc-9-dev \
          libpython3.8 \
          libsqlite3-0 \
          libstdc++-9-dev \
          libxml2-dev \
          libz3-dev \
          pkg-config \
          tzdata \
          unzip \
          zlib1g-dev
```




