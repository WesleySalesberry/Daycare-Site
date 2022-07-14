import { USER, REGISTER } from "../utils/paths";
import { BaseClient } from "./BaseClient";

class User extends BaseClient {
  get publicUser() {
    return {
      login: () => this.post(`${USER}`)
    }
  }

  get privateUser() {
    return{
      singleUser: (id) => this.get(`${USER}/${id}`),
      register: () => this.post(`${REGISTER}`),
      updateUser: (id) => this.put(`${USER}/${id}`),
      deleteUser: (id) => this.delete(`${USER}/${id}`),
    }
  }
}

export default User = new User();