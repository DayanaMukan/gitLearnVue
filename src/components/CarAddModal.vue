<template>
            <Button icon="pi pi-plus" @click="toggleVisible" />
            <Dialog v-model:visible="visible" modal header="Выставить автомобиль" :style="{ width: '50vw' }">
                <template #default>
                    <div class="p-fluid">
                      <div class="p-field">
                        <label for="brand">Бренд</label>
                        <Dropdown id="brand" v-model="car.brand" editable :options="brandLabel" option-label="brand" option-value="brand" placeholder="Бренд" />
                      </div>
                      <div class="p-field">
                        <label for="price">Цена</label>
                        <InputNumber id="price" v-model="car.price" mode="currency" currency="KZT" locale="ru-ru" />
                      </div>
                      <div class="p-field">
                        <label for="year">Год</label>
                        <Calendar id="year" v-model="car.year" view="year" dateFormat="yy" />
                      </div>
                      <div class="p-field">
                        <label for="volume">Объем</label>
                        <InputNumber id="volume" v-model="volume" inputId="integeronly" placeholder="в литрах"/>
                      </div>
                      <div class="p-field">
                        <label for="color">Цвет</label>
                        <ColorPicker id="color" v-model="color" />
                      </div>
                      <div class="p-field">
                        <label for="city">Город</label>
                        <Dropdown id="city" v-model="city" :options="cities" optionLabel="city" placeholder="Select a City" class="w-full md:w-14rem" />
                      </div>
                      <div class="p-field">
                        <label for="carcase">Кузов</label>
                        <!-- DropDown -->
                        <InputText id="carcase" v-model="car.carcase" />
                      </div>
                      <div class="p-field">
                        <label for="gear">Коробка</label>
                        <!-- RadioButton -->
                        <InputText id="gear" v-model="car.gear" />
                      </div>
                      <div class="p-field">
                        <!-- Slider -->
                        <label for="travel">Пробег</label>
                        <InputText id="travel" v-model="car.travel" />
                      </div>
                    </div>
                  </template>              
                <template #footer>
                    <Button label="Сбросить" icon="pi pi-times" @click="toggleVisible" text />
                    <Button label="Добавить" icon="pi pi-check" @click="toggleVisible" autofocus />
                </template>
            </Dialog>
    </template>
    
    <script setup>
    import { ref } from "vue";
    import Dialog from 'primevue/dialog';
    import Button from 'primevue/button';
    import Dropdown from 'primevue/dropdown';
    import InputNumber from 'primevue/inputnumber';
    import Calendar from 'primevue/calendar';
    import ColorPicker from 'primevue/colorpicker';


    const city = ref();
    const cities = ref([
        { name: 'Almaty', code: 'Ala' },
        { name: 'Astana', code: 'Ast' },
        { name: 'Shymkent', code: 'Shym' },
        { name: 'Karaganda', code: 'Krg' },
        { name: 'Aktau', code: 'Akt' }
    ]);

    const visible = ref (false)

    const toggleVisible = ()  => {
        visible.value = !visible.value
    }

    const car = ref({
  brand: '',
  price: '',
  year: '',
  volume: '',
  color: '',
  saled: '',
  city: '',
  carcase: '',
  gear: '',
  travel: '',
})

    const brandLabel = [
    { brand: 'BMW' },
    { brand: 'Audi' },
    { brand: 'Mercedes' },
    { brand: 'Volkswagen' },
    { brand: 'Volvo' },
    { brand: 'Toyota' },
    { brand: 'Nissan' },
    { brand: 'Mazda' },
    { brand: 'Honda' },
    { brand: 'Hyundai' },
    { brand: 'Kia' },
    { brand: 'Lexus' },
    { brand: 'Ford' },
    { brand: 'Chevrolet' },
    { brand: 'Skoda' },
    { brand: 'Renault' },
    { brand: 'Peugeot' },
    ]


  
    </script>

<style scoped>

</style>