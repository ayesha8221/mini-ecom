<template>
    <div>
      <div class="container flex-container" v-if="product">
        <label class="label">Product Name</label>
            <input
              class="input"
              v-model="product.name"
              type="text"
              placeholder="Product Name"
              required
            />
            <label class="label">Price</label>
            <input
              class="input"
              v-model="product.price"
              type="number"
              placeholder="R"
              required
            />
            <label class="label">Category</label>
            <input
              class="input"
              v-model="product.category"
              type="text"
              placeholder="category"
              required
            />
            <label class="label">Image</label>
            <input
              class="input"
              v-model="product.img"
              type="text"
              placeholder="http://"
              required
            />
        <button @click="updateProduct" class="btn-submit">Submit</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        name: '',
        price: '',
        category: '',
        img: '',
      };
    },
    methods: {
      async updateProduct() {
        try {
          await axios.put(
            `https://e-com-api-68tp.onrender.com/products/${this.$route.params.id}`,
            {
              name: this.product.name,
              price: this.product.price,
              category: this.product.category,
              img: this.product.img,
            }
          );
          this.name = '';
          this.price = '';
          this.category = '';
          this.img = '';
          this.$router.push("/admin");
        } catch (err) {
          console.log(err);
        }
      },
    },
    // props: ["id"],
    computed: {
      product() {
        return this.$store.state.product;
      },
    },
    mounted() {
    //   this.$store.dispatch("getProduct", this.id),
      this.$store.dispatch("getProducts");
    },
  };
  </script>
  <style>
</style>