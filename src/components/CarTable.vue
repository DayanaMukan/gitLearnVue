<template>
    <DataTable :value="autoList" :loading="loading.autoList">
      <Column v-for="column in carColumns" :key="column.field" :field="column.field" :header="column.header"/>
    </DataTable>
  </template>
  
  <script setup>
  import {/*ref*/ onMounted } from 'vue'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'
  import {useAuto} from '../composable/useAuto'

  const {autoList,getAutoList,loading} = useAuto();

  onMounted(() => {
    getAutoList();
  })

  const carColumns = [
  { field: 'id', header: '#' },
  { field: 'brand', header: 'Бренд' },
  { field: 'price', header: 'Цена' },
  { field: 'year', header: 'Год' },
  { field: 'volume', header: 'Объем' },
  { field: 'color', header: 'Цвет' },
  { field: 'saled', header: 'Продано' },
  { field: 'city', header: 'Город' },
  { field: 'carcase', header: 'Кузов' },
  { field: 'gear', header: 'Коробка' },
  { field: 'travel', header: 'Пробег' },
]


  
  /*const props = defineProps({
    cars: {
      type: Array,
      required: true,
    },
  })
  
  const cars = ref(props.cars)
  
  function setCriticScore(data, event) {
    data.criticScore = event.value
    console.log(data.criticScore)
  
  }*/
  
  
  
  /*const numberMarks = [
    {
      mark: 0,
      header: 'Это Део Нексия',
    },
    {
      mark: 1,
      header: 'Очень плохо',
    },
    {
      mark: 2,
      header: 'Плохо',
    },
    {
      mark: 3,
      header: 'Нормально',
    },
    {
      mark: 4,
      header: 'Хорошо',
    },
    {
      mark: 5,
      header: 'Отлично',
    },
    {
      mark: 6,
      header: 'Это Бенли',
    },
  ]*/
  </script>
  
  <style scoped>
    .dropdown {
    width: 100%;
  }
  </style>
  