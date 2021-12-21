import { useMemo } from "react";
import EditarCliente from "components/Modals/EditarCliente"
import EliminarCliente from "components/Modals/EliminarCliente"
//import AgregarCliente from "components/Modals/AgregarCliente.js"
export default function useRows() {
 const rows = useMemo(
   () => [
     {
       nombre: "Fernando",
       apellido: "Rodriguez",
       tidentificacion: "Cedula",
       identificacion: "12535",
       correo: "javier@gmail.com",
       editar: <EditarCliente/>,
       eliminar: <EliminarCliente/> 
     },
     {
        nombre: "Fernando",
        apellido: "Rodriguez",
        tidentificacion: "Cedula",
        identificacion: "12535",
        correo: "javier@gmail.com",
        editar: <EditarCliente/>,
        eliminar: <EliminarCliente/> 
      },
      {
       nombre: "Fernando",
       apellido: "Rodriguez",
       tidentificacion: "Cedula",
       identificacion: "12535",
       correo: "javier@gmail.com",
       editar: <EditarCliente/>,
       eliminar: <EliminarCliente/> 
     },
     {
       nombre: "Rodriguez",
       apellido: "Moreno",
       tidentificacion: "Cedula",
       identificacion: "15515",
       correo: "javier@gmail.com",
       editar: <EditarCliente/>,
       eliminar: <EliminarCliente/> 
     },
     {
        nombre: "Rodriguez",
        apellido: "Moreno",
        tidentificacion: "Cedula",
        identificacion: "150015",
        correo: "javier@gmail.com",
        editar: <EditarCliente/>,
        eliminar: <EliminarCliente/> 
      },
      {
        nombre: "Rodriguez",
        apellido: "Moreno",
        tidentificacion: "Cedula",
        identificacion: "1000283965",
        correo: "javier@gmail.com",
        editar: <EditarCliente/>,
        eliminar: <EliminarCliente/> 
      },
      {
        nombre: "Rodriguez",
        apellido: "Moreno",
        tidentificacion: "Cedula",
        identificacion: "1515",
        correo: "javier@gmail.com",
        editar: <EditarCliente/>,
        eliminar: <EliminarCliente/> 
      },
      {
        nombre: "Rodriguez",
        apellido: "Moreno",
        tidentificacion: "Cedula",
        identificacion: "1515",
        correo: "javier@gmail.com",
        editar: <EditarCliente/>,
        eliminar: <EliminarCliente/> 
      },
      {
        nombre: "Rodriguez",
        apellido: "Moreno",
        tidentificacion: "Cedula",
        identificacion: "1515",
        correo: "javier@gmail.com",
        editar: <EditarCliente/>,
        eliminar: <EliminarCliente/> 
      },
      {
        nombre: "Rodriguez",
        apellido: "Moreno",
        tidentificacion: "Cedula",
        identificacion: "1515",
        correo: "javier@gmail.com",
        editar: <EditarCliente/>,
        eliminar: <EliminarCliente/> 
      },
      {
       nombre: "Rodriguez",
       apellido: "Moreno",
       tidentificacion: "Cedula",
       identificacion: "1515",
       correo: "javier@gmail.com",
       editar: <EditarCliente/>,
       eliminar: <EliminarCliente/> 
     },
     {
        nombre: "Fernando",
        apellido: "Moreno",
        tidentificacion: "Cedula",
        identificacion: "1515",
        correo: "javier@gmail.com",
        editar: <EditarCliente/>,
        eliminar: <EliminarCliente/> 
      }
   ],
   []
 );

 return rows;
}
