import axios from "axios";

const API_URL = "http://localhost:8000/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const authService = {
  // Registro de usuario (paciente o médico)
  register: (data: any) => {
    return api.post("/auth/register", data);
  },

  // Especialidades - NECESARIO para el dropdown cuando rol = "médico"
  getEspecialidades: () => {
    return api.get("/especialidades");
  },
};
