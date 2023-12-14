function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() !== "") {
      var li = document.createElement("li");
      li.textContent = taskInput.value;
      li.onclick = function() {
        this.classList.toggle("completed");
      };
      taskList.appendChild(li);
      taskInput.value = "";
    } else {
      alert("Please enter a task!");
    }
  }