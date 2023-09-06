<template>
    <DataTable :value="cars">
      <Column v-for="column in carColumns" :key="column.field" :field="column.field" :header="column.header">
        <template #body="{ data }">
          <template v-if="column.field === 'criticScore'">
            <Dropdown :modelValue="data.criticScore" :options="numberMarks" optionLabel="header" optionValue="mark" class="dropdown" @change="setCriticScore(data, $event)" />
          </template>
          <template v-else>{{ data[column.field] }} </template>
        </template>
      </Column>
    </DataTable>
  </template>
  
  <script setup>
  import { defineProps, ref } from 'vue'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'
  import Dropdown from 'primevue/dropdown'



  const props = defineProps({
    cars: {
      type: Array,
      required: true,
    },
  })
  
  const cars = ref(props.cars)
  
  function setCriticScore(data, event) {
    data.criticScore = event.value
    console.log(data.criticScore)
  
  }
  
  const carColumns = [
    {
      field: 'brand',
      header: 'Марка',
    },
    {
      field: 'price',
      header: 'Цена',
    },
    {
      field: 'year',
      header: 'Год выпуска',
    },
    {
      field: 'volume',
      header: 'Объем двигателя',
    },
    {
      field: 'color',
      header: 'Цвет',
    },
    {
      field: 'criticScore',
      header: 'Оценка критика',
    },
  ]
  
  const numberMarks = [
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
  ]
  </script>
  
  <style scoped>
  .dropdown {
    width: 100%;
  }
  </style>
  