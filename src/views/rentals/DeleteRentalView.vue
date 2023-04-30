<script setup lang="ts">
import SingleRental from "./SingleRental.vue";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import type ListRentalDto from "../../components/models/rentals/list-rental.model";
import DeleteItemVue from "@/components/utils/DeleteItem.vue";
import { useFetch } from "../../composables/useFetch";
import rentalUrl from "@/urls/rental.url";
import ApiGeneral from "../../services/api-general.service";

const { id } = useRoute().params;
const router = useRouter();

const url = `${rentalUrl}/${id}`;

const deleteMessage = ref("");
const deleteTitle = ref("");
const showDeleteConfirmation = ref(false);

const { resource: rental } = useFetch<ListRentalDto>(`${rentalUrl}/${id}`);
const deleteClick = () => {
  deleteMessage.value = `Do you really want to delete rental of movie : ${rental.value.movie?.title} by customer : ${rental.value.customer?.name}?`;
  deleteTitle.value = "Rental Delete Confirmation!";
  showDeleteConfirmation.value = true;
};

const deleteRental = (value: boolean) => {
  if (value) {
    ApiGeneral.remove(url)
      .then((resp) => {
        rental.value = resp.data;
        router.push("/");
      })
      .catch((err) => console.log("error : ", err.message));
  } else {
    router.push("/");
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
    @onDeleteItem="deleteRental"
  />
  <SingleRental
    :isEdit="true"
    v-if="rental"
    :rental="rental"
    @deleteClick="deleteClick"
  />
</template>
