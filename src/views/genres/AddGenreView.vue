<script setup lang="ts">
import GenreForm from "@/components/forms/genres/genre.form.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import type GenreDto from "../../components/models/genres/genre.model";
import apiGenre from "../../services/api-genre.service";

const genre = ref<GenreDto>({
  id: 0,
  name: ""
});

const router = useRouter();

const backToList = () => {
  router.push("/genres");
};

const submitGenre = (genreDto: GenreDto) => {
  apiGenre.create(genreDto).then((resp) => {
    genre.value = resp.data;
    console.log("new-genre : ", resp.data);
    router.push("/genres");
  })
  .catch(err => console.log("error : ", err.message)
  )
};
</script>

<template>
  <GenreForm 
  :initialGenre="genre" 
  @onGenre="submitGenre" 
  @onBackToList="backToList"
  />
</template>
