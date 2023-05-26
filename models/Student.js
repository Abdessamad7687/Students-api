const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    nom: {
        type: String,
      },
      group: {
        type: String,
      },
      passed: {
        type: Boolean,
        default: true,
      },
      mention: {
        type: String,
        default: 'bien',
      },
})

module.exports = mongoose.model('Student', StudentSchema)