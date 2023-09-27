import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useState, useEffect } from "react";
import "../App.css"; // Import your custom CSS
import { updateDiscipline, getDiscipline } from "./apiCore";

const Editar = ({ match }) => {
  const [values, setValues] = useState({
    nome: "",
    classe: "",
    data_limite: "",
    estudo: false,
    aplicavel_fora: false,
    error: "",
    success: false,
    loading: false,
  });

  const {
    nome,
    classe,
    data_limite,
    estudo,
    aplicavel_fora,
    error,
    success,
    loading,
  } = values;

  const init = (disciplineId) => {
    getDiscipline(disciplineId).then((data) => {
      function formatDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed, so add 1 and pad with '0' if necessary.
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
      }

      const originalDateString = data.data_limite;
      const formattedDate = formatDate(originalDateString);

      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          nome: data.nome,
          classe: data.classe,
          data_limite: formattedDate,
          estudo: data.estudo,
          aplicavel_fora: data.aplicavel_fora,
        });
      }
    });
  };

  useEffect(() => {
    init(match.params.disciplineId);
  }, []);

  const handleChange = (name) => (event) => {
    if (name === "aplicavel_fora" || name === "estudo") {
      setValues({ ...values, error: false, [name]: !values[name] }); // Toggle the checkbox state
    } else {
      setValues({ ...values, error: false, [name]: event.target.value });
    }
    console.log(values);
  };

  const clickSubmit = async (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });

    try {
      const data = await updateDiscipline(match.params.disciplineId,{
        nome,
        classe,
        data_limite,
        estudo,
        aplicavel_fora,
      });

      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          nome: data.nome,
          classe: "",
          data_limite: "",
          estudo: false,
          aplicavel_fora: false,
          success: true,
        });
      }
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle the error appropriately, e.g., set an error message in state.
    }
  };

  const editarForm = () => (
    <>
      <form action="">
        <div className="container cadastro-box">
          <div className="row align-items-center">
            <div className="col-9">
              <h1>Editar Disciplina</h1>
            </div>
            <div className="col-3">
              <Link to={`/`}>
                <button className="btn btn-sm btn-primary">Voltar</button>
              </Link>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="nome" className="font-weight-bold">
                  Nome
                </label>
                <input
                  onChange={handleChange("nome")}
                  type="text"
                  className="form-control"
                  placeholder="Nome da Disciplina"
                  value={nome}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="classe" className="font-weight-bold">
                  Classe a que pertence
                </label>
                <select
                  className="form-control"
                  name="classe"
                  placeholder="Classe"
                  onChange={handleChange("classe")}
                  value={classe}
                >
                  <option>
                    --Selecione uma Classe--
                  </option>
                  <option value="Base Nacional Comum">
                    Base Nacional Comum
                  </option>
                  <option value="Linguagens, Códigos e suas Tecnologias">
                    Linguagens, Códigos e suas Tecnologias
                  </option>
                  <option value="Ciências da Natureza e Matemática e Suas Tecnologias">
                    Ciências da Natureza e Matemática e Suas Tecnologias
                  </option>
                  <option value="Base Extraordinária">
                    Base Extraordinária
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="data_limite" className="font-weight-bold">
                  Data limite a aplicação
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="data_limite"
                  name="data_limite"
                  onChange={handleChange("data_limite")}
                  value={data_limite}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="font-weight-bold">Estudo</label>
                <div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="primario"
                      name="estudo"
                      onChange={handleChange("estudo", false)}
                      value={false} // Set the value for "Primário"
                      checked={!estudo}
                    />
                    <label className="form-check-label" htmlFor="primario">
                      Primário
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="secundario"
                      name="estudo"
                      onChange={handleChange("estudo", true)}
                      value={true} // Set the value for "Secundário"
                      checked={estudo}
                    />

                    <label className="form-check-label" htmlFor="secundario">
                      Secundário
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-check">
                <input type="hidden" name="aplicavel_fora" value={false} />
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="aplicavel_fora"
                  name="aplicavel_fora"
                  onChange={handleChange("aplicavel_fora")}
                  checked={aplicavel_fora}
                />
                <label className="form-check-label" htmlFor="aplicavel_fora">
                  Aplicável fora da sala
                </label>
              </div>
            </div>
          </div>

          <div className="mb-2 row justify-content-center">
            <div className=" col-3">
              <button onClick={clickSubmit} className="btn btn-primary">
                Salvar
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-info mt-2"
      style={{ display: success ? "" : "none" }}
    >
      Disciplina editada. <Link to="/">Voltar</Link>
    </div>
  );

  const showLoading = () => {
    if (loading) {
      <div className="alert alert-success">
        <h2>Loading...</h2>
      </div>;
    }
  };

  return (
    <>
      {showLoading()}
      {showSuccess()}
      {showError()}
      {editarForm()};
    </>
  );
};

export default Editar;
