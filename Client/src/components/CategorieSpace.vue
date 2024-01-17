<template>
  <div class="my-5">
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-container>
      <b-card no-body class="overflow-hidden" style="max-width: 100%">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img
              src="https://img.freepik.com/fotos-premium/diseno-interiores-oficina-modernodiseno-interiores-oficina-modernointerior-oficina-computadora-computadora-portatil-o_912214-6351.jpg?w=996"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <h1>Catalogo de espacios</h1>
              <b-card-text>
                This is a wider card with supporting text as a natural lead-in
                to additional content. This content is a little bit longer.
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
        <b-card-footer class="d-flex justify-content-between">
          <b-button :to="{ name: 'rentSpaces' }" class="me-2" variant="primary">
            Renta  espacio
          </b-button>
          <b-button :to="{ name: 'details' }" class="me-2" variant="primary">
            Detalles del espacio
          </b-button>
        </b-card-footer>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Renta  espacio",
          to: { name: "rentSpaces" },
        },
        {
          text: " Detalles del espacio",
          to: { name: "details" },
        },
      ],
    };
  },

}
</script>

<style>

</style>