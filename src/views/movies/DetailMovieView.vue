<script setup lang="ts">
import SingleMovie from "./SingleMovie.vue";
import { useRoute } from "vue-router";
import type MovieDto from '../../components/models/movies/movie.model';
import { useFetch } from "@/composables/useFetch";
import movieUrl from "@/urls/movie.url";

const { id } = useRoute().params;

const {resource: movie} = useFetch<MovieDto>(`${movieUrl}/${id}`)

</script>

<template>
  <SingleMovie v-if="movie" :movie="movie" />
</template>
