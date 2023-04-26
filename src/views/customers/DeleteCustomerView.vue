<script setup lang="ts">
import SingleCustomer from "./SingleCustomer.vue";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import type CustomerDto from "../../components/models/customers/customer.model";
import DeleteItemVue from "@/components/utils/DeleteItem.vue";
import { useFetch } from "@/composables/useFetch";
import customerUrl from "@/urls/customer.url";
import ApiGeneral from '../../services/api-general.service';

const { id } = useRoute().params;
const router = useRouter()

const url = `${customerUrl}/${id}`

const deleteMessage = ref("");
const deleteTitle = ref("");
const showDeleteConfirmation = ref(false);

const {resource : customer} = useFetch<CustomerDto>(`${customerUrl}/${id}`)

const deleteClick = () => {
  deleteMessage.value = `Do you really want to delete customer : ${customer.value.name}?`;
  deleteTitle.value = "Customer Delete Confirmation!";
  showDeleteConfirmation.value = true;
};

const deleteCustomer = (value: boolean) => {
  if (value) {
    ApiGeneral
      .remove(url)
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
  <Teleport to="body" v-if="showDeleteConfirmation">
    <DeleteItemVue
      v-if="showDeleteConfirmation"
      cancelButton="Cancel"
      submitButton="Delete"
      :deleteMessage="deleteMessage"
      :deleteTitle="deleteTitle"
      @onDeleteItem="deleteCustomer"
    />
  </Teleport>

  <SingleCustomer
    v-else
    v-if="customer"
    @deleteClick="deleteClick"
    :isEdit="true"
    :customer="customer"
  />
</template>
