import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

// const DisciplinaRow = ({ disciplina }) => (
//   <div className="row row-var">
//     <div className="marcador col font-weight-bold">{disciplina.disciplina}</div>
//     <div className="marcador col-6 font-weight-bold">{disciplina.classe}</div>
//     <div className="marcador col-2">
//       <Link to={`/editar/${disciplina._id}`}>
//         <button className="btn btn-success">Editar</button>
//       </Link>
//     </div>
//     <div className="marcador col-2">
//       <Link to={`/excluir/${disciplina._id}`}>
//         <button className="btn btn-danger">Excluir</button>
//       </Link>
//     </div>
//   </div>
// );

const Home = () => {
  const [disciplinas, setDisciplinas] = useState([]);

  // useEffect(() => {
  //   // Fetch data from your Express.js server
  //   axios
  //     .get("/api/disciplinas")
  //     .then((response) => {
  //       setDisciplinas(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <>
      <div className="container-fluid linha1">
        <div className="row align-items-center">
          <div className="col-9">
            <h1>Consulta de Disciplinas</h1>
          </div>
          <div className="col-3">
            <Link to={`/novo/`}>
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
          <tr>
            <td>
              <strong>Portugues</strong>
            </td>
            <td>
              <strong>Linguagens e suas tecnologias</strong>
            </td>
            <td>
              <Link to={`/editar/`}>
                <button className="btn btn-success">Editar</button>
              </Link>
              <Link to={`/excluir/`}>
                <button className="btn btn-danger">Excluir</button>
              </Link>
            </td>
            {/* <!-- Add more data cells as needed --> */}
          </tr>
          {/* <!-- Add more rows as needed --> */}
        </tbody>
      </table>
    </>
  );
};

export default Home;
