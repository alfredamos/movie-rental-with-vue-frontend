<script setup lang="ts">
import type ListMovieDto from "@/components/models/movies/list-movie.model";
import { useFetch } from '../../composables/useFetch';
import movieUrl from '@/urls/movie.url';

const {resource: movies} = useFetch<ListMovieDto[]>(movieUrl)
</script>

<template>
  <div class="border pado">
    <div class="card">
      <div class="card-header">
            <h4 class="text-center">Movie List</h4>
      </div>
      <div class="card-body">
        <table class="table table-bordered table-hover table-responsive">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Daily Rental Rate</th>      
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="movie in movies">
              <td>
                <router-link
                  class="text-deco-no"
                  :to="`detail-movie/${movie.id}`"
                  >{{ movie.title }}</router-link
                >
              </td>
              <td>{{ movie.genre?.name }}</td>
              <td>{{ movie.numberInStock }}</td>
              <td>{{ movie.dailyRentalRate }}</td>              
              <td>
                <router-link
                  class="btn btn-outline-warning m-1 fw-bold"
                  :to="`/edit-movie/${movie.id}`"
                  >Edit</router-link
                >
                <router-link
                  class="btn btn-outline-danger m-1 fw-bold"
                  :to="`/delete-movie/${movie.id}`"
                  >Delete</router-link
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-footer">
            <RouterLink class="btn btn-outline-secondary form-control m-1 fw-bold" to="/add-Movie">Add Movie</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pado {
  padding: 10px;
}
.text-deco-no {
  text-decoration: none;
  font-weight: bold;
}
</style>
