// Dữ liệu mẫu danh sách công việc
let todoItems = [
    { id: 1, task: 'Hit the gym', completed: false },
    { id: 2, task: 'Pay bills', completed: true },
    { id: 3, task: 'Meet George', completed: false },
    { id: 4, task: 'Buy eggs', completed: false },
    { id: 5, task: 'Read a book', completed: false },
    { id: 6, task: 'Organize office', completed: false },
];

// Lấy các phần tử từ DOM
const inputField = document.getElementById("myInput");
const addButton = document.querySelector(".addBtn");
const todoList = document.getElementById("myUL");

// Hàm hiển thị danh sách công việc
function renderTodoList() {
    // Xóa nội dung cũ của danh sách
    todoList.innerHTML = "";

    // Duyệt qua danh sách công việc và tạo các mục
    todoItems.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.task;

        // Đánh dấu công việc đã hoàn thành
        if (item.completed) {
            li.classList.add("checked");
        }

        // Thêm sự kiện click để đánh dấu hoàn thành
        li.onclick = function () {
            item.completed = !item.completed; // Đảo trạng thái hoàn thành
            renderTodoList(); // Cập nhật danh sách
        };

        // Tạo nút "X" để xóa công việc
        const closeButton = document.createElement("span");
        closeButton.textContent = "X";
        closeButton.className = "close";
        closeButton.onclick = function (event) {
            event.stopPropagation(); // Ngăn sự kiện click lan ra ngoài
            todoItems = todoItems.filter((todo) => todo.id !== item.id); // Xóa công việc
            renderTodoList(); // Cập nhật danh sách
        };

        // Thêm nút "X" vào mục công việc
        li.appendChild(closeButton);

        // Thêm mục công việc vào danh sách
        todoList.appendChild(li);
    });
}

// Hàm thêm công việc mới
function addTask() {
    const taskText = inputField.value.trim(); // Lấy giá trị từ ô input và loại bỏ khoảng trắng thừa

    if (taskText === "") {
        alert("Bạn phải nhập nội dung công việc!");
        return;
    }

    // Tạo công việc mới và thêm vào danh sách
    const newTask = {
        id: Date.now(), // Sử dụng timestamp làm ID duy nhất
        task: taskText,
        completed: false,
    };
    todoItems.push(newTask);

    // Cập nhật danh sách và xóa nội dung trong ô input
    renderTodoList();
    inputField.value = "";
}

// Gắn sự kiện click cho nút "Add"
addButton.addEventListener("click", addTask);

// Gắn sự kiện "Enter" để thêm công việc khi nhấn phím Enter
inputField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Hiển thị danh sách công việc ban đầu
renderTodoList();