# 1. 添加 PostgreSQL 存储库
```
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
```

# 2. 导入 PostgreSQL GPG 密钥
```
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
```

# 3. 更新软件包列表
```
sudo apt-get update
```

# 4. 安装 PostgreSQL 16
```
sudo apt-get install postgresql-16 postgresql-contrib-16
```

# 5. 初始化 PostgreSQL
```
/usr/lib/postgresql/16/bin/initdb --username=postgres --pwprompt -D /opt/db/postgresql/16/database/postgres --waldir=/opt/db/postgresql/16/log
```
其中： 
1. **/opt/db/postgresql/16/database/postgres**:为自定义的数据库存储目录

2. **/opt/db/postgresql/16/log**：为自定义的日志目录

3. **postgres** ：为用户名称

4. **--pwprompt**：表示将 postgres设置为超级用户

# 6. 允许PostgreSQL远程访问配置
1. 修改**postgresql.conf**文件：
找到**listen_addresses**设置项，并将其值设置为 ```'*'```，这将允许外部连接。例如：```listen_addresses = '*'``` 

2. 修改**pg_hba.conf**文件：
在文件的末尾添加一行允许外部 IP 地址或网段连接的记录。例如，允许所有 IP 地址连接，你可以添加一行：
```host    all             all             0.0.0.0/0	            md5```
或者在**IPv4 local connections:**处添加一行:
```host    all             all             0.0.0.0/0	            @authmethodhost@```
其中**@authmethodhost@**为认证模式，可以根据原始的配置中添加相同的配置；
例如可以同时向**IPv4 local connections:**处添加两条记录：
```
host    all             all             0.0.0.0/0	            trust
host    all             all             0.0.0.0/0	            md5
```

# 7. 启动 PostgreSQL数据库服务
```
/usr/lib/postgresql/16/bin/pg_ctl -D /opt/db/postgresql/16/database/postgres -l /opt/db/postgresql/16/启动日志.log start
```

# 8. 终止 PostgreSQL数据库服务
```
/usr/lib/postgresql/16/bin/pg_ctl -D /opt/db/postgresql/16/database/postgres stop
```


# 9. 创建新的数据库
为了在PostgreSQL 16中创建一个名为"epg"的数据库以及一个名为"epg"的用户名，并且把密码设置为"123456"，你可以按照以下的步骤来进行操作：

1、首先通过postgres用户来登录到PostgreSQL：
```
psql --username=postgres

或者：

psql -U postgres
```
作用：以超级用户 postgres 的身份登录 PostgreSQL 的命令行界面 psql。 \
postgres 是 PostgreSQL 安装时默认的超级用户，拥有对数据库的完全控制权限。 \
因为你在初始化数据库时创建的超级用户是"postgres"，所以请使用这个用户来登录。\
第二部，你将看到一个以 postgres=# 结尾的提示符，在提示符后面输入下面的命令来创建一个新的用户。\
2、接下来在提示符出现后，输入下面的SQL命令来创建一个新的用户，把名字设置为"epg"，并且密码设置为"123456"：
```
CREATE USER epg WITH PASSWORD '123456';
```
3、然后，继续在提示符后面，输入下面的SQL命令来创建一个新的数据库，名字是"epg"：
```
CREATE DATABASE epg;
```
4、为了把新创建的数据库"epg"的权限赋予给新创建的用户"epg"，请输入以下SQL命令：
```
GRANT ALL PRIVILEGES ON DATABASE epg TO epg;

注意：该步骤也可以不执行，直接执行下面的步骤6,7
```
作用：将数据库 epg 的所有权限授予用户 epg。\
这个命令会把所有的权限都赋予给"epg"用户，这样"epg"用户就可以在"epg"数据库中进行所有的操作了。\
注意：创建指定数据库(如epg)时，可以不将数据库的所有权限授予用户(如epg用户)\
5、最后，直接按Ctrl + D或者输入 \q 来退出PostgreSQL操作终端。\
6、使用postgres用户连接epg数据库
```
psql --username=postgres --dbname=epg
```
7、将数据库(epg)的所有者(Owner)设置为指定用户(epg)
```
ALTER SCHEMA public OWNER TO epg;
```
8、最后，直接按Ctrl + D或者输入 \q 来退出PostgreSQL操作终端。

# 10. 删除数据库
在PostgreSQL 16中中删除一个名为epg的数据库
1、首先通过postgres用户来登录到PostgreSQL：
```
psql --username=postgres

或者：

psql -U postgres
```
2、 删除epg数据库
删除PostgreSQL数据库，你可以使用以下命令：
```
DROP DATABASE epg;
```
这个命令需要有足够的权限才能执行。通常只有数据库管理员或数据库所有者可以删除数据库。
如果要通过命令行工具删除数据库，​可以使用下面的命令：
```
dropdb epg
```
同样，执行这个命令也需要有相应的权限。





# 11. 如何让外部链接数据库时必须输入正确的密码才能连接，否接拒绝
要求外部连接到PostgreSQL数据库必须输入正确的密码，你需要修改两个配置文件： pg_hba.conf 和 postgresql.conf。\
首先，找到postgresql.conf配置文件（通常位于PostgreSQL的数据目录下），你需要在该文件中启用监听所有地址，即在该文件中将listen_addresses参数设置为'*'。
```
# 在postgresql.conf文件中
listen_addresses = '*'
```
保存并关闭该文件。\
接下来，你需要编辑PostgreSQL的pg_hba.conf配置文件，该文件控制PostgreSQL的客户端验证和连接策略。\
这个文件位于PostgreSQL的数据目录中，且名为pg_hba.conf。\
你需要为想要远程访问数据库的IP地址（或IP地址范围）添加一行内容，类似下面这样：
```
# 为指定的IP地址允许访问所有数据库
# "md5"表示需使用md5密码验证（你还可以选择其他的验证方法，如 "password"，它表示在通信过程中使用明文密码）
host    all             all             192.168.1.0/24            md5
```
这一行表示允许192.168.1.0到192.168.1.255的所有IP地址使用md5密码验证方式连接到服务器的所有数据库。\
如果允许所有ip，则可以这样设置:
```
host    all             all             0.0.0.0/0           md5
```
当然，你也可以只允许特定的用户连接到特定的数据库。例如，如果你想让只有用户'epg'可以连接到'mydb'数据库，你可以这样写：
```
host    mydb            epg             192.168.1.0/24            md5
```
保存并关闭pg_hba.conf文件。\
完成以上步骤后，你需要重启PostgreSQL服务以使新的配置生效。具体重启命令视你的操作系统和PostgreSQL的安装方式而定，常见的是sudo service postgresql restart。\
现在，所有的远程连接都需要提供正确的密码才能访问数据库。\
注意：以上操作需要具备适当的权限。如果你在操作过程中遇到问题，请再次询问。






