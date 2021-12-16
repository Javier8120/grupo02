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
import Index from "views/client/Index.js";
/* import SolicitarCredito from "views/client/SolicitarCredito.js"; */
import Historial from "views/client/GestionarCredito/Historial.js";
import Pagar from "views/client/GestionarCredito/PagaCuota.js";
/* import Perfil from "views/client/Profile" */
/* import HistorialDePagos from "views/ClienteExample/HistorialDePagos.js";
import SolicitarProrroga from "views/ClienteExample/SolicitarProrroga.js";
import Certificado from "views/ClienteExample/Certificado.js";
import SimulacionDePago from "views/ClienteExample/SimulacionDePago.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js"; */


var routes = [
  {
    path: "/index",
    name: "Inicio",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/cliente",
    invisible: true,
  },
 
  /* {
    path: "/Profile",
    name: "Credito Educativo",
    icon: "ni ni-planet text-blue",
    component: Perfil,
    layout: "/Cliente",
    invisible: true,
  }, */

  {
    path: "/historial-de-pagos",
    name: "Historial de Pagos",
    icon: "ni ni-pin-3 text-orange",
    component: Historial,
    layout: "/cliente",
    invisible: true,
  },
  /* {
    path: "/solicitar-Prorroga",
    name: "Solicitar Prorroga",
    icon: "ni ni-single-02 text-yellow",
    component: Index,
    layout: "/cliente",
  }, 
  {
    path: "/Certificado",
    name: "Certificados",
    icon: "ni ni-bullet-list-67 text-red",
    component: Certificado,
    layout: "/cliente",
  },
  */
  {
    path: "/simulacion-de-Pago",
    name: "Simulacion De Pago",
    icon: "ni ni-bullet-list-67 text-red",
    component: Pagar,
    layout: "/cliente", 
    invisible: true,
  },
  /* {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Registrarse",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  }, */
 

];
export default routes;