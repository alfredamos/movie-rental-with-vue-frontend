<script setup lang="ts">
import SingleCustomer from "./SingleCustomer.vue";
import { ref, provide } from "vue";
import { useRoute, useRouter } from "vue-router";
import type CustomerDto from "../../components/models/customers/customer.model";
import DeleteItemVue from "@/components/utils/DeleteItem.vue";
import { useFetch } from "@/composables/useFetch";
import customerUrl from "@/urls/customer.url";
import ApiGeneral from "../../services/api-general.service";

const { id } = useRoute().params;
const router = useRouter();

const url = `${customerUrl}/${id}`;

const deleteMessage = ref("");
const deleteTitle = ref("");
const showDeleteConfirmation = ref(false);

const { resource: customer } = useFetch<CustomerDto>(`${customerUrl}/${id}`);

const deleteClick = () => {
  deleteMessage.value = `Do you really want to delete customer : ${customer.value.name}?`;
  deleteTitle.value = "Customer Delete Confirmation!";
  showDeleteConfirmation.value = true;
};


const deleteCustomer = (value: boolean) => {
  if (value) {
    ApiGeneral.remove(url)
      .then((resp) => {
        customer.value = resp.data;
        router.push("/customers");
      })
      .catch((err) => console.log("error : ", err.message));
  } else {
    router.push("/customers");
  }
};
</script>

<template>
  <DeleteItemVue
    v-if="showDeleteConfirmation"
    cancelButton="Cancel"
    submitButton="Delete"
    :deleteMessage="deleteMessage"
    :deleteTitle="deleteTitle"
    @onDeleteItem="deleteCustomer"
  />

  <SingleCustomer
    v-if="customer"
    @deleteClick="deleteClick"
    :isEdit="true"
    :customer="customer"
  />
</template>
