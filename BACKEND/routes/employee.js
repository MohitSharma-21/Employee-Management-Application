const { Router } = require("express");
const { EmployeeController } = require("../controllers");

const router = Router();

router.get("/", EmployeeController.getAllEmployee);
router.post("/addEmployee", EmployeeController.createEmployee);
router.delete("/:id", EmployeeController.deleteEmployee);
router.get("/:id", EmployeeController.getParticularEmployee);
router.put("/:id", EmployeeController.editEmployee);
router.patch("/:id", EmployeeController.editEmployeePatch);

module.exports = router;
