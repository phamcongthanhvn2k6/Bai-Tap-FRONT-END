// Đảm bảo mã chỉ chạy sau khi toàn bộ nội dung trang đã được tải
document.addEventListener("DOMContentLoaded", function () {
    // Lấy phần tử input để nhập công việc từ DOM
    const todoInput = document.getElementById("todo-input");
    // Lấy nút "Thêm" từ DOM
    const addTodoBtn = document.getElementById("add-todo-btn");
    // Lấy danh sách công việc hiển thị trên giao diện từ DOM
    const todoList = document.getElementById("todo-list");

    // Lấy danh sách công việc từ Local Storage nếu có, nếu không thì khởi tạo danh sách rỗng
    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    // Hàm lưu danh sách công việc vào Local Storage
    function saveToLocalStorage() {
        // Chuyển danh sách công việc thành chuỗi JSON và lưu vào Local Storage
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    // Hàm hiển thị danh sách công việc trên giao diện
    function renderTodos() {
        // Xóa danh sách hiển thị cũ để tránh lặp
        todoList.innerHTML = "";
        // Lặp qua từng công việc trong danh sách
        todos.forEach((todo, index) => {
            // Tạo phần tử `li` cho từng công việc
            const listItem = document.createElement("li");
            listItem.textContent = todo; // Gán nội dung công việc vào `li`
            
            // Tạo nút "Xóa" cho mỗi công việc
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Xóa"; // Nội dung nút
            // Gắn sự kiện xóa vào nút
            deleteBtn.onclick = function () {
                deleteTodo(index); // Xóa công việc theo vị trí `index` trong danh sách
            };
            // Thêm nút "Xóa" vào `li`
            listItem.appendChild(deleteBtn);
            // Thêm `li` vào danh sách hiển thị `ul`
            todoList.appendChild(listItem);
        });
    }

    // Hàm thêm công việc mới
    function addTodo() {
        // Lấy giá trị người dùng nhập và loại bỏ khoảng trắng thừa
        const todo = todoInput.value.trim();
        // Nếu người dùng nhập giá trị hợp lệ
        if (todo) {
            todos.push(todo); // Thêm công việc vào danh sách
            saveToLocalStorage(); // Lưu danh sách cập nhật vào Local Storage
            renderTodos(); // Hiển thị lại danh sách
            todoInput.value = ""; // Làm sạch ô nhập sau khi thêm
        }
    }

    // Hàm xóa một công việc theo `index`
    function deleteTodo(index) {
        todos.splice(index, 1); // Xóa công việc khỏi danh sách tại vị trí `index`
        saveToLocalStorage(); // Cập nhật danh sách trong Local Storage
        renderTodos(); // Hiển thị lại danh sách
    }

    // Gắn sự kiện nhấn nút "Thêm" vào hàm `addTodo`
    addTodoBtn.onclick = addTodo;

    // Hiển thị danh sách công việc khi tải lại trang
    renderTodos();
});