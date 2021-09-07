document.getElementById("addItem").onclick = function(){
    freshItem()
}
document.onkeydown = function(event){
    if(event.key == "Enter"){
        freshItem()
    }
}
function freshItem(){
    let isDone = false
    const itemValue = document.getElementById("Item").value;
    const newItem = document.createElement("div")
    newItem.className = 'row mt-3'
    newItem.id = 'item'
    newItem.textContent = "- " + itemValue
    const trashButton = document.createElement("button")
    trashButton.setAttribute("class",'btn mt-auto mb-auto ml-auto')
    let icon = document.createElement("i")
    icon.className = "fas fa-check"
    trashButton.appendChild(icon)
    newItem.appendChild(trashButton)
    console.log(newItem)
    const newRule = document.createElement("hr")
    newRule.style.width = "60px"
    document.getElementById("groceryList").appendChild(newItem)
    document.getElementById("groceryList").appendChild(newRule)
    trashButton.addEventListener ("click" , function(){
        isDone = !isDone
        isDone ? newItem.style.textDecoration = "line-through" : newItem.style.textDecoration = "none"
        isDone ? icon.className = "fas fa-undo" : icon.className = "fas fa-check"
    })
    document.getElementById("Item").value=""
}

document.getElementById("clearList").onclick = function(){
    document.getElementById("groceryList").innerHTML = ""
}