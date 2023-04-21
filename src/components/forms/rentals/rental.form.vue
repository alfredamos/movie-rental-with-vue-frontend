<script setup lang="ts">
import type CustomerDto from "@/components/models/customers/customer.model";
import type MovieDto from "@/components/models/movies/movie.model";
import type RentalDto from "@/components/models/rentals/rental.model";
import { ref, defineProps, defineEmits } from "vue";

interface RentalFormProps{      
 customers: CustomerDto[];
 movies: MovieDto[];
 initialRental: RentalDto
}

const emit = defineEmits(["onRental", "onBackToList"]);
const {customers, movies, initialRental} = defineProps<RentalFormProps>()

const rental = ref(initialRental);

const submitRental = () => {
  emit("onRental", rental.value);
};

const backToList = () => {
  emit("onBackToList");
};
</script>

<template>
  <div class="border pado">
    <div class="card">
      <form @submit.prevent="submitRental">
        <div class="card-header">
          <h4 class="text-center">Rental Form</h4>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label for="rentalFee" class="form-label">Rental Fee</label>
            <input
              id="rentalFee"
              type="text"
              v-model.number="rental.rentalFee"
              class="form-control"
            />
          </div>          
          <div class="mb-3">
            <label for="customerId" class="form-label">Customer</label>
            <select
              v-model.number="rental.customerId"
              name="customerId"
              id="customerId"
              class="form-select"
            >
              <option value="">Please Select Customer</option>
              <option v-for="customer in customers" :key="customer.id" :value="customer.id">
                {{ customer.name }}
              </option>
            </select>
          </div>
          <div class="mb-3">
            <label for="movieId" class="form-label">Movie</label>
            <select
              v-model.number="rental.movieId"
              name="movieId"
              id="movieId"
              class="form-select"
            >
              <option value="">Please Select Movie</option>
              <option v-for="movie in movies" :key="movie.id" :value="movie.id">
                {{ movie.title }}
              </option>
            </select>
          </div>
        </div>
        <div class="card-footer">
          <button
            type="submit"
            class="btn btn-outline-primary form-control m-1 fw-bold"
          >
            Submit
          </button>
          <button
            @click="backToList"
            type="button"
            class="btn btn-outline-secondary form-control m-1 fw-bold"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
.pado {
  padding: 10px;
}
</style>
