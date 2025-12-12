import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";

export const MenuModule = () => {
  const navigate = useNavigate();

  // Aqui se registran las rutas del menu
  const items = [
    {
      label: "Inicio",
      icon: "pi pi-home",
      command: () => navigate("/")
    },
    {
      label: "Pacientes",
      icon: "pi pi-users",
      command: () => navigate("/pacientes")
    },
    {
      label: "Médicos",
      icon: "pi pi-id-card",
      command: () => navigate("/medicos")
    },
    {
      label: "Citas",
      icon: "pi pi-calendar",
      command: () => navigate("/citas")
    },
    {
      label: "Salir",
      icon: "pi pi-sign-out",
      command: () => {
        navigate("/login");
      }
    }
  ];

  return (
    <div className="card">
      <Menubar model={items} />
    </div>
  );
};
