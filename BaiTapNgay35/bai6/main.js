// Initial categories data
let categories = [
    { id: "DM001", name: "Quần áo", status: "active" },
    { id: "DM002", name: "Kính mắt", status: "inactive" },
    { id: "DM003", name: "Giày dép", status: "active" },
    { id: "DM004", name: "Thời trang nam", status: "inactive" },
];

// Render all categories
function renderCategories() {
    const categoryList = document.querySelector('#category-list');
    let dataHTML = "";

    for (let i = 0; i < categories.length; i++) {
        const statusClass = categories[i].status === "active" ? "active" : "inactive";
        dataHTML += `
            <tr>
                <td>${categories[i].id}</td>
                <td>${categories[i].name}</td>
                <td class="${statusClass}">${categories[i].status === "active" ? "Đang hoạt động" : "Ngừng hoạt động"}</td>
                <td class="actions">
                    <button onclick="editCategory('${categories[i].id}')">Sửa</button>
                    <button onclick="deleteCategory('${categories[i].id}')">Xóa</button>
                </td>
            </tr>
        `;
    }

    categoryList.innerHTML = dataHTML; // Update the table with the rendered rows
}

// Add a new category
function addCategory() {
    const name = document.querySelector('#name').value.trim();
    const status = document.querySelector('#status').value;

    if (!name) {
        alert("Vui lòng nhập tên danh mục!");
        return;
    }

    const newCategory = {
        id: `DM${categories.length + 1}`.padStart(5, '0'), // Auto-generate category code
        name: name,
        status: status
    };

    categories.push(newCategory); // Add to the list
    renderCategories(); // Refresh the table
}

// Delete a category
function deleteCategory(id) {
    if (!confirm("Bạn có chắc chắn muốn xóa danh mục này?")) return;

    categories = categories.filter(category => category.id !== id); // Remove by ID
    renderCategories(); // Refresh the table
}

// Edit a category
function editCategory(id) {
    const category = categories.find(category => category.id === id);

    const newName = prompt("Nhập tên mới:", category.name);
    const newStatus = confirm("Bấm OK để đặt trạng thái Hoạt Động, Cancel để đặt trạng thái Ngừng Hoạt Động")
        ? "active"
        : "inactive";

    if (newName) {
        category.name = newName; // Update name
        category.status = newStatus; // Update status
        renderCategories(); // Refresh the table
    }
}

// Render the categories when the page loads
renderCategories();