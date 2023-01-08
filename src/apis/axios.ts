import axios from "axios";

export default axios.create({
  baseURL: "https://api.dev.pastorsline.com/api/contacts.json?companyId=",
});
