<template>
  <Toast />
  <Button label="Info" severity="info" @click="showInfo" />
  <Button label="Warn" severity="warning" @click="showWarn" />
</template>

<script setup>
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
const toast = useToast();

const showInfo = () => {
  toast.add({
    severity: "info",
    summary: "Info Message",
    detail: "Message Content",
    life: 3000,
  });
};

const showWarn = () => {
  toast.add({
    severity: "warn",
    summary: "Warn Message",
    detail: "Message Content",
    life: 3000,
  });
};
</script>
