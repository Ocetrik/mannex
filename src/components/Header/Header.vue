<template>
  <div class="header">
    <div class="header-info">
      <div class="header-info__picture">
        <router-link to="/"><img src="@/static/header-logo.png" alt="" /></router-link>
      </div>
      <div class="header-info__navigator">
        <div class="navigator__item text">Главная</div>
        <div class="navigator__item text">Pro-Запрос</div>
        <div class="navigator__item text">Гараж</div>
        <div class="navigator__item text">Контакты</div>
        <div class="navigator__item text">Заказы</div>
      </div>
      <div class="header-info__busket">
        <router-link to="/basket" class="busket__logo"
          ><img src="@/static/busket.png" alt=""
        /></router-link>
          <div class="busket__summ text">{{summPrice}}</div>
      </div>
      <a href="#" class="header-info__login">
        <div class="login__user">
          <img src="@/static/login-user.png" alt="" />
        </div>
        <div class="login__btn text">Войти</div>
      </a>
      <div class="header-info__burger">
        <span></span>
      </div>
    </div>
    <div class="header-search">
      <input class="header-search__text" placeholder="Поиск по артикулу" type="text" />
      <button class="header-search__send text">Поиск</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    summPrice() {
      return this.$store.getters.GET_SUMM_PRICE
    },
  },
  methods: {
  }
};
</script>

<style scoped lang='scss'>
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
  padding-left: 40px
}
.header-search__send {
  background: #4ba9ff;
  padding: 13px 48px;
  color: #ffffff;
  font-weight: 500;
}
@media screen and (max-width: 1100px) {
  .header-info__navigator{
    display: none;
  }
  .header-info__burger{
       z-index: 5;
   position: relative;
   width: 30px;
   height: 16px;
   cursor: pointer;
   right: 17px;
   top: 26px;
   span,
   &::before,
   &::after{
      position: absolute;
      left: 0;
      width: 100%;
      height: 10%;
      transition: all 0.3s ease 0s;
      background: #000000;
   }
   &::before,
   &::after{
      content:"";
   }
   &::before{
      top: 0;
   }
   &::after{
      bottom: 0;
   }
   span{
      top: 50%;
      transform: scale(1) translate(0px, -50%);
   }
  }
  .header-info__busket{
  }
  .header-info__login{
    
  }
}
</style>