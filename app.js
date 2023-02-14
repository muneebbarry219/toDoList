// console.log("testing")

// getting elements from html...!!!
var userInputEl = document.getElementById("user_input");

var addBtnEl = document.getElementById("add_item");

var deleteAllBtnEl = document.getElementById("delete_all");
// deleteAllBtnEl.disabled = true;

var ulEl = document.getElementById("list_container");

var msgEl = document.getElementById("message");

var msgBoxEl = document.getElementById("msg_div");


var targetBtn;


// function to clear form ...!!!
function clearForm() {

    document.getElementById("user_input").value = "";
    document.getElementById("user_input").focus;
};

// function to delete all ...!!!
function deleteAll() {

    ulEl.innerHTML = "";

    msgEl.innerHTML = "task(s) deleted successfully!";
    msgBoxEl.appendChild(msgEl);
    msgBoxEl.style.display = "flex";
    setTimeout(() => {
        msgBoxEl.style.display = "none";
    }, 2000);

};

// function to delete an item ...!!!
function deleteItem(el) {

    var targetLiEl = el.parentNode.parentNode.parentNode;
    ulEl.removeChild(targetLiEl);

    msgEl.innerHTML = "task deleted successfully!";
    msgBoxEl.appendChild(msgEl);
    msgBoxEl.style.display = "flex";
    setTimeout(() => {
        msgBoxEl.style.display = "none";
    }, 2000);

};

// function to update item ...!!!
function updateItem() {

    targetBtn.parentNode.previousSibling.nodeValue = userInputEl.value;

    addBtnEl.innerHTML = "Add Item";
    addBtnEl.setAttribute("onclick", "addItem");

    userInputEl.value = "";

    msgEl.innerHTML = "task updated successfully!";
    msgBoxEl.appendChild(msgEl);
    msgBoxEl.style.display = "flex";
    setTimeout(() => {
        msgBoxEl.style.display = "none";
    }, 2000);

};

// function to edit an item ...!!!
function editItem(el) {

    targetBtn = el;
    var targetVal = el.parentNode.previousSibling.nodeValue;
    // console.log(el.parentNode.previousSibling.nodeValue);
    userInputEl.value = targetVal;

    userInputEl.focus();

    addBtnEl.innerHTML = "Update Item";
    addBtnEl.setAttribute("onclick", "updateItem()");

};

// function to get values ...!!!
function getValue() {

    if (userInputEl.value.length >= 1) {
        return true;
    }
    else {
        return false;
    };
};

// function to add item ...!!!
function addItem() {

    if (getValue()) {

        // deleteAllBtnEl.disabled = false;

        var itemDivEl = document.createElement("div");
        var liEl = document.createElement("li");
        var btnDivEl = document.createElement("div");
        var deleteBtnEl = document.createElement("button");
        var editBtnEl = document.createElement("button");
        var hrEl = document.createElement("hr");
        // var rightNow = new Date();

        var liText = document.createTextNode(userInputEl.value);
        // var date = rightNow.toLocaleDateString();
        // console.log(date);
        var deleteBtnText = document.createTextNode("Delete Task");
        var editBtnText = document.createTextNode("Edit Task");

        itemDivEl.setAttribute("id", "item_div");
        liEl.setAttribute("id", "list_item");
        btnDivEl.setAttribute("id", "item_btn_div");
        deleteBtnEl.setAttribute("onclick", "deleteItem(this)");
        deleteBtnEl.setAttribute("class", "btn btn-danger");
        deleteBtnEl.setAttribute("id", "delete_btn");
        editBtnEl.setAttribute("onclick", "editItem(this)");
        editBtnEl.setAttribute("class", "btn btn-success");
        editBtnEl.setAttribute("id", "edit_btn");

        editBtnEl.appendChild(editBtnText);
        deleteBtnEl.appendChild(deleteBtnText);
        btnDivEl.appendChild(editBtnEl);
        btnDivEl.appendChild(deleteBtnEl);
        liEl.appendChild(liText);
        liEl.appendChild(btnDivEl);
        itemDivEl.appendChild(liEl);
        itemDivEl.appendChild(hrEl);
        ulEl.appendChild(itemDivEl);

        msgEl.innerHTML = "task added successfully!";
        msgBoxEl.appendChild(msgEl);
        msgBoxEl.style.display = "flex";
        setTimeout(() => {
            msgBoxEl.style.display = "none";
        }, 2000);

        clearForm();
    }
    else {

        msgEl.innerHTML = "Please write Something!";
        msgBoxEl.appendChild(msgEl);
        msgBoxEl.style.display = "flex";
        setTimeout(() => {
            msgBoxEl.style.display = "none";
        }, 2000);
    };

};

