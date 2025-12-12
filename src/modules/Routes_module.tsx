import { Route, Routes } from "react-router-dom";
import { HomeModule } from "./Home_module";
import { NotFoundModule } from "./NotFound_module";

export const RoutesModule = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeModule />} />
        <Route path="*" element={<NotFoundModule />} />
        {/*En este archivo deben ir registrando las rutas hacia sus modulos */}
        
      </Routes>
    </>
  );
};
