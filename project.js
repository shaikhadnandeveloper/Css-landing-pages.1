var istatus = document.querySelector("h5");

var add = document.querySelector("#btn-Connect");

var Removefriend = document.querySelector("#btn-Remove");


add.addEventListener("click", function() {
    istatus.innerText = "Connected";
    istatus.style.color = "green";
    add.style.backgroundColor = "green";
    Removefriend.style.backgroundColor = "red";
});

Removefriend.addEventListener("click", function() {
    istatus.innerText = "Removed";
    istatus.style.color = "green";
    add.style.backgroundColor = "red";
    Removefriend.style.backgroundColor = "green";
})

