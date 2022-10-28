const { Employee } = require("../models");

const getAllEmployee = async (req, res) => {

  Employee.find()
    .then((result) => {
        res.status(200).status(200).send(result);
    })
    .catch((err) => console.log(err));

};

const createEmployee = async (req, res) => {

  if (req.body) {
    Employee.create(req.body)
      .then((newEmployee) => res.status(200).send(newEmployee))
      .catch((err) => console.log(err));
  } else res.status(400).send("Employee is rquired");

};

const getParticularEmployee = async (req, res) => {
  
  
  Employee.findById(req.params.id)
    .then((singleEmployee) => {
      res.status(200).send(singleEmployee);
    })
    .catch((err) => console.log(err));
};

const editEmployee = async (req, res) => {

  Employee.findByIdAndUpdate(req.params.id, { 
      employeeFirstName: req.body.employeeFirstName,
      employeeLastName: req.body.employeeLastName,
      employeeID: req.body.employeeID,
      emailID: req.body.emailID,
      contactNumber: req.body.contactNumber,
   })
    .then(() => {
      Employee.findOne({ _id: req.params.id })
        .then((updatedEmployee) => res.status(200).send(updatedEmployee));
    })
    .catch((err) => console.log(err));
};

const editEmployeePatch = async (req, res) => {
  Employee.findByIdAndUpdate(req.params.id, { title: req.body })
    .then(() => {
      Employee.findOne({ _id: req.params.id })
        .then((updatedEmployee) => res.status(200).send(updatedEmployee));
    })
    .catch((err) => console.log(err));
};

const deleteEmployee = async (req, res) => {

  Employee.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(204).send("DELETED SUCESSFULLY");
    })
    .catch((err) => console.log(err));
};


module.exports = {
  createEmployee,
  deleteEmployee,
  editEmployee,
  editEmployeePatch,
  getAllEmployee,
  getParticularEmployee,
};
