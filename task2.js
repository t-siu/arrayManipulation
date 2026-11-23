let shoppingList = [];

function addItem(item) {
    // Modify addItem function to only add the item if it is not already on the shoppingList
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
addItem("bread");

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

// Add function called filterItems
function filterItems(searchTerm) {
    let term = searchTerm.toLowerCase();
    return shoppingList.filter(function(item){
       return item.toLowerCase().includes(term);
    });
}
console.log("Filtered items: ", filterItems("pi"));