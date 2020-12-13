#! /bin/bash
# 函数
function pause(){
        read -n 1 -p "$*" INP
        if [ $INP != '' ] ; then
                echo -ne '\b \n'
        fi
}
# 全局变量
dist="./blog/.vuepress/dist"
# 开始push
echo "开始push..."
# 检测删除dist，减小push代码量
echo "开始检测dist文件夹"
if [ -e $dist ]
then 
    echo "检测到dist文件夹，开始删除..."
    rm -r $dist
else
    echo "未检测到dist文件夹，开始push"
fi
# 提交
read -p "请输入提交信息: " msg
pause "提交信息为 $msg ，请确认..."
git commit -a -m $msg
# push
for push in msg
do
    echo "开始尝试push"
    git push -f
    # 失败重启
    until [ $? -eq 0 ]
    do 
        echo "push失败，重试中..."
        git push -f
    done
    echo "push成功..."
    pause "退出push..."
done