import { APPLICATION, DOWNLOAD, SUMMARY_OF_THE_LAW, TRANSPORTATION_PERMISSON, DENTAL_SCREENING  } from "../utils/paths";
import { BaseClient } from "./BaseClient";

class File extends BaseClient {
  get files() {
    return{
      enrollmentApplication: () => this.get(`${DOWNLOAD}/${APPLICATION}`),
      summaryOfTheLaw: () => this.get(`${DOWNLOAD}/${SUMMARY_OF_THE_LAW}`),
      transportPermission: () => this.get(`${DOWNLOAD}/${TRANSPORTATION_PERMISSON}`),
      dentalScreening: () => this.get(`${DOWNLOAD}/${DENTAL_SCREENING }`)
    }
  }
}

export default File = new File();