const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
 
function addTask(){
    if(inputBox.value === ""){
        alert('you must write something')
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&#x2715";
        li.appendChild(span);
    }
    inputBox.value= ''; 
    saveData();


}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove(); 
        saveData();
    }
},false);

inputBox.addEventListener("keydown", function(event){
     if (event.key === 'Enter') {
        addTask()
     }  
});

function saveData(){
    localStorage.setItem('Task Data', listContainer.innerHTML)
}
function showData(){
    listContainer.innerHTML = localStorage.getItem('Task Data');
}
showData();
  

