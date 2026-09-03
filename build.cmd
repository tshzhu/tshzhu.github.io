@echo off
setlocal
cd /d "%~dp0"
python jemdoc.py -c mysite.conf *.jemdoc
if errorlevel 1 (
  echo jemdoc build failed.
  exit /b %errorlevel%
)
echo jemdoc build completed.
