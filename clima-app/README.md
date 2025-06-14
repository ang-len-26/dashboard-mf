# 🌤️ Clima App (Microfrontend)

Este microfrontend muestra información climática actual, utilizando una interfaz visual dinámica basada en tarjetas animadas. Se integra dentro del contenedor principal (`shell`) mediante **Module Federation** de **Webpack 5**.

## 🌐 ¿Qué hace este módulo?

El módulo de clima:

- Consulta datos meteorológicos desde la API de [Open-Meteo](https://open-meteo.com/).
- Muestra tarjetas con información como:
  - Condición general
  - Temperatura actual
  - Humedad relativa
  - Visibilidad
  - Precipitación
  - Velocidad de viento
- Incluye animaciones, fondos temáticos e interfaz expandible para mostrar más detalles.

## 🛠️ Tecnologías utilizadas

- React
- TypeScript
- Chart
- Webpack 5 + Module Federation
- Context API (para estado global del clima)
- Animaciones CSS
- API pública de Open-Meteo

## 📁 Estructura del proyecto

clima-app/
├── public/
│ │ └── svg/ # diseño de iconos
├── src/
│ ├── components/
│ │ ├── Cards/ # Tarjetas: Condition, Temperature, etc.
│ │ ├── icons/
│ │ └── UI/
│ ├── context/ # WeatherContext y WeatherDataContext
│ ├── hooks/ # useWeather
│ ├── pages/
│ │ └── Home.tsx # Página principal del clima
│ ├── services/ # API para obtener datos climáticos
│ ├── styles/ # diseños .css
│ ├── types/ # Tipos para datos del clima
│ ├── App.tsx # Componente raíz
│ ├── bootstrap.tsx
│ └── index.tsx #
├── webpack.config.js # Configuración de Webpack con Module Federation
└── package.json

## ⚙️ Puerto de desarrollo

Por defecto, este microfrontend corre en el puerto `3001`.

## ▶️ Instrucciones para clonar y ejecutar

Desde la raíz del proyecto:

```bash
# Ve al microfrontend de clima
cd clima-app

# Instala dependencias
npm install

# Ejecuta la app
npm start

```
