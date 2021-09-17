<template>
  <div id="app">
    <navbar />
   <router-view/>
 <rodape />
  </div>
</template>

<script>
import navbar from './components/Navbar';
import rodape from './components/Footer.vue';
export default {
  name: 'App',
  components:{
    navbar,
    rodape
  }
}
</script>

<style>
*{        
    margin: 0;
    padding: 0;
    font-size: 100%;
    border: none;
    outline: none;
    font-weight: 300;
    box-sizing: border-box;
    font-family: Arial,sans-serif;
}
</style>