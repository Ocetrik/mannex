<template>
  <div class="header">
    <div class="header-info">
      <div class="header-info__picture">
        <router-link to="/"
          ><img src="@/static/header-logo.png" alt=""
        /></router-link>
      </div>
      <div class="header-info__navigator">
        <div class="navigator__item text">Главная</div>
        <div class="navigator__item text">Pro-Запрос</div>
        <router-link to="/garage" class="navigator__item text">Гараж</router-link>
        <div class="navigator__item text">Контакты</div>
        <div class="navigator__item text">Заказы</div>
      </div>
      <div class="header-info__busket">
        <router-link to="/basket" class="busket__logo"
          ><img src="@/static/busket.png" alt=""
        /></router-link>
        <div class="busket__summ text">{{ summPrice }}</div>
      </div>
      <router-link to="/login" class="header-info__login">
        <div class="login__user">
          <img src="@/static/login-user.png" alt="" />
        </div>
        <div class="login__btn text">Войти</div>
      </router-link>
      <div class="burger-menu">
        <burger-menu />
      </div>
    </div>
    <div class="header-search">
      <input
        class="header-search__text"
        placeholder="Поиск по артикулу"
        type="text"
      />
      <button class="header-search__send text">Поиск</button>
    </div>
    <!-- <div class="modal-layer"></div> -->
  </div>
</template>

<script>
import ROUTER_PATH from "@/data/ROUTER_PATH.js";
import burgerMenu from "./Burger/burger-menu.vue";
export default {
  components: { burgerMenu },
  computed: {
    summPrice() {
      return this.$store.getters.GET_SUMM_PRICE;
    },
  },
  methods: {},
};
</script>

<style scoped lang='scss'>
.modal-layer{
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: rgba(0,0,0,0.9);
  top: 0;
  left: 0;
  z-index: 100;
}
.header-info {
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 50px;
}
.header-info__picture {
}
.header-info__navigator {
  display: flex;
  padding-top: 23px;
}
.navigator__item {
}
.header-info__busket {
  display: flex;
  gap: 22px;
  align-items: center;
}
.busket__logo {
}
.busket__summ {
}
.header-info__login {
  display: flex;
  border: 1px solid #4ba9ff;
  align-items: center;
  justify-content: center;
  height: 42px;
  margin-top: 23px;
}
.login__user {
  padding: 10px 25px;
}
.login__btn {
  background: #4ba9ff;
  padding: 10px 25px;
  color: #ffffff;
}
.header-search {
  border: 1px solid rgba(67, 66, 66, 0.5);
  max-width: 677px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #a6a6a6;
  flex: 1 1 auto;
  margin-top: 50px;
}
.header-search__text {
  font-family: "Gilroy-Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  padding-left: 40px;
}
.header-search__send {
  background: #4ba9ff;
  padding: 13px 48px;
  color: #ffffff;
  font-weight: 500;
}
.burger-menu {
  display: none;
  padding-top: 8px;
}

@media screen and (max-width: 1100px) {
  .header-info__navigator {
    display: none;
  }
  .burger-menu {
    display: block;
  }
}
</style>