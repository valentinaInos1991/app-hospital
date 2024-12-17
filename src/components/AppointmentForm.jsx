import React, { useState, useEffect } from "react";

const AppointmentForm = ({ doctorInicial }) => {
  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    fecha: "",
    doctor: doctorInicial || "", // Usa doctorInicial como valor inicial
  });

  // Efecto para actualizar el estado si cambia doctorInicial
  useEffect(() => {
    setFormData((prevData) => ({ ...prevData, doctor: doctorInicial }));
  }, [doctorInicial]);

  // Manejo de cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejo del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cita Agendada", formData);
    alert("Cita Agendada Correctamente");
  };

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <h2>Agendar Cita</h2>
      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Fecha:
        <input
          type="date"
          name="fecha"
          value={formData.fecha}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Doctor:
        <input
          type="text"
          name="doctor"
          value={formData.doctor}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Agendar</button>
    </form>
  );
};

export default AppointmentForm;


      