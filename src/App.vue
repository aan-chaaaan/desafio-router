<template>
  <div>
    <nav class="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand">V8</a
        ><button
          data-toggle="collapse"
          data-target="#navbarResponsive"
          class="navbar-toggler"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <!-- MENU DE NAVEGACION -->
          <ul class="nav navbar-nav ml-auto" id="menu-v8">
            <li class="nav-item" role="presentation">
              <router-link to="/">Portada</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <router-link to="/SobreMi">Sobre mi</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <router-link to="/Contacto">Contacto</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <router-link to="/post/1">ultimo post</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <router-link to="/Simple">Administrador simple</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <router-link to="/Avanzado">Administrador avanzado</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- ROUTER VIEW QUE CARGARÁ LAS VISTAS (INICIO, SOBRE MÍ, CONTACTO, ETC.) -->
    <transition name="transicion">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#menu-v8 a {
  text-shadow: 1px 1px #000;
}
.transicion-enter-active,
.transicion-leave-active {
  transition: opacity 0.5s, padding 1s;
}
.transicion-enter,
.transicion-leave-to {
  opacity: 0;
  padding: 10px;
}
.transicion-enter-to,
.transicion-leave {
  opacity: 0.9;
  padding: 0px;
}
</style>
