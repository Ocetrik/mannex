<template>
  <div class="garage-cart">
    <div class="garage-cart__img"><img :src="img" alt="" /></div>
    <div v-show="!isEditVis" class="garage-cart__title">{{ title }}</div>
    <input
      class="garage-cart__edit-title"
      v-show="isEditVis"
      type="text"
      v-model="title"
      placeholder="Введите авто"
    />
    <div v-show="!isEditVis" class="garage-cart__description">
      {{ description }}
    </div>
    <input
      class="garage-cart__edit-description"
      v-show="isEditVis"
      type="text"
      v-model="description"
      placeholder="Введите описание авто"
    />
    <button v-show="!isEditVis" @click="isEditVis = !isEditVis; focus()" class="garage-cart__btn">
      Редактировать
    </button>
        <button v-show="isEditVis" @click="isEditVis = !isEditVis" class="garage-cart__save-btn">
      Сохранить
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: "",
    description: "",
    isEditVis: false
  }),
  props: {
    img: {
      type: String,
      default: require("@/static/car.png"),
    },
    title: {
      type: String,
      default: "Автомобиль",
    },
    description: {
      type: String,
      default: "Описание авто",
    },
  },
  methods: {
    focus() {
      setTimeout(() => this.$el.querySelector(".garage-cart__edit-title").focus(), 0) 
      console.log(this.$el.querySelector(".garage-cart__edit-title"))
    }
    
  },
};
</script>

<style scoped>
.garage-cart {
  max-width: 325px;
  border: 1px solid #a6a6a6;
  padding-bottom: 25px;
  margin-top: 50px;
  margin-left: 15px;
}
.garage-cart__img {
  margin: 0 auto;
  text-align: center;
}
.garage-cart__title {
  margin-left: 30px;
  margin-top: 70px;
  font-family: "Gilroy-Bold";
  font-size: 36px;
  line-height: 44px;
}
.garage-cart__description {
  margin-top: 5px;
  font-family: "Gilroy-Regular";
  font-size: 18px;
  margin-left: 30px;
  line-height: 21px;
}
.garage-cart__btn {
  margin: 0 auto;
  margin-top: 15px;
  padding: 20px 60px;
  background: #4ba9ff;
  font-size: 20px;
  line-height: 24px;
  font-family: "Gilroy-Bold";
  color: #ffffff;
  display: flex;
  justify-content: center;
}
.garage-cart__edit-title {
  margin-left: 30px;
  margin-top: 70px;
  font-family: "Gilroy-Bold";
  font-size: 36px;
  line-height: 44px;
  max-width: 250px;
}
.garage-cart__edit-description {
  margin-left: 30px;
  margin-top: 5px;
  font-family: "Gilroy-Regular";
  font-size: 18px;
  line-height: 21px;
  max-width: 250px;
}
.garage-cart__save-btn{
     margin: 0 auto;
  margin-top: 15px;
  padding: 20px 60px;
  background: #4ba9ff;
  font-size: 20px;
  line-height: 24px;
  font-family: "Gilroy-Bold";
  color: #ffffff;
  display: flex;
  justify-content: center;
   padding: 20px 80px;
}
</style>