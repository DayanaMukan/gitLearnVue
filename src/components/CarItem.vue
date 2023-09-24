<template>
  <Card>
    <template #header>
      <img :src="auto.image" class="car-image" />
    </template>
    <template #title>{{ auto.brand }}</template>
    <template #content>
      <input type="text" v-model="localPrice" @input="updateCar" @click.stop />
      <p>Год выпуска: {{ auto.year }}</p>
      <p>Объем двигателя: {{ auto.volume }}</p>
      <div class="color-container">
        <p style="margin: 0px; margin-right: 10px">Цвет:</p>
        <ColorPicker v-model="localColor" disabled />
      </div>
    </template>
    <template #footer>
      <Chip v-if="Number(localPrice.slice(0, -1)) > 1000000" label="Дорогой" icon="pi pi-apple" />
      <Chip v-else-if="Number(auto.year) <= 1960" label="Старый" icon="pi pi-history" />
      <Chip v-else label="Скучный" icon="pi-briefcase" />
      <Chip v-if="isCrappyColor(localColor)" label="Беспонтовый цвет" icon="pi pi-eye-slash" />
    </template>
  </Card>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'
import Card from 'primevue/card'
import ColorPicker from 'primevue/colorpicker'
import { useAuto } from '../composable/useAuto'

const { updateAuto } = useAuto()

const props = defineProps({
  auto: {
    type: Object,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update:price'])

const localPrice = ref(props.price)
const localColor = ref(props.auto.color)

async function updateCar(event) {
  emit('update:price', event.target.value)
  localPrice.value = event.target.value

  // Обновляем объект auto только внутри компонента
  const updatedAuto = { ...props.auto, price: localPrice.value }
  localColor.value = updatedAuto.color

  await updateAuto(updatedAuto)
}

function isCrappyColor(color) {
  const crappyColors = ['#FF0000', '#00FF00', '#0000FF']
  return crappyColors.includes(color)
}
</script>



<style scoped>
:deep(.p-card) {
  transform: perspective(1000px) !important;
  position: relative !important;
}

:deep(.p-card):hover {
  animation: transform 1s ease-in-out;
  cursor: pointer;
}

@keyframes transform {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

.car-image {
  height: 168px;
  width: 278px;
}

.color-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.color-box {
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-right: 5px;
  border: 1px solid black;
}
</style>
