document.addEventListener("DOMContentLoaded", function () {
    const taskTableBody = document.getElementById("task-table-body");
    const contentInput = document.getElementById("task-content");
    const dueDateInput = document.getElementById("task-due-date");
    const assignedToInput = document.getElementById("task-assigned-to");
    const statusInput = document.getElementById("task-status");
    const createTaskButton = document.getElementById("create-task-btn");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // Lấy từ Local Storage hoặc tạo mới

    function saveToLocalStorage() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function renderTasks() {
        taskTableBody.innerHTML = ""; // Xóa danh sách cũ
        tasks.forEach((task, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${task.id}</td>
                <td>${task.content}</td>
                <td>${task.dueDate}</td>
                <td>${task.status}</td>
                <td>${task.assignedTo}</td>
                <td>
                    <button onclick="editTask(${task.id})">Sửa</button>
                    <button onclick="deleteTask(${task.id})">Xóa</button>
                </td>
            `;
            taskTableBody.appendChild(row);
        });
    }

    function addTask() {
        const content = contentInput.value;
        const dueDate = dueDateInput.value;
        const assignedTo = assignedToInput.value;
        const status = statusInput.value;

        if (content && dueDate && assignedTo) {
            const newTask = {
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
                content,
                dueDate,
                status,
                assignedTo,
            };
            tasks.push(newTask);
            saveToLocalStorage();
            renderTasks();
            clearForm();
        }
    }

    function editTask(id) {
        const task = tasks.find((task) => task.id === id);
        if (task) {
            contentInput.value = task.content;
            dueDateInput.value = task.dueDate;
            assignedToInput.value = task.assignedTo;
            statusInput.value = task.status;

            createTaskButton.textContent = "Cập nhật";
            createTaskButton.onclick = function () {
                updateTask(id);
            };
        }
    }

    function updateTask(id) {
        const task = tasks.find((task) => task.id === id);
        task.content = contentInput.value;
        task.dueDate = dueDateInput.value;
        task.assignedTo = assignedToInput.value;
        task.status = statusInput.value;

        saveToLocalStorage();
        renderTasks();
        clearForm();

        createTaskButton.textContent = "Thêm mới";
        createTaskButton.onclick = addTask;
    }

    function deleteTask(id) {
        tasks = tasks.filter((task) => task.id !== id);
        saveToLocalStorage();
        renderTasks();
    }

    function clearForm() {
        contentInput.value = "";
        dueDateInput.value = "";
        assignedToInput.value = "";
        statusInput.value = "Pending";
    }

    // Gắn hàm thêm đầu việc vào nút "Thêm mới"
    createTaskButton.onclick = addTask;

    // Hiển thị danh sách khi tải trang
    renderTasks();

    // Đưa hàm editTask và deleteTask vào global scope để dùng trong HTML
    window.editTask = editTask;
    window.deleteTask = deleteTask;
});