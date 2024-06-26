"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateStudentId = void 0;
const user_model_1 = require("./user.model");
const findLastStudentId = () => __awaiter(void 0, void 0, void 0, function* () {
    const lastStudent = yield user_model_1.User.findOne({
        role: "student",
    }, {
        id: 1,
        _id: 0,
    })
        .sort({
        createdAt: -1,
    })
        .lean();
    // 2005010001
    return (lastStudent === null || lastStudent === void 0 ? void 0 : lastStudent.id) ? lastStudent.id : undefined;
});
const generateStudentId = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // first time 0000
    let currentId = (0).toString(); // by default 0000
    // 2030 01 0001
    const lastStudentId = yield findLastStudentId(); // 2005010001
    const lastStudentSemesterCode = lastStudentId === null || lastStudentId === void 0 ? void 0 : lastStudentId.substring(4, 6); // 01
    const lastStudentYear = lastStudentId === null || lastStudentId === void 0 ? void 0 : lastStudentId.substring(0, 4); // 2005
    const currentSemesterCode = payload.code; // current code 01
    const currentYear = payload.year; // current year 2005
    if (lastStudentId &&
        lastStudentSemesterCode === currentSemesterCode &&
        lastStudentYear === currentYear) {
        currentId = lastStudentId.substring(6); // 0001
    }
    let incrementId = (Number(currentId) + 1).toString().padStart(4, "0");
    incrementId = `${payload.year}${payload.code}${incrementId}`;
    return incrementId;
});
exports.generateStudentId = generateStudentId;
