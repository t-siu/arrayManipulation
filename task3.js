let shoppingList = [];

function addItem(item) {
    if (!shoppingList.includes(item)) {
        shoppingList.push(item);
        console.log("Shopping list: ", shoppingList);
    } else {
        console.log("Item is already on the list: ", item);
    }
}
addItem("pizza");
addItem("pie");
addItem("pear");
addItem("milk");

function removeLastItem() {
    shoppingList.pop();
    console.log("Removed an item: ", shoppingList);
}
removeLastItem();

function displayList() {
    console.log(shoppingList);
    console.log("Display final items: ", shoppingList);
}
displayList();

function filterItems(searchTerm) {
    let term = searchTerm.toLowerCase();
    return shoppingList.filter(function(item){
       return item.toLowerCase().includes(term);
    });
}
console.log("Filtered items: ", filterItems("pi"));

const shoppingInput = document.getElementById("shoppingInput");
const button = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");
const listElement = document.getElementById("shoppingList");

function updateDisplay(){
    listElement.innerHTML = "";

    for (let i = 0; i < shoppingList.length; i++){
        const newItem = document.createElement("li");
        newItem.textContent = shoppingList[i];
        listElement.appendChild(newItem);
    }
}
updateDisplay();


button.addEventListener("click", function(){
    const item = shoppingInput.value;
    if(item === ""){
        return;
    }
    if(shoppingList.includes(item)){
        alert("Item is already on the list: " + item);
    }else{
        shoppingList.push(item);
        shoppingInput.value = "";
        updateDisplay();
    }
});

removeButton.addEventListener("click", function(){
    shoppingList.pop();
    updateDisplay();
})