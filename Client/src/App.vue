<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" sticky>
      <b-navbar-brand href="#">
        <b-icon icon="bookmark-heart" aria-hidden="true"></b-icon>
        Cultura
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Anime</b-nav-item>
          <b-nav-item href="#">K-pop</b-nav-item>
          <b-nav-item href="#">Cafeterías</b-nav-item>
          <b-nav-item href="#">Dibujos</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Idioma" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-- Sidebar -->
    <div class="container-fluid" id="main">
      <div class="row row-offcanvas row-offcanvas-left vh-100">
        <div
          class="col-md-3 col-lg-2 sidebar-offcanvas h-100 overflow-auto bg-light pl-0"
          id="sidebar"
          role="navigation"
        >
          <ul class="nav flex-column sticky-top pl-0 pt-2 mt-3">
            <b-nav vertical>
              <b-nav-item active>Coreano básico</b-nav-item>
              <b-nav-item>Anime Reciente</b-nav-item>
              <b-nav-item>Nuevo album BTR</b-nav-item>
              <b-nav-item>Cafeterías</b-nav-item>
            </b-nav>
          </ul>
        </div>
        <!--/col-->
        <main class="col main pt-2 mt-3 h-100 overflow-auto">
          <b-card>
            <h1 class="display-4 d-none d-sm-block">BIG TIME RUSH</h1>
          <img src="./assets/img/btr.jpg" class="img-btr" alt="Kitten" />
          <b-card-text>
              <p>
                <b
                  >Big Time Rush llenó de alegría, ritmo y nostalgia el Palacio de
                  los Deportes</b
                >
                Por segundo año consecutivo (después de un largo descanso de 2014 a
                2021) Big Time Rush regresó a México, cumpliendo la promesa que
                hicieron en su Forever Tour; recordemos que en 2022 volvieron a los
                escenarios y en México la emoción de sus fanáticas se desbordó desde
                que pisaron el aeropuerto, claro que era de esperarse, ya que las
                rushers esperaron mucho tiempo por reunirse con sus ídolos.
              </p>
            </b-card-text>

            <b-card-text>A second paragraph of text in the card.</b-card-text>
          </b-card>
        </main>
        <div
          class="col-md-3 col-lg-2 sidebar-offcanvas h-100 overflow-auto bg-light pl-0"
          id="sidebar"
          role="navigation"
        >
          <img src="./assets/img/totoro.jpg" class="img-totoro" alt="Kitten" />
          <h2 class="display-5 d-none d-sm-block">Studio Ghilbi</h2>
          <p>
            El nombre “Ghibli” proviene del término italiano para el viento
            cálido del Sahara, que los fundadores del estudio eligieron para
            representar su deseo de traer un nuevo aire a la animación japonesa
            1. La mayoría de las películas de Studio Ghibli tienen protagonistas
            femeninas, que son retratadas de manera realista y con autonomía
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
body,
html {
  height: 100%;
  overflow: hidden;
}

/*
 * Off Canvas sidebar at medium breakpoint
 * --------------------------------------------------
 */
@media screen and (max-width: 992px) {
  .row-offcanvas {
    position: relative;
    -webkit-transition: all 0.25s ease-out;
    -moz-transition: all 0.25s ease-out;
    transition: all 0.25s ease-out;
  }

  .row-offcanvas-left .sidebar-offcanvas {
    left: -33%;
  }

  .row-offcanvas-left.active {
    left: 33%;
    margin-left: -6px;
  }

  .sidebar-offcanvas {
    position: absolute;
    top: 0;
    width: 33%;
    height: 100%;
    overflow: auto;
  }
}

/*
 * Off Canvas wider at sm breakpoint
 * --------------------------------------------------
 */
@media screen and (max-width: 34em) {
  .row-offcanvas-left .sidebar-offcanvas {
    left: -45%;
  }

  .row-offcanvas-left.active {
    left: 45%;
    margin-left: -6px;
  }

  .sidebar-offcanvas {
    width: 45%;
  }
}

.img-totoro {
  width: 100%;
}

.img-btr {
  width: 100%;
}
</style>
