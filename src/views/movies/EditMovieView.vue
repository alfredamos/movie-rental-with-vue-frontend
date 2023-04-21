<script setup lang="ts">
import MovieForm from "@/components/forms/movies/movie.form.vue";
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import type MovieDto from "../../components/models/movies/movie.model";
import apiMovie from "../../services/api-movie.service";
import apiGenre from "../../services/api-genre.service";
import type GenreDto from "../../components/models/genres/genre.model";

const { id } = useRoute().params;

const genres = ref<GenreDto[]>([]);
const movie = ref<MovieDto>(null!);

const router = useRouter();

onMounted(() => {
  apiGenre
    .findAll()
    .then((resp) => {
      genres.value = resp.data;
      console.log("In edit-movie, genres : ", genres);
    })
    .catch((err) => console.log("error : ", err.message));
});

onMounted(() => {
  apiMovie
    .findOne(+id)
    .then((resp) => {
      movie.value = resp.data;
      console.log("old-value of movie : ", resp.data);
    })
    .catch((err) => console.log("error : ", err.message));
});

const backToList = () => {
  router.push("/movies");
};

const submitMovie = (movieDto: MovieDto) => {
  apiMovie
    .edit(+id, movieDto)
    .then((resp) => {
      movie.value = resp.data;
      console.log("edited-movie : ", resp.data);
      router.push("/movies");
    })
    .catch((err) => console.log("error : ", err.message));
};
</script>

<template>
  <MovieForm
    v-if="movie && genres"
    :genres="genres"
    :initialMovie="movie"
    @onMovie="submitMovie"
    @onBackToList="backToList"
  />
</template>
