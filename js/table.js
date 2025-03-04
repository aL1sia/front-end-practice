// 添加一行到表格中
function addRow() {
    var table = document.getElementById("table");
    // 获取插入数据
    var length = table.rows.length;
    // 插入行
    var nowrow = table.insertRow(length);
    console.log(nowrow);
    // 插入列节点对象
    var cell1 = nowrow.insertCell(0);
    var cell2 = nowrow.insertCell(1);
    var cell3 = nowrow.insertCell(2);
    // 修改节点文本内容
    cell1.innerHTML = "未命名";
    cell2.innerHTML = "不知道";
    cell3.innerHTML = "<button onclick='editRow(this)'>编辑</button><button onclick='delRow(this)'>删除</button>";
}

// 删除表格中的一行
function delRow(button) {
    var row = button.parentNode.parentNode;
    console.log(row);
    row.parentNode.removeChild(row);
}

// 编辑表格中的一行
function editRow(button) {
    console.log(button);
    var row = button.parentNode.parentNode;
    var name = row.cells[0];
    var phone = row.cells[1];
    var inputname = prompt("请输入姓名");
    var inputphone = prompt("请输入电话");
    name.innerHTML = inputname;
    phone.innerHTML = inputphone;
}