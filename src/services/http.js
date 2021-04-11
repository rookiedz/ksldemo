import axios from "axios";

const bdg = axios.create({
  baseURL: process.env.REACT_APP_API_BLUEDRAGON_BASE_URL,
  headers: { "Content-type": "application/json" },
});
const ksl = axios.create({
  baseURL: process.env.REACT_APP_API_KSL_BASE_URL,
  headers: { "Content-type": "application/json" },
});

export { ksl, bdg };
