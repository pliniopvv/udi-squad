@echo off
cls

cd frontend
echo ###       Compilando o frontend ...
start /wait cmd /C ng build
cd ..

cd backend
echo ###       Compilando o backend ...
start /wait cmd /C nest build
cd ..

echo ###        Finalizado.

