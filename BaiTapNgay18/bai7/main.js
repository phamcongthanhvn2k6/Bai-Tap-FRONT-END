let a = parseFloat(prompt("Nhập độ dài cạnh thứ nhất:"));
let b = parseFloat(prompt("Nhập độ dài cạnh thứ hai:"));
let c = parseFloat(prompt("Nhập độ dài cạnh thứ ba:"));

if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
        alert("Đây là tam giác đều.");
    } else if (a === b || a === c || b === c) {
        alert("Đây lalertà tam giác cân.");
    } else if (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a) {
        alert("Đây là tam giác vuông.");
    } else {
        alert("Đây là tam giác thường.");
    }
} else {
    alert("Đây không phải là tam giác hợp lệ.");
}
