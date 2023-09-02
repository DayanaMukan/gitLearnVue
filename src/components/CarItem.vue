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


/*function changeColor(color){
    const crappyColors = ['#FF0000','#00FF00','#0000FF']
    if (crappyColors.includes(color)){
        return true
    }
    return false
}*/

</script>

<template>
    <main>
    <Card class="box">
        <template #header> <img :src="carRemake.image" alt="car" /></template>
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
            </div>
        </template>
    </Card>
    <Card class="box">
        <template #header> <img :src="carRemake.image" alt="car" /></template>
        <template #content>
            <h2>{{ carRemake.brand }}</h2>
            <p>Цена: {{carRemake.price }}</p>
            <p>Год выпуска: {{ carRemake.year }}</p>
            <p>Объем двигателя: {{ carRemake.volume }}</p>
            <p :style="`color:$carRemake.color`">Цвет: {{carRemake.color }}</p>
        </template>
        <template #footer>
            <div class="chipes">
                <Chip v-if="Number(carRemake.price.slice(0,-1)) > 10000" label="Средний" icon="pi pi-apple"/>
                <Chip v-else-if="Number(carRemake.year) <= 1960" label="Старый" icon="pi-thumbs-down-fill"/>
                <Chip v-else label="скучный" icon="pi pi-eye-slash"/>
            </div>
        </template>
    </Card>
    <Card class="box">
        <template #header> <img :src="carRemake.image" alt="car" /></template>
        <template #content>
            <h2>{{ carRemake.brand }}</h2>
            <p>Цена: {{carRemake.price }}</p>
            <p>Год выпуска: {{ carRemake.year }}</p>
            <p>Объем двигателя: {{ carRemake.volume }}</p>
            <p :style="`color:$carRemake.color`">Цвет: {{carRemake.color }}</p>
        </template>
        <template #footer>
            <div class="chipes">
                <Chip v-if="Number(carRemake.price.slice(0,-1)) > 10000" label="Доступный" icon="pi pi-apple"/>
                <Chip v-else-if="Number(carRemake.year) <= 1960" label="Старый" icon="pi-thumbs-down-fill"/>
                <Chip v-else label="скучный" icon="pi pi-eye-slash"/>
            </div>
        </template>
    </Card>
</main>
</template>
<style scoped>
main{
    height: 1500px;
    width: 800px;
    display: flex;
    flex-direction:row;
    margin-left: 150px;
    margin-top: 20px;
    
}
.box{
    background-color: black;
    height: 500px;
    width: 300px;
}
img{
    margin-top: 50px;
    margin-left: 40px;
}
p{
    color: rgb(41, 134, 55);
    margin-left: 40px;
}
div{
    margin-left: 20px;
}
h2{
    margin-left: 70px;
}
.chipes{
    display: flex;
    flex-direction:row;
    margin-top: -20px;
}


</style>

<script setup></script>