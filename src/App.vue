<script setup>
import MyPanel from './components/MyPanel.vue'
import MyFooter from './components/MyFooter.vue'
import MyMenubar from './components/MyMenubar.vue'
import {RouterView} from 'vue-router'
import CarAddModal from './components/CarAddModal.vue'
</script>

<template>
  <div class="inline">
    <CarAddModal/>
    <MyMenubar />
  </div>
  
  <MyPanel />
  <router-view/>
  <MyFooter />
</template>

<style scoped>
  .inline{
    display: inline-block;
    width: 500px;
  }
</style>


