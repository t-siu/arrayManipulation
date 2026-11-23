1.  How did array methods like push() and filter() help you manipulate data in this activity? -->

push() and pop() made it easier to add and remove items from the end of shoppingList without extra loops. Using filter() allowed me to search and return matching items in a new array without chaning the original list.

2. What challenges did you face when trying to filter and search for items in the array?

It took me a while to figure out and find the right functions and array methods to use for each required task. For searching specifically, I had to make sure it was case-insensitive using .toLowerCase() and .includes(), and remember to add return inside .filter() function so the matching items were actually returned.

3. How would you modify this code to make it more efficient or user-friendly?

I would add support for pressing the Enter key to add items and include a delete button next to each item.