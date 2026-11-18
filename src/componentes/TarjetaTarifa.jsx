import React from 'react';
import '../assets/estilos/TarjetaTarifa.css';

// Componente funcional reutilizable: muestra la tarifa de un tipo de vehículo.
// Recibe por props la imagen, el tipo de vehículo, el valor por hora
// y el valor por fracción.
export function TarjetaTarifa(props) {
  return (
    <div className="contenedor-tarifa">
      <img
        className="imagen-tarifa"
        src={props.imagen}
        alt={'Imagen de ' + props.tipo}
      />
      <p className="tipo-tarifa">{props.tipo}</p>
      <p className="valor-tarifa">{props.valorHora}</p>
      <p className="detalle-tarifa">por hora</p>
      <p className="fraccion-tarifa">Fracción (30 min): {props.valorFraccion}</p>
    </div>
  );
}
