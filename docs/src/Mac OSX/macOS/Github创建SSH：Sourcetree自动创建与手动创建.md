# Github创建SSH：Sourcetree自动创建与手动创建



## Sourcetree自动创建SSH：
1.直接通过sourcetree添加账号，创建ssh。（添加之前最好是清除**.ssh**文件夹中的相关数据）\
2.进入github的SSH and GPG keys中添加从sourcetree中拷贝的ssh（添加账号处拷贝）\
3.在git中输入命令：
```
ssh -T git@github.com

然后会跳出一堆话。
输入命令：yes
然后就会提示你成功了~~
回车
```

## 手动创建SSH：
***git出错：“Please make sure you have the correct access rights and the repository exists.***

**ssh 需要重置**  

1、重置用户名和邮箱
```
git config --global user.name “yourname”
git config --global user.email“your@email.com"
注：yourname是你要设置的名字，your@email是你要设置的邮箱。
```
 2、删除.ssh文件夹下的known_hosts
 3、git输入命令 
```
ssh-keygen -t rsa -C "your@email.com"（请填你设置的邮箱地址）
```
一路yes和回车 \
然后系统会自动在.ssh文件夹下生成两个文件，id_rsa和id_rsa.pub，用记事本打开id_rsa.pub \
将全部的内容复制

4、打开https://github.com/，登陆你的账户，进入设置 \
 进入ssh设置 \
 在key中将刚刚复制的粘贴进去 \
 点击add ssh key

5、在git中输入命令：
```
ssh -T git@github.com
```
然后会跳出一堆话。。 \
输入命令：yes\
回车\
然后就会提示你成功了~~