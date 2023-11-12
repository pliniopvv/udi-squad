@echo off
cls

echo ###    Compilando arquivos.
start /wait cmd /C build.bat
echo ###    Executando projeto.
node backend/dist/main.js