import axios from "axios";
const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyC2ApJXPa8HMeXW2dtaVX_ZVSxom3G1KD0",
  },
});
export default request;
