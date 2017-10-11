# 重构基础
## 需求说明
用基础手法重构已有代码，消除坏味道。

## 挑战
* 识别坏味道
* 重命名变量
* 抽取方法
* 每个方法长度应不超过 10 行

## 要求
* 重构前后运行测试
* 每次重构后提交代码并附上有意义的评论
* 使用快捷键重构代码

## 交付物
修改`/lib/main.js`的代码，保持`spec`目录下的所有测试始终通过。

## 环境
JavaScript ES6。

## 开始
在命令行中使用以下命令在用户本地任意目录下clone此题目库
```
git clone repo_of_this_template
```
首先初次下载完需要安装依赖：
```
npm install
```
运行所有测试：
```
npm test
```

用任意编辑器打开clone下来的文件夹，内部会存在两个文件夹
```
spec  //测试文件夹
lib   //源文件
```
完成函数通过测试后，使用以下命令设置github远程仓库地址 (my_url代表你自己的新的github地址)
```
git remote set-url origin my_url
```
## 学习资源
1. [JavaScript基础](http://codefordream.com/courses/js_basic/sections)
2. [JavaScript初级训练营](http://codefordream.com/courses/js_learning_camps/sections)
3. [ECMAScript 6 入门](http://es6.ruanyifeng.com/)
4. [Node 下载安装](https://github.com/creationix/nvm)
5. [NPM 下载安装](https://github.com/npm/npm)
6. [Jasmine用法](http://jasmine.github.io/2.4/introduction.html)
7. [Git 参考手册](https://git-scm.com/docs)
