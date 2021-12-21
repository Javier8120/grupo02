import { useMemo } from "react";

export default function useColumns() {

    //tabla 1 (Clientes)
 const columns = useMemo(
   () => [
     {
       Header: "Nombre del solicitante",
       accessor: "nombre"
     },
/*      {
       Header: "Apellido",
       accessor: "apellido"
     }, */
     {
       Header: "Tipo de identificacion",
       accessor: "tidentificacion"
     },
     {
       Header: "Identificacion",
       accessor: "identificacion"
     },
     {
        Header: "Correo",
        accessor: "correo"
      },
      {
        Header: "Aceptar",
        accessor: "aceptar"
      },
       {
        Header: "Rechazar",
        accessor: "rechazar"
      },
      
     
   ],
   []
 );

 return columns;
}
