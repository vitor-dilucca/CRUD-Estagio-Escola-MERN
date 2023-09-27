import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { getDisciplines, deleteDiscipline } from "./apiCore"; // Import the getDisciplines function

const Home = () => {
  const [disciplinas, setDisciplinas] = useState([]);
  const [confirmationId, setConfirmationId] = useState(null);

  useEffect(() => {
    fetchDisciplines();
  }, []); // The empty dependency array means this effect runs once after the component mounts

  const fetchDisciplines = async () => {
    try {
      const data = await getDisciplines();
      setDisciplinas(data);
    } catch (error) {
      console.error(error);
    }
  };

  const confirmDelete = (disciplineId) => {
    setConfirmationId(disciplineId);
  };

  const cancelDelete = (disciplineId) => {
    setConfirmationId(null);
  };

  const destroy = async (disciplineId) => {
    try {
      const data = await deleteDiscipline(disciplineId);
      if (data.error) {
        console.log(data.error);
      } else {
        await fetchDisciplines(); // reload the discipline list after sucesful deletion
        setConfirmationId(null); //close the confirmation dialog
      }
    } catch (error) {
      console.error(error);
    }
  };

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
              <td>
                <strong>{disciplina.nome}</strong>
              </td>
              <td>
                <strong>{disciplina.classe}</strong>
              </td>
              <td>
                <Link to={`/editar/${disciplina._id}`}>
                  <button className="btn btn-success">Editar</button>
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => confirmDelete(disciplina._id)}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Excluir
                </button>
                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Você tem certeza que quer deletar esta disciplina?
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={cancelDelete}
                          data-bs-dismiss="modal"
                          >
                          Não
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => destroy(confirmationId)}
                          data-bs-dismiss="modal"
                        >
                          Sim
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
