<template>
  <div>
    <h2 class="w3-center">Ma tête</h2>
    <slot></slot> 
    <!-- Slot est un emplacement vide destiné à recevoir quelque chose depuis l'emplacement parent  -->
    <slot name="welcome"></slot> 
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
};
</script>

<style scoped>
/* L'attribut scoped permet de n'avoir du style que sur l'élément courant */
@import url("");
/* On peut toujours importer ces feuilles de styles pour que ce soit encore plus lisible */
</style>