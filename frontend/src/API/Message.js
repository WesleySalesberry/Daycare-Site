import { MESSAGE } from "../utils/paths";
import { BaseClient } from "./BaseClient";

class Message extends BaseClient {
  get publicMessage() {
    return {
      postMessage: (body) => this.post(`${MESSAGE}`, body),
    }
  }

  get privateMessage() {
    return {
      allMessage: () => this.get(`${MESSAGE}`),
      deleteMessage: (id) => this.delete(`${MESSAGE}/${id}`),
    }
  }
}

export default Message = new Message();