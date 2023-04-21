<script setup lang="ts">
import type GenreDto from "@/components/models/genres/genre.model";
import type MovieDto from "@/components/models/movies/movie.model";
import { ref} from "vue";

interface MovieFormProps {
  initialMovie: MovieDto;
  genres: GenreDto[];
}

const emit = defineEmits(["onMovie", "onBackToList"]);
const {initialMovie, genres} = defineProps<MovieFormProps>()

const movie = ref(initialMovie);

const submitMovie = () => {
  emit("onMovie", movie.value);
};

const backToList = () => {
  emit("onBackToList");
};
</script>

<template>
  <div class="border pado">
    <div class="card">
      <form @submit.prevent="submitMovie">
        <div class="card-header">
          <h4 class="text-center">Movie Form</h4>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label for="title" class="form-label">Title</label>
            <input
              id="title"
              type="text"
              v-model="movie.title"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label for="dailyRentalRate" class="form-label"
              >Daily Rental Rate</label
            >
            <input
              id="dailyRentalRate"
              type="number"
              v-model.number="movie.dailyRentalRate"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label for="numberInStock" class="form-label"
              >Number in Stock</label
            >
            <input
              id="numberInStock"
              type="number"
              v-model.number="movie.numberInStock"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label for="genreId" class="form-label">Genre</label>
            <select
              v-model.number="movie.genreId"
              name="genreId"
              id="genreId"
              class="form-select"
            >
              <option value="">Please Select Genre</option>
              <option v-for="genre in genres" :key="genre.id" :value="genre.id">
                {{ genre.name }}
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
