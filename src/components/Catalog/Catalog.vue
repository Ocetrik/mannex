<template>
  <div class="catalog">
    <div class="bgimg-1"><img src="@/static/catalogbg.png" alt="" /></div>
    <div class="bgimg-2"><img src="@/static/catalogbg-2.png" alt="" /></div>
    <div class="content-container">
      <div class="catalog-title">Каталог</div>
      <div class="catalog-navigator">
        <button
          class="navigator__item text"
          @click="setSelectedType(i)"
          :class="selectedType === i ? 'active' : ''"
          :key="i"
          v-for="i in typesProduct"
        >
          {{ i }}
        </button>
      </div>
      <div class="catalog-content">
        <div class="catalog-content__filter">
          <div class="filter-content">
            <div class="filter__title title">Тип</div>
            <div class="filter__select">
              <select class="select-text item">
                <option>Летние</option>
                <option>Зимние</option>
              </select>
            </div>
            <div class="filter__title title">Производитель</div>
            <div class="filter__select">
              <select class="select-text item">
                <option>Не выбрано</option>
              </select>
            </div>
            <div class="filter__title title">Размер</div>
            <div class="filter__select">
              <select class="select-text item">
                <option>Выбраны все</option>
              </select>
            </div>
            <div class="filter__title title">Диаметр</div>
            <div class="filter__select">
              <select class="select-text item">
                <option>Выбраны все</option>
              </select>
            </div>
            <button class="filter__btn">Подобрать</button>
          </div>
        </div>
        <div class="catalog-content__menu">
          <catalog-cart :title="i.title" :key="i" v-for="i in products" />
        </div>
      </div>
      <div class="catalog-pages">1 2 3 4 228</div>
    </div>
  </div>
</template>

<script>
import CatalogCart from "@/components/Catalog/components/catalog-cart.vue";
export default {
  name: "catalog",
  components: {
    CatalogCart,
  },
  data: () => ({
    products: [{ title: "opjfg" }, { title: "iohgoir" }],
    typesProduct: [
      "Шины",
      "Диски",
      "Аксессуары",
      "Каталог ТО",
      "Масла и автохимия",
      "Аккумуляторы",
      "Колпаки",
      "Болты, гайки",
    ],
    selectedType: "Шины",
  }),
  methods: {
    setSelectedType(type) {
      this.selectedType = type;
      this.products = this.getProduct(type);
    },
    getProduct(type) {
      if (type === "Шины") {
        return [{ title: "opjfg" }, { title: "iohgoir" }];
      }
      if (type === "Диски") {
        return [
          {
            title: "234ter",
          },
        ];
      }
      return [];
    },
  },
};
</script>

<style scoped>
.navigator__item.active {
  background: #4ba9ff;
}
.bgimg-1 {
  position: absolute;
  left: 240px;
  top: -50px;
}
.bgimg-2 {
  position: absolute;
  z-index: -1;
}
.catalog {
  position: relative;
}
.content-container {
  max-width: 1440px;
  margin: 0 auto;
}
.catalog-title {
  font-family: "Gilroy-Bold";
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 77px;
}
.catalog-navigator {
  display: flex;
  margin-top: 75px;
  justify-content: center;
}
.navigator__item {
  padding: 10px 25px;
  background: #ffffff;
}
.catalog-content {
  display: flex;
  margin-top: 100px;
}
.catalog-content__filter {
  max-height: 600px;
  box-shadow: 0px 10px 25px rgba(119, 119, 119, 0.2);
}
.filter-content {
  margin: 0 auto;
  padding: 0 40px;
  padding-bottom: 63px;
}
.filter__title {
  margin-top: 20px;
}
.filter__select {
  margin-top: 8px;
  border: 1px solid rgba(67, 66, 66, 0.2);
  padding: 14px 40px;
}
.filter__btn {
  font-family: "Gilroy-Bold";
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  padding: 20px 80px;
  background: #4ba9ff;
  margin-top: 40px;
}
.catalog-content__menu {
  margin-left: 36px;
  display: grid;
  grid-column-gap: 36px;
  grid-template-columns: repeat(3, 1fr);
}
.catalog-pages {
  font-family: "Gilroy-Bold";
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  margin-top: 60px;
  padding-bottom: 61px;
  display: flex;
  justify-content: center;
}
</style>
