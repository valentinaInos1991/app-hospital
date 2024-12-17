import { useState } from 'react';
import './App.css';
import DoctorCard from "./components/DoctorCard";
import ServiceList from './components/ServiceList';
import AppointmentForm from './components/AppointmentForm';
import logo from "./assets/logo-horizontal.png"; 

function App() {
  const servicios = ["Cardiología", "Pediatría", "Neurología" , "Radiología"];
  const doctores = [
    { id: 1, nombre: "Dr. Carlos", especialidad: "Cardiología" },
    { id: 2, nombre: "Dra. Ana", especialidad: "Pediatría" },
  ];

  // Estado para manejar el doctor seleccionado (inicialmente vacío)
  const [doctorSeleccionado, setDoctorSeleccionado] = useState("");
   return (
    <>
    <div>
      {/* Logo del Hospital */}
      <img
        src={logo}
        alt="Logo del Hospital"
        style={{ display: "block", margin: "20px auto", width: "220px" }}
      />
      <h1>Sistema de Gestión Hospital Cordis</h1>

        {/* Selector de doctor */}
        <label>
        Selecciona un Doctor:
        <select
          value={doctorSeleccionado}
          onChange={(e) => setDoctorSeleccionado(e.target.value)}
        >
          <option value="">-- Selecciona --</option>
          {doctores.map((doctor) => (
            <option key={doctor.id} value={doctor.nombre}>
              {doctor.nombre} - {doctor.especialidad}
            </option>
          ))}
        </select>
      </label>

      {/*Service List*/}
      <ServiceList servicios={servicios} />

      {/* Formulario de citas - Pasar doctor seleccionado como prop */}
      <AppointmentForm doctorInicial={doctorSeleccionado} />
    
    </div>
    </>
  )
}

export default App
