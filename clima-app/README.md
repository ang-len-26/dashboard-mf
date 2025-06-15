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

- clima-app/
- ├── public/
- │ └── svg/ # Iconos SVG temáticos del clima
- ├── src/
- │ ├── components/ # Componentes reutilizables
- │ │ ├── Cards/ # Tarjetas del clima: ConditionCard, TemperatureCard, etc.
- │ │ ├── icons/ # Iconos en formato JSX o SVG importados como componentes
- │ │ └── UI/ # Elementos de interfaz reutilizables (botones, loaders, etc.)
- │ ├── context/ # Contextos globales: WeatherContext y WeatherDataContext
- │ ├── hooks/ # Hooks personalizados, como useWeather
- │ ├── pages/
- │ │ └── Home.tsx # Página principal que renderiza las tarjetas
- │ ├── services/ # Lógica de consumo de API (fetchWeather, etc.)
- │ ├── styles/ # Archivos CSS o módulos de estilos
- │ ├── types/ # Tipos TypeScript para los datos del clima
- │ ├── App.tsx # Componente raíz de la aplicación
- │ ├── bootstrap.tsx # Punto de entrada para inicializar el microfrontend (Module Federation)
- │ └── index.tsx # Renderizado del microfrontend en el DOM
- ├── webpack.config.js # Configuración de Webpack con Module Federation
- └── package.json # Dependencias y scripts del proyecto

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
