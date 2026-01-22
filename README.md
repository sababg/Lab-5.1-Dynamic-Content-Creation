# Dynamic Shopping Cart

## Reflection Questions

1: I create an array and each time the user add anew, this item will be pushed to the array, and then we make sure to clear the ul, then we create a for loop in this array. In this for loop, we create a li element with the help of
Dom (document.createElement("li")), inside the list, we create a span element for showing data and a button element for delete/edit. After that, we set properties for it, such as the dataset and textcontext. At the end, we appended 
spans and buttons to the list, then appended this list to our ul tag.

2: When we create the li tag, we set the dataset for price (listItem.dataset.price = `${productItem.price}`). By using the dataset (the dataset is in string form, so we change it to the float form when we want to use it), we will make sure, 
with the help of DOM, that we update the price correctly. When we add new data, we will add all price dataset togheter, when we remove it, we will decrease the price dataset fromthe  total, and when we update it, we will
decrease the old price dataset from the new price dataset for that li tag, then we will add the answer to the total price to achieve the goal.

3: We add a condition to the add button. When this button is triggered, the value of the inputs will be check, if they are empty or the price is lower than or equal to zero, we will show an alert to the user.

- Reachable and changeable from the browser and JS
- Limit size

4: At first, I forgot to set the price dataset to the li tag when I was creating it.


##

👤 Author
Saba Beigi
🌎 Charlotte, NC
💼 GitHub @sababg
📧 beigisaba@gmail.com

Feel free to reach out with questions, feedback, or ideas!
