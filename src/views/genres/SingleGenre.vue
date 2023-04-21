<script setup lang="ts">
import type GenreDto from "../../components/models/genres/genre.model";

interface Props {
  genre: GenreDto;
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
          class="btn btn-outline-secondary form-control fw-bold m-1"
          to="/genres"
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
