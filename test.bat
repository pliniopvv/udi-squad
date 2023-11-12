@echo off
cls

echo ###    Compilando arquivos.
start /wait cmd /C build.bat
echo ###    Executando projeto.
cd backend
node dist/main.js