const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String },
    gender: { type: String },
    city: { type: String },
    designation: { type: String },
    salary: { type: Number },
    created: { type: Date },
    updatedat: { type: Date }
});

module.exports = mongoose.model('Employee', EmployeeSchema);