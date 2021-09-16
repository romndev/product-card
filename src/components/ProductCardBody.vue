<template lang="pug">
.product-card-body
  .price {{ product.price }}
  a.name {{ product.name }}
  UiButton(text="Предзаказ")
</template>

<script>
import UiButton from "@/components/UiButton";

export default {
  name: 'ProductCardBody',
  props: {
    product: Object,
  },
  components: {
    UiButton,
  }
}
</script>

<style lang="scss" scoped>
.product-card-body{
  text-align: left;
  padding: 0 16px;
  width: 100%;
  box-sizing: border-box;
  margin-top: 10px;
  display: grid;
  grid-row-gap: 0.5rem;

  .price{
    font-size: 1.5rem;
    color: red;
  }
}
</style>
