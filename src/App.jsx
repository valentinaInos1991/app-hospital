import { useState } from "react";
import "./App.css";
import DoctorCard from "./components/DoctorCard";
import ServiceList from "./components/ServiceList";
import DoctorList from "./components/DoctorList";
import AppointmentForm from "./components/AppointmentForm";
import logo from "./assets/logo-horizontal.png";
import Modal from "./components/Modal";
import React, {Profiler} from "react";


function App() {
  const servicios = ["Cardiología", "Pediatría", "Neurología", "Radiología"];
  const doctores = [
    { id: 1, nombre: "Dr. Carlos", especialidad: "Cardiología" },
    { id: 2, nombre: "Dra. Ana", especialidad: "Pediatría" },
  ];

  // Estados
  const [doctorSeleccionado, setDoctorSeleccionado] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Funciones para abrir y cerrar el modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

// Funciones para el Profiler
  const logProfiler = (id, phase, actualTime, baseTime, startTime, commitTime, interactions) => {
    console.log(`ID: ${id}`);
    console.log(`Fase: ${phase}`); // "mount" o "update"
    console.log(`Tiempo real: ${actualTime} ms`);
    console.log(`Tiempo base: ${baseTime} ms`);
    console.log(`Tiempo de inicio: ${startTime}`);
    console.log(`Tiempo de commit: ${commitTime}`);
    console.log(`Interacciones:`, interactions);
  };
  

  return (
    <>
      {/* Logo del Hospital */}
      <img
        src={logo}
        alt="Logo del Hospital"
        style={{ display: "block", margin: "20px auto", width: "220px" }}
      />
      <h1>Sistema de Gestión Hospital Cordis</h1>

      {/* Doctor List */}
      <Profiler id="DoctorList" onRender={logProfiler}>
        <DoctorList />
      </Profiler>

       {/* Doctor Card */}
       <DoctorCard />
    

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

       {/* Botón para abrir el modal */}
       <button onClick={openModal} style={{ margin: "10px 0" }}>
        Ver Detalles del Doctor
      </button>

      {/* Modal para mostrar detalles del doctor */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Detalles del Doctor</h2>
        {doctorSeleccionado ? (
          <div>
            <p>Nombre: {doctorSeleccionado}</p>
            <p>
              Especialidad:{" "}
              {
                doctores.find((doc) => doc.nombre === doctorSeleccionado)
                  ?.especialidad
              }
            </p>
          </div>
        ) : (
          <p>No has seleccionado un doctor.</p>
        )}
      </Modal>

      {/* Lista de servicios */}
      <ServiceList servicios={["Cardiología", "Pediatría", "Neurología", "Radiología"]} />

      {/* Formulario de citas - Pasar doctor seleccionado como prop */}
      <AppointmentForm doctorInicial={doctorSeleccionado} />
    </>
  );
}

export default App;
