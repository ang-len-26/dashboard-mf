# 💰 Cripto App (Microfrontend)

Este microfrontend muestra información en tiempo real sobre criptomonedas populares. Está diseñado como un módulo independiente que se integra con el contenedor principal (`shell`) mediante **Module Federation** de **Webpack 5**.

## 🌐 ¿Qué hace este módulo?

El módulo de criptomonedas:

- Consulta precios de criptomonedas desde una API pública (ej: CoinGecko, CoinMarketCap, etc.).
- Muestra tarjetas visuales con información como:
  - Nombre de la criptomoneda
  - Precio actual
  - Variación porcentual
  - Icono de la moneda y gráficos (en desarrollo)
- Es fácilmente extensible para agregar más monedas o indicadores.

> ⚠️ Nota: Este microfrontend está en etapa base y puede expandirse con gráficos, filtros o historiales de precios.

## 🛠️ Tecnologías utilizadas

- React
- TypeScript
- Webpack 5 + Module Federation
- API pública de criptomonedas
- CSS Modules

## 📁 Estructura del proyecto

cripto-app/
├── public/
├── src/
│ ├── components/ # Tarjetas, listas o detalles
│ ├── context/
│ ├── hooks
│ ├── pages/
│ │ └── Home.tsx # Página principal de criptos
│ ├── services/ # Lógica para consumir API externa
│ ├── styles/
│ ├── types/ # Tipos y modelos de datos
│ ├── utils/
│ └── App.tsx
├── webpack.config.js
└── package.json

## ⚙️ Puerto de desarrollo

Este microfrontend corre por defecto en el puerto `3002`.

## ▶️ Instrucciones para clonar y ejecutar

```bash
# Ve al directorio del microfrontend
cd cripto-app

# Instala las dependencias
npm install

# Ejecuta la app en modo desarrollo
npm start
```
