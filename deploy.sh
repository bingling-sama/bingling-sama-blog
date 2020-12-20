#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn run build

# 进入生成的文件夹
cd blog/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git config user.name "bingling-sama"
git config user.email "bingling_sama@qq.com"

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:bingling-sama/bingling-sama-blog.git gh-pages

cd -