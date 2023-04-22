<script setup lang="ts">
import CustomerForm from "@/components/forms/customers/customer.form.vue";
import { useRouter, useRoute } from "vue-router";
import type CustomerDto from "../../components/models/customers/customer.model";
import apiCustomer from "../../services/api-customer.service";
import { useFetch } from "@/composables/useFetch";
import customerUrl from "@/urls/customer.url";

const {id} = useRoute().params

const router = useRouter();

const {resource : customer} = useFetch<CustomerDto>(`${customerUrl}/${id}`)

const backToList = () => {
  router.push("/customers");
};

const submitCustomer = (customerDto: CustomerDto) => {
  apiCustomer.edit(+id , customerDto).then((resp) => {
    customer.value = resp.data;
    console.log("edited-customer : ", resp.data);
    router.push("/customers");
  })
  .catch(err => console.log("error : ", err.message))
  
};
</script>

<template>
  <CustomerForm 
  v-if="customer"
  :initialCustomer="customer" 
  @onCustomer="submitCustomer"
  @onBackToList="backToList" 
  />
</template>
