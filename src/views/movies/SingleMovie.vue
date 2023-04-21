<script setup lang="ts">
import { ref } from "vue";
import type ListMovieDto from "@/components/models/movies/list-movie.model";

const deleteMessage = ref("");
const deleteTitle = ref("");
const showDeleteConfirmation = ref(false);

interface Props {
  movie: ListMovieDto; 
 isEdit?: boolean;
}
const props = defineProps<Props>();

const emit = defineEmits(["deleteClick"]);

const deleteClick = () => {
  emit("deleteClick");
};
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
          class="btn btn-outline-secondary form-control m-1 fw-bold"
          to="/movies"
          >Back
          </RouterLink>
          <button
          v-if="props.isEdit"
          type="button"
          class="btn btn-outline-danger form-control m-1 fw-bold"
          @click="deleteClick"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.pado {
  padding: 10px;
}
</style>
