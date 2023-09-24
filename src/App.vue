<script setup>
import MyPanel from './components/MyPanel.vue'
import MyFooter from './components/MyFooter.vue'
import MyMenubar from './components/MyMenubar.vue'
import {RouterView} from 'vue-router'
import CarAddModal from './components/CarAddModal.vue'
</script>

<template>
    <CarAddModal/>
    <MyMenubar />

  
  <MyPanel />
  <router-view/>
  <MyFooter />
</template>

<style scoped>
</style>


