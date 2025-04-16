// Khởi tạo danh sách công việc từ localStorage hoặc danh sách mặc định
const tasks = [
    { id: 1, name: "quét nhà", status: false },
    { id: 2, name: "rửa chén", status: false },
    { id: 3, name: "phơi quần áo", status: false },
    { id: 4, name: "học bài", status: false },
];

if (!localStorage.getItem("tasksList")) {
    localStorage.setItem("tasksList", JSON.stringify(tasks));
}

function add(event) {
    event.preventDefault();

    const name = document.querySelector('#name').value.trim();

    if (!name) {
        alert("Vui Lòng Không Để Trống Dữ Liệu!");
        return;
    }

    const tasksList = JSON.parse(localStorage.getItem("tasksList")) || [];

    if (tasksList.some(task => task.name === name)) {
        alert("Tên Công Việc Đã Tồn Tại!");
        return;
    }

    const newTask = {
        id: tasksList.length > 0 ? tasksList[tasksList.length - 1].id + 1 : 1,
        name: name,
        status: false
    };
    tasksList.push(newTask);
    localStorage.setItem('tasksList', JSON.stringify(tasksList));

    renderData();
    document.querySelector('#name').value = ""; // Xóa nội dung trong ô input
}

function renderData() {
    const listData = document.querySelector('#todoList');

    let dataHTML = "";
    const tasksList = JSON.parse(localStorage.getItem("tasksList")) || [];

    for (let i = 0; i < tasksList.length; i++) {
        dataHTML += `
            <li>
                ${tasksList[i].name}
                <button onclick="deleteTask(${tasksList[i].id})">Xóa</button>
            </li>
        `;
    }
    listData.innerHTML = dataHTML;
}

function deleteTask(id) {
    let tasksList = JSON.parse(localStorage.getItem("tasksList")) || [];
    tasksList = tasksList.filter(task => task.id !== id);
    localStorage.setItem('tasksList', JSON.stringify(tasksList));

    renderData();
}


renderData();