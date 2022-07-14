import { NOTIFICATION } from "../utils/paths";
import { BaseClient } from "./BaseClient";

class Notification extends BaseClient {
  get publicNotification() {
    return {
      allNotifications: () => this.get(`${NOTIFICATION}/`),
      singleNotification: (id) => this.get(`${NOTIFICATION}/${id}`)
    }
  }

  get privateNotification() {
    return {
      postNotification: () => this.post(`${NOTIFICATION}`),
      putNotification: (id) => this.put(`${NOTIFICATION}/${id}`),
      deleteNotification: (id) => this.delete(`${NOTIFICATION}/${id}`),
    }
  }
}

export default Notification = new Notification();