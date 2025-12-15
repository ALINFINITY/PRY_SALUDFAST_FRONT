import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export const HomeModule = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Gestión de citas médicas SALUTFAST</h1>
      
      <div className="flex gap-3 justify-content-center mt-4">
        <Button 
          label="Iniciar sesión" 
          icon="pi pi-sign-in"
          onClick={() => navigate("/login")} 
        />
        <Button 
          label="Registrarse" 
          icon="pi pi-user-plus"
          severity="success"
          onClick={() => navigate("/register")} 
        />
      </div>
    </>
  );
};
