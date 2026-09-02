## VMware Fusion 中Ubuntu虚拟机磁盘空间释放
   Ubuntu虚拟机采用虚拟磁盘拆分成多个文件管理方式时，释放Ubuntu虚拟机中未使用的空闲空间，以缩小宿主机(当前是在macOS上)中`.vmwarevm`虚拟机文件的大小。这里要释放虚拟机中未使用的空闲空间。
比如：当前Ubuntu虚拟机中使用了20GB,这时候查看macOS上的`.vmwarevm`文件大小也是20GB左右，这是就不需要释放Ubuntu虚拟机的空闲磁盘。但是现在在Ubuntu中下载了一个20GB的文件，此时在Ubuntu中通过`df -h`或者`df -h /`查看时就会看到Ubuntu的磁盘使用量在40GB左右，然后再查看macOS上的`.vmwarevm`文件也是40GB左右。
注意：这个时候再Ubuntu中将这个20GB的文件使用rm或者其他方式删除后，再查看Ubuntu中的磁盘的使用量就会回到20GB，**然而这是后再查看macOS上的`.vmwarevm`文件就会发现它的大小还是在40GB左右，这时候就需要手动去释放这个Ubuntu虚拟机的空闲磁盘(就释放掉垃圾数据的空间)。**
这时想到的方式是直接使用VMware Fusion虚拟的设置中的磁盘垃圾回收操作，就会发现设置中垃圾清理操作是无法清理的，这时就需要使用VMware Fusion中的**vmware-vdiskmanager**工具并使用**-k**命令来清理空间。使用这个工具的前提是需要再Ubuntu中将空闲空间使用逻辑0写满然后再使用这个工具释放空间就能达到清理Ubuntu虚拟机在macOS上占用的大小。

## 相关命令详解：
1 查看磁盘使用详情：
```
#ubuntu
df -h 
df -h /
```
2 创建一个逻辑大小为1GB，并且内容全部是0的文件zero.fill的文件。bs=64M表示每块大小64M，总计16块空1GB。
```
#ubuntu
sudo dd if=/dev/zero of=/zero.fill bs=64M count=16 status=progress
```
3 创建一个内容完全填充为0的zero.fill文件，文件的逻辑大小为剩余的所有空闲空间大小，即该操作会将剩余磁盘全部写完。
```
#ubuntu
sudo dd if=/dev/zero of=/zero.fill bs=1M status=progress
```
4 删除zero.fill逻辑文件
```
#ubuntu
sudo rm -f /zero.fill
```
5 同步操作
```
#ubuntu
sync
```
6 在macOS上使用du查看虚拟机在macOS上占用的磁盘大小。
```
#macos
du -sh "Ubuntu-Desktop.vmwarevm"
```
7 使用vmware-vdiskmanager工具释放虚拟机中填充0的数据以达到释放虚拟的的空间效果。
```
"/Volumes/ExData/Applications/VM/VMware Fusion.app/Contents/Library/vmware-vdiskmanager" \
-k "Ubuntu-Desktop.vmwarevm/虚拟磁盘.vmdk"
```
Ubuntu-Desktop.vmwarevm：具体的虚拟机文件名称，由你的虚拟机确定。
虚拟磁盘.vmdk：虚拟磁盘的文件名，由你的虚拟机确定，注意不是形如`虚拟磁盘-s001.vmdk`的拆分文件。

8 使用vmware-vdiskmanager工具进行磁盘碎片整理操作。
```
#macos
"/Volumes/ExData/Applications/VM/VMware Fusion.app/Contents/Library/vmware-vdiskmanager" \
-d "Ubuntu-Desktop.vmwarevm/虚拟磁盘.vmdk"
```

## 具体的Ubuntu磁盘空间释放的步骤：
**第一步**：先在Ubuntu中使用df命令查看磁盘使用详情：
```
df -h 
df -h /
```
**第二步**：再在Ubuntu中创建填充0的zero.fill逻辑文件：
```
sudo dd if=/dev/zero of=/zero.fill bs=64M count=16 status=progress
```
这只是创建逻辑大小为**1GB**的文件。这时候可以通过`du -sh Ubuntu-Desktop.vmwarevm` 查看macOS上虚拟机的磁盘占用情况。
这时候可以尝试在Ubuntu上创建5G,10G 20G的zero.fill文件然后再同时查看`du -sh Ubuntu-Desktop.vmwarevm`的文件是否会巨增？
这样可以安全的尝试防止*.vmwarevm*文件大小巨增。
如果没有就可以在Ubuntu中将剩余的空间全部进行zero.fill操作，写满Ubuntu剩余空间：
```
sudo dd if=/dev/zero of=/zero.fill bs=1M status=progress
```
**注意**: 当前进行zero操作并不会让macOS上的`.vmwarevm`文件大小巨增，不过为了安全还是建议先一步一步扩大zero.fill文件的大小。
如果`.vmwarevm`文件没有明显的巨增，就可以直接使用将剩余空间写满的方式创建zero.fill文件。

**第三步**：再次查看Ubuntu磁盘空间使用详情：
```
df -h /
```

**第四步**：执行同步操作并删除zero.fill文件:
```
sync
sudo rm -f /zero.fill
sync
```

**第五步**：再次查看Ubuntu的磁盘使用情况：
```
df -h /
```

**第六步**：Ubuntu关机操作
```
sudo poweroff
```

**第七步**：先在macOS上查看`.vmwarevm`虚拟机文件大小：
```
du -sh "Ubuntu-Desktop.vmwarevm"
```

**第八步**：再在macOS上执行磁盘空间清理操作:
```
"/Volumes/ExData/Applications/VM/VMware Fusion.app/Contents/Library/vmware-vdiskmanager" \
-k "Ubuntu-Desktop.vmwarevm/虚拟磁盘.vmdk"
```

**第九步**：再次查看`.vmwarevm`虚拟机文件大小
```
du -sh "Ubuntu-Desktop.vmwarevm"
```
比较这两次的du操作，看他们之间缩小的大小是否达到目标。比如：`.vmwarevm`文件的大小只比Ubuntu中磁盘使用大小大一点，
比如几个G之类的则说明此时磁盘清理达到了目标。如果相差很大则重复整个Ubuntu磁盘清理操作，如果依旧不理想则继续重复即可。