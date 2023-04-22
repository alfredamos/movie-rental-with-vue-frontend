<script setup lang="ts">
import MovieForm from "@/components/forms/movies/movie.form.vue";
import { useRouter, useRoute } from "vue-router";
import type MovieDto from "../../components/models/movies/movie.model";
import apiMovie from "../../services/api-movie.service";
import type GenreDto from "../../components/models/genres/genre.model";
import { useFetch } from "@/composables/useFetch";
import genreUrl from "@/urls/genre.url";
import movieUrl from "@/urls/movie.url";

const { id } = useRoute().params;

const router = useRouter();

const {resource: genres} = useFetch<GenreDto[]>(genreUrl)

const {resource: movie} = useFetch<MovieDto>(`${movieUrl}/${id}`)

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
