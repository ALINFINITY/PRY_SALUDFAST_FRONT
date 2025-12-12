import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export const NotFoundModule = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Página no encontrada</h1>
      <h3>La ruta que buscas no existe</h3>

      <Button
        label="Volver al inicio"
        icon="pi pi-home"
        severity="info"
        onClick={() => navigate("/")}
      />
    </>
  );
};
