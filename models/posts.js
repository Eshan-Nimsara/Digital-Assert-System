const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

   aname:{
       type:String,
       required:true
   },
  atag:{
       type:String,
       required:true
   },
   serialno:{
       type:String,
       required:true
   },
  model:{
    type:String,
    required:true
   },
  modelno:{
    type:String,
    required:true
 },
 brand:{type:String,
    required:true

 },
 category: {
    type: String,
    required: true
  },
  Department: {
    type: String,
    required: true
  },
  pur_cost: {
    type: String,
    required: true
  },
  pur_date: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  warrenty_type: {
    type: String,
    required: true
  },
  warrenty_ex: {
    type: String,
    required: true
  },
  note: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  job: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  update_date: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model('Posts',postSchema);