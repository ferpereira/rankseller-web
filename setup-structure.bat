@echo off
setlocal

REM ============================================
REM Estrutura Next.js - Windows
REM Cria apenas o que não existir
REM ============================================

REM Diretórios
mkdir src 2>nul
mkdir src\app 2>nul
mkdir src\app\dashboard 2>nul
mkdir src\app\products 2>nul
mkdir src\app\products\[id] 2>nul

mkdir src\components 2>nul
mkdir src\components\layout 2>nul
mkdir src\components\dashboard 2>nul
mkdir src\components\products 2>nul

mkdir src\data 2>nul
mkdir src\types 2>nul

REM Arquivos app
type nul > src\app\page.tsx
type nul > src\app\dashboard\page.tsx
type nul > src\app\products\page.tsx
type nul > src\app\products\[id]\page.tsx

REM Arquivos components/layout
type nul > src\components\layout\Sidebar.tsx
type nul > src\components\layout\Header.tsx

REM Arquivos components/dashboard
type nul > src\components\dashboard\MetricCard.tsx
type nul > src\components\dashboard\OrganicScoreCard.tsx

REM Arquivos components/products
type nul > src\components\products\ProductTable.tsx
type nul > src\components\products\ProductScoreBadge.tsx

REM Arquivos data/types
type nul > src\data\mockProducts.ts
type nul > src\types\product.ts

echo.
echo Estrutura criada com sucesso!
pause