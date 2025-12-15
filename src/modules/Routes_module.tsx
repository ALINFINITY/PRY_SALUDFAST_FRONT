import { Route, Routes } from "react-router-dom";
import { HomeModule } from "./Home_module";
import { NotFoundModule } from "./NotFound_module";
import { PatientsModule } from "./Paciente_module";
import { RegisterModule } from "./Register_module"; 

export const RoutesModule = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeModule />} />        
        <Route path="*" element={<NotFoundModule />} />
        <Route path="/pacientes" element={<PatientsModule />} />
        <Route path="/register" element={<RegisterModule />} />

        {/* En este archivo se registran las rutas de los módulos */}
      </Routes>
    </>
  );
};

