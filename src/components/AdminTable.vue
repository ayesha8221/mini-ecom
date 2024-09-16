<template lang="">
              <router-link to="/admin/add">Add</router-link>
          
              <div class="body" v-if="products">
          <div class="row table-container">
            <div class="col-12">
              <h1>Products</h1>
              
            </div>
            <div class="col">
              <table class="table is-striped is-bordered mt-2 is-fullwidth array-listsarray-lists"  @submit="deleteProduct">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Image</th>
                    <th>Edit/Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="product in products" :key="products.productsID" class="bord">
                    <td>{{ product.productsID }}</td>
                    <td>{{ product.name }}</td>
                    <td>R {{ product.price }}</td>
                    <td>{{ product.category }}</td>
                    <td><img class="tableImg" :src="product.img" alt="" /></td>
                    <td>
                      <button class="btn-edit">
                        <router-link :to="{ name: 'admin edit', params: { id: product.productsID } }">
            Edit
          </router-link>
        </button>
        <button class="px-5 py-1 bg-red-500 text-white rounded-sm"
        @click="deleteProduct( product.productsID )"
        >
          Delete
        </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    
</template>
<script>
import router from '@/router';
import axios from "axios"

export default {
  props: ["product"],
  computed: {
        products() {
            return this.$store.state.products
        }
    },

    mounted() {
        this.$store.dispatch("getProducts")
    },

    methods: {
    async deleteProduct(id) {
      try {
        await axios.delete(`https://e-com-api-68tp.onrender.com/products/${id}`);
        this.$store.dispatch("getProducts")
      } catch (err) {
        alert(err);
      }
    },
  },
}



</script>

<style lang="">
    
</style>