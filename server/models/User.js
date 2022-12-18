const { Schema, model} = require('mongoose');

const User = new Schema({
  firstName: {type: String,  required: true},
  secondName: {type: String,  required: true},
  email: {type: String,  required: true},
  password: {type: String, required: true},
  roles: [{type: String, ref: 'Role'}]
})

module.exports = model('User', User);
