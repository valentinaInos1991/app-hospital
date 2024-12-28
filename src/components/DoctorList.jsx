import { useState, useEffect } from "react";

const DoctorList = ()=>{
    const [doctors, setDoctors] = useState([]);
    
    useEffect(()=>{
       // Datos simulados
    const simuledData = [
        { id: 1, name: "Dr. Ana Pérez", specialty: "Cardiología" },
        { id: 2, name: "Dr. Luis Gómez", specialty: "Pediatría" },
        { id: 3, name: "Dr. María López", specialty: "Dermatología" },
      ];
      setDoctors(simuledData); // Asigna los datos simulados al estado
    }, []);
    
    return (
        <div>
          <h3>Listado de Doctores uso DOM Virtual</h3>
          <ul className="doctor-list">
            {doctors.map((doctor) => (
                <li key={doctor.id} className="doctor-item">
                {doctor.name} - {doctor.specialty}
                </li>
            ))}
            </ul>
        </div>
      );
    };
    

export default DoctorList;
