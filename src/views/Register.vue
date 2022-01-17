<template>
  <div class="register">
    <div class="register-header">
      <Header />
    </div>
    <div class="register-main">
      <div class="register-main__title">
        Страница регистрации личного кабинета
      </div>
      <div class="register-main__fields">
        <div class="fields__item">
          <input type="text" placeholder="E-mail" />
        </div>
        <div class="fields__item">
          <input type="text" placeholder="Пароль" />
        </div>
        <div class="fields__item">
          <input type="text" placeholder="Повтор пароля" />
        </div>
        <div class="fields__item">
          <input type="text" placeholder="Фамилия" />
        </div>
        <div class="fields__item"><input type="text" placeholder="Имя" /></div>
        <div class="fields__item">
          <input type="text" placeholder="Отчество" />
        </div>
      </div>
      <button class="register-main-btn">Зарегистрироваться</button>
      <div class="register-main-accept">
        Нажимая кнопку “Зарегистрироваться” вы примимаете нашу<br>
        <router-link to="/register"><span>политику конфиденциальности</span></router-link>
      </div>
    </div>

    <div class="register-footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "@/components/app/Footer.vue";
import Header from "@/components/Header/Header.vue";
export default {
  components: { Footer, Header },
};
</script>

<style scoped lang="scss">
.register-main {
  max-width: 1440px;
  margin: 0 auto;
}
.register-main__title {
  margin-top: 50px;
  font-family: "Gilroy-Bold";
  font-weight: bold;
  font-size: 64px;
  line-height: 77px;
  color: #434242;
}
.register-main__fields {
  display: grid;
  grid-template-columns: repeat(3, 280px);
  gap: 30px;
  margin-top: 110px;
  justify-content: center;
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
  max-width: 265px;
}
.register-main-btn {
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
.register-main-accept {
    font-family: "Gilroy-Regular";
  font-size: 15px;
  line-height: 17px;
  text-align: center;
  margin-top: 23px;
  span {
    color: #FF8181;
    cursor: pointer;
    text-decoration: underline;
  }
  margin-bottom: 140px;
}
</style>