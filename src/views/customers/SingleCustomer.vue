<script setup lang="ts">
import type CustomerDto from "../../components/models/customers/customer.model";

interface Props {
  customer: CustomerDto;
}
const props = defineProps<Props>();
</script>
<template>
  <div class="border pado">
    <div class="card">
      <div class="card-header">
        <h4 class="text-center">Customer Detail</h4>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">
            Name: &nbsp; <b>{{ props.customer.name }}</b>
          </li>
          <li class="list-group-item">
            Email: &nbsp; <b>{{ props.customer.email }}</b>
          </li>
          <li class="list-group-item">
            Phone: &nbsp; <b>{{ props.customer.phone }}</b>
          </li>
          <li class="list-group-item">
            Gold: &nbsp; <b>{{ props.customer.isGold ? "Yes" : "No" }}</b>
          </li>
        </ul>
      </div>
      <div class="card-footer">
        <RouterLink
          class="btn btn-outline-secondary form-control fw-bold"
          to="/customers"
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
