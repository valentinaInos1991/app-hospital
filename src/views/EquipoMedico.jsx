import React, { useState, useEffect } from "react";
import { doctores } from "../data/data"; // Asegúrate de que la ruta sea correcta

const EquipoMedico = () => {
  const [equipo, setEquipo] = useState([]);

  useEffect(() => {
    // Simular la carga de datos
    const cargarDoctores = () => {
      setTimeout(() => {
        setEquipo(doctores); // Cargar los datos estáticos
      }, 500); // Simular un retraso
    };

    cargarDoctores();
  }, []);

  if (equipo.length === 0) return <p>Cargando doctores...</p>;

  return (
    <div>
      <h2>Equipo Médico</h2>
      {equipo.map((doctor) => (
        <div key={doctor.id}>
          <h3>{doctor.nombre}</h3>
          <p>Especialidad: {doctor.especialidad}</p>
        </div>
      ))}
    </div>
  );
};

export default EquipoMedico;
