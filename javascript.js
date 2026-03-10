let employees = [];
let id= 1;

const form = document.getElementById("employeeForm");

form.addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let profession = document.getElementById("profession").value;
    let age = document.getElementById("age").value;

    let message = document.getElementById("message");

    if(name=="" || profession=="" || age==""){
        message.innerText="Error : Please Make sure All the Field before adding in an emplyee";
        message.style.color = "red";
        return;
    }

    let employee = {
        id:id++,
        name:name,
        profession:profession,
        age:age
    }

    employees.push(employee);

    message.innerText = "Success : Employee Added!";
    message.style.color = "green";

    displayEmployees();
    form.reset();

});

function displayEmployees(){

    let list = document.getElementById("employeeList");

    list.innerHTML ="";

    if(employees.length == 0){
        list.innerText = "Data not found";
        return;
    }

    employees.forEach( emp=>{

        let div=document.createElement("div");

        div.innerHTML = `${emp.name} ${emp.profession} ${emp.age} <button onclick="deleteEmployee(${emp.id})">Delete</button>`;
        list.appendChild(div);
    })

}

function deleteEmployee(empId){
    employees = employees.filter(emp => emp.id !== empId);
    displayEmployees();
}