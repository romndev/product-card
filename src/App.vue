<template lang="pug">
ProductCard(:product="product")
</template>

<script>
import ProductCard from './components/ProductCard.vue';
import product from '@/assets/data.json';

export default {
  name: 'App',
  components: {
    ProductCard,
  },
  setup(){
    return{
      product,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
