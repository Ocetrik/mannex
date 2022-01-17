<template>
  <div class="login">
    <div class="login-header">
      <Header />
    </div>
    <div class="login-main">
      <div class="login-main__title">Страница авторизации в личный кабинет</div>
      <form action="#" method="get" enctype="multipart/form-data">
        <div class="login-main__fields">
          <div class="fields__item">
            <input type="text" placeholder="E-mail" />
          </div>
          <div class="fields__item">
            <input type="text" placeholder="Пароль" />
          </div>
        </div>
        <button type="submit" class="login-main__enter-btn">Войти</button>
      </form>
      <div class="login-main__register">
        Ещё не зарегистрированы?<br />
        <router-link to="/register"
          ><span>Зарегистрироваться</span></router-link
        >
      </div>
    </div>
    <div class="login-footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "../components/app/Footer.vue";
import Header from "../components/Header/Header.vue";
export default {
  components: { Footer, Header },
};
</script>

<style scoped lang="scss">
.login-main {
  max-width: 1440px;
  margin: 0 auto;
}
.login-main__title {
  margin-top: 50px;
  font-family: "Gilroy-Bold";
  font-weight: bold;
  font-size: 64px;
  line-height: 77px;
  color: #434242;
}
.login-main__fields {
  display: flex;
  flex-direction: column;
  margin-top: 75px;
  gap: 30px;
}
.fields__item {
  border: 1px solid rgba(67, 66, 66, 0.5);
  padding: 21px 170px 21px 40px;
  font-family: "Gilroy-Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  margin: 0 auto;
  color: #a6a6a6;

}
.login-main__enter-btn {
  background: #4ba9ff;
  padding: 20px 100px;
  max-width: 265px;
  color: #ffffff;
  font-size: 20px;
  line-height: 24px;
  font-family: "Gilroy-Bold";
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 65px;
}
.login-main__register {
  font-family: "Gilroy-Regular";
  font-size: 15px;
  line-height: 17px;
  text-align: center;
  margin-top: 23px;
  span {
    color: #48d399;
    cursor: pointer;
    text-decoration: underline;
  }
  margin-bottom: 140px;
}
</style>