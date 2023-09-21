const mongoose=require('mongoose')
const Disciplina = require("../Models/Disciplina");

exports.criar = async (req, res) => {
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
