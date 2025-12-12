import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useState } from "react";

export const HomeModule = () => {
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);

  const showName = () => <>{show && <h2>Bienvenido {name}</h2>}</>;

  return (
    <>
      <h1>Gestion de citas medicas SALUTFAST</h1>
      {showName()}
      <Button onClick={() => setShow(!show)} label="Drop" severity="success" />
      <InputText
        placeholder="Tu nombre"
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
};
