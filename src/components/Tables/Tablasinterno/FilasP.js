import { useMemo } from "react";
import Aceptarprorroga from "components/Modals/Aceptarprorroga";
import RechazarProrroga from "components/Modals/RechazarProrroga";
//import AgregarCliente from "components/Modals/AgregarCliente.js"
export default function useRows() {
  const rows = useMemo(
    () => [
      {
        nombre: "Fernando",
        tidentificacion: "Cedula",
        identificacion: "12535",
        correo: "javier@gmail.com",
        aceptar: <Aceptarprorroga />,
        rechazar: <RechazarProrroga />,
      },
      {
        nombre: "Fernando",
        tidentificacion: "Cedula",
        identificacion: "12535",
        correo: "javier@gmail.com",
        aceptar: <Aceptarprorroga />,
        rechazar: <RechazarProrroga />,
      },
      {
        nombre: "Fernando",
        tidentificacion: "Cedula",
        identificacion: "12535",
        correo: "javier@gmail.com",
        aceptar: <Aceptarprorroga />,
        rechazar: <RechazarProrroga />,
      },
      {
        nombre: "Rodriguez",
        tidentificacion: "Cedula",
        identificacion: "15515",
        correo: "javier@gmail.com",
        aceptar: <Aceptarprorroga />,
        rechazar: <RechazarProrroga />,
      },
      {
        nombre: "Rodriguez",
        tidentificacion: "Cedula",
        identificacion: "150015",
        correo: "javier@gmail.com",
        aceptar: <Aceptarprorroga />,
        rechazar: <RechazarProrroga />,
      },
      {
        nombre: "Rodriguez",
        tidentificacion: "Cedula",
        identificacion: "1000283965",
        correo: "javier@gmail.com",
        aceptar: <Aceptarprorroga />,
        rechazar: <RechazarProrroga />,
      },
      {
        nombre: "Rodriguez",
        tidentificacion: "Cedula",
        identificacion: "1515",
        correo: "javier@gmail.com",
        aceptar: <Aceptarprorroga />,
        rechazar: <RechazarProrroga />,
      },
      {
        nombre: "Rodriguez",
        tidentificacion: "Cedula",
        identificacion: "1515",
        correo: "javier@gmail.com",
        aceptar: <Aceptarprorroga />,
        rechazar: <RechazarProrroga />,
      },
      {
        nombre: "Rodriguez",
        tidentificacion: "Cedula",
        identificacion: "1515",
        correo: "javier@gmail.com",
        aceptar: <Aceptarprorroga />,
        rechazar: <RechazarProrroga />,
      },
      {
        nombre: "Rodriguez",
        tidentificacion: "Cedula",
        identificacion: "1515",
        correo: "javier@gmail.com",
        aceptar: <Aceptarprorroga />,
        rechazar: <RechazarProrroga />,
      },
      {
        nombre: "Rodriguez",
        tidentificacion: "Cedula",
        identificacion: "1515",
        correo: "javier@gmail.com",
        aceptar: <Aceptarprorroga />,
        rechazar: <RechazarProrroga />,
      },
      {
        nombre: "Fernando",
        tidentificacion: "Cedula",
        identificacion: "1515",
        correo: "javier@gmail.com",
        aceptar: <Aceptarprorroga />,
        rechazar: <RechazarProrroga />,
      },
    ],
    []
  );

  return rows;
}
