<template>
  <div class="basket">
    <catalog-cart
      :disableTerminal="true"
      v-for="(item, key) in getBasket"
      :key="key"
      :product="item"
      :description="item.description"
      :title="item.title"
      :img="item.img"
    />
    <p v-if="!item">Нет продуктов</p>
  </div>
</template>

<script>
import catalogCart from "@/components/Catalog/components/catalog-cart.vue";
export default {
  components: { catalogCart },
  data: () => ({}),
  computed: {
    getBasket() {
      return this.$store.getters.GET_BASKET;
    },
  },
};
</script>

<style>
p{
  font-size: 50px;
}
.basket {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  gap: 30px;
}
</style>