<template>
    <div class="">
        <b-container>
          <b-breadcrumb :items="items"></b-breadcrumb>
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
          to: { name: 'infospace' }
        },
        {
          text: "Ofertar espacio",
          to: { name: 'oferta' }
        },
        {
          text: "Renta tu espacio",
          to: { name: 'renta' }
        },
      ],
    };
  },
};
</script>

<style>
</style>