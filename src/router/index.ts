import { createRouter, createWebHistory } from "vue-router";
import ListRentalView from "../views/rentals/ListRentalView.vue";
import AddRentalView from "../views/rentals/AddRentalView.vue";
import DeleteRentalView from "../views/rentals/DeleteRentalView.vue";
import DetailRentalView from "../views/rentals/DetailRentalView.vue";
import EditRentalView from "../views/rentals/EditRentalView.vue";

import ListCustomerView from "../views/customers/ListCustomerView.vue";
import AddCustomerView from "../views/customers/AddCustomerView.vue";
import DeleteCustomerView from "../views/customers/DeleteCustomerView.vue";
import DetailCustomerView from "../views/customers/DetailCustomerView.vue";
import EditCustomerView from "../views/customers/EditCustomerView.vue";

import ListGenreView from "../views/genres/ListGenreView.vue";
import AddGenreView from "../views/genres/AddGenreView.vue";
import DeleteGenreView from "../views/genres/DeleteGenreView.vue";
import DetailGenreView from "../views/genres/DetailGenreView.vue";
import EditGenreView from "../views/genres/EditGenreView.vue";

import ListMovieView from "../views/movies/ListMovieView.vue";
import AddMovieView from "../views/movies/AddMovieView.vue";
import DeleteMovieView from "../views/movies/DeleteMovieView.vue";
import DetailMovieView from "../views/movies/DetailMovieView.vue";
import EditMovieView from "../views/movies/EditMovieView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "list-rental",
      component: ListRentalView,
    },
    {
      path: "/add-rental",
      name: "add-rental",
      component: AddRentalView,
    },
    {
      path: "/delete-rental/:id",
      name: "delete-rental",
      component: DeleteRentalView,
    },
    {
      path: "/detail-rental/:id",
      name: "detail-rental",
      component: DetailRentalView,
    },
    {
      path: "/edit-rental/:id",
      name: "edit-rental",
      component: EditRentalView,
    },

    {
      path: "/customers",
      name: "list-customer",
      component: ListCustomerView,
    },
    {
      path: "/add-customer",
      name: "add-customer",
      component: AddCustomerView,
    },
    {
      path: "/delete-customer/:id",
      name: "delete-customer",
      component: DeleteCustomerView,
    },
    {
      path: "/detail-customer/:id",
      name: "detail-customer",
      component: DetailCustomerView,
    },
    {
      path: "/edit-customer/:id",
      name: "edit-customer",
      component: EditCustomerView,
    },

    {
      path: "/genres",
      name: "list-genre",
      component: ListGenreView,
    },
    {
      path: "/add-genre",
      name: "add-genre",
      component: AddGenreView,
    },
    {
      path: "/delete-genre/:id",
      name: "delete-genre",
      component: DeleteGenreView,
    },
    {
      path: "/detail-genre/:id",
      name: "detail-genre",
      component: DetailGenreView,
    },
    {
      path: "/edit-genre/:id",
      name: "edit-genre",
      component: EditGenreView,
    },

    {
      path: "/movies",
      name: "list-movie",
      component: ListMovieView,
    },
    {
      path: "/add-movie",
      name: "add-movie",
      component: AddMovieView,
    },
    {
      path: "/delete-movie/:id",
      name: "delete-movie",
      component: DeleteMovieView,
    },
    {
      path: "/detail-movie/:id",
      name: "detail-movie",
      component: DetailMovieView,
    },
    {
      path: "/edit-movie/:id",
      name: "edit-movie",
      component: EditMovieView,
    },
  ],
});

export default router;