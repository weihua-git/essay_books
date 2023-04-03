@echo off
:main
cls
node sendStart.js
git config --global http.sslVerify "false"
git add .
git commit -m "更新"
git push
@pause