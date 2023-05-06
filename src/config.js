import axios from "axios";

export const baseUrl = "https://chapatiguruoffical.onrender.com/users";
export const client = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});
