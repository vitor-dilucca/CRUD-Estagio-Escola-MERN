import { API } from "../config";

export const getDisciplines = () => {
  return fetch(`${API}/disciplines`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
