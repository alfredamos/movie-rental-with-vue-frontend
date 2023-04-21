<script setup lang="ts">
import MovieForm from "@/components/forms/movies/movie.form.vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import type MovieDto from "../../components/models/movies/movie.model";
import apiMovie from "../../services/api-movie.service";
import apiGenre from "../../services/api-genre.service";
import type GenreDto from "../../components/models/genres/genre.model";

const genres = ref<GenreDto[]>([]);

const movie = ref<MovieDto>({
  id: 0,
  title: "",
  dailyRentalRate: 0,
  numberInStock: 0,
  genreId: 0,
});

const router = useRouter();

const backToList = () => {
  router.push("/movies");
};

onMounted(() => {
  apiGenre
    .findAll()
    .then((resp) => {
      genres.value = resp.data;
      console.log("In add-movie, genres : ", resp.data);
    })
    .catch((err) => console.log("error : ", err.message));
});

const submitMovie = (movieDto: MovieDto) => {
  apiMovie
    .create(movieDto)
    .then((resp) => {
      movie.value = resp.data;
      console.log("new-movie : ", resp.data);
      router.push("/movies");
    })
    .catch((err) => console.log("error : ", err.message));
};
</script>

<template>
  <MovieForm
    v-if="genres.length > 0"
    :genres="genres"
    :initialMovie="movie"
    @onMovie="submitMovie"
    @onBackToList="backToList"
  />
</template>
