import { createStore } from 'vuex'

const dataURL = "https://nuraansa.github.io/jseomp-vue-server/products.json";

export default createStore({
  state: {
    Products: null
  },
  getters: {
  },
  mutations: {
    setProducts(state, value){
      state.Products = value
    }
  },
  actions: {
    async fetchProducts(context){
      try {
        let res = await fetch(dataURL);
        let { Products } = await res.json();
        if (Products) {
          context.commit("setProducts", Products);
        }
      } catch (e) {
        console.log(e.message);
      }
    }
  },
  modules: {
  }
})
