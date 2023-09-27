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

export const create = (data) => {
  return fetch(
    `${API}/create`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
    console.log(data)
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteDiscipline = (disciplineId) => {
  // Send the request to the server with the password as plain text
  return fetch(`${API}/discipline/${disciplineId}`, {
    method: "DELETE",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};