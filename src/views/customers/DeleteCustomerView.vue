<script setup lang="ts">
import SingleCustomer from "./SingleCustomer.vue";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import apiCustomer from "../../services/api-customer.service";
import type CustomerDto from "../../components/models/customers/customer.model";
import DeleteItemVue from "@/components/utils/DeleteItem.vue";
import router from '../../router/index';

const { id } = useRoute().params;

const customer = ref<CustomerDto>(null!);

const deleteMessage = ref("");
const deleteTitle = ref("");
const showDeleteConfirmation = ref(false);

onMounted(() => {
  apiCustomer
    .findOne(+id)
    .then((resp) => {
      customer.value = resp.data;
    })
    .catch((err) => console.log("error : ", err.message));
});

const deleteClick = () => {
  deleteMessage.value = `Do you really want to delete customer : ${customer.value.name}?`;
  deleteTitle.value = "Customer Delete Confirmation!";
  showDeleteConfirmation.value = true;
};

const deleteCustomer = (value: boolean) => {
  if (value) {
      apiCustomer.remove(+id)
      .then(resp => {
            customer.value = resp.data
            router.push("/customers")
      })
      .catch(err => console.log("error : ", err.message)
      )
  } else {
      router.push("/customers")
  }
};
</script>

<template>
  <Teleport v-if="showDeleteConfirmation" to="body">
    <DeleteItemVue
      cancelButton="Cancel"
      submitButton="Delete"
      :deleteMessage="deleteMessage"
      :deleteTitle="deleteTitle"
      @onDeleteItem="deleteCustomer"
    />
</Teleport>
  <SingleCustomer
    v-else="!showDeleteConfirmation"
    @deleteClick="deleteClick"
    :isEdit="true"
    v-if="customer"
    :customer="customer"
  />
</template>
