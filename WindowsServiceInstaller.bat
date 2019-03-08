echo off
:: Set service file name without extension (.exe)

SET serviceFileName=myServiceName


:: Stop Service if Exists
SC STOP %serviceFileName%

:: Delete Service if Exists
SC DELETE %serviceFileName%

cls

SET exe=%~dp0Release\%serviceFileName%.exe

echo Given Exe file path is:
echo %exe%
echo:
set cmd= C:\Windows\Microsoft.NET\Framework\v4.0.30319\installutil.exe %exe%

echo command about to run
echo %cmd%
echo:
echo:
echo ......................
%cmd%
echo ......................
echo:
echo:

::C:\Windows\Microsoft.NET\Framework\v4.0.30319\installutil.exe %~dp0Release\TirunNotify.exe
pause
if ERRORLEVEL 1 goto error
exit
:error
echo There was a problem 
echo Run cmd as Administrator to install service
pause
