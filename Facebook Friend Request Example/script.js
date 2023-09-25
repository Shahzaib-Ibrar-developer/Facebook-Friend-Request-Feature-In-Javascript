var a = document.querySelector("h2");
var b = document.querySelector(".btn2");
var d = document.querySelector(".btn1");
b.addEventListener("click",function () {
    a.innerHTML = "Friends";
    a.style.color= "green";
});
d.addEventListener("click",function () {
    a.innerHTML = "Stranger";
    a.style.color= "red";
});

