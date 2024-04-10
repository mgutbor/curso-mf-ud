<template>
  <div>
    <h1 class="text-center font-bold text-3xl">Dragonball MF Vue3</h1>
    <div v-for="personaje in personajes.items" :key="personaje.id">
      {{ personaje.name }} - {{ personaje.race }}
    </div>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';

  const personajes = ref([]);

  const getPersonajes = async () => {
    const resp = await fetch("https://dragonball-api.com/api/characters");
    const data = await resp.json();
    personajes.value = data;
  }  

  onMounted(() => {
    getPersonajes();
  });
</script>