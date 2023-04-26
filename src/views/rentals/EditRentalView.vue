<script setup lang="ts">
import RentalForm from "@/components/forms/rentals/rental.form.vue";
import { useRouter, useRoute } from "vue-router";
import type RentalDto from "../../components/models/rentals/rental.model";
import apiRental from "../../services/api-rental.service";
import type CustomerDto from "../../components/models/customers/customer.model";
import type MovieDto from "../../components/models/movies/movie.model";
import { useFetch } from "@/composables/useFetch";
import customerUrl from "@/urls/customer.url";
import movieUrl from "@/urls/movie.url";
import rentalUrl from "@/urls/rental.url";
import type ListRentalDto from "@/components/models/rentals/list-rental.model";

const router = useRouter();
const { id } = useRoute().params;

const backToList = () => {
  router.push("/");
};

const { resource: rental } = useFetch<ListRentalDto>(`${rentalUrl}/${id}`);

const { resource: customers } = useFetch<CustomerDto[]>(customerUrl);

const { resource: movies } = useFetch<MovieDto[]>(movieUrl);

const submitRental = (rentalDto: RentalDto) => {
  apiRental
    .edit(String(id), rentalDto)
    .then((resp) => {
      rental.value = resp.data;
      console.log("new-rental : ", resp.data);
      router.push("/");
    })
    .catch((err) => console.log("error : ", err.message));
};
</script>

<template>
  <RentalForm
    v-if="customers && movies && rental"
    :customers="customers"
    :movies="movies"
    :initialRental="rental"
    @onRental="submitRental"
    @onBackToList="backToList"
  />
</template>
