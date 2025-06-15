# 🧩 Dashboard Modular con Micro-Frontends (Shell)

Este proyecto actúa como el contenedor principal (`shell`) de una arquitectura basada en **Micro-Frontends** utilizando **React**, **TypeScript**, **Webpack 5** y **Module Federation**. Su objetivo es integrar de forma dinámica diferentes módulos funcionales (como clima, criptomonedas y autenticación), ofreciendo una experiencia de usuario unificada y escalable.

## 🚀 ¿Qué hace este módulo?

El `shell` es responsable de:

- Cargar dinámicamente los microfrontends (como clima y cripto).
- Proporcionar la navegación y el layout común.
- Compartir estado global (por ejemplo, autenticación).
- Centralizar configuraciones de estilo o librerías compartidas.

## 🛠️ Tecnologías utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Webpack 5](https://webpack.js.org/)
- [Module Federation](https://webpack.js.org/concepts/module-federation/)
- [React Router](https://reactrouter.com/)

## 📁 Estructura del proyecto

- shell/
- ├── public/ # Archivos estáticos
- ├── src/
- │ ├── components/ # Componentes compartidos (navbar, layout, etc.)
- │ ├── context/ #
- │ ├── pages/ # Páginas principales del shell
- │ ├── types/ # Tipos TypeScript comunes
- │ └── App.tsx # Componente raíz
- ├── webpack.config.js # Configuración Webpack con Module Federation
- └── package.json

## ⚙️ Requisitos

- Node.js `^18.x`
- NPM `^9.x` o superior

## ▶️ Instrucciones para clonar y ejecutar

Desde la raíz del repositorio:

```bash
# Clona el repositorio
git clone https://github.com/ang-len-26/dashboard-mf.git
cd dashboard-mf

# Arranca el shell
cd shell
npm install
npm start
```
