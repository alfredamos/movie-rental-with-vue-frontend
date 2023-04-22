import { onMounted, ref } from "vue";
import ApiGeneral from "@/services/api-general.service";

export function useFetch<T>(url: string) {
  const resource = ref<T>(null!);
  onMounted(() => {
    ApiGeneral.fetch(url)
    .then((resp) => {
      resource.value = resp.data;
    })
    .catch(err => console.log("error : ", err.message)
    )
  });

  return { resource };
}
