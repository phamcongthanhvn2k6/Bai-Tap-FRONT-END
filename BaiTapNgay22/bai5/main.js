const numbers = [];
let x = parseInt(prompt("Nhập số phần tử trong mảng: "));

for (let i = 0; i < x; i++) {
    let element = parseInt(prompt("Nhập phần tử thứ " + (i + 1) + ": "));
    numbers.push(element);
}
let even=0;
let odd=0;

for (let i = 0; i < numbers.length; i++) {
    if (isNaN(numbers[i])) {
        alert("Chỉ được nhập số");
        break;
    }
    else if(numbers[i] %2 ===0){
        even+=numbers[i];
    }
    else{
        odd+=numbers[i];
    }
}

alert("Tổng số chẵn là: " + even + "\nTổng số lẻ là: " + odd);

