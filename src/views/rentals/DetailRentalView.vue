<script setup lang="ts">
import SingleRental from "./SingleRental.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import apiRental from "../../services/api-rental.service";
import type RentalDto from "../../components/models/rentals/rental.model";

const { id } = useRoute().params;
const rental = ref<RentalDto>(null!);

onMounted(() => {
  apiRental
    .findOne(+id)
    .then((resp) => {
      rental.value = resp.data;
    })
    .catch((err) => console.log("error : ", err.message));
});
</script>

<template>
  <SingleRental v-if="rental" :rental="rental" />
</template>
