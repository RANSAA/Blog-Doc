# Ubuntu自定义程序图标

自定义程序图标说明:



创建.desktop文件：
创建一个以 .desktop 结尾的文件，用于定义应用的信息，包括名称、图标、执行命令等。可以使用文本编辑器创建此文件，比如使用 nano：
```
sudo nano /usr/share/applications/your_app.desktop

```

在文本编辑器中添加以下内容，并根据你的需求进行修改：

```
[Desktop Entry]
Name=Your App Name
Exec=/path/to/your/application
Icon=your_icon
Type=Application
Categories=Utility;

```

Name：你的应用程序的名称。
Exec：启动应用程序的命令。
Icon：你放置在 /usr/share/icons/ 目录下的图标文件的名称（不带路径和文件扩展名）。
Type：应用程序的类型，一般为 Application。
Categories：应用程序的类别，根据实际情况修改。




然后将.desktop文件文件cp到：/usr/share/applications/



更新图标缓存：
为了让系统识别新的图标，需要更新图标缓存。运行以下命令：
```
sudo update-icon-caches /usr/share/icons/*

```
或者：
```
sudo gtk-update-icon-cache /usr/share/icons/*
```
这样，你的应用程序就应该在应用程序菜单中显示自定义图标了。如果图标还没有生效，可以尝试注销并重新登录。
