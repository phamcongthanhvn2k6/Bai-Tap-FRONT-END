// Yêu cầu người dùng nhập một năm
let year = parseInt(prompt("Nhập một năm bất kỳ:"));

// Kiểm tra năm nhuận
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} là năm nhuận.`);
} else {
    console.log(`${year} không phải là năm nhuận.`);
}
