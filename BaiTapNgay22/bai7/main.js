const numbers = [];

for (let i = 0; i < 10; i++) {
    let element = parseInt(prompt("Nhập vào một số nguyên bất kỳ: "));
    numbers.push(element);
}

for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
        if (numbers[j] > numbers[j + 1]) {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}

alert("Mảng sau khi sắp xếp là: " + numbers);