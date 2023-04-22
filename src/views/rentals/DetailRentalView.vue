<script setup lang="ts">
import SingleRental from "./SingleRental.vue";
import { useRoute } from "vue-router";
import { useFetch } from '../../composables/useFetch';
import rentalUrl from "@/urls/rental.url";
import type ListRentalDto from '@/components/models/rentals/list-rental.model';

const { id } = useRoute().params;

const {resource: rental} = useFetch<ListRentalDto>(`${rentalUrl}/${id}`)

</script>

<template>
  <SingleRental v-if="rental" :rental="rental" />
</template>
