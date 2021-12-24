export default {
   state: {
      basket: []
   },
   mutations: {
      ADD_PRODUCT(state, value) {
         if (typeof value === 'object') {
            state.basket.push(value)
         }
      } 
   },
   actions: {
   },
   getters: {
      GET_SUMM_PRICE(state) {
         return state.basket.map(i => i.price).reduce((a, b) => a + b, 0) 
      },
      GET_BASKET(state) {
         return state.basket
      }
   }
}