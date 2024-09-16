<template>
<Navbarcomp/>
  <router-view/>
  <Footercomp/>
</template>

<script>

import Navbarcomp from './components/Navbarcomp.vue'
import Footercomp from './components/Footercomp.vue'


export default {
  components: {
    Navbarcomp , Footercomp,
  },
};
</script>

<style>
 ::-webkit-scrollbar {
  display: none;
}
body {
  background-color: antiquewhite;
}
</style>
