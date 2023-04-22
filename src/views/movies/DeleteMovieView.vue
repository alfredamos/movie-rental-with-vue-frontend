<script setup lang="ts">
import SingleMovie from "./SingleMovie.vue";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import apiMovie from "../../services/api-movie.service";
import type MovieDto from "../../components/models/movies/movie.model";
import DeleteItemVue from '@/components/utils/DeleteItem.vue';
import movieUrl from "@/urls/movie.url";
import { useFetch } from "@/composables/useFetch";

const { id } = useRoute().params;
const router = useRouter();

const deleteMessage = ref("");
const deleteTitle = ref("");
const showDeleteConfirmation = ref(false);

const {resource: movie} = useFetch<MovieDto>(`${movieUrl}/${id}`)

const deleteClick = () => {
  deleteMessage.value = `Do you really want to delete movie : ${movie.value.title}?`;
  deleteTitle.value = "Movie Delete Confirmation!";
  showDeleteConfirmation.value = true;
};

const deleteMovie = (value: boolean) => {
  if (value) {
    apiMovie
      .remove(+id)
      .then((resp) => {
        movie.value = resp.data;
        router.push("/movies");
      })
      .catch((err) => console.log("error : ", err.message));
  } else {
    router.push("/movies");
  }
};
</script>

<template>
  <Teleport v-if="showDeleteConfirmation" to="body">
    <DeleteItemVue
      cancelButton="Cancel"
      submitButton="Delete"
      :deleteMessage="deleteMessage"
      :deleteTitle="deleteTitle"
      @onDeleteItem="deleteMovie"
    />
  </Teleport>
  <SingleMovie
    :isEdit="true"
    v-if="movie && !showDeleteConfirmation"
    :movie="movie"
    @deleteClick="deleteClick"
  />
</template>
