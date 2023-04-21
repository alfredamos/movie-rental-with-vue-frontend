<script setup lang="ts">
import GenreForm from "@/components/forms/genres/genre.form.vue";
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import type GenreDto from "../../components/models/genres/genre.model";
import apiGenre from "../../services/api-genre.service";

const {id} = useRoute().params

const genre = ref<GenreDto>(null!);

const router = useRouter();


onMounted(() => {
      apiGenre.findOne(+id)
      .then(resp => {
            genre.value = resp.data
            console.log("old-value of genre : ", resp.data);
            
      })
      .catch(err => console.log("error : ", err.message)
      )
})

const backToList = () => {
  router.push("/genres");
};

const submitGenre = (genreDto: GenreDto) => {
  apiGenre.edit(+id , genreDto).then((resp) => {
    genre.value = resp.data;
    console.log("edited-genre : ", resp.data);
    router.push("/genres");
  })
  .catch(err => console.log("error : ", err.message)
  )
};
</script>

<template>
  <GenreForm 
  v-if="genre"
  :initialGenre="genre" 
  @onGenre="submitGenre" 
  @onBackToList="backToList"
  />
</template>
