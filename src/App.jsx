import { useState } from 'react';
import './App.css';
import { Encabezado } from './componentes/Encabezado';
import { TarjetaModulo } from './componentes/TarjetaModulo';
import { TarjetaTarifa } from './componentes/TarjetaTarifa';

// Lista con los módulos de Easy Park.
// Cada elemento tiene los datos que se le envían por props al componente TarjetaModulo.
const modulosEasyPark = [
  {
    id: 1,
    imagen: '/imagenes/vehiculos.svg',
    titulo: 'Vehículos',
    descripcion:
      'Registro de los vehículos con su placa, tipo, marca, color y los datos del propietario. Permite consultar un vehículo por placa o ver todos los registrados.',
  },
  {
    id: 2,
    imagen: '/imagenes/entradas.svg',
    titulo: 'Entradas',
    descripcion:
      'Registro de la entrada de cada vehículo al parqueadero. Guarda la fecha y la hora de ingreso, el espacio asignado y el operador que hizo el registro.',
  },
  {
    id: 3,
    imagen: '/imagenes/espacios.svg',
    titulo: 'Espacios',
    descripcion:
      'Consulta de los espacios del parqueadero para automóviles y motocicletas, indicando cuáles están disponibles y cuáles están ocupados.',
  },
  {
    id: 4,
    imagen: '/imagenes/tarifas.svg',
    titulo: 'Tarifas',
    descripcion:
      'Valores que se cobran por hora y por fracción según el tipo de vehículo. Son la base para calcular el pago cuando el vehículo sale.',
  },
  {
    id: 5,
    imagen: '/imagenes/usuarios.svg',
    titulo: 'Usuarios',
    descripcion:
      'Administración de las personas que usan el sistema. El administrador gestiona la información y los operadores registran las entradas y salidas.',
  },
];

// Lista con las tarifas por tipo de vehículo (se envían al componente TarjetaTarifa).
const tarifasEasyPark = [
  { id: 1, imagen: '/imagenes/automovil.svg', tipo: 'Automóvil', valorHora: '$4.000', valorFraccion: '$2.000' },
  { id: 2, imagen: '/imagenes/motocicleta.svg', tipo: 'Motocicleta', valorHora: '$2.000', valorFraccion: '$1.000' },
  { id: 3, imagen: '/imagenes/camioneta.svg', tipo: 'Camioneta', valorHora: '$5.000', valorFraccion: '$2.500' },
];

function App() {
  // Estado para mostrar qué módulo eligió el usuario
  const [moduloSeleccionado, setModuloSeleccionado] = useState('');

  return (
    <div className="pagina">
      <Encabezado
        titulo="Bienvenido a Easy Park"
        subtitulo="Sistema de Gestión de Parqueaderos"
      />

      <main>
        <section id="modulos" className="seccion">
          <h2 className="titulo-seccion">Módulos del sistema</h2>
          <p className="texto-seccion">
            Easy Park organiza la operación del parqueadero en los siguientes módulos.
          </p>

          {moduloSeleccionado !== '' && (
            <p className="mensaje">
              Seleccionó el módulo <strong>{moduloSeleccionado}</strong>.
            </p>
          )}

          <div className="lista-modulos">
            {modulosEasyPark.map((item) => (
              <TarjetaModulo
                key={item.id}
                imagen={item.imagen}
                titulo={item.titulo}
                descripcion={item.descripcion}
                alSeleccionar={setModuloSeleccionado}
              />
            ))}
          </div>
        </section>

        <section id="tarifas" className="seccion seccion-tarifas">
          <h2 className="titulo-seccion">Tarifas</h2>
          <p className="texto-seccion">Valores vigentes según el tipo de vehículo.</p>

          <div className="lista-tarifas">
            {tarifasEasyPark.map((item) => (
              <TarjetaTarifa
                key={item.id}
                imagen={item.imagen}
                tipo={item.tipo}
                valorHora={item.valorHora}
                valorFraccion={item.valorFraccion}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="pie-pagina">
        Easy Park © 2026 - Sistema de Gestión de Parqueaderos
      </footer>
    </div>
  );
}

export default App;
