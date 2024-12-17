import React from 'react'; 

const DoctorCard = ({ nombre, especialidad, experiencia }) => {
  return (
    <div className="doctor-card">
      <h2>{nombre}</h2>
      <p>Especialidad: {especialidad}</p>
      <p>Años de Experiencia: {experiencia}</p>
    </div>
  );
};

export default DoctorCard;
