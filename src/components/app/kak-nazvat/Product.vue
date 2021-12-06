<template>
   <div class="menu-product">
      <div class="product__logo"><img src="~@/static/product.png" alt=""></div>
      <div class="product__title">Michelin</div>
      <div class="product__description item">Шина летняя "Primacy 3 GRNX <br> 205/55R16 91V"</div>
      <div class="product-basket">
         <button class="basket__price title">990р.</button>
         <div class="basket__number"> 1 </div>
         <div class="basket__image"><img src="~@/static/busket.png" alt=""></div>
      </div>
   </div>
</template>

<style scoped lang="scss">
   .menu-product {
      border: 1px solid #A6A6A6;
      padding: 30px 35px 28px 32px;
      margin-right: 42px;
      margin-bottom: 33px;
   }
   .product__logo {
   }
   .product__title {
      font-family: 'Gilroy-Bold';
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 44px;
      margin-top: 21px;
   }
   .product__description {
      margin-top: 5px;
   }
   .product-basket {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
   }
   .basket__price {
      background: #4BA9FF;
      width: 80px;
      height: 25px;
      text-align: center;
      align-items: center;
      color: #ffffff;
      font-size: 15px;
      line-height: 18px;
   }
   .basket__number {
      display: flex;
      height: 25px;
      width: 80px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      justify-content: center;
      align-items: center;
   }
   .basket__image {
   }
   .bgimg-1 {
      position: absolute;
      left: 200px;
   }
   .bgimg-2 {
      position: absolute;
   }
</style>