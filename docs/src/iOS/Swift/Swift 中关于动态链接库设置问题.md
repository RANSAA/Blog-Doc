## Linux下Swift运行环境中的动态链接库设置
在Linux下要想正确运行Swift或其应用，需要对Swift的环境变量进行一些环境变量设置，设置位置如```.bash_profile```

1. 让系统能找到Swift，需要设置PATH环境，如下:
```
export PATH=/opt/swift/current/usr/bin:"${PATH}"
```
2. 想要Swift应用程序能够正常运行，还需要设置```LD_LIBRARY_PATH```,如下：
```
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/opt/swift/current/usr/lib/
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/opt/swift/current/usr/lib/swift/linux/
```
注意：
其中```/opt/swift/current/```为Swift的安装目录，该目录可自定义。


## Swift应用程序，设置自定义的动态库路径
比如使用Swfit Package Manager开发CLI应用时，如果使用了动态库，那么编译时会将**主程序**和**动态库**分别编译 \
成不同的文件，可以正常执行主程序。但是如果有多个程序使用了同一个动态库或者想把动态库文件单独放在某个位置 \
即：动态库文件和主程序不在同一目录下是，就需要为主程序设置自定义动态库路径，下面就以程序**DlpHistory**为示例:

1. 使用绝对路径设置动态链接库地址:
```
install_name_tool \
  -add_rpath \
  "/Users/kimi/Desktop/DlpHistory/debug/dylib" \
  ./DlpHistory
```
如果不需要可以移除：
```
install_name_tool \
  -delete_rpath \
  "/Users/kimi/Desktop/DlpHistory/debug/dylib" \
  ./DlpHistory
```
其中：
- DlpHistory：在debug目录下
- dylib：该目录用于存放的DlpHistory依赖的动态库文件
2.  使用相对路径设置动态库：
```
install_name_tool \
  -add_rpath \
  "@executable_path/dylib" \
  ./DlpHistory
```
注意：
- dylib目录：和DlpHistory在同一个目录，也可以自定义
- 需要先进入DlpHistory所在的目录然后再执行这个命令
3. 通过```DYLD_LIBRARY_PATH```设置：
这种方式需要再运行./DlpHistory执行设置，也可以直接写入```.bash_profile```文件中，如下：
```
export DYLD_LIBRARY_PATH=/Users/kimi/Desktop/DlpHistory/debug/dylib
```


