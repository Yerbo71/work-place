const taskForm = document.getElementById("task-form");
const tasfFormContainer = document.querySelector('.form-to-do');

const toDoBttn = document.getElementById('to-do-button');
const toDoTaskList = document.getElementById("to-do-task-list");


tasfFormContainer.style.display = 'none'; 
toDoBttn.addEventListener('click', function () {
    if (tasfFormContainer.style.display == 'none') {
        tasfFormContainer.style.display = 'block';
    }
    else {
        tasfFormContainer.style.display = 'none';
    }
})






// Handle form submission
taskForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get input values
    const taskTitle = document.getElementById("task-title").value;
    const taskDescription = document.getElementById("task-description").value;
    const taskDueDate = document.getElementById("task-due-date").value;
    const taskPriority = document.getElementById("task-priority").value;

    // Create a new task element
    const taskItem = document.createElement("div");

    taskItem.classList.add("task-item");
    taskItem.innerHTML = `
    <div class="task-box">
        <h3>
            ${taskTitle}
            <div class="${taskPriority}-priority" >
            &#x25CF
        </div>
        </h3>
        <p>
            ${taskDescription}
        </p>
    </div>
    `;

    // Append the task element to the task list
    toDoTaskList.appendChild(taskItem);

    // Clear the form inputs
    taskForm.reset();

    console.log(toDoTaskList);
});




const formExitBttn = document.getElementById('form-exit-button');
formExitBttn.addEventListener('click', () => {
    taskForm.reset()
    tasfFormContainer.style.display = 'none';
})

const avatarUploadInput = document.getElementById('avatar-upload');
const avatarImage = document.querySelector('.avatar');

avatarImage.addEventListener('mouseover', function () {
    avatarImage.querySelector('i').style.opacity = '1';
});

avatarImage.addEventListener('mouseout', function () {
    avatarImage.querySelector('i').style.opacity = '0';
});

avatarImage.addEventListener('click', function () {
    avatarUploadInput.click(); // При нажатии на блок "avatar" вызывается клик по input file
});

avatarUploadInput.addEventListener('change', function () {
    const file = avatarUploadInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            avatarImage.style.backgroundImage = `url(${e.target.result})`;
        };

        reader.readAsDataURL(file);
    }
});
