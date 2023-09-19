<script setup>
import NavbarComponet from './components/layouts/NavbarComponet.vue'
import MyPanel from './components/MyPanel.vue'
import MyFooter from './components/MyFooter.vue'
import MyNavbar from './components/MyNavbar.vue'
import {RouterView} from 'vue-router'
</script>

<template>
  <NavbarComponet />
  <MyNavbar />
  <MyPanel />
  <MyFooter />
  <router-view/>
</template>

<style scoped></style>


