import { useState } from "react";
import { MenuModule } from "./Menu_module";
import { RoutesModule } from "./Routes_module";

// En este modulo se maneja la autenticacion de usuarios
export const AuthModule = () => {
  const [autenticateFlag, setAutenticateFlag] = useState(true); // Por defecto debe ir false
  if (autenticateFlag) {
    return (
      <>
        <MenuModule />
        <RoutesModule></RoutesModule>
      </>
    );
  } else {
    return(<>
    <h1>Requiere autenticacion</h1></>)
  }
};
