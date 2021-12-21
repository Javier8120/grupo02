import { useMemo } from "react";
import EditarEmpleado from "components/Modals/EditarEmpleado"
import Eliminarinterno from "components/Modals/Eliminarinterno"
//import AgregarCliente from "components/Modals/AgregarCliente.js"
export default function useRows() {
 const rows = useMemo(
   () => [
    {
      nombre: "David",
      apellido: "Rodriguez",
      tidentificacion: "Cedula",
      identificacion: "12535",
      correo: "davidr@gmail.com",
      editar: <EditarEmpleado/>,
      eliminar: <Eliminarinterno/> 
    },
    {
       nombre: "Fernando",
       apellido: "Rodriguez",
       tidentificacion: "Cedula",
       identificacion: "1205248",
       correo: "javier@gmail.com",
       editar: <EditarEmpleado/>,
       eliminar: <Eliminarinterno/> 
     },
     {
      nombre: "Javier ",
      apellido: "Moreno",
      tidentificacion: "Cedula",
      identificacion: "12535",
      correo: "javier@gmail.com",
      editar: <EditarEmpleado/>,
      eliminar: <Eliminarinterno/> 
    },
    {
      nombre: "Harson",
      apellido: "Molinar",
      tidentificacion: "Cedula",
      identificacion: "25515",
      correo: "harson@gmail.com",
      editar: <EditarEmpleado/>,
      eliminar: <Eliminarinterno/> 
    },
    {
       nombre: "Rafael",
       apellido: "Acosta",
       tidentificacion: "Cedula",
       identificacion: "350015",
       correo: "rafael@gmail.com",
       editar: <EditarEmpleado/>,
       eliminar: <Eliminarinterno/> 
     },
     {
       nombre: "Andres",
       apellido: "Hernandez",
       tidentificacion: "Cedula",
       identificacion: "1000283965",
       correo: "andres@hotmail.com",
       editar: <EditarEmpleado/>,
       eliminar: <Eliminarinterno/> 
     },
     {
       nombre: "Jouse",
       apellido: "Pineda",
       tidentificacion: "Cedula",
       identificacion: "555515",
       correo: "Josue@gmail.com",
       editar: <EditarEmpleado/>,
       eliminar: <Eliminarinterno/> 
     },
     {
       nombre: "Johan",
       apellido: "Acosta",
       tidentificacion: "Cedula",
       identificacion: "8999515",
       correo: "johan@gmail.com",
       editar: <EditarEmpleado/>,
       eliminar: <Eliminarinterno/> 
     },
     {
       nombre: "Eclesiates",
       apellido: "batista",
       tidentificacion: "Cedula",
       identificacion: "888515",
       correo: "eclesiastes@gmail.com",
       editar: <EditarEmpleado/>,
       eliminar: <Eliminarinterno/> 
     },
     {
       nombre: "Fernando",
       apellido: "Moreno",
       tidentificacion: "Cedula",
       identificacion: "551515",
       correo: "fer@gmail.com",
       editar: <EditarEmpleado/>,
       eliminar: <Eliminarinterno/> 
     },
     {
      nombre: "Natalia",
      apellido: "Moreno ",
      tidentificacion: "Cedula",
      identificacion: "1000515",
      correo: "Natalia2@gmail.com",
      editar: <EditarEmpleado/>,
      eliminar: <Eliminarinterno/> 
    },
    {
       nombre: "Maria",
       apellido: "Zuñoga",
       tidentificacion: "Cedula",
       identificacion: "1515",
       correo: "maria@gmail.com",
       editar: <EditarEmpleado/>,
       eliminar: <Eliminarinterno/> 
     }
  ],
  []
);

 return rows;
}
