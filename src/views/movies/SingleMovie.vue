<script setup lang="ts">
import type ListMovieDto from "@/components/models/movies/list-movie.model";

interface Props {
  movie: ListMovieDto; 
}
const props = defineProps<Props>();
</script>
<template>
  <div class="border pado">
    <div class="card">
      <div class="card-header">
        <h4 class="text-center">Movie Detail</h4>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">
            Title: &nbsp; <b>{{ props.movie.title }}</b>
          </li>
          <li class="list-group-item">
            Daily Rate: &nbsp; <b>{{ props.movie.dailyRentalRate }}</b>
          </li>
          <li class="list-group-item">
            Genre: &nbsp; <b>{{ props.movie.genre?.name }}</b>
          </li>
          <li class="list-group-item">
            Stock: &nbsp; <b>{{ props.movie.numberInStock }}</b>
          </li>
        </ul>
      </div>
      <div class="card-footer">
        <RouterLink
          class="btn btn-outline-secondary form-control fw-bold"
          to="/movies"
          >Back</RouterLink
        >
      </div>
    </div>
  </div>
</template>
<style>
.pado {
  padding: 10px;
}
</style>
