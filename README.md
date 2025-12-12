# SALUDFAST

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Integrantes

- Quilumbaquin Pillisa Alan David (PM)


# 🚀 Instalación del Proyecto

## Clonar el repositorio

git clone https://github.com/ALINFINITY/PRY_SALUDFAST_FRONT.git

## Ingresar al proyecto

cd /PRY_SALUDFAST_FRONT

##  Instalar dependencias
npm install

##  Ejecutar 
npm run dev

# 🛠️ Tech Stack

Este proyecto utiliza las siguientes tecnologías y librerías principales:

---

## 💾 Almacenamiento de Sesión

### **LocalStorage**  
El sistema utiliza **LocalStorage** para guardar y persistir datos simples del usuario, como:

- Tokens de sesión 
- Datos temporales esenciales  
- Estados de usuario entre recargas  

Esto permite mantener al usuario autenticado o conservar configuraciones básicas mientras el navegador permanezca abierto.

---

## ⚛️ Frontend

### **React – v19.2.0**  
Librería principal para la construcción de interfaces de usuario.

### **React Router DOM – v7.10.1**  
Sistema de enrutamiento para navegación SPA.

---

## 🎨 UI y Estilos

### **PrimeReact – v10.9.7**  
Conjunto de componentes UI modernos y personalizables.

### **PrimeIcons – v7.0.0**  
Iconos utilizados por los componentes PrimeReact.

### **PrimeFlex – v4.0.0**  
Framework CSS utilitario para layouts, grids, spacing y diseño responsivo.

---

## 🌐 HTTP

### **Axios – v1.13.2**  
Cliente HTTP para consumo de APIs.

---

## 📦 Estructura y Build

El proyecto utiliza **Vite** para:

- Servidor de desarrollo rápido  
- Compilación optimizada para producción  

---

## 🖥️ Requisitos de entorno

- Node.js **16+**
- Navegadores modernos (Chrome, Edge, Firefox, Safari)