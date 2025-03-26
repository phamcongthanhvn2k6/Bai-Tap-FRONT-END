let hour = parseInt(prompt("Nhập giờ (0-23):"));
let minute = parseInt(prompt("Nhập phút (0-59):"));
let second = parseInt(prompt("Nhập giây (0-59):"));

if (
    hour >= 0 && hour <= 23 &&
    minute >= 0 && minute <= 59 &&
    second >= 0 && second <= 59
) {
    let period = hour >= 12 ? "PM" : "AM";

    let hour12 = hour % 12;
    hour12 = hour12 === 0 ? 12 : hour12;

    console.log(`Thời gian: ${hour12}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')} ${period}`);
} else {
    console.log("Dữ liệu không hợp lệ. Vui lòng nhập lại.");
}