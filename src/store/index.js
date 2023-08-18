import { createStore } from 'vuex'
const miniURL = "https://e-com-api-68tp.onrender.com/"

export default createStore({
  state: {
    products: null,
    product: null,
  },
  getters: {
  },
  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    },
    setProduct: (state, product) => {
      state.product = product;
    },
  },
  actions: {
    getProducts: async (context) => {
      fetch(`${miniURL}products`)
      .then((res) => res.json())
      .then((products) => context.commit("setProducts", products));
    },
    getProduct: async (context, id) => {
      fetch(`${miniURL}products/` + id)
      .then((res) => res.json())
      .then((product) => context.commit("setProduct", product))
    },

    // async addProduct(context, addProduct) {
    //   console.log(addProduct);
    //   fetch("https://e-com-api-68tp.onrender.com/products", {
    //     // method: "POST",
    //     // mode: "cors",
    //     // headers: {
    //     //   "Content-type": "application/json; charset=UTF-8",
    //     // },
    //     // body: JSON.stringify(addProduct),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
 
  },
  modules: {
  }
})
