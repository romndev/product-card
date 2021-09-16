<template lang="pug">
.product-card
  ProductCardImage(:images="product.images")
  ProductCardBody(:product="product")
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
.product-card{
  width: 300px;
}
</style>
