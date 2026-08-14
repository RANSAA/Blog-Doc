# Shell/Bash常用基础语法

## 常用符号解释
- ```-z "$2"```：检查 $2是否为空。 --> 字符串长度为0（空），例：[[ -z "$var" ]]
- ```-n "$2"```：检查 $2是否不为空。 --> 字符串长度不为0（非空），例：[[ -n "$var" ]]
- ```! -z "$2"```：检查 $2是否不为空，同 -n。
- ```string或 "$string"```：字符串非空时为真，例：[[ "$var" ]]
- ```"$2" =~ ^-```：检查 $2是否以 - 开头

## 常用的判断
- 判断一个变量是否是`整数(包含负数)`:
```
if [[ "$argSize" =~ ^-?[0-9]+$ ]]; then
    echo "$argSize 是整数"
else
    echo "$argSize 不是整数"
fi
```

## 常用方法
- 去除变量的首尾空格：
```
# 去除首尾空格
# 使用：arg=$(trim "$arg")
trim(){
    # 使用sed去除首尾空格和制表符
    echo "$1" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//'
    # 或者使用变量替换（bash 4.0+）
    # local var="${1}"
    # var="${var#"${var%%[![:space:]]*}"}"
    # var="${var%"${var##*[![:space:]]}"}"
    # echo -n "$var"
}
```


## 命令参数解析
可解析命令形如下:
```
//格式1 - 短选项
./script.sh -u https://Baidu.com -n filename -s 256

//格式2 - 长选项
./script.sh --url  https://Baidu.com --name filename --size 256

//格式3 - 最后一个参数为非选参数项
./script.sh -n filename -s 256  https://Baidu.com 
```
具体解析参数的方法如下:
```
## ----------------------------------------解析参数----------------------------------------
argUrl=""
argName=""
argSize=""



# 统一错误处理
error_exit() {
    echo "参数错误：$1" >&2
    exit 1
}

help_msg(){
echo "用法:
$0 -u <URL> [-n <name>] <argName> [-s <size>] <argSize> [-v]

-u|--url        : 图集地址
-n|--name       : 图集指定的名称，可选
-s|--size       : 图集的图片数量，可选
-v|--verbose    : 打印参数信息
-h|--help       : 帮助
"
exit 0
}

verbose_msg(){
echo "=================参数详情=================
url:  [$argUrl]
name: $argName
size: $argSize
=================参数详情=================
"
exit 0
}


## 保存原始参数
## 注意：下面解析参数方法操作后$@的值将为空，因为shift操作会删除参数，也可以使用其它的方法解析参数（这儿不实现了）
original_args=("$@")
original_value="$@"
# echo "original_args:${original_args[@]}"
# echo "original_value@:$original_value"


# 解析所有参数
# -z "$2"：检查 $2是否为空
# "$2" =~ ^-：检查 $2是否以 - 开头
while [ $# -gt 0 ]; do
    case "$1" in
        -u|--url)
            # 检查是否提供了参数值，或者是否以 - 开头（表示下一个选项）
            # if [[ -z "$2" ]]; then
            if [[ -z "$2" || "$2" =~ ^- ]]; then
                # echo "参数错误：选项 -n/--name 需要参数值"
                error_exit "选项 -u/--url 需要参数值"
            fi
            argUrl="$2"
            shift 2
            ;;
        -n|--name)            
            if [[ -z "$2" || "$2" =~ ^- ]]; then
                error_exit "选项 -n/--name 需要参数值"
            fi
            argName="$2"
            shift 2
            ;;
        -s|--size)
            if [[ -z "$2" ]]; then
                error_exit "选项 -s/--size 需要参数值"
            fi
            if [[ $2 =~ ^-?[0-9]+$ ]]; then
                argSize="$2"
            else
                error_exit "选项 -s/--size 的值必须是数字"
            fi
            shift 2
            ;;
        -v|--verbose)
            verbose_msg
            shift
            ;;
        -h|--help)
            help_msg
            shift
            ;;
        -*)
            # 非选项参数（位置参数）以-开头
            error_exit "未知选项 $1"
            exit 1
            ;;
        *)
            # 非选项参数（位置参数）
            error_exit "未知选项 $1"
            exit 1
            ;;
    esac
done


# 去除参数首尾空格
argUrl=$(trim "$argUrl")
argName=$(trim "$argName")
argSize=$(trim "$argSize")


# 验证必要参数

## -z 判断参数是否为空，参数-u|--url必须存在
if [[ -z "$argUrl" ]]; then
    error_exit "必须指定-u|--url"
fi

# if [[ -z "$argName" ]]; then
#     error_exit "必须指定-n|--name"
# fi

## ----------------------------------------解析参数----------------------------------------
```
