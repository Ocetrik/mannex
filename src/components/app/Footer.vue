<template>
  <div class="wrapper footer">
    <div class="footer__row">
      <div class="row__rights">
        <div class="rights__logo">
          <router-link to="/"
            ><img src="@/static/logo.png" alt=""
          /></router-link>
        </div>
        <div class="rights__text text">2020 © Mannex Все права защищены</div>
        <div class="rights__public text">Публичная оферта</div>
      </div>
      <footer-column
        title="Основное"
        :items="{
          'Главная':'/',
          'О компании':'/',
          'Pro-Запрос':'/',
          'Гараж':'/',
          'Контакты':'/',
          'Заказы':'/',
        }"
      />
      <footer-column
        title="Аккаунт"
        :items="{
          'Корзина':'/',
          'Баланс':'/',
          'Мои заказы':'/',
          'Запрос продавцу':'/',
          'Сравнение':'/',
        }"
      />
      <div class="row-contacts">
        <div class="row-title title">Контакты</div>
        <div class="content-text text">
          <span><img src="~@/static/mail.png" alt="" /></span> <a href="#">Главная</a>
        </div>
        <div class="content-number text">
          <span><img src="~@/static/phone.png" alt="" /></span>
          8 900 203 8083
          <div class="num2">8 912 294 5345</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FooterColumn from "@/components/Footer/components/footer-column.vue";
export default {
  components: {
    FooterColumn,
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  background: #f5f5f5;
  padding-bottom: 124px;
}
.footer {
}
.footer__row {
  max-width: 1440px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
}
.row__rights {
}
.rights__logo {
  padding-top: 50px;
}
.rights__text {
  margin-top: 50px;
  margin-bottom: 20px;
}
.rights__public {
}
.row-info {
  display: flex;
  padding-top: 30px;
  flex: 1 1 auto;
  justify-content: space-between;
}
.row-contacts{
  padding-top: 80px;
}
.content-text {
  padding-top: 35px;
  img {
    padding-top: 3px;
    padding-right: 15px;
  }
}
.num2 {
  margin-left: 40px;
}
.content-number {
  padding-top: 23px;
  img {
    padding-top: 3px;
    padding-right: 20px;
  }
}
@media screen and (max-width: 1100px) {
  .footer__row{
    flex-direction: column;
    padding: 20px;
  }

}
</style>