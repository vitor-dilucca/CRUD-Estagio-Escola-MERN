const express = require("express");
const router = express.Router();

const {
  create,
  getAllDisciplines,
  read,
  disciplineById,
  update,
  remove,
} = require("../controllers/Disciplina");

router.post("/create", create);
router.get("/disciplines", getAllDisciplines);
router.route("/discipline/:disciplineId").get(read).put(update).delete(remove);

router.param("disciplineId", disciplineById);
module.exports = router;
