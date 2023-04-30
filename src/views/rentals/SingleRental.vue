<script setup lang="ts">
import type ListRentalDto from "@/components/models/rentals/list-rental.model";
import moment from "moment";

interface Props {
  rental: ListRentalDto;
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
        <h4 class="text-center">Rental Detail</h4>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">
            Customer: &nbsp; <b>{{ props.rental.customer?.name }}</b>
          </li>
          <li class="list-group-item">
            Movie: &nbsp; <b>{{ props.rental.movie?.title }}</b>
          </li>
          <li class="list-group-item">
            Date Out: &nbsp;
            <b>{{ moment(props.rental.dateOut).format("MMMM DD YYYY") }}</b>
          </li>
          <li class="list-group-item">
            Return Date: &nbsp;
            <b>{{ moment(props.rental.dateReturn).format("MMMM DD YYYY") }}</b>
          </li>
        </ul>
      </div>
      <div class="card-footer">
        <RouterLink
          class="btn btn-outline-secondary m-1 form-control fw-bold"
          to="/"
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
