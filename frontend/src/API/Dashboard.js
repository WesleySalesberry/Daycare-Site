import { DASHBOARD, MESSAGE } from "../utils/paths";
import { BaseClient } from "./BaseClient";

class Dashboard extends BaseClient {
  get dashboard() {
    return {
      messageCount: () => this.get(`${DASHBOARD}/${MESSAGE}`),
      downloadCount: () => this.get()
    }
  }
}

export default Dashboard = new Dashboard();