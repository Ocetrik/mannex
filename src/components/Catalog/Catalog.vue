<template>
  <div class="catalog">
    <!-- <div class="bgimg-1"><img src="@/static/catalogbg.png" alt="" /></div> -->
    <div class="bgimg-2"><img src="@/static/catalogbg-2.png" alt="" /></div>
    <div class="content-container">
      <div class="catalog-title">Каталог</div>
      <!-- Выбор категории товаров -->
      <div class="catalog-navigator">
        <button
          class="navigator__item text"
          @click="setSelectedType(i)"
          :class="selectedType === i ? 'active' : ''"
          :key="key"
          v-for="(i, key) in typesProduct"
        >
          {{ i }}
        </button>
      </div>
      <!-- Селектор товаров по характеристикам -->
      <div class="catalog-content">
        <div class="selector-wrapper">
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
          />
          <button @click="setFilteredProducts" class="selector__btn">
            Подобрать
          </button>
        </div>
        <!-- Карточка товара -->
        <div class="catalog-content__menu">
          <catalog-cart
            :product="i"
            :description="i.description"
            :title="i.title"
            :img="i.img"
            :key="key"
            v-for="(i, key) in carts"
          />
        </div>
      </div>
      <!-- Список страниц -->
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
import { STATIC_PRODUCT } from "@/data/STATIC_PRODUCT.js";
const DEFAULT_FILTER_VALUE = "Выбраны все";

export default {
  name: "catalog",
  components: {
    CatalogCart,
    Selector,
  },
  data: () => ({
    filteredProducts: STATIC_PRODUCT,
    products: STATIC_PRODUCT,

    openPage: 0,

    selected: "",

    selectTypeOption: DEFAULT_FILTER_VALUE,
    selectBrandOption: DEFAULT_FILTER_VALUE,
    selectSizeOption: DEFAULT_FILTER_VALUE,
    selectDiameterOption: DEFAULT_FILTER_VALUE,
    typeOptions: [
      { name: "Выбраны все" },
      { name: "Летние" },
      { name: "Зимние" },
    ],
    brandOptions: [
      { name: "Выбраны все" },
      { name: "Michelin" },
      { name: "Pirelli" },
      { name: 'Goodyear'},
      { name: 'Continental'},
      { name: 'Bridgestone'},
      { name: 'Nokian'},
      { name: 'Hankook'},
    ],
    sizeOptions: [{ name: "Выбраны все" }, { name: 20 }],
    diameterOptions: [{ name: "Выбраны все" }, { name: 15 }],

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
    setFilteredProducts() {
      const {
        selectTypeOption,
        selectBrandOption,
        selectSizeOption,
        selectDiameterOption,
      } = this;
      let newListProducts = [];
      newListProducts = this.products.filter((item) =>
        selectTypeOption === DEFAULT_FILTER_VALUE
          ? true
          : item.season === selectTypeOption
      );
      newListProducts = newListProducts.filter((item) =>
        selectBrandOption === DEFAULT_FILTER_VALUE
          ? true
          : item.title === selectBrandOption
      );
      newListProducts = newListProducts.filter((item) =>
        selectSizeOption === DEFAULT_FILTER_VALUE
          ? true
          : item.size === selectSizeOption
      );
      newListProducts = newListProducts.filter((item) =>
        selectDiameterOption === DEFAULT_FILTER_VALUE
          ? true
          : item.diameter === selectDiameterOption
      );
      this.filteredProducts = newListProducts;
    },
    setSelectedType(type) {
      this.selectedType = type;
      this.filteredProducts = this.getProduct(type);
    },
    getProduct(type) {
      if (type === "Шины") {
        return STATIC_PRODUCT;
      }
      if (type === "Диски") {
        return [{ title: "Диск", description: "Описание диска", img: require('@/static/disk.jpg')
 }];
      }
      if (type === "Аксессуары") {
        return [{ title: "Аксессуар", description: "Описание аксессуара" }];
      }
      return [];
    },
  },
  computed: {
    carts() {
      if (this.openPage === 0) {
        return this.filteredProducts.slice(0, 6);
      } else {
        return this.filteredProducts.slice(
          this.openPage * 6,
          this.openPage * 6 + 6
        );
      }
    },
    numberOfPages() {
      return Math.ceil(this.filteredProducts.length / 6);
    },
  },
};
</script>

<style lang='scss'>
.catalog{
  margin-top: 150px;
}
.catalog-pages__item {
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
    padding: 20px 20px;
    flex-direction: column;
  }
  .bgimg-1 {
    display: none;
  }
  .bgimg-2 {
    display: none;
  }
  .selector__btn {
    margin-left: 20px;
    display: flex;
  }
  .selector-wrapper {
    max-height: 1000px;
    margin-bottom: 60px;
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