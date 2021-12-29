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
      <div class="introdution__picture">
        <introSlider
        :slider_data="sliderItems" />
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
import introSlider from '@/components/Introdution/Slider/intro-slider.vue';

export default {
  components: { 
    introSlider
    },
  name: 'Introdution',
    data: () => ({
    sliderItems: [
      {id: 1, name: 'Шины', img:'@/static/intro-product.png'},
      {id: 2, name: 'Диски', img:'@/static/disk.jpg'}
    ]
  }),
};
</script>

<style lang='scss' scoped>
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
}
.introdution-buttons {
  display: flex;
  gap: 15px;
  margin-top: -30px;
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
@media screen and (max-width: 1000px) {
  .introdution-buttons{
    flex-direction: column;
    max-width: 470px;
    margin: 0 auto;
    margin-top: 50px;
  }
}
@media screen and (max-width: 750px) {
  .catalog__text{
    font-size: 50px;
    line-height: 60px;
  }  
}
</style>