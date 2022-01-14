<template>
  <div class="garage">
    <div class="garage-header">
      <Header />
    </div>
    <div class="garage-main">
      <div class="garage-main__title">Гараж</div>
      <garage-cart />
      <router-link to="/add-car"
        ><button class="garage-main__btn">
          Добавить новый автомобиль
        </button></router-link
      >
    </div>
    <div class="garage-footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "../components/app/Footer.vue";
import Header from "../components/Header/Header.vue";
import garageCart from "@/components/Garage/garage-cart.vue";

export default {
  components: { Header, Footer, garageCart },
};
</script>

<style scoped lang="scss">
.texttes{
   border: solid #ff5454;
}
.garage-main {
  max-width: 1440px;
  margin: 0 auto;
}
.garage-main__title {
  font-family: "Gilroy-Bold";
  margin-top: 50px;
  font-size: 64px;
  line-height: 77px;
}
.garage-main__btn {
  margin: 0 auto;
  margin-top: 115px;
  background: linear-gradient(180deg, #ff5454 0%, #cd4848 100%);
  transition: ease 0.5s all;
  padding: 35px 72px;
  color: #ffffff;
  font-family: "Gilroy-Bold";
  font-size: 24px;
  line-height: 29px;
  display: flex;
  justify-content: center;
  &:hover {
    box-shadow: 0px 20px 50px rgba(255, 129, 129, 0.3);
  }
}
.garage-footer {
  margin-top: 150px;
}
</style>