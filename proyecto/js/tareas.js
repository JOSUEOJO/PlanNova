const taskList =
document.getElementById("taskList");

let tasks =
JSON.parse(
localStorage.getItem("tasks")
) || [];

renderTasks();

document
.getElementById("addTask")
.addEventListener("click",addTask);

function addTask(){

    const title =
    document
    .getElementById("title")
    .value;

    const date =
    document
    .getElementById("date")
    .value;

    if(title === "" || date === ""){

        alert(
            "Completa todos los campos"
        );

        return;
    }

    const task = {

        id: Date.now(),

        title,

        date
    };

    tasks.push(task);

    saveTasks();

    renderTasks();

    document.getElementById("title").value="";
    document.getElementById("date").value="";
}

function renderTasks(){

    taskList.innerHTML="";

    tasks.forEach(task=>{

        const div =
        document.createElement("div");

        div.classList.add("task");

        div.innerHTML=`

        <div class="task-info">

            <h3>${task.title}</h3>

            <p>Entrega: ${task.date}</p>

        </div>

       <button
class="complete"
onclick="completeTask(${task.id})">
Completar
</button>

<button
class="delete"
onclick="deleteTask(${task.id})">
Eliminar
</button>
        `;

        taskList.appendChild(div);
    });
}

function deleteTask(id){

    tasks =
    tasks.filter(
        task=>task.id!==id
    );

    saveTasks();

    renderTasks();
}

function saveTasks(){

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}
function completeTask(id){

let stats =
JSON.parse(
localStorage.getItem("stats")
);

stats.completed++;

stats.xp += 50;

saveStats(stats);

tasks =
tasks.filter(
task => task.id !== id
);

saveTasks();

renderTasks();

}

function saveStats(stats){

localStorage.setItem(
"stats",
JSON.stringify(stats)
);

}
playSound(
"success"
);