<script setup lang="ts">
import type CustomerDto from "@/components/models/customers/customer.model";
import customerUrl from '@/urls/customer.url';
import { useFetch } from "@/composables/useFetch";

console.log({customerUrl});


const {resource : customers} = useFetch<CustomerDto[]>(customerUrl)

 </script>

<template>
  <div class="border pado">
    <div class="card">
      <div class="card-header">
        <h4 class="text-center">Customer List</h4>
      </div>
      <div class="card-body">
        <table class="table table-bordered table-hover table-responsive">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Gold</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="customer in customers">
              <td>
                <router-link
                  class="text-deco-no"
                  :to="`detail-customer/${customer.id}`"
                  >{{ customer.name }}</router-link
                >
              </td>
              <td>{{ customer.email }}</td>
              <td>{{ customer.phone }}</td>
              <td>{{ customer.isGold ? "Yes" : "No" }}</td>
              <td>
                <router-link
                  class="btn btn-outline-warning m-1 fw-bold"
                  :to="`/edit-customer/${customer.id}`"
                  >Edit</router-link
                >
                <router-link
                  class="btn btn-outline-danger m-1 fw-bold"
                  :to="`/delete-customer/${customer.id}`"
                  >Delete</router-link
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-footer">
        <RouterLink class="btn btn-outline-secondary form-control m-1 fw-bold" to="/signup">Add Customer</RouterLink>
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
