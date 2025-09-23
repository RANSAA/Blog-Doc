# Github多帐号解决方案

## 1.没有权限
在使用git操作时，如果提示没有相关权限，那么就需要将该密钥将密码短语存储在您的钥匙串中。

将私钥添加到ssh-add中：
```
ssh-add ~/.ssh/rsa
```
测试账号是否连通：
```
ssh -T git@github.com
```
git ssh创建：我一般使用sourcetree创建，其它方式自行百度

```如果```有多个GitHub账号，那么也需要将对应的私钥导入系统中，例如:
```
echo '添加PRIVATE KEY 到 ssh-agent:'
ssh-add /Volumes/ExData/Users/kimi/.ssh/github-RANSAA
ssh-add /Volumes/ExData/Users/kimi/.ssh/github-ctsfork
```
```并且```推荐使用BootTask应用将添加私钥命令添加到它的task任务中并开机自启。\
```因为```添加私钥需要再每次开机后重新导入，并且需要注意的是如果将添加私钥命令写入shell脚本中，\
```再```执行shell脚本时需要注意一个shell脚本作用域的问题（只在当前shell运行期间有效，其它地方无效），\
```所以```直接推荐使用BootTask应用添加需要开机自启的任务。

其它：
```
echo "确认ssh-agent处于开启状态，打印pid... 表示启用中"
eval "$(ssh-agent -s)"


echo '添加PRIVATE KEY 到 ssh-agent:'
# ssh-add ~/.ssh/github-RANSAA
# 或者
# ssh-add -K ~/.ssh/github-RANSAA


## ssh测试连接到github.com
## ssh -T -p 443 git@ssh.github.com
## 
# echo "测试指定账号ssh连通性:"
# ssh -T git@github.com
# ssh -T git@RANSAA-GitHub
# ssh -T git@ctsfork-GitHub


# github ssh 公私钥生成命令
# ssh-keygen -t ed25519 -C "123456@qq.com"


# 注意: 多github账号时必须将config文件拷贝到~/.ssh/文件夹中，
# 因为config文件中配置了多个git账号的访问别名。


## 注意如果有多个MacOS系统并且使用同一套ssh公私钥，那么需要保证不同的系统需要访问相同的~/.ssh/config文件。
```




## 2.多个github.com账号共存的问题
1. 当电脑中同时存在多个github账号时会出现git仓库所有权问题，git仓库总会使用默认用户操作，即使该仓库不是默认账户所有。
2. 要解决这个问题就需要切换账号，让git找到正确的账户
3. config文件：
```
# --- Sourcetree Generated ---
Host github-RANSAA
	HostName github.com
	User RANSAA
	PreferredAuthentications publickey
	IdentityFile /Volumes/ExData/Users/kimi/.ssh/github-RANSAA
	UseKeychain yes
	AddKeysToAgent yes
# ----------------------------

# --- Sourcetree Generated ---
Host github-ctsfork
	HostName github.com
	User ctsfork
	PreferredAuthentications publickey
	IdentityFile /Volumes/ExData/Users/kimi/.ssh/github-ctsfork
	UseKeychain yes
	AddKeysToAgent yes
# ----------------------------
```
如果同时要使用Sourcetree,用默认的git@github.com的方式使用git，也可以向config文件中加入：
```
# --- Sourcetree Generated ---
Host github.com
	HostName github.com
	User RANSAA
	PreferredAuthentications publickey
	IdentityFile /Volumes/ExData/Users/kimi/.ssh/RANSAA-GitHub
	UseKeychain yes
	AddKeysToAgent yes
# ----------------------------

# --- Sourcetree Generated ---
Host github.com
	HostName github.com
	User ctsfork
	PreferredAuthentications publickey
	IdentityFile /Volumes/ExData/Users/kimi/.ssh/ctsfork-GitHub
	UseKeychain yes
	AddKeysToAgent yes
# ----------------------------
```
上面是两个github账号ssh配置信息，git依次读取config的信息，```并且默认账号是最先添加的那个```。\
4. 使用sourcetree需要注意，sc创建的config中User都是对应具体账号的用户名(如RANSAA，ctsfork)，这儿需要User名称更改为：**git** \
5. git当前的默认账号是RANSAA \
6. git路径访问问题，以Masonry为例：
第一个账号（默认账号）：
```
git@github.com:SnapKit/Masonry.git      //git 默认访问路径
```
或者：
```
git@github-RANSAA:SnapKit/Masonry.git
```
第二个账号就需要使用：
```
git@github-ctsfork:SnapKit/Masonry.git
```
\
7. 需要注意config中的Host名称，如果同时存在多个github账号，git路径就与Host名称息息相关。