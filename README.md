# Luxora-Ecom

Luxora is a refined watch e-commerce experience built with React, Vite, TypeScript, and Tailwind CSS.

## Run locally

```powershell
corepack enable
pnpm install
$env:PORT="8081"
$env:BASE_PATH="/"
pnpm --filter @workspace/luxora dev
```

Open [http://localhost:8081](http://localhost:8081).

## Production build

```powershell
$env:PORT="8081"
$env:BASE_PATH="/"
pnpm --filter @workspace/luxora build
```
