# 💰 Cripto App (Microfrontend)

Este microfrontend muestra información en tiempo real sobre criptomonedas populares y ofrece herramientas interactivas para análisis visual. Está diseñado como un módulo independiente que se integra con un contenedor principal (`shell`) mediante **Module Federation** de **Webpack 5**.

## 🌐 ¿Qué hace este módulo?

El módulo de criptomonedas permite:

- Consultar precios actualizados desde la API pública de **CoinGecko**.
- Visualizar un **Dashboard** interactivo con datos clave: precio actual, volumen, capitalización y cambios porcentuales.
- Ver el ranking de las principales criptomonedas.
- Comparar precios entre varias criptos.
- Aplicar filtros y personalizar la vista.
- Acceder a una sección de ayuda informativa.
- Configurar preferencias como moneda local e idioma.

## 🖥️ Características destacadas

- 🎛️ **Sidebar fijo y colapsable** con navegación modular.
- 🧠 **Contextos globales** para criptomonedas, preferencias del usuario y datos de mercado.
- 🧩 **Modales** con efecto `blur` para filtros, ayuda y configuración.
- 📈 **Componentes reutilizables** con diseño limpio y extensible.
- ⚡ **Cargas dinámicas** y arquitectura moderna basada en microfrontends.

## 🛠️ Tecnologías utilizadas

- React + TypeScript
- Webpack 5 + Module Federation
- TailwindCSS y estilos personalizados
- CoinGecko API
- Chart.js (opcional para visualizaciones)
- Context API + Hooks personalizados

## 📁 Estructura del proyecto

- cripto-app/
- ├── public/
- ├── src/
- │ ├── components/
- │ │ ├── Sidebar/ # Barra de navegación lateral
- │ │ └── sections/ # Secciones como Dashboard, Filtros, etc.
- │ ├── context/ # Contextos globales: Crypto, Settings, Market
- │ ├── hooks/ # Hooks personalizados (useCryptoData, etc.)
- │ ├── pages/
- │ │ └── CriptoDashboard.tsx # Página principal con layout dinámico
- │ ├── services/ # Acceso a la API externa
- │ ├── styles/ # Archivos CSS
- │ ├── types/ # Tipado para criptomonedas y datos de mercado
- │ ├── utils/ # Funciones auxiliares
- │ ├── App.tsx # Componente raíz
- │ ├── bootstrap.tsx # Integración con Module Federation
- │ └── index.tsx # Punto de entrada para renderizado
- ├── webpack.config.js
- └── package.json

## ⚙️ Puerto de desarrollo

Por defecto, este microfrontend se ejecuta en el puerto **`3002`**.

## ▶️ Instrucciones para clonar y ejecutar

```bash
# Clona el repositorio si aún no lo hiciste
git clone https://github.com/ang-len-26/cripto-app.git
cd cripto-app

# Instala las dependencias
npm install

# Ejecuta la app en modo desarrollo
npm start
```
