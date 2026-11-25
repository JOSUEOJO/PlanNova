const calendar =
document.getElementById("calendar");

const monthYear =
document.getElementById("monthYear");

let currentDate =
new Date();

function renderCalendar(){

    calendar.innerHTML = "";

    const year =
    currentDate.getFullYear();

    const month =
    currentDate.getMonth();

    const firstDay =
    new Date(year,month,1);

    const lastDay =
    new Date(year,month+1,0);

    monthYear.textContent =
    currentDate.toLocaleDateString(
        "es-ES",
        {
            month:"long",
            year:"numeric"
        }
    );

    for(let i=0;i<firstDay.getDay();i++){

        const empty =
        document.createElement("div");

        calendar.appendChild(empty);
    }

    const tasks =
    JSON.parse(
        localStorage.getItem("tasks")
    ) || [];

    for(let day=1;day<=lastDay.getDate();day++){

        const cell =
        document.createElement("div");

        cell.classList.add("day");

        const dateString =
        `${year}-${String(month+1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;

        let html =
        `<div class="day-number">${day}</div>`;

        tasks.forEach(task=>{

            if(task.date === dateString){

                html +=
                `<div class="task-marker">
                    📚 ${task.title}
                </div>`;
            }
        });

        cell.innerHTML = html;

        calendar.appendChild(cell);
    }
}

document
.getElementById("prevMonth")
.addEventListener("click",()=>{

    currentDate.setMonth(
        currentDate.getMonth()-1
    );

    renderCalendar();
});

document
.getElementById("nextMonth")
.addEventListener("click",()=>{

    currentDate.setMonth(
        currentDate.getMonth()+1
    );

    renderCalendar();
});

renderCalendar();