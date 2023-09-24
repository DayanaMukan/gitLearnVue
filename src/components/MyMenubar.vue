<template>
    <menu>
        <Menubar :model="items" class="items"/>
       
    </menu>
</template>
<script setup>
import { ref } from "vue";
import Menubar from 'primevue/menubar';

const items = ref([
    {
        label: 'HOME',
        icon: 'pi pi-fw pi-file',
    },
    {
        label: 'ABOUT',
        icon: 'pi pi-fw pi-file',
    },
    {
        label: 'SERVICES',
        icon: 'pi pi-fw pi-file',
    },
    {
        label: 'CONTACS',
        icon: 'pi pi-fw pi-file',
    }
])
</script>
<style scoped>
    menu{
        min-width: 100px;
        min-height: 70px;
        margin-right: 20px;
    }
    Menubar{
        padding-right: 500px;
    }
</style>