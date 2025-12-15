import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Toast } from "primereact/toast";
import { Card } from "primereact/card";
import { authService } from "../services/auth.service";

export const RegisterModule = () => { 
  const navigate = useNavigate();
  const toast = useRef<Toast>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cedula: "",
    phone: "",
    role: "paciente",
    password: "",
    password_confirmation: "",
    fecha_nacimiento: null as Date | null,
    genero: "",
    direccion: "",
    // Paciente
    contacto_emergencia: "",
    telefono_emergencia: "",
    historial_clinico: "",
    // Médico
    especialidad_id: null as number | null,
    numero_licencia: "",
    titulo: "",
    universidad_graduacion: "",
    consultorio: "",
  });

  const [loading, setLoading] = useState(false);
  const [especialidades, setEspecialidades] = useState<any[]>([]);

  const roles = [
    { label: "Paciente", value: "paciente" },
    { label: "Médico", value: "medico" },
  ];

  const generos = [
    { label: "Masculino", value: "masculino" },
    { label: "Femenino", value: "femenino" },
    { label: "Otro", value: "otro" },
  ];

  useEffect(() => {
    loadEspecialidades();
  }, []);

  const loadEspecialidades = async () => {
    try {
      const response = await authService.getEspecialidades();
      const items = response.data.itemListElement || [];
      setEspecialidades(
        items.map((item: any) => ({
          label: item.item.name,
          value: item.item.identifier,
        }))
      );
    } catch (error) {
      console.error("Error cargando especialidades:", error);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const payload: any = {
        name: formData.name,
        email: formData.email,
        cedula: formData.cedula,
        phone: formData.phone,
        role: formData.role,
        password: formData.password,
        password_confirmation: formData.password_confirmation,
        fecha_nacimiento: formData.fecha_nacimiento
          ? formData.fecha_nacimiento.toISOString().split("T")[0]
          : "",
        genero: formData.genero,
        direccion: formData.direccion || null,
      };

      if (formData.role === "paciente") {
        payload.contacto_emergencia = formData.contacto_emergencia;
        payload.telefono_emergencia = formData.telefono_emergencia;
        payload.historial_clinico = formData.historial_clinico || null;
      } else if (formData.role === "medico") {
        payload.especialidad_id = formData.especialidad_id;
        payload.numero_licencia = formData.numero_licencia;
        payload.titulo = formData.titulo;
        payload.universidad_graduacion = formData.universidad_graduacion;
        payload.consultorio = formData.consultorio;
      }

      await authService.register(payload);

      toast.current?.show({
        severity: "success",
        summary: "Registro exitoso",
        detail: "Ahora puede iniciar sesión",
        life: 3000,
      });

      setTimeout(() => navigate("/login"), 2000);
    } catch (error: any) {
      const message =
        error.response?.data?.message || "Error al registrar usuario";
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: message,
        life: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toast ref={toast} />
      <div className="flex justify-content-center align-items-center">
        <Card title="Registro de Usuario - SALUDFAST" style={{ width: "500px" }}>
          <div className="p-fluid">
            {/* CAMPOS COMUNES */}
            <div className="field">
              <label>Nombre completo *</label>
              <InputText
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="field">
              <label>Correo electrónico *</label>
              <InputText
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="field">
              <label>Cédula (10 dígitos) *</label>
              <InputText
                value={formData.cedula}
                maxLength={10}
                onChange={(e) => setFormData({ ...formData, cedula: e.target.value })}
              />
            </div>

            <div className="field">
              <label>Teléfono *</label>
              <InputText
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="field">
              <label>Rol *</label>
              <Dropdown
                value={formData.role}
                options={roles}
                onChange={(e) => setFormData({ ...formData, role: e.value })}
                placeholder="Seleccione un rol"
              />
            </div>

            <div className="field">
              <label>Fecha de nacimiento *</label>
              <Calendar
                value={formData.fecha_nacimiento}
                onChange={(e) => setFormData({ ...formData, fecha_nacimiento: e.value as Date })}
                dateFormat="yy-mm-dd"
                showIcon
              />
            </div>

            <div className="field">
              <label>Género *</label>
              <Dropdown
                value={formData.genero}
                options={generos}
                onChange={(e) => setFormData({ ...formData, genero: e.value })}
                placeholder="Seleccione género"
              />
            </div>

            <div className="field">
              <label>Dirección</label>
              <InputText
                value={formData.direccion}
                onChange={(e) => setFormData({ ...formData, direccion: e.target.value })}
              />
            </div>

            {/* CAMPOS PACIENTE */}
            {formData.role === "paciente" && (
              <>
                <div className="field">
                  <label>Contacto de emergencia *</label>
                  <InputText
                    value={formData.contacto_emergencia}
                    onChange={(e) =>
                      setFormData({ ...formData, contacto_emergencia: e.target.value })
                    }
                  />
                </div>
                <div className="field">
                  <label>Teléfono de emergencia *</label>
                  <InputText
                    value={formData.telefono_emergencia}
                    onChange={(e) =>
                      setFormData({ ...formData, telefono_emergencia: e.target.value })
                    }
                  />
                </div>
              </>
            )}

            {/* CAMPOS MÉDICO */}
            {formData.role === "medico" && (
              <>
                <div className="field">
                  <label>Especialidad *</label>
                  <Dropdown
                    value={formData.especialidad_id}
                    options={especialidades}
                    onChange={(e) => setFormData({ ...formData, especialidad_id: e.value })}
                    placeholder="Seleccione especialidad"
                  />
                </div>
                <div className="field">
                  <label>Número de licencia *</label>
                  <InputText
                    value={formData.numero_licencia}
                    onChange={(e) =>
                      setFormData({ ...formData, numero_licencia: e.target.value })
                    }
                  />
                </div>
                <div className="field">
                  <label>Título profesional *</label>
                  <InputText
                    value={formData.titulo}
                    onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
                  />
                </div>
                <div className="field">
                  <label>Universidad de graduación *</label>
                  <InputText
                    value={formData.universidad_graduacion}
                    onChange={(e) =>
                      setFormData({ ...formData, universidad_graduacion: e.target.value })
                    }
                  />
                </div>
                <div className="field">
                  <label>Consultorio *</label>
                  <InputText
                    value={formData.consultorio}
                    onChange={(e) => setFormData({ ...formData, consultorio: e.target.value })}
                  />
                </div>
              </>
            )}

            {/* CONTRASEÑAS */}
            <div className="field">
              <label>Contraseña *</label>
              <Password
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                toggleMask
                feedback={false}
              />
            </div>
            <div className="field">
              <label>Confirmar contraseña *</label>
              <Password
                value={formData.password_confirmation}
                onChange={(e) =>
                  setFormData({ ...formData, password_confirmation: e.target.value })
                }
                toggleMask
                feedback={false}
              />
            </div>

            {/* BOTONES */}
            <div className="flex justify-content-between gap-2 mt-4">
              <Button
                label="Volver al login"
                severity="secondary"
                icon="pi pi-arrow-left"
                onClick={() => navigate("/login")}
              />
              <Button
                label="Registrarse"
                icon="pi pi-user-plus"
                severity="success"
                loading={loading}
                onClick={handleSubmit}
              />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};
