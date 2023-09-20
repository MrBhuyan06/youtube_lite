import axios from "axios";
const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyDQy93BfrmmqLu4P8ouvWpiJjQVshghIxM",
  },
});
export default request;
