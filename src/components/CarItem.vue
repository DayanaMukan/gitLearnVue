<script setup>
import{defineProps,computed} from 'vue'
import Card from  'primevue/card';
import Chip from 'primevue/chip';


const props = defineProps({
    car: {
        type: Object,
        required: true,
    },
})
const carRemake = computed(() => {
    return{
    ...props.car,
    price: props.car.price + 't',
 }
}
)


function changeColor(color){
    const crappyColors = ['#FF0000','#00FF00','#0000FF']
    if (crappyColors.includes(color)){
        return true
    }
    return false
}

</script>

<template>
    <Card>
        <template #header> <img :src="carRemake.image" alt="car" /></template>
        <template #title> {{ carRemake.brand }} </template>
        <template #content>
            <h2>{{ carRemake.brand }}</h2>
            <p>Цена: {{carRemake.price }}</p>
            <p>Год выпуска: {{ carRemake.year }}</p>
            <p>Объем двигателя: {{ carRemake.volume }}</p>
            <p :style="`color:$carRemake.color`">Цвет: {{carRemake.color }}</p>
        </template>
        <template #footer>
            <div class="chipes">
                <Chip v-if="Number(carRemake.price.slice(0,-1)) > 10000" label="Дорогой" icon="pi pi-apple"/>
                <Chip v-else-if="Number(carRemake.year) <= 1960" label="Старый" icon="pi-thumbs-down-fill"/>
                <Chip v-else label="скучный" icon="pi pi-eye-slash"/>
                <Chip v-if="changeColor(carRemake.color)" label="Иу цвет" icon="pi pi-user"/>
            </div>
        </template>
        
    </Card>
</template>
<style scoped>
.chipes{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
}
.chipes span{
    margin: 5px;
    padding: 5px;
    border: 1px solid black;
    border-radius: 5px;
}
</style>

<script setup></script>