<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" sticky>
      <b-navbar-brand>
        <b-icon icon="house" aria-hidden="true"></b-icon>
        Airbnb
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Casas</b-nav-item>
          <b-nav-item href="#">Departamentos</b-nav-item>
          <b-nav-item href="#">Cabañas</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items z-index -->
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
    <b-container>
      <!-- <b-col cols="12"> -->
        <b-row>
          <!-- <b-col cols="2">
          <b-sidebar
            z-index="-1"
            id="sidebar"
            width="250px"
            shadow
            visible
            no-close-on-route-change
            no-header-close
          >
            <b-nav vertical class="pt-5">
              <b-nav-item class="d-flex align-items-center">
               <b-row>
                <b-col>
                  <b-icon icon="house-fill" scale="2.5" class="my-2" aria-hidden="true"></b-icon>
                </b-col>
                <b-col>
                  <h1 class="mb-0 ml-2">
                    <b-link>Airbnb</b-link>
                  </h1>
                </b-col>
               </b-row>
              </b-nav-item>
              <b-nav-item>
                <b-icon icon="house-door" aria-hidden="true"></b-icon>
                <b-link :to="{ name: 'inicio' }">Inicio</b-link>
              </b-nav-item>
              <b-nav-item>
                <b-icon icon="house" aria-hidden="true"></b-icon>
                <b-link :to="{ name: 'renta' }"> Renta tu espacio</b-link>
              </b-nav-item>
              <b-nav-item>
                <b-icon icon="door-closed-fill" aria-hidden="true"></b-icon>
                <b-link :to="{ name: 'rentSpaces' }">Rentar espacio</b-link>
              </b-nav-item>
              <b-nav-item>
                <b-icon icon="house-door-fill" aria-hidden="true"></b-icon>
                <b-link :to="{ name: 'main' }">Casas</b-link>
              </b-nav-item>
            </b-nav>
          </b-sidebar>
        </b-col> -->
          <b-col cols="12">
            <router-view></router-view>
          </b-col>
        </b-row>
      <!-- </b-col> -->
    </b-container>
  </div>
</template>

<script setup></script>

<style>
.box-shadow {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
</style>
