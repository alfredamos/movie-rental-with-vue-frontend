import type CustomerDto from "@/components/models/customers/customer.model";
import ApiService from "./api.service";
import customerUrl from "@/urls/customer.url";

class ApiCustomer extends ApiService<CustomerDto>{
      constructor() {
            super(customerUrl)
      }
}

const apiCustomer = new ApiCustomer()
export default apiCustomer