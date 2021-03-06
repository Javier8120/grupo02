import { useMemo } from "react";

export default function useColumns() {

    //tabla 1 (Clientes)
 const columns = useMemo(
   () => [
    {
      Header: "Nombre",
      accessor: "nombre"
    },
     {
       Header: "Fecha",
       accessor: "fecha"
     },
     {
       Header: "Monto",
       accessor: "monto"
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
        Header: "Informacion",
        accessor: "info"
      },
       {
        Header: "Pagos",
        accessor: "pagos"
      },
      
     
   ],
   []
 );

 return columns;
}
