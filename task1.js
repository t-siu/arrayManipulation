let shoppingList = [];

function addItem(item){
    shoppingList.push(item);
    console.log("Shopping list: ", shoppingList);
} 
addItem("pizza");
addItem("pie");
addItem("pear");
addItem("milk");

function removeLastItem(){
    shoppingList.pop();
    console.log("Removed an item: ", shoppingList);
}
removeLastItem();

function displayList(){
    console.log(shoppingList);
    console.log("Display final items: ", shoppingList);
}
displayList();