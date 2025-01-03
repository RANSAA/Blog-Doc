# Shell 计算代码执行时长


### 代码如下
```
#!/usr/bin/env bash 


echo 开始时间：$(date)
start_time=$(date +%s)


#执行代码


echo 结束时间：$(date)
end_time=$(date +%s)
cost_time=$[$end_time - start_time]
echo "总共耗时：$(($cost_time)) s"
```