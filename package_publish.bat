@echo off
cls

start /wait cmd /C build.bat
start /wait cmd /C ncc build backend/build/main.js -o publish/backend
RMDIR /S /Q publish/frontend
RMDIR /S /Q publish/backend
XCOPY "backend/public_html" "publish/public_html/*" /E /Y /J

cd backend
copy .env ..\publish\backend
cd ..