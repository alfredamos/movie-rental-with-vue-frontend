<script setup lang="ts">
import CustomerForm from "@/components/forms/customers/customer.form.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import type CustomerDto from "../../components/models/customers/customer.model";
import apiCustomer from "../../services/api-customer.service";

const customer = ref<CustomerDto>({
  id: 0,
  name: "",
  email: "",
  phone: "",
  isGold: false,
});

const router = useRouter();

const backToList = () => {
  router.push("/customers");
};

const submitCustomer = (customerDto: CustomerDto) => {
  apiCustomer.create(customerDto).then((resp) => {
    customer.value = resp.data;
    console.log("new-customer : ", resp.data);
    router.push("/customers");
  })
  .catch(err => console.log("error :", err.message)
  )
};
</script>

<template>
  <CustomerForm
    :initialCustomer="customer"
    @onCustomer="submitCustomer"
    @onBackToList="backToList"
  />
</template>
