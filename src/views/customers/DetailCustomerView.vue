<script setup lang="ts">
import SingleCustomer from "./SingleCustomer.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import apiCustomer from "../../services/api-customer.service";
import type CustomerDto from "../../components/models/customers/customer.model";

const { id } = useRoute().params;
const customer = ref<CustomerDto>(null!);
onMounted(() => {
  apiCustomer
    .findOne(+id)
    .then((resp) => {
      customer.value = resp.data
    })
    .catch((err) => console.log("error : ", err.message));
});
</script>

<template>
  <SingleCustomer v-if="customer" :customer="customer" />
</template>
