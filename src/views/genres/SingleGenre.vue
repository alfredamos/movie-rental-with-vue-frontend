<script setup lang="ts">
import type GenreDto from "../../components/models/genres/genre.model";

interface Props {
  genre: GenreDto;
}
const props = defineProps<Props>();
</script>
<template>
  <div class="border pado">
    <div class="card">
      <div class="card-header">
        <h4 class="text-center">Genre Detail</h4>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">
            Name: &nbsp; <b>{{ props.genre.name }}</b>
          </li>          
        </ul>
      </div>
      <div class="card-footer">
        <RouterLink
          class="btn btn-outline-secondary form-control fw-bold"
          to="/genres"
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
