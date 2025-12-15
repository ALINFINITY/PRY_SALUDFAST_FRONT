// Auth_module.tsx - MODIFICACIÓN SUGERIDA 
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { MenuModule } from "./Menu_module";
import { RoutesModule } from "./Routes_module";

export const AuthModule = () => {
  const [autenticateFlag, _setAutenticateFlag] = useState(true); // Cambiar a false TRUE para desarrollo
  const location = useLocation();

  // Rutas públicas que NO muestran menú
  const publicRoutes = ["/", "/login", "/register"];
  const isPublicRoute = publicRoutes.includes(location.pathname);

  // Si es ruta pública, mostrar solo las rutas (sin menú)
  if (isPublicRoute) {
    return <RoutesModule />;
  }

  // Si está autenticado y no es ruta pública, mostrar menú
  if (autenticateFlag) {
    return (
      <>
        <MenuModule />
        <RoutesModule />
      </>
    );
  }

  // Si no está autenticado y no es ruta pública, redirigir a login
  return <RoutesModule />;
};
