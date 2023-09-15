<template>
    <div class="card">
        <MyPanel header="Panel" :toggleable="true" :collapsed="panelCollapsed"  @toggle="togglePanel">
            <p class="m-0">
                <label for="name">Name-Surname</label>
                <InputText id="name" v-model="value2" type="text" :class="{ 'p-invalid': errorMessage }" aria-describedby="text-error" /><br><br>
                <label for="phone">Phone</label>
                <InputMask v-model="value3" date="phone" id="phone" mask="+9 (999) 999-9999" placeholder="+9 (999) 999-9999" /><br><br>
                <label for="e-mail">E-mail</label>
                <InputText id="e-mail" v-model="value" />
            </p>
        </MyPanel>
    </div>
</template>

<script setup>
   import MyPanel from 'primevue/panel';
   import InputText from 'primevue/inputtext';
   import { ref } from 'vue';
   import InputMask from 'primevue/inputmask';

    const value = ref(null);
    const value2 = ref(null);
    const value3 = ref(null);
    const panelCollapsed = ref(true);

    const togglePanel = () => {
        panelCollapsed.value=!panelCollapsed.value
    }
</script>
<style scoped>
#e-mail{
    margin-left: 100px;
}
#phone{
    margin-left: 100px;
}
#name{
    margin-left: 33px;
}
</style>