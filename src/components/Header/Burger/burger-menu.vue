<template>
  <div @click="isVisible = !isVisible" class="header-info__burger">
    <span></span>
    <div class="burger-items text">
      <div
        v-for="(i,key) in items"
        :key="key"
        v-show="!isVisible"
        class="burger-items__item"
      >
        {{ i.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
  },
  components: {
  },
  methods: {
  },
  data: () => ({
    items: [
      { name: "Главная" },
      { name: "Pro-Запрос" },
      { name: "Гараж" },
      { name: "Контакты" },
      { name: "Заказы" },
      { name: "Заказы" },
    ],
    isVisible: true
  }),
};
</script>

<style scoped lang="scss">
.burger-items__item {
  width: 100px;
  padding-top: 20px;
}
.burger-items{
  position: fixed;
  left: 0;
  top: 0;
  padding-right: 50px;
  color: #000000;
}
.header-info__burger {
  z-index: 5;
  position: relative;
  width: 30px;
  height: 16px;
  cursor: pointer;
  right: 17px;
  top: 26px;
  span,
  &::before,
  &::after {
    position: absolute;
    left: 0;
    width: 100%;
    height: 10%;
    transition: all 0.3s ease 0s;
    background: #000000;
  }
  &::before,
  &::after {
    content: "";
  }
  &::before {
    top: 0;
  }
  &::after {
    bottom: 0;
  }
  span {
    top: 50%;
    transform: scale(1) translate(0px, -50%);
  }
}
</style>