<template>
   <div class="wrapper footer">
      <div class="footer-content">
         <div class="footer__row">
            <div class="row__rights">
               <div class="rights__logo"><router-link to="/"><img src="/static/logo.png" alt=""></router-link></div>
               <div class="rights__item item">2020 © Mannex Все права защищены</div>
               <div class="rights__item item">Публичная оферта</div>
            </div>
            <div class="row-main">
               <div class="row-title">Основное</div>
               <div class="row-item item">
                  <router-link to="/">Главная</router-link>
                  <router-link to="/">О компании </router-link>
                  <router-link to="/">Pro-Запрос</router-link>
                  <router-link to="/">Гараж</router-link>
                  <router-link to="/">Контакты</router-link>
                  <router-link to="/">Заказы</router-link>
               </div>
            </div>
            <div class="row-account">
               <div class="row-title">Аккаунт</div>
               <div class="row-item item">
                  <router-link to="/">Корзина</router-link>
                  <router-link to="/">Баланс</router-link>
                  <router-link to="/">Мои заказы</router-link>
                  <router-link to="/">Запрос продавцу</router-link>
                  <router-link to="/">Сравнение</router-link>
               </div>
            </div>
            <div class="row-contacts">
               <div class="row-title">Контакты</div>
               <div class="content-text">Главная</div>
               <div class="content-number">
                  8 900 203 8083
                  8 912 294 5345
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

<style scoped>

</style>