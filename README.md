# Easy Park - Página en React JS

Página web del proyecto **Easy Park - Sistema de Gestión de Parqueaderos**, desarrollada con React JS y Vite.

Evidencia: GA7-220501096-AA4-EV03. Componente front-end del proyecto formativo.
Aprendiz: Andrea Correal - Ficha 3186667.

## Componentes

- `Encabezado`: barra de navegación y portada (props: titulo, subtitulo).
- `TarjetaModulo`: tarjeta reutilizable de cada módulo (props: imagen, titulo, descripcion, alSeleccionar).
- `TarjetaTarifa`: tarjeta reutilizable de cada tarifa (props: imagen, tipo, valorHora, valorFraccion).

En `App.jsx` los datos están en las listas `modulosEasyPark` y `tarifasEasyPark`, que se recorren con `map()` para crear las tarjetas.

## Ejecución

```
npm install
npm run dev
```
