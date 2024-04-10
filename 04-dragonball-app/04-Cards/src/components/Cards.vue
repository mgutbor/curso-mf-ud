<style src="./Cards.css"></style>

<template>
  <div>
    <h1 class="text-center font-bold text-3xl">Dragonball MF Vue3</h1>
    <div class="container">
      <div
        v-for="personaje in personajes.items"
        :key="personaje.id"
        class="card"
      >
        <a :href="`/personajes/${personaje.id}`">
          <img :src="personaje.image" :alt="personaje.name" />
          <h3>{{ personaje.name }}</h3>
          <p>{{ personaje.race }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const personajes = ref([]);

const getPersonajes = async () => {
  const resp = await fetch("https://dragonball-api.com/api/characters");
  const data = await resp.json();
  personajes.value = data;
};

onMounted(() => {
  getPersonajes();
});
</script>