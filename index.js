const input = document.getElementById("input");
const tasks = document.getElementById("tasks");
const btn = document.querySelector(".btn");

btn.addEventListener("click",()=>{
    console.log("li child")
    if(input.value ===""){
        alert("Enter a task");
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = input.value;
        console.log("li child")
        tasks.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = `<img src="images/delete.png">`
        li.appendChild(span)
    }
    input.value = "";
});

tasks.addEventListener("click",(e)=>{
    // console.log("Clicked element:", e.target);
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    else if(e.target.tagName === "IMG") {
        e.target.closest("li").remove();
    }
});