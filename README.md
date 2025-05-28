# Dashboard Modular con Micro-Frontends

Este proyecto implementa una arquitectura de micro-frontends usando React, TypeScript, Webpack 5 y Module Federation.

## Estructura de los Microfrontends

- `shell/`: Aplicación contenedora que orquesta los módulos.
- `clima-app/`: Módulo de clima.
- `cripto-app/`: Módulo de criptomonedas.
- `auth/`: Módulo de autenticación (en desarrollo).

## Requisitos

- Node.js (v18.x recomendado)
- NPM

## Instalación y ejecución

Desde la raíz:

```bash
cd shell && npm install && npm start
cd ../clima-app && npm install && npm start
cd ../cripto-app && npm install && npm start
cd ../auth && npm install && npm start
```
