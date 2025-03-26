let arr = []; // Khởi tạo mảng ban đầu

// Hàm hiển thị menu và xử lý lựa chọn
function showMenu() {
    let choice;
    do {
        choice = prompt(
            "MENU\n\n" +
            "1. Nhập vào mảng\n" +
            "2. Hiển thị mảng\n" +
            "3. Thêm phần tử\n" +
            "4. Sửa phần tử\n" +
            "5. Xóa phần tử\n" +
            "6. Thoát\n\n" +
            "Lựa chọn của bạn:"
        );

        switch (choice) {
            case "1": // Nhập vào mảng
                let input = prompt("Nhập các phần tử của mảng, cách nhau bằng dấu phẩy (ví dụ: 1,2,3):");
                arr = input.split(",").map(Number);
                alert("Mảng đã được nhập.");
                break;

            case "2": // Hiển thị mảng
                alert("Mảng hiện tại: " + arr.join(", "));
                break;

            case "3": // Thêm phần tử
                let newElement = Number(prompt("Nhập phần tử muốn thêm:"));
                arr.push(newElement);
                alert("Đã thêm phần tử.");
                break;

            case "4": // Sửa phần tử
                let indexToEdit = Number(prompt("Nhập vị trí của phần tử muốn sửa (bắt đầu từ 0):"));
                if (indexToEdit >= 0 && indexToEdit < arr.length) {
                    let newValue = Number(prompt("Nhập giá trị mới:"));
                    arr[indexToEdit] = newValue;
                    alert("Đã sửa phần tử.");
                } else {
                    alert("Vị trí không hợp lệ.");
                }
                break;

            case "5": // Xóa phần tử
                let indexToDelete = Number(prompt("Nhập vị trí của phần tử muốn xóa (bắt đầu từ 0):"));
                if (indexToDelete >= 0 && indexToDelete < arr.length) {
                    arr.splice(indexToDelete, 1);
                    alert("Đã xóa phần tử.");
                } else {
                    alert("Vị trí không hợp lệ.");
                }
                break;

            case "6": // Thoát
                alert("Thoát chương trình.");
                break;

            default:
                alert("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
        }
    } while (choice !== "6");
}

// Gọi hàm để chạy chương trình
showMenu();