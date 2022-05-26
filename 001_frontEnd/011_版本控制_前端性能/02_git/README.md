# Git

## 几个概念

1. 工作区（working Directory）：简单的理解——你在电脑里能看到的目录。
2. 暂存区（stage）:介于工作区和版本区中间，工作区到版本区的"必经之路" 
3. 版本库（Repository）:工作区有一个隐藏目录.git，准确的来说这个不算工作区，而是Git的版本库。
    * git add把文件添加进暂存区。
    * git commit把暂存区的所有内容提交到当前版本库。

## diff

* git diff : 比较暂存区与工作区
* git diff --cached : 比较版本区与暂存区
* git diff master : 比较版本区与工作区


## 版本控制

* git reset --hard HEAD^    版本回退（回退一次提交）
* git reset --hard Obfafd    回退到指定Obfafd的commit id版本
* git reset HEAD   		用版本库中的文件去替换暂存区的全部文件。
* git checkout -- x.txt    	用暂存区指定文件去替换工作区的指定文件（危险）
* git checkout HEAD x.txt  用版本库中的文件替换暂存区和工作区的文件（危险）
* git rm --cached x.txt 		从暂存区删除文件
