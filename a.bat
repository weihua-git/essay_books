@echo off
:main
cls
node sendStart.js
git add .
git commit -m "更新"
git push
@pause