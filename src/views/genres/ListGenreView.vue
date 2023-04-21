<script setup lang="ts">
import {ref, onMounted} from "vue"
import type GenreDto from '@/components/models/genres/genre.model';
import apiGenre from '../../services/api-genre.service';

const genres = ref<GenreDto[]>([])

onMounted(() => {
      apiGenre.findAll()
      .then(resp => {
            genres.value = resp.data
            console.log(resp.data)
            
      })
      .catch(err => console.log("error : ", err.message)
      )
})
</script>



<template>
  <div class="border pado">
    <div class="card">
      <div class="card-header">
            <h4 class="text-center">Genre List</h4>
      </div>
      <div class="card-body">
        <table class="table table-bordered table-hover table-responsive">
          <thead>
            <tr>
              <th>Name</th>              
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="genre in genres">
              <td>
                <router-link
                  class="text-deco-no"
                  :to="`detail-genre/${genre.id}`"
                  >{{ genre.name }}</router-link
                >
              </td>              
              <td>
                <router-link
                  class="btn btn-outline-warning m-1 fw-bold"
                  :to="`/edit-genre/${genre.id}`"
                  >Edit</router-link
                >
                <router-link
                  class="btn btn-outline-danger m-1 fw-bold"
                  :to="`/delete-genre/${genre.id}`"
                  >Delete</router-link
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-footer">
            <RouterLink class="btn btn-outline-secondary form-control m-1 fw-bold" to="/add-genre">Add Genre</RouterLink>
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
