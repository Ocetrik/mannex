<template>
  <div class="introdution">
    <div class="introdution-info">
      <div class="introdution__catalog">
        <div class="catalog__text">
          Предлагаем только качественные <span>запчасти</span> для иномарок
        </div>
        <div class="catalog-button">
          <button class="catalog-button__btn title">Посмотреть каталог</button>
          <div class="catalog-button__info">Более 50 товаров</div>
        </div>
      </div>
      <div
        class="introdution__picture">
        <introSlider :slider_data="sliderItems" />
        <button @click="prevSlide" class="slider-btn-p">
          <img src="@/static/intro-prev.png" alt="" />
        </button>
        <button @click="nextSlide" class="slider-btn-n">
          <img src="@/static/intro-next.png" alt="" />
        </button>
      </div>
    </div>
    <div class="introdution-buttons">
      <button class="introdution-buttons__quality button">
        Высокое качество
      </button>
      <button class="introdution-buttons_market button">Лучшие на рынке</button>
      <button class="introdution-buttons__selection button">
        Большой выбор
      </button>
    </div>
  </div>
</template>

<script>
import introSlider from "@/components/Introdution/Slider/intro-slider.vue";

export default {
  components: {
    introSlider,
  },
  name: "Introdution",
  data: () => ({
    sliderItems: [
      { id: 1, name: "Шины", img: require("@/static/intro-product.png") },
      { id: 2, name: "Диски", img: require("@/static/intro-disk.png") },
    ],
    currentSlideIndex: 0,
  }),
  methods: {
    prevSlide() {
      if (this.nextSlide > 0) {
        this.currentSlideIndex--;
      }
    },
    nextSlide() {
      if (this.currentSlideIndex > this.slider_data.length - 1) {
        this.currentSlideIndex = 0;
      } else {
        this.currentSlideIndex++;
      }
    },
  },
};
</script>

<style lang='scss' scoped>
.slider-btn-p {
  position: absolute;
  bottom: 80px;
  padding: 13px;
  background: #ffffff;
  border: 1px solid;
}
.slider-btn-n {
  position: absolute;
  bottom: 80px;
  left: 69px;
  padding: 14px;
  background: #4ba9ff;
}
.introdution {
  padding-bottom: 150px;
  max-width: 1440px;
  margin: 0 auto;
}
.introdution-info {
  display: flex;
}
.introdution__catalog {
}
.catalog__text {
  font-family: "Gilroy-Bold";
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  line-height: 97px;
  color: #434242;
  margin-top: 50px;
  span {
    color: #4ba9ff;
  }
}
.catalog-button {
  display: flex;
  gap: 32px;
}
.catalog-button__btn {
  color: #ffffff;
  background: linear-gradient(180deg, #ff5454 0%, #cd4848 100%);
  padding: 35px 120px;
  margin-top: 50px;
  transition: all 0.5s ease 0s;

  &:hover {
    box-shadow: 0px 20px 50px rgba(255, 129, 129, 0.3);
    transition: all 0.5s ease 0s;
  }
}
.catalog-button__info {
  font-family: "Montserrat-Light";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  margin-top: 91px;
}
.introdution__picture {
  max-width: 520px;
  position: relative;
  transition: all ease 0.5s;
}
.introdution-buttons {
  display: flex;
  gap: 15px;
  // margin-top: -30px;
}
.button {
  padding: 41px 88px;
  font-family: "Montserrat-SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;
  color: #ffffff;
  background: #4ba9ff;
  box-shadow: 0px -10px 20px rgba(75, 169, 255, 0.35);
  transition: all 0.5s ease 0s;
  &:hover {
    transition: all 0.5s ease 0s;
    border-radius: 15px;
  }
}
@media screen and (max-width: 1100px) {
  .introdution-buttons {
    flex-direction: column;
    max-width: 470px;
    margin: 0 auto;
    margin-top: 50px;
  }
  .introdution-info{
    flex-direction: column;
  }
  .introdution__picture{
    margin: 0 auto;
  }
}
@media screen and (max-width: 750px) {
  .catalog__text {
    font-size: 50px;
    line-height: 60px;
  }
}
</style>