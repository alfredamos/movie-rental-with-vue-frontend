<script setup lang="ts">
import SingleRental from "./SingleRental.vue";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import apiRental from "../../services/api-rental.service";
import type ListRentalDto from "../../components/models/rentals/list-rental.model";
import DeleteItemVue from "@/components/utils/DeleteItem.vue";

const { id } = useRoute().params;
const router = useRouter();

const rental = ref<ListRentalDto>(null!);

const deleteMessage = ref("");
const deleteTitle = ref("");
const showDeleteConfirmation = ref(false);

onMounted(() => {
  apiRental
    .findOne(+id)
    .then((resp) => {
      rental.value = resp.data;
    })
    .catch((err) => console.log("error : ", err.message));
});

const deleteClick = () => {
  deleteMessage.value = `Do you really want to delete rental of movie : ${rental.value.movie?.title} by customer : ${rental.value.customer?.name}?`;
  deleteTitle.value = "Rental Delete Confirmation!";
  showDeleteConfirmation.value = true;
};

const deleteRental = (value: boolean) => {
  if (value) {
    apiRental
      .remove(+id)
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
  <Teleport v-if="showDeleteConfirmation" to="body">
    <DeleteItemVue
      cancelButton="Cancel"
      submitButton="Delete"
      :deleteMessage="deleteMessage"
      :deleteTitle="deleteTitle"
      @onDeleteItem="deleteRental"
    />
  </Teleport>
  <SingleRental
    :isEdit="true"
    v-if="rental && !showDeleteConfirmation"
    :rental="rental"
    @deleteClick="deleteClick"
  />
</template>
