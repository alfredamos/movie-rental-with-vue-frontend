<script setup lang="ts">
import type ListRentalDto from "@/components/models/rentals/list-rental.model";
import moment from "moment";

interface Props {
  rental: ListRentalDto;
}
const props = defineProps<Props>();
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
          class="btn btn-outline-secondary form-control fw-bold"
          to="/"
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
