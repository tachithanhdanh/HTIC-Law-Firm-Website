@echo off
set PAGES_DIR=pages

:: Tạo thư mục nếu chưa có
if not exist %PAGES_DIR% mkdir %PAGES_DIR%

:: Tạo các file
echo > %PAGES_DIR%\index.tsx
echo > %PAGES_DIR%\about.tsx
echo > %PAGES_DIR%\services.tsx
echo > %PAGES_DIR%\projects.tsx
echo > %PAGES_DIR%\news.tsx
echo > %PAGES_DIR%\consult.tsx
echo > %PAGES_DIR%\japanese.tsx
echo > %PAGES_DIR%\contact.tsx

echo Files have been created in the "pages" directory.
pause
