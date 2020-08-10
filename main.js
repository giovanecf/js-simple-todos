var inputTask = document.querySelector("#inputTask");
var createTaskBtn = document.querySelector("#createTaskBtn");
var listTasks = document.querySelector("#listTasks");

var tasks = JSON.parse(localStorage.getItem("list-tasks")) || [];

createTaskBtn.onclick = createTask;

function renderList() {
  console.log("RENDER");
  listTasks.innerHTML = "";

  for (task of tasks) {
    var li = document.createElement("li");
    var linkToRemove = document.createElement("a");
    var textElementForLi = document.createTextNode(task);
    var textElementForA = document.createTextNode("Remove");

    var index = tasks.indexOf(task);

    linkToRemove.setAttribute("href", "#");
    linkToRemove.setAttribute("onclick", "removeTask(" + index + ")");
    linkToRemove.appendChild(textElementForA);
    linkToRemove.style.marginLeft = "12px";

    li.appendChild(textElementForLi);
    li.appendChild(linkToRemove);

    listTasks.appendChild(li);
  }
}

function createTask() {
  console.log("CREATE");

  tasks.push(inputTask.value);
  inputTask.value = "";

  renderList();
  saveToStorage();
}

function removeTask(index) {
  console.log("REMOVE");

  //var index = Number(this.getAttribute("href").split("")[1]);
  //tasks = tasks.filter((task) => {return task != tasks[index]; });

  tasks.splice(index, 1);

  renderList();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("list-tasks", JSON.stringify(tasks));
}

renderList(tasks); // SAME => windows.onload = renderList();
