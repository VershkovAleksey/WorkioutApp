<template>
  <div class="wrapper">
    
    <Header></Header>
    <Promo></Promo>
    <Training></Training>
    <Team></Team>
    <Potencial></Potencial>
    <PricingLayout></PricingLayout>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Promo from './components/Promo.vue';
import Training from './components/Training.vue';
import Team from './components/Team.vue';
import Potencial from './components/Potencial.vue';
// import PricingLayout from './components/PricingLayout.vue';
import Footer from './components/Footer.vue';


export default {
  name: 'App',
  components: {
    Header,
    Promo,
    Training,
    Team,
    Potencial,
    // PricingLayout,
    Footer
},
  data() {
    return {

    }
  }
}
</script>

<style>
*{
  box-sizing: border-box;
  overflow: visible;
  font-family: Poppins;
}
.wrapper {
  margin: 65px 138px 34px 138px;

}

body {
  background-color: #1f1c26;
  color: #f2f2f2;
}
</style>
