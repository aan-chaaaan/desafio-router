import Vue from "vue";
import Router from "vue-router";
import Articulo from "./components/Articulo";
import Simple from "./components/Simple"
import Avanzado from "./components/Avanzado"


Vue.use(Router);
export default new Router({
  mode: `history`,
  routes: [
    {
      path: "/Administrador",
      name: "Administrador",
      component: () => import(`./components/Administrador`),
      children: [
        {
          path: "/Simple",
          name: "AdministradorSimple",
          component: Simple
        },
        {
          path: "/Avanzado",
          name: "AdministradorAvanzado",
          component: Avanzado
        }
      ]
    },
    {
      path: "/Contacto",
      component: () => import(`./components/Contacto`),
      alias: [`/contactame`]
    },
    {
      path: "/",
      component: () => import(`./components/Portada`),
    },
    {
      path: "/post",
      component: () => import(`./components/UltimoPost`),
      children: [
        {
          path: ":articulo",
          component: Articulo,

        },
      ],
    },
    {
      path: "/SobreMi",
      component: () => import(`./components/SobreMi`),
      alias: [`/acerca`]
    },
    {
      path: "*",
      component: () => import(`./components/RutasInexistentes`),
    },
    {
      path: "/home",
      redirect: "/"
    },
    {
      path: "/portada",
      redirect: "/"
    },
    {
      path: "/inicio",
      redirect: "/"
    },
  ],
});
