const principal = parseFloat(prompt("Nhập số tiền gửi ban đầu:"));
const monthlyRate = parseFloat(prompt("Nhập lãi suất tháng (%):")) / 100;
const months = parseInt(prompt("Nhập số tháng gửi:"));

let totalAmount = principal;

for (let i = 0; i < months; i++) {
    const interest = totalAmount * monthlyRate;
    totalAmount += interest;
}

const interestEarned = totalAmount - principal;

console.log(`Tiền ban đầu: ${principal}`);
console.log(`Lãi suất: ${monthlyRate * 100}%`);
console.log(`Số tháng gửi: ${months}`);
console.log(`Tiền lãi: ${interestEarned.toFixed(3)}`);
console.log(`Tiền nhận được: ${totalAmount.toFixed(3)}`);