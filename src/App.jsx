import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import MedicalTeam from "./views/MedicalTeam";
import Appointments from "./views/Appointments";
import EquipoMedico from "./views/EquipoMedico";
import Servicios from "./views/Servicios";
import logo from "./assets/logo-horizontal.png";
import DoctorList from "./components/DoctorList";

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav>
          <img
            src={logo}
            alt="Logo del Hospital"
            style={{ display: "inline-block", width: "150px" }}
          />
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/equipo-medico">Equipo Médico</Link></li>
            <li><Link to="/citas">Citas</Link></li>
          </ul>
        </nav>
        <div>
      <DoctorList />
    </div>

        {/* Configuración de Rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equipo-medico" element={<EquipoMedico />} />
          <Route path="/citas" element={<Appointments />} />
          <Route path="/servicios" element={<Servicios />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
