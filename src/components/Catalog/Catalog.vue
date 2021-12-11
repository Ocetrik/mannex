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
        <div class="wrapper">
          <Selector
            title="Тип"
            :options="typeOptions"
            :typeSelected="selected"
            v-model="selectTypeOption"
          />
          <Selector
            title="Производитель"
            :options="brandOptions"
            :brandSelected="selected"
            v-model="selectBrandOption"
          />
          <Selector
            title="Размер"
            :options="sizeOptions"
            :sizeSelected="selected"
            v-model="selectSizeOption"
          />
          <Selector
            title="Диаметр"
            :options="diameterOptions"
            :diameterSelected="selected"
            v-model="selectDiameterOption"
            @input="optionSelect"
          />
          <button class="selector__btn">Подобрать</button>
        </div>
        <div class="catalog-content__menu">
          <catalog-cart
            :description="i.description"
            :title="i.title"
            :key="i"
            v-for="i in carts"
          />
        </div>
      </div>
      <div class="catalog-pages">
        <div
          v-for="(pagesItem, key) in new Array(numberOfPages)"
          :key="key"
          class="catalog-pages__item"
          :class="openPage === key ? 'active' : ''"
          @click="openPage = key"
        >
          {{ key }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CatalogCart from "@/components/Catalog/components/catalog-cart.vue";
import Selector from "@/components/Catalog/components/Selector.vue";
export default {
  name: "catalog",
  components: {
    CatalogCart,
    Selector,
  },
  data: () => ({
    openPage: 0,
    selected: '',

    selectTypeOption: "Летние",
    selectBrandOption: "Выбраны все",
    selectSizeOption: "Выбраны все",
    selectDiameterOption: "Выбраны все",

    typeOptions: [
      { name: "Летние", value: 1 },
      { name: "Зимние", value: 2 },
    ],
    brandOptions: [
      { name: "Выбраны все" },
      { name: "Michellin", value: 3 },
      { name: "Pirelli", value: 4 },
    ],
    sizeOptions: [{ name: "Выбраны все" }, { name: "20" }],
    diameterOptions: [{ name: "Выбраны все" }, { name: "15" }],
    products: [
      {
        title: "Michelin",
        description: 'Шина летняя "Primacy 3 GRNX 205/55R16 91V"',
      },
      { title: "Pirelli", description: "Другая шина" },
      { title: "Goodyear" },
      { title: "Continental" },
      { title: "Bridgestone" },
      { title: "Nokian" },
      { title: "Hankook" },
    ],
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
    optionSelect(options) {
      this.selected = options.name;
    },
    setSelectedType(type) {
      this.selectedType = type;
      this.products = this.getProduct(type);
    },
    getProduct(type) {
      if (type === "Шины") {
        return [
          { title: "Michelin" },
          { title: "Pirelli" },
          { title: "Goodyear" },
          { title: "Continental" },
          { title: "Bridgestone" },
          { title: "Nokian" },
          { title: "Hankook" },
        ];
      }
      if (type === "Диски") {
        return [{ title: "Диск", description: "Описание диска" }];
      }
      if (type === "Аксессуары") {
        return [{ title: "Аксессуар", description: "Описание аксессуара" }];
      }
      return [];
    },
  },
  computed: {
    carts: function () {
      return this.products.slice(this.openPages*6 || 0, 6);
    },
    numberOfPages() {
      return Math.ceil(this.products.length / 6);
    },
  },
};
</script>

<style >
.catalog-pages__item{
  padding: 10px 17px;
}
.catalog-pages__item.active {

  background: #4ba9ff;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.navigator__item.active {
  background: #4ba9ff;
  color: #ffffff;
}
.bgimg-1 {
  position: absolute;
  left: 240px;
  top: -50px;
}
.bgimg-2 {
  position: absolute;
  z-index: -1;
  bottom: -230px;
}
.catalog {
  position: relative;
}
.content-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
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
  flex-wrap: wrap;
}
.navigator__item {
  padding: 10px 25px;
  background: #ffffff;
}
.catalog-content {
  display: flex;
  margin-top: 100px;
}
.catalog-content__menu {
  margin-left: 36px;
  display: grid;
  grid-column-gap: 42px;
  grid-row-gap: 32px;
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
@media screen and (max-width: 1450px) {
  .catalog-content__menu {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 1100px) {
  .catalog-content {
    flex-direction: column;
  }
  .selector {
    display: flex;
    gap: 30px;
    margin-bottom: 30px;
    padding: 20px 20px;
  }
  .bgimg-1 {
    display: none;
  }
  .bgimg-2 {
    display: none;
  }
  .selector__btn {
    margin-top: 20px;
  }
}
@media screen and (max-width: 730px) {
  .catalog-content__menu {
    grid-template-columns: repeat(1, 1fr);
  }
  .catalog-cart {
    max-width: 325px;
    margin: 0 auto;
  }
  .selector {
    flex-direction: column;
  }
}
</style>
