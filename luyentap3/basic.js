// Bài tập 1 - Arrow Function

// Hàm tính tổng hai số
const sum = (a, b) => a + b;

// Hàm tính bình phương một số
const square = (number) => number * number;

// Hàm kiểm tra một số có lớn hơn 10 hay không
const greaterThan10 = (number) => number > 10;

// Chạy thử
console.log("Tổng:", sum(5, 7));
console.log("Bình phương:", square(6));
console.log("15 có lớn hơn 10 không?", greaterThan10(15));
console.log("8 có lớn hơn 10 không?", greaterThan10(8));
