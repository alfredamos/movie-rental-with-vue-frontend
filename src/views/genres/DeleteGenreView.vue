<script setup lang="ts">
import SingleGenre from "./SingleGenre.vue";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import apiGenre from "../../services/api-genre.service";
import type GenreDto from "../../components/models/genres/genre.model";
import DeleteItemVue from "@/components/utils/DeleteItem.vue";
import genreUrl from "@/urls/genre.url";
import { useFetch } from '../../composables/useFetch';

const { id } = useRoute().params;
const router = useRouter();

const deleteMessage = ref("");
const deleteTitle = ref("");
const showDeleteConfirmation = ref(false);

const {resource: genre} = useFetch<GenreDto>(`${genreUrl}/${id}`)

const deleteClick = () => {
  deleteMessage.value = `Do you really want to delete genre : ${genre.value.name}?`;
  deleteTitle.value = "Genre Delete Confirmation!";
  showDeleteConfirmation.value = true;
};

const deleteGenre = (value: boolean) => {
  if (value) {
    apiGenre
      .remove(+id)
      .then((resp) => {
        genre.value = resp.data;
        router.push("/genres");
      })
      .catch((err) => console.log("error : ", err.message));
  } else {
    router.push("/genres");
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
      @onDeleteItem="deleteGenre"
    />
  </Teleport>
  <SingleGenre
    v-else="showDeleteConfirmation"
    :isEdit="true"
    v-if="genre"
    :genre="genre"
    @deleteClick="deleteClick"
  />
</template>
