import { useMemo } from "react";

export default function useColumns() {

    //tabla 1 (Clientes)
 const columns = useMemo(
   () => [
     {
       Header: "Nombre del solicitante",
       accessor: "nombre"
     },
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
        Header: "Valor del Credito",
        accessor: "valor"
      },
      {
        Header: "Estado de Aprobacion",
        accessor: "estado"
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
