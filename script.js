const input = document.getElementById('task');
const button = document.querySelector('.todo .row button');
const list = document.getElementById('list');
const link = document.getElementById('link');

button.addEventListener('click', () =>{
    if(input.value === ""){
        alert('Isi sesuatu')
    }
    else{
        let li = document.createElement('li');
        li.href = link.value;
        li.innerHTML = task.value;
        list.appendChild(li)
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        let a = document.createElement('a');
        a.innerHTML = "Buka tugas"
        a.href = link.value;
        a.target = "_blank";
        li.appendChild(a);
        li.appendChild(span);
    }
    task.value = "";
    link.value = "";
    savedata();
})


list.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
      e.target.classList.toggle('check');
      savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false)

function savedata(){
    localStorage.setItem("data", list.innerHTML)
}
function showTask(){
    list.innerHTML = localStorage.getItem('data');
}
showTask();