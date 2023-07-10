<template>
  <Nav/>
  <router-view/>
  <Footer/>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Nav, Footer
  }
}
</script>

<style>
#app {
  font-family: 'Nanum Myeongjo', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
