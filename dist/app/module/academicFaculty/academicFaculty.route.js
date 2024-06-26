"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicFacultyRoutes = void 0;
const express_1 = __importDefault(require("express"));
const academicFaculty_controller_1 = require("./academicFaculty.controller");
const academicFaculty_validation_1 = require("./academicFaculty.validation");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const router = express_1.default.Router();
router.post("/create-academic-faculty", 
//   validatRequest(
//     academicFacultyValidations.createAcademicFacultyValidationSchema
//   ),
academicFaculty_controller_1.AcademicFacultyControllers.createAcademicFaculty);
router.get("/", academicFaculty_controller_1.AcademicFacultyControllers.getAllAcademicFaculties);
router.get("/:facultyId", academicFaculty_controller_1.AcademicFacultyControllers.getSingleAcademicFaculty);
router.patch("/:facultyId", (0, validateRequest_1.default)(academicFaculty_validation_1.academicFacultyValidations.updateAcademicFacultyValidationSchema), academicFaculty_controller_1.AcademicFacultyControllers.updateSingleAcademicFaculty);
exports.AcademicFacultyRoutes = router;
