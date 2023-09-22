<script setup>
import NavbarComponet from './components/layouts/NavbarComponet.vue'
import MyPanel from './components/MyPanel.vue'
import MyFooter from './components/MyFooter.vue'
import MyNavbar from './components/MyNavbar.vue'
import {RouterView} from 'vue-router'
import CarAddModal from './components/CarAddModal.vue'
</script>

<template>
  <NavbarComponet />
  <CarAddModal/>
  <MyNavbar />
  <MyPanel />
  <router-view/>
  <MyFooter />
</template>

<style scoped></style>


