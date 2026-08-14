# Anlinux-Resources Netlify 资源同步


## Anlinux
该站点为Anlinux-Resources的同步站点，用于解决国内网络访问限制问题。\
AnLinux-App: https://github.com/EXALAB/AnLinux-App \
Anlinux-Resources: https://github.com/EXALAB/Anlinux-Resources \
原始站点: https://github.com/EXALAB/Anlinux-Resources \
当前站点: https://anlinux.netlify.app \
同步状态: 目前只做了**桌面***和**SSH**的脚本资源同步，包含目录：
1. Scripts/DesktopEnvironment 
2. Scripts/SSH

## 资源下载
[AnLinux-App v6.50](https://anlinux.netlify.app/AppRes/AnLinux-App-v6.50.apk) \
[Termux v0.118.0](https://anlinux.netlify.app/AppRes/termux-app_v0.118.0+github-debug_arm64-v8a.apk)

## 桌面安装
### Ubuntu、Debian、Kali、Parrot Security OS.
1. Xfce4 (推荐) ，消耗空间约：500MB
```
apt-get update && apt-get install wget -y && wget https://anlinux.netlify.app/Scripts/DesktopEnvironment/Apt/Xfce4/de-apt-xfce4.sh --no-check-certificate && bash de-apt-xfce4.sh
```
2. Mate
```
apt-get update && apt-get install wget -y && wget https://anlinux.netlify.app/Scripts/DesktopEnvironment/Apt/Mate/de-apt-mate.sh --no-check-certificate && bash de-apt-mate.sh
```
3. LXQt ，消耗空间约：900MB
```
apt-get update && apt-get install wget -y && wget https://anlinux.netlify.app/Scripts/DesktopEnvironment/Apt/LXQt/de-apt-lxqt.sh --no-check-certificate && bash de-apt-lxqt.sh
```
4. LXDE
```
apt-get update && apt-get install wget -y && wget https://anlinux.netlify.app/Scripts/DesktopEnvironment/Apt/LXDE/de-apt-lxde.sh --no-check-certificate && bash de-apt-lxde.sh
```
### Arch Liunx
1. LXDE （只支持LXDE）
```
pacman -Sy -noconfirm wget && wget https://anlinux.netlify.app/Scripts/DesktopEnvironment/Apt/Pacman/de-pac.sh --no-check-certificate && bash de-pac.sh
```


## SSH安装
### Ubuntu、Debian、Kali、Parrot Security OS、BackBox.
```
wget https://anlinux.netlify.app/Scripts/SSH/Apt/ssh-apt.sh --no-check-certificate && bash ssh-apt.sh
```
### Fedora、CentOS
```
yum install wget -y && wget https://anlinux.netlify.app/Scripts/SSH/Yum/ssh-yum.sh --no-check-certificate && bash ssh-yum.sh
```
### Arch Linux
```
pacman -Sy -noconfirm wget && wget https://anlinux.netlify.app/Scripts/SSH/Pacman/ssh-pac.sh --no-check-certificate && bash ssh-pac.sh
```


