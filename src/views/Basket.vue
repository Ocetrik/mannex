<template>
  <div class="basket">
    <div class="basket-header">
      <Header />
    </div>
    <div class="basket-cart">
      <div class="cart-title">Корзина</div>
      <div class="cart-item">
        <catalog-cart
          :disableTerminal="true"
          v-for="(item, key) in getBasket"
          :key="key"
          :product="item"
          :description="item.description"
          :title="item.title"
          :img="item.img"
        />
      </div>
      <div class="cart-pages"></div>
      <div class="cart-summ">Итог: {{summPrice}}р.</div>
      <button class="cart-btn">Оплатить</button>
    </div>
    <div class="basket-footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import catalogCart from "@/components/Catalog/components/catalog-cart.vue";
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/app/Footer.vue";
export default {
  components: {
    catalogCart,
    Header,
    Footer,
  },
  data: () => ({}),
  computed: {
    summPrice() {
      return this.$store.getters.GET_SUMM_PRICE;
    },
    getBasket() {
      return this.$store.getters.GET_BASKET;
    },
  },
};
</script>

<style scoped lang="scss">
.basket {
  margin: 0 auto;
}
.basket-cart {
  margin: 0 auto;
  max-width: 1440px;
}
.cart-title {
  font-family: "Gilroy-Bold";
  font-weight: bold;
  font-size: 64px;
  line-height: 77px;
  margin-top: 50px;
}
.cart-item {
  margin-top: 50px;
  max-width: 325px;
  display: grid;
  grid-column-gap: 42px;
  grid-row-gap: 32px;
  grid-template-columns: repeat(3, 1fr);
  padding-left: 190px;
}
.cart-pages {
  margin-top: 80px;
}
.cart-summ {
  margin-top: 60px;
  font-family: "Gilroy-Bold";
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  justify-content: center;
}
.cart-btn {
  background: linear-gradient(180deg, #ff5454 0%, #cd4848 100%);
  color: #ffffff;
  padding: 35px 180px;
  font-family: "Gilroy-Bold";
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  transition: all 0.3s ease 0s;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 12px;
  &:hover {
    box-shadow: 0px 20px 50px rgba(255, 129, 129, 0.3);
  }
}
.basket-footer {
  margin-top: 105px;
}
</style>