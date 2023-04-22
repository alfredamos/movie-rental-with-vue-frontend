<script setup lang="ts">
import SingleCustomer from "./SingleCustomer.vue";
import { useRoute } from "vue-router";
import type CustomerDto from "../../components/models/customers/customer.model";
import { useFetch } from "@/composables/useFetch";
import customerUrl from "@/urls/customer.url";

const { id } = useRoute().params;

const {resource : customer} = useFetch<CustomerDto>(`${customerUrl}/${id}`)

</script>

<template>
  <SingleCustomer :isEdit="false" v-if="customer" :customer="customer" />
</template>
