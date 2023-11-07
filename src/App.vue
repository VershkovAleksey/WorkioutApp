<template>
  <div class="wrapper">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data() {
    return {

    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  overflow: visible;
  font-family: Poppins, sans-serif;
}

.wrapper {
  margin: 65px 138px 34px 138px;

}

body {
  background-color: #1f1c26;
  color: #f2f2f2;
}
</style>
