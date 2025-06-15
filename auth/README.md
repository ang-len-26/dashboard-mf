# 🔐 Auth App (Microfrontend)

Este microfrontend maneja el flujo de autenticación de usuarios dentro del sistema de micro-frontends. Está diseñado para ser independiente, reutilizable y consumido por el contenedor principal (`shell`) mediante **Module Federation**.

## 🔑 ¿Qué hace este módulo?

`auth-app` permite:

- Iniciar sesión con correo/contraseña (u otros proveedores en el futuro)
- Controlar el estado de sesión y token de autenticación (JWT)
- Compartir la sesión con el `shell` y otros microfrontends
- Mostrar formularios de login y logout

> ⚠️ Este módulo se encuentra **en desarrollo**. Pronto incluirá recuperación de contraseña, registro y gestión de sesión global.

## 🛠️ Tecnologías utilizadas

- React
- TypeScript
- Webpack 5 + Module Federation
- JWT para manejo de sesión
- Context API o Zustand (según implementación futura)

## 📁 Estructura del proyecto

- auth/
- ├── public/
- ├── src/
- │ ├── components/ # Formularios de login, mensajes
- │ ├── pages/
- │ │ └── Login.tsx # Página principal de login
- │ ├── context/ # Manejo del estado de autenticación
- │ ├── services/ # Lógica para autenticación con backend
- │ ├── types/ # Tipos TypeScript
- │ ├── App.tsx # Componente raíz de la aplicación
- │ ├── bootstrap.tsx # Punto de entrada para inicializar el microfrontend (Module Federation)
- │ └── index.tsx # Renderizado del microfrontend en el DOM
- ├── webpack.config.js
- └── package.json

## ⚙️ Puerto de desarrollo

Este microfrontend corre por defecto en el puerto `3003`.

## ▶️ Instrucciones para clonar y ejecutar

```bash
# Ve al directorio del microfrontend
cd auth

# Instala las dependencias
npm install

# Ejecuta la app en modo desarrollo
npm start
```
