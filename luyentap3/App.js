// Bài tập 2 - Import và Destructuring
// File này dùng trong project JavaScript/React Native hỗ trợ ES Module.

import student from "./student.js";

const {
    name,
    className,
    major,
    year
} = student;

console.log("Họ tên:", name);
console.log("Lớp:", className);
console.log("Ngành:", major);
console.log("Năm học:", year);
