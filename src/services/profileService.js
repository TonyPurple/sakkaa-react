import tokenService from "../services/tokenService";
const BASE_URL = "/api/profile/";

export function getAllProfiles() {
  return fetch(
    BASE_URL,
    {
      headers: { Authorization: "Bearer " + tokenService.getToken() },
    },
    { mode: "cors" }
  ).then((res) => res.json());
}