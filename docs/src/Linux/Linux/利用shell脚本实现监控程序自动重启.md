# 利用shell脚本实现监控程序自动重启


脚本如下：
```
#!/bin/bash  
  
while true  
do   
    procnum=` ps -ef|grep "Run"|grep -v grep|wc -l ` 
    if [[ $procnum -eq 1 ]]; then
         echo "AutoReboot"
        /Users/kimi/Desktop/AutoReboot/App/Run&  
    fi
    sleep 30
done  
```
-eq意思是等于1，用于判断该Run是否还在运行状态。监控/Users/kimi/Desktop/AutoReboot/App/Run这个程序是否运行。

添加权限：
```
 chmod 777 AutoReboot.sh
```
启动脚本：
```
./AutoReboot.sh&
```
记得加上&，要不然得窗口退了，该脚本也退出了。

\
设置开机自动启动脚本:
 使用命令 vi  /etc/rc.local 在文件末尾添加这一行  
```
/home/AutoReboot.sh&
```