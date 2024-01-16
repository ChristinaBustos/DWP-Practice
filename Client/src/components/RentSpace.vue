<template>
  <div class="my-5">
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-container>
      <b-card no-body class="overflow-hidden" style="max-width: 100%">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img
              src="https://img.freepik.com/foto-gratis/sala-conferencias-escritorio-pared-ventanas-que-dice-oficina_1340-37385.jpg?w=996&t=st=1705387293~exp=1705387893~hmac=dddcf9d723b6d4f3aff08f8a94ca2c1a6e8f9d1e29e83aec1baaa290a71f3713"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <h1>Rentar tu Espacio</h1>
              <b-card-text>
                This is a wider card with supporting text as a natural lead-in
                to additional content. This content is a little bit longer.
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
        <b-card-footer class="d-flex justify-content-between">
          <b-button :to="{ name: 'inicio' }" class="me-2" variant="primary">
            Regresar al inicio
          </b-button>
          <b-button :to="{ name: 'infospace' }" class="me-2" variant="primary">
            Información del espacio
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
          text: "Inicio",
          to: { name: "inicio" },
        },
      ],
    };
  },
};
</script>

<style>
.size-card {
  width: 100%;
  height: 100%;
}
</style>
