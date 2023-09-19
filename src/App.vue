<script setup>
import NavbarComponet from './components/layouts/NavbarComponet.vue'
import MyPanel from './components/MyPanel.vue'
import MyFooter from './components/MyFooter.vue'
import {RouterView} from 'vue-router'
</script>

<template>
  <NavbarComponet />
  <MyPanel />
  <MyFooter />
  <router-view/>
</template>

<style scoped></style>


