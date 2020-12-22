<template>
  <nav>
    <ul>
      <li>
        <router-link :to="{name: 'Home'}">Home</router-link>
      </li>
      <li>
        <router-link :to="{name: 'Shop'}">Shop</router-link>
      </li>
      <li>
        <router-link :to="{name: 'Contact'}">Contact</router-link>
      </li>
       <li>
        <router-link :to="{name: 'ProductDetails', params: {id:444}}">ProductDetails</router-link>
      </li>
    </ul>
  </nav>
  <Header>
    <!-- <p>This is a slot zone</p> -->
    <!-- le p va donc se mettre à l'endroit ou je définis mon <slot> -->
    <template v-slot:welcome> Welkomen </template>
    <!-- Si on veut faire appel à un slot spécifique, il faut le nommer puis ajouter le v-slot dans l'apépé.vue mais ce n'est pas vital comme gérage -->
  </Header>
  <div class="contenu w3-center">
    <router-view />
  </div>
  <div class="w3-center">Mon corps</div>
  <Product/>
  <ProductDetails/>
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Product from "./components/Product.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Product,
  },
  data() {},
};
</script>

<style>
@import url("https://www.w3schools.com/w3css/4/w3.css");
@import url("https://fonts.googleapis.com/css?family=Lato");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
</style>
