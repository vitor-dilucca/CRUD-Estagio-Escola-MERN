const Disciplina = require("../Models/Disciplina");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.create = async (req, res) => {
  try {
    const disciplina = new Disciplina(req.body);
    const data = await disciplina.save();
    res.json({ data });
    console.log("req.body", req.body);
  } catch (err) {
    res.status(400).json({
      error: errorHandler(err),
    });
  }
};

exports.getAllDisciplines = async (req, res) => {
  try {
    const data = await Disciplina.find().exec();
    res.json(data);
  } catch (err) {
    res.status(400).json({
      error: errorHandler(err),
    });
  }
};

exports.disciplineById = async (req, res, next, id) => {
  try {
    const disciplina = await Disciplina.findById(id).exec();
    if (!disciplina) {
      return res.status(400).json({
        error: "Disciplina does not exist",
      });
    }
    req.disciplina = disciplina;
    next();
  } catch (err) {
    return res.status(500).json({
      error: "Internal server error",
    });
  }
};

exports.read = (req, res) => {
  return res.json(req.disciplina);
};

exports.update = async (req, res) => {
  try {
    console.log(req.body);
    const disciplina = req.disciplina;

    disciplina.nome = req.body.nome || disciplina.nome;
    disciplina.classe = req.body.classe || disciplina.classe;
    disciplina.data_limite = req.body.data_limite || disciplina.data_limite;
    disciplina.estudo = req.body.estudo || disciplina.estudo;
    disciplina.aplicavel_fora = req.body.aplicavel_fora || disciplina.aplicavel_fora;

    const data = await disciplina.save();
    res.json(data);
  } catch (err) {
    res.status(400).json({
      error: errorHandler(err),
    });
  }
};
