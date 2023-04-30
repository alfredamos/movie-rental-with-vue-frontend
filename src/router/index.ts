import { createRouter, createWebHistory } from "vue-router";
import ListRentalView from "../views/rentals/ListRentalView.vue";
import AddRentalView from "../views/rentals/AddRentalView.vue";
import DeleteRentalView from "../views/rentals/DeleteRentalView.vue";
import DetailRentalView from "../views/rentals/DetailRentalView.vue";
import EditRentalView from "../views/rentals/EditRentalView.vue";
import HomeView from "@/views/auth/HomeView.vue";

import ListCustomerView from "../views/customers/ListCustomerView.vue";
import DeleteCustomerView from "../views/customers/DeleteCustomerView.vue";
import DetailCustomerView from "../views/customers/DetailCustomerView.vue";

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
import ChangePasswordView from "@/views/auth/ChangePasswordView.vue";
import LoginView from "@/views/auth/LoginView.vue";
import LogoutView from "@/views/auth/LogoutView.vue";
import EditProfileView from "@/views/auth/EditProfileView.vue";
import SignupView from "@/views/auth/SignupView.vue";
import {ref} from "vue";

import { apiContext } from "@/behavior-subject/auth-context.rxjs";
import { take, tap } from "rxjs";
import type AuthUserDto from "@/components/models/auth/auth-user.model";
import { initialAuthUser } from "@/utils/authUser-initial.util";

const authUser = ref<AuthUserDto>(initialAuthUser)

apiContext.authUser$.pipe(
  tap(aut => authUser.value = aut),
  //take(2)
).subscribe()

console.log("isLoggedIn : ", authUser.value.isLoggedIn);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "list-rental",
      component: ListRentalView,
      meta: { requiresAuth: true },
    },
    {
      path: "/add-rental",
      name: "add-rental",
      component: AddRentalView,
      meta: { requiresAuth: true },
    },
    {
      path: "/delete-rental/:id",
      name: "delete-rental",
      component: DeleteRentalView,
      meta: { requiresAuth: true },
    },
    {
      path: "/detail-rental/:id",
      name: "detail-rental",
      component: DetailRentalView,
      meta: { requiresAuth: true },
    },
    {
      path: "/edit-rental/:id",
      name: "edit-rental",
      component: EditRentalView,
      meta: { requiresAuth: true },
    },

    {
      path: "/customers",
      name: "list-customer",
      component: ListCustomerView,
      meta: { requiresAuth: true },
    },
    {
      path: "/delete-customer/:id",
      name: "delete-customer",
      component: DeleteCustomerView,
      meta: { requiresAuth: true },
    },
    {
      path: "/detail-customer/:id",
      name: "detail-customer",
      component: DetailCustomerView,
      meta: { requiresAuth: true },
    },

    {
      path: "/genres",
      name: "list-genre",
      component: ListGenreView,
      meta: { requiresAuth: true },
    },
    {
      path: "/add-genre",
      name: "add-genre",
      component: AddGenreView,
      meta: { requiresAuth: true },
    },
    {
      path: "/delete-genre/:id",
      name: "delete-genre",
      component: DeleteGenreView,
      meta: { requiresAuth: true },
    },
    {
      path: "/detail-genre/:id",
      name: "detail-genre",
      component: DetailGenreView,
      meta: { requiresAuth: true },
    },
    {
      path: "/edit-genre/:id",
      name: "edit-genre",
      component: EditGenreView,
      meta: { requiresAuth: true },
    },

    {
      path: "/movies",
      name: "list-movie",
      component: ListMovieView,
      meta: { requiresAuth: true },
    },
    {
      path: "/add-movie",
      name: "add-movie",
      component: AddMovieView,
      meta: { requiresAuth: true },
    },
    {
      path: "/delete-movie/:id",
      name: "delete-movie",
      component: DeleteMovieView,
      meta: { requiresAuth: true },
    },
    {
      path: "/detail-movie/:id",
      name: "detail-movie",
      component: DetailMovieView,
      meta: { requiresAuth: true },
    },
    {
      path: "/edit-movie/:id",
      name: "edit-movie",
      component: EditMovieView,
      meta: { requiresAuth: true },
    },

    {
      path: "/change-password",
      name: "change-password",
      component: ChangePasswordView,
      meta: { requiresAuth: true },
    },
    {
      path: "/edit-profile",
      name: "edit-profile",
      component: EditProfileView,
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: { requiresNoAuth: true },
    },
    {
      path: "/logout",
      name: "logout",
      component: LogoutView,
      meta: { requiresAuth: true },
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
      meta: { requiresNoAuth: true },
    },
    {
      path: "/signup",
      name: "signup",
      component: SignupView,
      meta: { requiresNoAuth: true },
    },
  ],
});




router.beforeEach((to, _, next) => {  
  if (to.meta.requiresAuth && !authUser.value.isLoggedIn) next({ name: "login" });
  else next();
});
export default router;
