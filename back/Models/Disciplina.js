const mongoose = require('mongoose')

const disciplinaSchema = new mongoose.Schema({
  nome:{
    type:String,
    trim:true,
    // required:true,
    maxlength:50
  },
  classe:{
    type:String,
    trim:true,
    // required:true,
    maxlength:60
  },
  data_limite:{
    type:Date,
    // required:true
  },
  estudo:{
    type:Boolean,
  },
  aplicavel_fora:{
    type:Boolean
  }
})

module.exports = mongoose.model("Disciplina", disciplinaSchema)