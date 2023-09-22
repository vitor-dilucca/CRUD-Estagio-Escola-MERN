import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useState } from "react";
import "../App.css"; // Import your custom CSS
import { getDisciplines } from "./apiCore"; // Import the getDisciplines function

const Cadastro = () => {
  const [values, setValues] = useState({
    disciplina: "",
    classe: "",
    data_limite: "",
    estudo: "",
    aplicavel_fora: "",
    error: "",
    success: false,
  });

  const { disciplina, classe, data_limite, estudo, aplicavel_fora, error, success } =
    values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    register({ name, email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          disciplina: "",
          classe: "",
          data_limite: "",
          estudo: "",
          aplicavel_fora: "",
          error: "",
          success: true,
        });
      }
    });
  };

  const cadastroForm = () => (
    <>
      <form action="">
        <div className="container cadastro-box">
          <div className="row align-items-center">
            <div className="col-9">
              <h1>Consulta de Disciplinas</h1>
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
                <label htmlFor="disciplina" className="font-weight-bold">
                  Disciplina
                </label>
                <input
                  type="text"
                  className="form-control"
                  // id="disciplina"
                  // name="disciplina"
                  placeholder="Nome da Disciplina"
                  onChange={handleChange('disciplina')}
                  value={disciplina}
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
                  id="classe"
                  name="classe"
                  placeholder="Classe"
                  onChange={handleChange('classe')}
                  value={classe}
                  >
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
                  onChange={handleChange('data_limite')}
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
                      onChange={handleChange('estudo')}
                      value={estudo}
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
                      onChange={handleChange('estudo')}
                      value={estudo}
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
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="aplicavel_fora"
                  name="aplicavel_fora"
                  onChange={handleChange('estudo')}
                  value={aplicavel_fora}
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
      showSuccess()
      showError() 
      cadastroForm();
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
      Disciplina criada. <Link to="/">Voltar</Link>
    </div>
  );

};

export default Cadastro;
