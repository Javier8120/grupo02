import { useMemo } from "react";
import EditarEmpleado from "components/Modals/EditarEmpleado"
import Eliminarinterno from "components/Modals/Eliminarinterno"
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
       editar: <EditarEmpleado/>,
       eliminar: <Eliminarinterno/> 
     },
     {
        nombre: "Fernando",
        apellido: "Rodriguez",
        tidentificacion: "Cedula",
        identificacion: "12535",
        correo: "javier@gmail.com",
        editar: <EditarEmpleado/>,
        eliminar: <Eliminarinterno/> 
      },
      {
       nombre: "Fernando",
       apellido: "Rodriguez",
       tidentificacion: "Cedula",
       identificacion: "12535",
       correo: "javier@gmail.com",
       editar: <EditarEmpleado/>,
       eliminar: <Eliminarinterno/> 
     },
     {
       nombre: "Rodriguez",
       apellido: "Moreno",
       tidentificacion: "Cedula",
       identificacion: "15515",
       correo: "javier@gmail.com",
       editar: <EditarEmpleado/>,
       eliminar: <Eliminarinterno/> 
     },
     {
        nombre: "Rodriguez",
        apellido: "Moreno",
        tidentificacion: "Cedula",
        identificacion: "150015",
        correo: "javier@gmail.com",
        editar: <EditarEmpleado/>,
        eliminar: <Eliminarinterno/> 
      },
      {
        nombre: "Rodriguez",
        apellido: "Moreno",
        tidentificacion: "Cedula",
        identificacion: "1000283965",
        correo: "javier@gmail.com",
        editar: <EditarEmpleado/>,
        eliminar: <Eliminarinterno/> 
      },
      {
        nombre: "Rodriguez",
        apellido: "Moreno",
        tidentificacion: "Cedula",
        identificacion: "1515",
        correo: "javier@gmail.com",
        editar: <EditarEmpleado/>,
        eliminar: <Eliminarinterno/> 
      },
      {
        nombre: "Rodriguez",
        apellido: "Moreno",
        tidentificacion: "Cedula",
        identificacion: "1515",
        correo: "javier@gmail.com",
        editar: <EditarEmpleado/>,
        eliminar: <Eliminarinterno/> 
      },
      {
        nombre: "Rodriguez",
        apellido: "Moreno",
        tidentificacion: "Cedula",
        identificacion: "1515",
        correo: "javier@gmail.com",
        editar: <EditarEmpleado/>,
        eliminar: <Eliminarinterno/> 
      },
      {
        nombre: "Rodriguez",
        apellido: "Moreno",
        tidentificacion: "Cedula",
        identificacion: "1515",
        correo: "javier@gmail.com",
        editar: <EditarEmpleado/>,
        eliminar: <Eliminarinterno/> 
      },
      {
       nombre: "Rodriguez",
       apellido: "Moreno",
       tidentificacion: "Cedula",
       identificacion: "1515",
       correo: "javier@gmail.com",
       editar: <EditarEmpleado/>,
       eliminar: <Eliminarinterno/> 
     },
     {
        nombre: "Fernando",
        apellido: "Moreno",
        tidentificacion: "Cedula",
        identificacion: "1515",
        correo: "javier@gmail.com",
        editar: <EditarEmpleado/>,
        eliminar: <Eliminarinterno/> 
      }
   ],
   []
 );

 return rows;
}
