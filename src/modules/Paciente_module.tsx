import { useEffect, useRef, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";


let def_patients = [
  {
    id: 1,
    name: "Alan",
    email: "adquilumbaquin1@espe.edu.ec",
    phone: "0900000000",
  },
];

export const PatientsModule = () => {
  const [patients, setPatients] = useState<any[]>([]);
  const [patient, setPatient] = useState({
    id: null,
    name: "",
    email: "",
    phone: "",
  });
  const [dialogVisible, setDialogVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const toast = useRef<Toast>(null);

  // Cargar pacientes
  const loadPatients = async () => {
    // const response = await patientService.getAll();
    setPatients(def_patients);
    console.log("TODO: cargar pacientes desde API");
  };

  useEffect(() => {
    loadPatients();
  }, []);

  // Abrir modal: Crear
  const openNew = () => {
    setPatient({ id: null, name: "", email: "", phone: "" });
    setIsEdit(false);
    setDialogVisible(true);
  };

  // Abrir modal: Editar
  const openEdit = (row: any) => {
    setPatient({ ...row });
    setIsEdit(true);
    setDialogVisible(true);
  };

  // Guardar (Crear o Editar)
  const savePatient = async () => {
    if (!patient.name || !patient.email) {
      toast.current?.show({
        severity: "error",
        summary: "Datos no validos",
        detail: "Nombre y correo son obligatorios",
        life: 3000,
      });
      return;
    }

    if (isEdit) {
      // await patientService.update(patient.id, patient);
      console.log("TODO: editar paciente:", patient);
    } else {
      // await patientService.create(patient);
      console.log("TODO: crear paciente:", patient);
    }

    setDialogVisible(false);
    loadPatients();
  };

  // Eliminar
  const deletePatient = (row: any) => {
    confirmDialog({
      message: `¿Eliminar al paciente "${row.name}"?`,
      header: "Confirmación",
      icon: "pi pi-info-circle",
      acceptLabel: "Sí",
      rejectLabel: "No",
      acceptClassName: "p-button-danger",
      accept: async () => {
        // await patientService.delete(row.id);
        console.log("TODO: eliminar paciente:", row.id);
        loadPatients();
      },
    });
  };

  // Template de acciones
  const actionsBody = (row: any) => (
    <>
      <Button
        icon="pi pi-pencil"
        className="p-button-text p-button-warning"
        onClick={() => openEdit(row)}
      />
      <Button
        icon="pi pi-trash"
        className="p-button-text p-button-danger"
        onClick={() => deletePatient(row)}
      />
    </>
  );

  return (
    <>
      <Toast ref={toast} />
      <ConfirmDialog />

      <h1>Gestión de Pacientes</h1>

      <Button
        label="Nuevo Paciente"
        icon="pi pi-plus"
        severity="success"
        onClick={openNew}
        className="mb-3"
      />

      <DataTable
        value={patients}
        paginator
        rows={10}
        emptyMessage="No hay pacientes"
      >
        <Column field="name" header="Nombre" />
        <Column field="email" header="Correo" />
        <Column field="phone" header="Teléfono" />
        <Column
          header="Acciones"
          body={actionsBody}
          style={{ width: "150px" }}
        />
      </DataTable>

      {/* ========================
          MODAL FORM PACIENTE
      ======================== */}
      <Dialog
        header={isEdit ? "Editar Paciente" : "Nuevo Paciente"}
        visible={dialogVisible}
        onHide={() => setDialogVisible(false)}
        style={{ width: "350px" }}
      >
        <div className="p-fluid">
          <div className="field">
            <label>Nombre</label>
            <InputText
              value={patient.name}
              onChange={(e) => setPatient({ ...patient, name: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Correo</label>
            <InputText
              value={patient.email}
              onChange={(e) =>
                setPatient({ ...patient, email: e.target.value })
              }
            />
          </div>

          <div className="field">
            <label>Teléfono</label>
            <InputText
              value={patient.phone}
              onChange={(e) =>
                setPatient({ ...patient, phone: e.target.value })
              }
            />
          </div>

          <div className="flex justify-content-end gap-2 mt-4">
            <Button
              label="Cancelar"
              severity="secondary"
              onClick={() => setDialogVisible(false)}
            />
            <Button
              label={isEdit ? "Actualizar" : "Guardar"}
              severity="success"
              onClick={savePatient}
            />
          </div>
        </div>
      </Dialog>
    </>
  );
};
