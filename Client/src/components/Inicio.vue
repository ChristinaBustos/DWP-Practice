<template>
  <div class="my-5">
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-container>
      <b-card no-body class="overflow-hidden" style="max-width: 100%">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img
              src="https://img.freepik.com/vector-gratis/ilustracion-concepto-trabajo-curso_114360-5241.jpg?w=740&t=st=1705466413~exp=1705467013~hmac=8f08579e4f27a6656500f57c3a17a8779f5b8ced806c14b324a23a8b93179442"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <h1>Bienvenido</h1>
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
          <b-button :to="{ name: 'rentSpaces' }" class="me-2" variant="primary">
            Renta espacio
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
          text: "Renta tu espacio",
          to: { name: "renta" },
        },
        {
          text: "Rentar espacio",
          to: { name: "rentSpaces" },
        },
      ],
    };
  },
};
</script>

<style></style>
