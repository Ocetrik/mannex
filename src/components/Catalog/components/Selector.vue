<template>
    <div class="selector">
      <div class="selector__title title">{{title}}</div>
      <div
        class="selector__selected-option text"
        @click="areOptionsVisible = !areOptionsVisible"
      >
        <p>{{ value }}</p>
        <div class="selector__options text" v-if="areOptionsVisible">
          <p v-for="option in options" :key="option.value" @click="selectOption(option)">
            {{ option.name }}
          </p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Filter",
  props: {
    value: {type: String},
    options: {
      type: Array,
      default() {
        return [];
      },
    },

    title: {
      type: String,
    }
  },
  data: () => ({
    areOptionsVisible: false,
  }),
  methods: {
    selectOption(options) {
      this.$emit('input', options.name)
    }
  },
};
</script>

<style lang="scss">
.wrapper {
  box-shadow: 0px 10px 25px rgba(119, 119, 119, 0.2);
  padding: 0 40px;
  max-height: 600px;
  padding-bottom: 63px;
  background: #ffffff;
}

.selector__title {
  padding-top: 20px;
  z-index: 0;
}
.selector__btn {
  font-family: "Gilroy-Bold";
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  padding: 20px 80px;
  background: #4ba9ff;
  margin-top: 40px;
}
.selector__selected-option {
  position: relative;
  width: 265px;
  margin-top: 8px;
  height: 50px;
  border: 1px solid rgba(67, 66, 66, 0.2);
  display: flex;
  align-items: center;
  padding-left: 40px;
  cursor: pointer;
}
.selector__options {
  border: 1px solid rgba(67, 66, 66, 0.2);
  position: absolute;
  top: 50px;
  right: 0;
  width: 100%;
  z-index: 2;
  background: #ffffff;
  p:hover {
    background: #e7e7e7;
  }
  p {
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 40px;
  }
}
</style>