<template lang="pug">
.product-card
  ProductCardImage(:images="product.images")
  ProductCardBody
</template>

<script>
import ProductCardImage from "@/components/ProductCardImage";
import ProductCardBody from "@/components/ProductCardBody";

export default {
  name: 'ProductCard',
  components: {
    ProductCardImage,
    ProductCardBody,
  },
  props: {
    product: {
      type: Object,
      default: () => {},
    }
  },
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
