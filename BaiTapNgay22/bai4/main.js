const numbers = [];
let x = parseInt(prompt("Nhập số phần tử trong mảng: "));

for (let i = 0; i < x; i++) {
    let element = parseInt(prompt("Nhập phần tử thứ " + (i + 1) + ": "));
    numbers.push(element);
}

let status = 1;

for (let i = 0; i < numbers.length; i++) {
    if (isNaN(numbers[i])) {
        alert("Chỉ được nhập số");
        status = 0;
        break;
    }
}

if (status) {
    let maxNumber = Math.max(...numbers);
    alert("Số lớn nhất trong mảng là: " + maxNumber);
}