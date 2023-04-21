<script setup lang="ts">
import type GenreDto from "@/components/models/genres/genre.model";
import { ref, defineProps, defineEmits } from "vue";

interface GenreFormProps {
  initialGenre: GenreDto;
}

const emit = defineEmits(["onGenre", "onBackToList"]);
const { initialGenre } = defineProps<GenreFormProps>()

const genre = ref(initialGenre);

const submitGenre = () => {
  emit("onGenre", genre.value);
};

const backToList = () => {
  emit("onBackToList");
};
</script>

<template>
  <div class="border pado">
    <div class="card">
      <form @submit.prevent="submitGenre">
        <div class="card-header">
          <h4 class="text-center">Genre Form</h4>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input
              id="name"
              type="text"
              v-model="genre.name"
              class="form-control"
            />
          </div>
        </div>
        <div class="card-footer">
          <button type="submit" class="btn btn-outline-primary form-control m-1 fw-bold">
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
