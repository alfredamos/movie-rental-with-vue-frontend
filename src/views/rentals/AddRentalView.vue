<script setup lang="ts">
import RentalForm from "@/components/forms/rentals/rental.form.vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import type RentalDto from "../../components/models/rentals/rental.model";
import apiRental from "../../services/api-rental.service";
import apiCustomer from "../../services/api-customer.service";
import type CustomerDto from "../../components/models/customers/customer.model";
import apiMovie from '../../services/api-movie.service';
import type MovieDto from '../../components/models/movies/movie.model';

const customers = ref<CustomerDto[]>([]);
const movies = ref<MovieDto[]>([])

const rental = ref<RentalDto>({
  id: "",
  customerId: "",
  movieId: "",
  rentalFee: 0,
});

const router = useRouter();

const backToList = () => {
  router.push("/");
};

onMounted(() => {
  apiCustomer
    .findAll()
    .then((resp) => {
      customers.value = resp.data;
      console.log("In add-rental, customers : ", resp.data);
    })
    .catch((err) => console.log("error : ", err.message));
});

onMounted(() => {
  apiMovie
    .findAll()
    .then((resp) => {
      movies.value = resp.data;
      console.log("In add-rental, movies : ", resp.data);
    })
    .catch((err) => console.log("error : ", err.message));
});

const submitRental = (rentalDto: RentalDto) => {
  apiRental
    .create(rentalDto)
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
    v-if="customers.length > 0 && movies.length > 0"
    :customers="customers"
    :movies="movies"
    :initialRental="rental"
    @onRental="submitRental"
    @onBackToList="backToList"
  />
</template>
