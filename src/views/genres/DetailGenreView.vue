<script setup lang="ts">
import SingleGenre from "./SingleGenre.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import apiGenre from "../../services/api-genre.service";
import type GenreDto from "../../components/models/genres/genre.model";

const { id } = useRoute().params;
const genre = ref<GenreDto>(null!);
onMounted(() => {
  apiGenre
    .findOne(+id)
    .then((resp) => {
      genre.value = resp.data
    })
    .catch((err) => console.log("error : ", err.message));
});
</script>

<template>
  <SingleGenre v-if="genre" :genre="genre" />
</template>
