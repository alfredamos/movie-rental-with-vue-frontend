<script setup lang="ts">
import SingleMovie from "./SingleMovie.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import apiMovie from "../../services/api-movie.service";
import type MovieDto from '../../components/models/movies/movie.model';

const { id } = useRoute().params;
const movie = ref<MovieDto>(null!);

onMounted(() => {
  apiMovie
    .findOne(+id)
    .then((resp) => {
      movie.value = resp.data
    })
    .catch((err) => console.log("error : ", err.message));
});
</script>

<template>
  <SingleMovie v-if="movie" :movie="movie" />
</template>
