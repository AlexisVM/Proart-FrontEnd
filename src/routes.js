/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import LocationOn from "@material-ui/icons/LocationOn";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
// core components/views for Admin layout
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
//import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import Payments from "views/Payments/Payments.js";
import Register from "views/Register/Register.js";

const ibericaRoutes = [
  {
    path: "/registro",
    name: "Registro",
    icon: PlaylistAddCheckIcon,
    component: Register,
    layout: "/inicio"
  },
  {
    path: "/table",
    name: "Mis Clases",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/inicio"
  },
  {
    path: "/user",
    name: "Cuenta",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/inicio"
  },

  {
    path: "/maps",
    name: "Lugares importantes",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/inicio"
  },

  {
    path: "/pagos",
    name: "Pagos",
    rtlName: "خرائط",
    icon: MonetizationOnIcon,
    component: Payments,
    layout: "/inicio"
  }
];

export default ibericaRoutes;
