"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicFacultyValidations = void 0;
const zod_1 = require("zod");
const createAcademicFacultyValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            invalid_type_error: "Academic Faculty must be string",
            required_error: "Academic Faculty is required",
        })
            .min(1, " Academic Faculty name is required"),
    }),
});
// update Student Zod Schema
const updateAcademicFacultyValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, "name is required").optional(),
    }),
});
exports.academicFacultyValidations = {
    createAcademicFacultyValidationSchema,
    updateAcademicFacultyValidationSchema,
};
