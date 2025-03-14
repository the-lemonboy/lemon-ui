#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

echo "开始打包..."
# 这里是执行打包命令，docs:build是package.json中配置的
npm run docs:build

echo "进入生成的文件夹..."
# 进入生成的文件夹
cd docs/.vuepress/dist

echo "初始化 Git 仓库..."
git init
git add -A
git commit -m 'deploy'

echo "推送到 GitHub 仓库..."
# 这里是填写你的github仓库地址，把git@github.com:xxx/xxx.git替换成你的仓库地址
git push -f git@github.com:the-lemonboy/lemon-ui.git update-webpack5:gh-pages

echo "返回到之前的工作目录..."
cd -

echo "部署完成！"