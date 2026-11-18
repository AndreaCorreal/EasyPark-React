import React from 'react';
import '../assets/estilos/Encabezado.css';

// Componente funcional del encabezado de la página.
// Recibe por props el título y el subtítulo que se muestran sobre la imagen.
export function Encabezado(props) {
  return (
    <header className="encabezado">
      <nav className="barra-navegacion">
        <span className="marca">Easy Park</span>
        <div className="enlaces">
          <a href="#modulos">Módulos</a>
          <a href="#tarifas">Tarifas</a>
        </div>
      </nav>
      <div className="portada">
        <h1>{props.titulo}</h1>
        <p>{props.subtitulo}</p>
      </div>
    </header>
  );
}
