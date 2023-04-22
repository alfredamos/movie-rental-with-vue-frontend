<script setup lang="ts">
import SingleGenre from "./SingleGenre.vue";
import { useRoute } from "vue-router";
import type GenreDto from "../../components/models/genres/genre.model";
import { useFetch } from "@/composables/useFetch";
import genreUrl from "@/urls/genre.url";

const { id } = useRoute().params;

const {resource: genre} = useFetch<GenreDto>(`${genreUrl}/${id}`)

</script>

<template>
  <SingleGenre v-if="genre" :genre="genre" />
</template>
