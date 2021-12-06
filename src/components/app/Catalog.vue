<template>
   <div class="wrapper">
      <!-- <div class="bgimg-1"><img src="@/static/catalogbg.png" alt=""></div>
      <div class="bgimg-2"><img src="@/static/catalogbg-2.png" alt=""></div> -->
      <div class="content-container">
         <div class="catalog-title">Каталог</div>
         <div class="catalog-navigator">
            <div class="navigator__item item">Шины</div>
            <div class="navigator__item item">Диски</div>
            <div class="navigator__item item">Аксессуары</div>
            <div class="navigator__item item">Каталог ТО</div>
            <div class="navigator__item item">Масла и автохимия</div>
            <div class="navigator__item item">Аккумуляторы</div>
            <div class="navigator__item item">Колпаки</div>
            <div class="navigator__item item">Болты, гайки</div>
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
                  </select></div>
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
               <Product />
               <Product />
               <Product />
               <Product />
               <Product />
               <Product />
            </div>
         </div>
         <div class="catalog-pages">1 2 3 4 228</div>
      </div>
   </div>
</template>

<script>
import Product from "@/components/app/kak-nazvat/Product"
export default{
   name:'catalog',
   components: {
      Product
   }
}
</script>

<style scoped>
   .wrapper {
      display: flex;
   }
   .content-container {
      max-width: 1440px;
      padding-left: 240px;
   }
   .catalog-title {   
      font-family: 'Gilroy-Bold';
      font-style: normal;
      font-weight: bold;
      font-size: 64px;
      line-height: 77px;
   }
   .catalog-navigator {
      display: flex;
      gap: 45px;
      margin-left: 195px;
      margin-top: 75px;
   }
   .navigator__item {
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
      font-family: 'Gilroy-Bold';
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      color: #FFFFFF;
      padding: 20px 80px;
      background: #4BA9FF;
      margin-top: 40px;
   }
   .catalog-content__menu{
      margin-left: 36px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
   }
   .catalog-pages{
      font-family: 'Gilroy-Bold';
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 29px;
      margin-top: 60px;
      padding-bottom: 61px;
      padding-left: 795px;
   }
</style>
