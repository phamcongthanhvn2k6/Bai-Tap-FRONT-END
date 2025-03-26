// Khai báo mảng số nguyên gồm 10 phần tử có sẵn
const numbers = [3, 7, 2, 3, 9, 2, 3, 5, 6, 3];

// Nhập vào một số nguyên bất kỳ
let inputNumber = parseInt(prompt("Nhập vào một số nguyên bất kỳ: "));

// Đếm số lần xuất hiện của số nguyên đó trong mảng
let count = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === inputNumber) {
        count++;
    }
}

// Hiển thị kết quả ra màn hình
alert("Số " + inputNumber + " xuất hiện " + count + " lần trong mảng.");