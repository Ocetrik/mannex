<template>
  <div class="company-info">
    <div class="wrapper">
      <div class="company-info--information">
        <div class="information-title">О компании</div>
        <div class="information-text text">
          <span
            >Компания Mannex: продажа запчастей и аксессуаров высокого
            качества</span
          >
          <span>
            Компания Mannex начала свою деятельность недавно, но уже успела
            заслужить хорошую репутацию среди покупателей. Количество
            положительных отзывов в адрес нашей компании от благодарных клиентов
            растет с каждым днем. В нашем интернет-магазине вы можете купить
            необходимые запчасти и аксессуары для своего автомобиля по выгодным
            ценам.
          </span>
          <span>Большой ассортимент</span>
          <span
            >В каталоге нашего магазина вы найдете автозапчасти для Lexus, Mazda
            или иных автомобилей. Среди широкого ассортимента
          </span>
        </div>
        <button class="information__continue-btn">Читать дальше</button>
      </div>
      <div class="company-info--picture">
        <img src="@/static/master.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.company-info {
}
.wrapper {
  display: flex;
  gap: 23px;
}
.company-info--information {
  max-width: 800px;
  margin-left: auto;
}
.company-info--picture {
  margin-top: 100px;
}
.information-title {
  font-family: "Gilroy-Bold";
  font-size: 64px;
  line-height: 77px;
  font-weight: bold;
}
.information-text {
  margin-top: 50px;
  font-size: 24px;
  line-height: 28px;
  span {
    margin-top: 27px;
    display: block;
  }
}
.information__continue-btn {
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 35px 145px;
  background: #ffffff;
  font-family: "Gilroy-Bold";
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  margin-top: 53px;
}
@media screen and (max-width: 1300px) {
  .wrapper {
    flex-direction: column;
  }
  .company-info--information {
    margin: 0 auto;
  }
  .company-info--picture {
    margin: 0 auto;
    margin-top: 50px;
  }
}
@media screen and (max-width: 850px){
  .company-info--picture{
    display: none;
  }
}
@media screen and (max-width: 750px) {
  .text{
    font-size: 18px;
  }  
}
</style>