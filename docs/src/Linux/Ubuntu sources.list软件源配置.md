# Ubuntu sources.list软件源配置

当前为Ubuntu sources.list软件源阿里云镜像源。\
\
Ubuntu使用apt来管理软件包，apt可以将软件库存储在如下文件中：\
**/etc/apt/sources.list** 和 **/etc/apt/sources.list.d/**目录中带.list后缀的文件中。可以使用命令**man sources.list/**来查看apt的完整存储机制。通过编辑这些文件，我们可以添加、删除、或者临时关闭某些软件库。

```
注意：在更改上述文件之前，最好先备份一下。例如， sudo cp /etc/apt/sources.list /etc/apt/sources.list.backup
```


下面详细分析文件sources.list的格式和写法: \
以字符’#'开头的行代表该行是一行注释 \
不以’#'开头的行是apt repository，它的格式为：
* deb： 二进制包仓库 
* deb-src： 二进制包的源码库 
* URI：库所在的地址，可以是网络地址，也可以是本地的镜像地址 
* codename： Ubuntu版本的代号。可以用命令lsb_release -sc来查看当前系统的代号。 
* components： 软件的性质（free或non-free等）


## Ubuntu 18.04
```
# deb cdrom:[Ubuntu 18.04.6 LTS _Bionic Beaver_ - Release amd64 (20210915)]/ bionic main restricted

# See http://help.ubuntu.com/community/UpgradeNotes for how to upgrade to
# newer versions of the distribution.
deb http://mirrors.aliyun.com/ubuntu/ bionic main restricted
# deb-src http://cn.archive.ubuntu.com/ubuntu/ bionic main restricted

## Major bug fix updates produced after the final release of the
## distribution.
deb http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted
# deb-src http://cn.archive.ubuntu.com/ubuntu/ bionic-updates main restricted

## N.B. software from this repository is ENTIRELY UNSUPPORTED by the Ubuntu
## team. Also, please note that software in universe WILL NOT receive any
## review or updates from the Ubuntu security team.
deb http://mirrors.aliyun.com/ubuntu/ bionic universe
# deb-src http://cn.archive.ubuntu.com/ubuntu/ bionic universe
deb http://mirrors.aliyun.com/ubuntu/ bionic-updates universe
# deb-src http://cn.archive.ubuntu.com/ubuntu/ bionic-updates universe

## N.B. software from this repository is ENTIRELY UNSUPPORTED by the Ubuntu 
## team, and may not be under a free licence. Please satisfy yourself as to 
## your rights to use the software. Also, please note that software in 
## multiverse WILL NOT receive any review or updates from the Ubuntu
## security team.
deb http://mirrors.aliyun.com/ubuntu/ bionic multiverse
# deb-src http://cn.archive.ubuntu.com/ubuntu/ bionic multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-updates multiverse
# deb-src http://cn.archive.ubuntu.com/ubuntu/ bionic-updates multiverse

## N.B. software from this repository may not have been tested as
## extensively as that contained in the main release, although it includes
## newer versions of some applications which may provide useful features.
## Also, please note that software in backports WILL NOT receive any review
## or updates from the Ubuntu security team.
deb http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
# deb-src http://cn.archive.ubuntu.com/ubuntu/ bionic-backports main restricted universe multiverse

## Uncomment the following two lines to add software from Canonical's
## 'partner' repository.
## This software is not part of Ubuntu, but is offered by Canonical and the
## respective vendors as a service to Ubuntu users.
# deb http://archive.canonical.com/ubuntu bionic partner
# deb-src http://archive.canonical.com/ubuntu bionic partner

deb http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted
# deb-src http://security.ubuntu.com/ubuntu bionic-security main restricted
deb http://mirrors.aliyun.com/ubuntu/ bionic-security universe
# deb-src http://security.ubuntu.com/ubuntu bionic-security universe
deb http://mirrors.aliyun.com/ubuntu/ bionic-security multiverse
# deb-src http://security.ubuntu.com/ubuntu bionic-security multiverse
```

## Ubuntu 20.04
```
deb https://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse

# deb https://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse
# deb-src https://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
```

## Ubuntu 22.04
```
deb https://mirrors.aliyun.com/ubuntu/ jammy main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ jammy main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ jammy-security main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ jammy-security main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ jammy-updates main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ jammy-updates main restricted universe multiverse

# deb https://mirrors.aliyun.com/ubuntu/ jammy-proposed main restricted universe multiverse
# deb-src https://mirrors.aliyun.com/ubuntu/ jammy-proposed main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ jammy-backports main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ jammy-backports main restricted universe multiverse
```

## Ubuntu 23.04
```
deb https://mirrors.aliyun.com/ubuntu/ lunar main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ lunar main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ lunar-security main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ lunar-security main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ lunar-updates main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ lunar-updates main restricted universe multiverse

# deb https://mirrors.aliyun.com/ubuntu/ lunar-proposed main restricted universe multiverse
# deb-src https://mirrors.aliyun.com/ubuntu/ lunar-proposed main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ lunar-backports main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ lunar-backports main restricted universe multiverse
```

## Ubuntu 24.04
```
deb https://mirrors.aliyun.com/ubuntu/ noble main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ noble main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ noble-security main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ noble-security main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ noble-updates main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ noble-updates main restricted universe multiverse

# deb https://mirrors.aliyun.com/ubuntu/ noble-proposed main restricted universe multiverse
# deb-src https://mirrors.aliyun.com/ubuntu/ noble-proposed main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ noble-backports main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ noble-backports main restricted universe multiverse
```
