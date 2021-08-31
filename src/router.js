import Vue from "vue";
import Router from "vue-router";
import Portada from "./components/Portada";
import Articulo from "./components/Articulo";
import Contacto from "./components/Contacto";
import UltimoPost from "./components/UltimoPost";
import SobreMi from "./components/SobreMi";
import RutasInexistentes from "./components/RutasInexistentes";

Vue.use(Router);
export default new Router({
  mode: `history`,
  routes: [
    {
      path: "/Contacto",
      component: Contacto,
    },
    {
      path: "/",
      component: Portada,
    },
    {
      path: "/post/1",
      component: UltimoPost,
      children: [
        {
          path: "/post/1",
          component: Articulo,
          name: "Articulo",
        },
      ],
    },
    {
      path: "/SobreMi",
      component: SobreMi,
    },
    {
      path: "*",
      component: RutasInexistentes,
    },
  ],
});
