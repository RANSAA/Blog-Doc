# git 多帐号解决方案

#### 1.没有权限
需要导入ssh:
```
ssh-add ~/.ssh/rsa
```
测试账号是否连通：
```
ssh -T git@github.com
```
git ssh创建：我一般使用sourcetree创建，其它方式自行百度


#### 2.多个github.com账号共存的问题
1. 当电脑中同时存在多个github账号时会出现git仓库所有权问题，git仓库总会使用默认用户操作，即使该仓库不是默认账户所有。
2. 要解决这个问题就需要切换账号，让git找到正确的账户
3. config文件：
```
# --- Sourcetree Generated ---
Host RANSAA-GitHub
	HostName github.com
	User git
	PreferredAuthentications publickey
	IdentityFile /Users/kimi/.ssh/RANSAA-GitHub
	UseKeychain yes
	AddKeysToAgent yes
# ----------------------------

# --- Sourcetree Generated ---
Host ctsfork
	HostName github.com
	User git
	PreferredAuthentications publickey
	IdentityFile /Users/kimi/.ssh/ctsfork-GitHub
	UseKeychain yes
	AddKeysToAgent yes
# ----------------------------
```
上面是两个github账号ssh配置信息，git依次读取config的信息，并且默认账号是最先添加的那个。\
4. 使用sourcetree需要注意，sc创建的config中User都是对应具体账号的用户名(如RANSAA，ctsfork)，这儿需要User名称更改为：**git** \
5. git当前的默认账号是RANSAA \
6. git路径访问问题，以Masonry为例：

第一个账号（默认账号）：
```
git@github.com:SnapKit/Masonry.git      //git 默认访问路径
```
或者：
```
RANSAA-GitHub:SnapKit/Masonry.git
```
第二个账号就需要使用：
```
ctsfork:SnapKit/Masonry.git
```
7. 需要注意config中的Host名称，如果同时存在多个github账号，git路径就与Host名称息息相关。