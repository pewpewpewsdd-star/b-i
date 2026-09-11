// Bài tập 3 - map(), filter(), reduce()

const products = [
    {
        id: 1,
        name: "Xe đồ chơi",
        price: 100000,
        inStock: true
    },
    {
        id: 2,
        name: "Búp bê",
        price: 150000,
        inStock: true
    },
    {
        id: 3,
        name: "Robot",
        price: 250000,
        inStock: false
    },
    {
        id: 4,
        name: "Máy bay đồ chơi",
        price: 200000,
        inStock: true
    },
    {
        id: 5,
        name: "Gấu bông",
        price: 180000,
        inStock: false
    }
];

// 1. map(): tạo danh sách tên sản phẩm
const productNames = products.map(
    (product) => product.name
);

// 2. filter(): lọc sản phẩm còn hàng
const availableProducts = products.filter(
    (product) => product.inStock === true
);

// 3. reduce(): tính tổng giá trị các sản phẩm
const totalValue = products.reduce(
    (total, product) => total + product.price,
    0
);

console.log("Danh sách tên sản phẩm:");
console.log(productNames);

console.log("Sản phẩm còn hàng:");
console.log(availableProducts);

console.log("Tổng giá trị sản phẩm:", totalValue);
