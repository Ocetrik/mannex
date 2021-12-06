<template>
   <div class="wrapper footer">
         <div class="footer__row">
            <div class="row__rights">
               <div class="rights__logo"><router-link to="/"><img src="@/static/logo.png" alt=""></router-link></div>
               <div class="rights__text item">2020 © Mannex Все права защищены</div>
               <div class="rights__public item">Публичная оферта</div>
            </div>
            <div class="row-info">
               <div class="row-main">
                  <div class="footer-row__title title">Основное</div>
                  <div class="items">
                     <div class="footer-row__item item"><router-link to="/">Главная</router-link></div>
                     <div class="footer-row__item item"><router-link to="/">О компании </router-link></div>
                     <div class="footer-row__item item"><router-link to="/">Pro-Запрос</router-link></div>
                     <div class="footer-row__item item"><router-link to="/">Гараж</router-link></div>
                     <div class="footer-row__item item"><router-link to="/">Контакты</router-link></div>
                     <div class="footer-row__item item"><router-link to="/">Заказы</router-link></div>
                  </div>
               </div>
               <div class="row-account">
                  <div class="footer-row__title title">Аккаунт</div>
                  <div class="items">
                     <div class="footer-row__item item"><router-link to="/">Корзина</router-link></div>
                     <div class="footer-row__item item"><router-link to="/">Баланс </router-link></div>
                     <div class="footer-row__item item"><router-link to="/">Мои заказы</router-link></div>
                     <div class="footer-row__item item"><router-link to="/">Запрос продавцу</router-link></div>
                     <div class="footer-row__item item"><router-link to="/">Сравнение</router-link></div>
                  </div>
               </div>
               <div class="row-contacts">
                  <div class="row-title title">Контакты</div>
                  <div class="content-text item"><span><img src="~@/static/mail.png" alt=""></span> Главная</div>
                  <div class="content-number item">
                     <span><img src="~@/static/phone.png" alt=""></span>
                     8 900 203 8083
                     <br>
                     <div class="num2">8 912 294 5345</div>
                  </div>
               </div>
            </div>
         </div>
   </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">

.item {
   font-family: 'Gilroy-Regular';
   font-style: normal;
   font-weight: normal;
   font-size: 18px;
   line-height: 21px;
   color: #434242;
   white-space: nowrap;

}
.title{
   font-family: 'Gilroy-Semibold';
   font-style: normal;
   font-weight: 600;
   font-size: 24px;
   line-height: 29px;
}
.wrapper {
   background: #F5F5F5;
   padding-top: 50px;
   padding-bottom: 124px;
}
.footer {
}
.footer__row {
   max-width: 1440px;
   display: flex;
   padding-left: 240px;
}
.row__rights {
   margin-right: 13.65%;
}
.rights__logo {
}
.rights__text {
   margin-top: 50px;
   margin-bottom: 20px;
}
.rights__public{
}
.row-info{
   display: flex;
   padding-top: 30px;
}
.row-main {
   margin-right: 58.625%;
}
.footer-row__title {
}
.items{
   margin-top: 35px;
}
.footer-row__item {
   margin-top: 22px;
}

.row-account {
   margin-right: 57%;
}
.row-contacts {
}
.content-text {
   padding-top: 35px;
   img{
      padding-top: 3px;
      padding-right: 15px;
   }
}
.num2{
   margin-left: 40px;
}
.content-number {
   padding-top: 23px;
   img{
      padding-top: 3px;
      padding-right: 20px;
   }
}
</style>