import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { getDisciplines } from "./apiCore"; // Import the getDisciplines function

const Home = () => {
  const [disciplinas, setDisciplinas] = useState([]);

  useEffect(() => {
    // Fetch data using the getDisciplines function
    getDisciplines()
      .then((data) => {
        setDisciplinas(data); // Update the state with fetched data
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // The empty dependency array means this effect runs once after the component mounts

  return (
    <>
      <div className="container-fluid linha1">
        <div className="row align-items-center">
          <div className="col-9">
            <h1>Consulta de Disciplinas</h1>
          </div>
          <div className="col-3">
            <Link to={`/cadastro/`}>
              <button className="btn btn-primary">NOVO</button>
            </Link>
          </div>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr className="">
            <th scope="col">Disciplina</th>
            <th scope="col">Classe</th>
            <th scope="col">Opções</th>
            {/* <!-- Add more header columns as needed --> */}
          </tr>
        </thead>
        <tbody>
          {disciplinas.map((disciplina) => (
            <tr key={disciplina._id}>
              <td><strong>{disciplina.nome}</strong></td>
              <td><strong>{disciplina.classe}</strong></td>
              <td>
                <Link to={`/editar/${disciplina._id}`}>
                  <button className="btn btn-success">Editar</button>
                </Link>
                <Link to={`/excluir/${disciplina._id}`}>
                  <button className="btn btn-danger">Excluir</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
