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


/* import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js"; 
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
*/

import Index from "views/admin/Index";
import Register from "views/auth/Register.js";
import Login from "views/auth/Login.js";
import ClientUsers from  "views/admin/ClientUsers"
import EmpleadosUsers from "views/admin/EmpleadosUsers"
import Profile from "views/admin/Profile.js"
import AdminUsers from "views/admin/AdminUsers.js"
// import Editarperfil from "components/Modals/Editarperfil.js"


var routes = [
  {
    path: "/index",
    name: "Inicio",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/profile",
    name: "Perfil",
    icon: "ni ni-circle-08 text-yellow",
    component: Profile,
    layout: "/admin",
    invisible: true,
  },

 /*  {
    path: "../components/Modals/Editarperfil.js",
    name: "EditarPerfil",
    icon: "ni ni-circle-08 text-yellow",
    component: Editarperfil,
    layout: "/admin",
    invisible: true,
  }, */
  {
    path: "/gestionar-administradores",
    name: "Gestionar Administradores",
    icon: "ni ni-badge text-red",
    component: AdminUsers,
    layout: "/admin",
    invisible: true,
  },


  {
    path: "/gestionar-clientes",
    name: "Gestionar Clientes",
    icon: "ni ni-folder-17 text-blue",
    component: ClientUsers,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/gestionar-empleados",
    name: "Gestionar Empleados",
    icon: "ni ni-folder-17 text-orange",
    component: EmpleadosUsers,
    layout: "/admin",
    invisible: true,
  },





  
 
  /* {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
  }, */
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
    invisible: false,
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
    invisible: false,
  }, 
  /* {
    path: "/SolicitarCredito",
    name: "Solicita Tu Credito",
    icon: "ni ni-tv-2 text-primary",
    component: Cliente,
    layout: "/cliente",
  },  */





];
export default routes;
