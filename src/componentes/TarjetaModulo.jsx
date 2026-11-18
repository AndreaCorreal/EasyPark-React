import React from 'react';
import '../assets/estilos/TarjetaModulo.css';

// Componente funcional reutilizable: muestra un módulo de Easy Park.
// Recibe por props la imagen, el título, la descripción y la función
// que se ejecuta al presionar el botón.
export function TarjetaModulo(props) {
  return (
    <div className="contenedor-modulo">
      <img
        className="imagen-modulo"
        src={props.imagen}
        alt={'Imagen del módulo ' + props.titulo}
      />
      <div className="texto-modulo">
        <p className="titulo-modulo">{props.titulo}</p>
        <p className="descripcion-modulo">{props.descripcion}</p>
        <button
          className="boton-modulo"
          onClick={() => props.alSeleccionar(props.titulo)}
        >
          Ingresar al módulo
        </button>
      </div>
    </div>
  );
}
