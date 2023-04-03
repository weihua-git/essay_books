@echo off
:main
cls
node sendStart.js
git config --global http.sslVerify "false"
git status
git add .
git commit -m "update"
git push
@pause