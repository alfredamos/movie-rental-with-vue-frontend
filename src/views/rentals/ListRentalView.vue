<script setup lang="ts">
import type ListRentalDto from "@/components/models/rentals/list-rental.model";
import { RouterLink } from "vue-router";
import moment from "moment";
import { useFetch } from '../../composables/useFetch';
import rentalUrl from '@/urls/rental.url';

const {resource: rentals} = useFetch<ListRentalDto[]>(rentalUrl)

</script>

<template>
  <div class="border pado">
    <div class="card">
      <div class="card-header">
        <h4 class="text-center">Rental List</h4>
      </div>
      <div class="card-body">
        <table class="table table-bordered table-hover table-responsive">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Movie</th>
              <th>Rental Fee</th>
              <th>Date Out</th>
              <th>Date Due</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="rental in rentals">
              <td>
                <router-link
                  class="text-deco-no"
                  :to="`detail-rental/${rental.id}`"
                  >{{ rental.customer?.name }}</router-link
                >
              </td>
              <td>{{ rental.movie?.title }}</td>
              <td>{{ rental.rentalFee }}</td>
              <td>{{ moment(rental.dateOut).format("MMMM DD YYYY") }}</td>
              <td>{{ moment(rental.dateReturn).format("MMMM DD YYYY") }}</td>
              <td>
                <router-link
                  class="btn btn-outline-warning m-1 fw-bold"
                  :to="`/edit-rental/${rental.id}`"
                  >Edit</router-link
                >
                <router-link
                  class="btn btn-outline-danger m-1 fw-bold"
                  :to="`/delete-rental/${rental.id}`"
                  >Delete</router-link
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-footer">
        <RouterLink
          class="btn btn-outline-secondary form-control m-1 fw-bold"
          to="/add-rental"
          >Add Rental</RouterLink
        >
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
