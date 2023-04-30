<script setup lang="ts">
import type CustomerDto from "@/components/models/customers/customer.model";
import { ref} from "vue";

interface CustomerFormProps{
      initialCustomer: CustomerDto
}

const emit = defineEmits(["onCustomer", "onBackToList"]);

const {initialCustomer} =defineProps<CustomerFormProps>()
const customer = ref(initialCustomer);

const submitCustomer = () => {
  emit("onCustomer", customer.value);
};

const backToList = () => {
  emit("onBackToList");
};
</script>

<template>
  <div class="border pado">
    <div class="card">
      <form @submit.prevent="submitCustomer">
        <div class="card-header">
          <h4 class="text-center">Customer Form</h4>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input id="name" type="text" v-model="customer.name" class="form-control" />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input id="email" type="text" v-model="customer.email" class="form-control" />
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">Phone</label>
            <input id="phone" type="text" v-model="customer.phone" class="form-control" />
          </div>
        </div>
        <div class="card-footer">
          <button type="submit" class="btn btn-outline-primary form-control m-1 fw-bold">
            Submit
          </button>
          <button @click="backToList" type="button" class="btn btn-outline-secondary form-control m-1 fw-bold">
            Back
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.pado {
  padding: 10px;
}
</style>
