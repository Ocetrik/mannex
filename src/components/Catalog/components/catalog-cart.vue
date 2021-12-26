<template>
  <div class="catalog-cart">
    <div class="catalog-cart__logo"><img :src="img" alt="" /></div>
    <div class="catalog-cart__title">{{ title }}</div>
    <div class="catalog-cart__description text">{{ description }}</div>
    <div v-if="!disableTerminal" class="catalog-cart__control">
      <button class="catalog-cart__price title">{{ summPrice }}р.</button>
      <div class="catalog-cart__number">
        <img @click="reduceProduct" src="~@/static/minus.svg" alt="" />
        {{ numberOfProducts }}
        <img @click="increaseProduct"  src="~@/static/plus.svg" alt="" />
      </div>
      <button @click="addProduct" class="catalog-cart__busket">
        <img src="~@/static/busket.png" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    disableTerminal:{
      default: false,
      type: Boolean
    },
    product: {
      type: Object,
      required: true,
    },
    img: {
      type: String,
      default: require("@/static/product.png"),
    },
    title: {
      type: String,
      validator: (val) => typeof val === "string",
      default: "Michelin",
    },
    description: {
      type: String,
      validator: (val) => typeof val === "string",
      default: 'Шина летняя "Primacy 3 GRNX 205/55R16 91V"',
    },
    price: {
      type: Number,
      validator: (val) => val >= 0,
      default: 990,
    },
  },
  data: () => ({
    numberOfProducts: 1,
  }),
  methods: {
    addProduct() {
      for (let i = 0; i < this.numberOfProducts; i++) {
        this.$store.commit("ADD_PRODUCT", {
          title: this.title,
          price: this.price,
          img: this.img,
        });
      }
    },
    increaseProduct() {
      this.numberOfProducts = this.numberOfProducts + 1;
    },
    reduceProduct() {
      if (this.numberOfProducts === 0) {
        return;
      }
      this.numberOfProducts = this.numberOfProducts - 1;
    },
  },
  computed: {
    summPrice() {
      return this.numberOfProducts * this.price;
    },
  },
};
</script>

<style scoped lang="scss">
.catalog-cart {
  border: 1px solid #a6a6a6;
  padding: 30px 35px 28px 32px;
  max-height: 473px;
}
.catalog-cart__title {
  font-family: "Gilroy-Bold";
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  margin-top: 21px;
}
.catalog-cart__description {
  margin-top: 5px;
  max-width: 255px;
}
.catalog-cart__control {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}
.catalog-cart__price {
  background: #4ba9ff;
  width: 80px;
  height: 25px;
  text-align: center;
  align-items: center;
  color: #ffffff;
  font-size: 15px;
  line-height: 18px;
}
.catalog-cart__number {
  display: flex;
  height: 25px;
  width: 80px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
  gap: 11px;
}
.catalog-cart__busket {
  background: #ffffff;
}
</style>