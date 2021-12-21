import { useMemo } from "react";
import Historialinfo from "components/Modals/Historialinfo"
import Pagos from "components/Modals/Pagos"
//import AgregarCliente from "components/Modals/AgregarCliente.js"
export default function useRows() {
 const rows = useMemo(
   () => [
     {
       nombre: "Fernando",
       fecha: "Rodriguez",
       monto:"200.000",
       tidentificacion: "Cedula",
       identificacion: "12535",
       correo: "javier@gmail.com",
       info: <Historialinfo/>,
       pagos: <Pagos/> 
     },
     {
        nombre: "Fernando",
        fecha: "Rodriguez",
        monto:"200.000",
        tidentificacion: "Cedula",
        identificacion: "12535",
        correo: "javier@gmail.com",
        info: <Historialinfo/>,
        pagos: <Pagos/> 
      },
      {
       nombre: "Fernando",
       fecha: "Rodriguez",
       monto:"200.000",
       tidentificacion: "Cedula",
       identificacion: "12535",
       correo: "javier@gmail.com",
       info: <Historialinfo/>,
       pagos: <Pagos/> 
     },
     {
       nombre: "Rodriguez",
       fecha: "Moreno",
       monto:"200.000",
       tidentificacion: "Cedula",
       identificacion: "15515",
       correo: "javier@gmail.com",
       info: <Historialinfo/>,
       pagos: <Pagos/> 
     },
     {
        nombre: "Rodriguez",
        fecha: "Moreno",
        monto:"200.000",
        tidentificacion: "Cedula",
        identificacion: "150015",
        correo: "javier@gmail.com",
        info: <Historialinfo/>,
        pagos: <Pagos/> 
      },
      {
        nombre: "Rodriguez",
        fecha: "Moreno",
        monto:"200.000",
        tidentificacion: "Cedula",
        identificacion: "1000283965",
        correo: "javier@gmail.com",
        info: <Historialinfo/>,
        pagos: <Pagos/> 
      },
      {
        nombre: "Rodriguez",
        fecha: "Moreno",
        monto:"200.000",
        tidentificacion: "Cedula",
        identificacion: "1515",
        correo: "javier@gmail.com",
        info: <Historialinfo/>,
        pagos: <Pagos/> 
      },
      {
        nombre: "Rodriguez",
        fecha: "Moreno",
        monto:"200.000",
        tidentificacion: "Cedula",
        identificacion: "1515",
        correo: "javier@gmail.com",
        info: <Historialinfo/>,
        pagos: <Pagos/> 
      },
      {
        nombre: "Rodriguez",
        fecha: "Moreno",
        monto:"200.000",
        tidentificacion: "Cedula",
        identificacion: "1515",
        correo: "javier@gmail.com",
        info: <Historialinfo/>,
        pagos: <Pagos/> 
      },
      {
        nombre: "Rodriguez",
        fecha: "Moreno",
        monto:"200.000",
        tidentificacion: "Cedula",
        identificacion: "1515",
        correo: "javier@gmail.com",
        info: <Historialinfo/>,
        pagos: <Pagos/> 
      },
      {
       nombre: "Rodriguez",
       fecha: "Moreno",
       monto:"200.000",
       tidentificacion: "Cedula",
       identificacion: "1515",
       correo: "javier@gmail.com",
       info: <Historialinfo/>,
       pagos: <Pagos/> 
     },
     {
        nombre: "Fernando",
        fecha: "Moreno",
        monto:"200.000",
        tidentificacion: "Cedula",
        identificacion: "1515",
        correo: "javier@gmail.com",
        info: <Historialinfo/>,
        pagos: <Pagos/> 
      }
   ],
   []
 );

 return rows;
}
