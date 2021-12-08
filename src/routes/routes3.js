/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/* 
import Creditos from "views/EmpleadoExample/Creditos.js";
import HistorialDePagos from "views/EmpleadoExample/GenerarHistorial.js";
import Prorroga from "views/EmpleadoExample/Prorroga.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js"; */
import Index from "views/empleado/Index.js";
import GenerarCreditos from "views/empleado/GenerarCreditos.js"
import GenerarHistorial from "views/empleado/GenerarHistorial.js"
import Prorroga from "views/empleado/Prorroga"


var routes = [
  {
    path: "/index",
    name: "Inicio",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/empleado",
  },
 
  {
    path: "/gestionar-creditos",
    name: "Gestionar Creditos",
    icon: "ni ni-planet text-blue",
    component:GenerarCreditos,
    layout: "/empleado",
  },
  {
    path: "/gestionar-historiales",
    name: "Historiales de pago",
    icon: "ni ni-pin-3 text-orange",
    component: GenerarHistorial,
    layout: "/empleado",
  },
  {
    path: "/prorrogas",
    name: "Solicitudes de Prorrogas",
    icon: "ni ni-single-02 text-yellow",
    component: Prorroga,
    layout: "/empleado",
  },
  

];
export default routes;