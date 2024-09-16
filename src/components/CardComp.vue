<template>
<div class="container">
        <div class="card mx-auto my-2">
            <router-link :to="{ name: 'product', params: { id: product.productsID } }">
                <img :src="product.img" :alt="product.name" />
                <h3>{{ product.name }}</h3>
                <p>{{ product.price }}</p>
                <button v-on:click="addToCart" class="addbtn">Add to cart</button>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
  props: ["product"],
};

</script>
<style>

</style>