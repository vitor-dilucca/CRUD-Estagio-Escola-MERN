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

export const getDiscipline = (disciplineId) => {
  return fetch(`${API}/discipline/${disciplineId}`, {
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
  
  export const updateDiscipline = (disciplineId,discipline)=>{
    return fetch(`${API}/discipline/${disciplineId}`, {
      method: "PUT",
      headers:{
        "Content-Type":"application/json",
        Accept: 'application/json',
      },
      body:JSON.stringify(discipline)
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
    
}