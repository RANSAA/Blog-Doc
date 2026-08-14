# open-vm-tools工具的安装与使用



## 简介
open-vm-tools就是VMWare-Tools工具的开源升级版，用于解决虚拟机画面自适应，文件夹共享等功能。


## 安装open-vm-tools
确保您的 Linux 发行版已经安装了 open-vm-tools。您可以使用发行版特定的软件包管理器来安装它。例如，在基于 Debian/Ubuntu 的系统上：



1. 安装基本软件包:
```
sudo apt install open-vm-tools
```

2. 安装以支持桌面环境的双向拖放文件：
```
sudo apt install open-vm-tools-desktop
```

3. 安装open-vm的所有工具：

```
sudo apt-get install -y open-vm*

```


**注意:** \
Ubuntu系统的安装方式也会影响open-vm-tools工具的安装，比如使用UEFI方式安装Ubuntu-22.04时，系统就会自动安装该工具。 \
但是使用传统的boot方式引导安装Ubuntu-22.04时系统就不含有open-vm-tools工具，就需要用户自行安装该工具。




## 查看共享目录
打开终端界面，执行以下命令，列出共享文件夹名称，说明可以挂载。
```
vmware-hgfsclient
```




## 挂载共享目录
通过执行以下命令来挂载共享目录: 

```
sudo vmhgfs-fuse -o allow_other -o auto_unmount .host:/ /mnt/hgfs
```
参数说明: \
	-o allow_other		允许其他用户访问共享目录 \
	-o auto_unmount		在断开共享目录连接时自动卸载 \
	.host:/		是共享目录在主机上的路径 \
	/mnt/hgfs 	是你创建的用于挂载的目录




注意： \
如果/mnt/hgfs目录不存在则需要先创建该目录。


## 验证挂载：
确保挂载成功，并检查共享目录的内容是否在指定的本地目录中可见。您可以使用以下命令查看：

```
ls /mnt/hgfs
```

## 自动挂载：
如果希望在系统启动时自动挂载共享目录，可以编辑 /etc/fstab 文件并添加类似的条目。打开 /etc/fstab 文件并添加以下行：
```
.host:/ /mnt/hgfs fuse.vmhgfs-fuse allow_other,auto_unmount 0 0
```



## 参考
1. https://blog.csdn.net/qq_43328166/article/details/128074728
2. https://zhuanlan.zhihu.com/p/562796666
3. https://www.bilibili.com/read/cv26352850/?jump_opus=1



