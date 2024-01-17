<template>
  <div class="my-5">
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-container>
      <b-card no-body class="overflow-hidden" style="max-width: 100%">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img
              src="https://img.freepik.com/vector-gratis/espacio-trabajo-plano-estilo-isometrico_23-2147687151.jpg?w=740&t=st=1705466486~exp=1705467086~hmac=f68a0f92f1a587773903c88e1bea7110ed2b2de396cc34283202531f94639694"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <h1>Información del espacio</h1>
              <b-card-text>
                This is a wider card with supporting text as a natural lead-in
                to additional content. This content is a little bit longer.
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
        <b-card-footer class="d-flex justify-content-between">
          <b-button :to="{ name: 'renta' }" class="me-2" variant="primary">
            Renta tu espacio
          </b-button>
          <b-button :to="{ name: 'oferta' }" class="me-2" variant="primary">
            Ofertar espacio
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
          text: "Información de espacio",
          to: { name: "infospace" },
        },
        {
          text: "Oferta de espacio",
          to: { name: "oferta" },
        },
      ],
    };
  },

}
</script>

<style>

</style>