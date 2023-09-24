<template>
    <footer>
        <div class="use_button"> 
            <Button icon="pi pi-github"></Button>
            <Button icon="pi pi-facebook"/> 
            <Button icon="pi pi-youtube"/> 
            <Button icon="pi pi-twitter"/> 
        </div>
        <p class="copy">&copy;2023 Mukan Dayana | Thank's for watching!</p>
    </footer>
</template>
<script setup>
    import Button from 'primevue/button'
</script>
<style scoped>
    footer{
        padding-top: 30px;
        min-width: 500px;
        height: 150px;
        
        color: rgb(223, 223, 223);
        text-align: center;
        font-size: 24px;
        font-weight: 500;
       background-color: rgb(91, 213, 181);
    }
    .copy{
        margin-top: 40px;
    }
    Button{
        background-color: rgb(223, 223, 223);
        transition: 1s;
    }
    Button:hover {
            transform: translateY(-10px);
    }
    .use_button{
        display: flex;
        flex-direction: row;
        margin-left: 400px;
        margin-right: 400px;
        justify-content: space-evenly;
        
    }
    
</style>