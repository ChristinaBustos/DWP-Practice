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
          text: "Detalles de espacio",
          to: { name: 'details' }
        },
        {
          text: "Catalogo de espacios",
          to: { name: 'categorie' }
        },
        {
          text: "Rentar espacio",
          to: { name: 'main' }
        },
      ],
    };
  },
}
</script>

<style>

</style>