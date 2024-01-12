// ADDING ITEMS TO START AND END OF LIST
// Get the <ul> element
var groceryList = document.getElementById("groceries");

// ADD NEW ITEM TO END OF LIST
// Create element
const newListItem = document.createElement("li");
// Create text node
const listItemContent = document.createTextNode("Pineapple")
// Add text node to element
newListItem.appendChild(listItemContent);
// Add element end of list
groceryList.appendChild(newListItem);


// ADD NEW ITEM START OF LIST
// Create element
const newListItemStart = document.createElement("li");
// Create text node
const listItemContentStart = document.createTextNode("Apples");
// Add text node to element
newListItemStart.appendChild(listItemContentStart)
// Add element to list
groceryList.prepend(newListItemStart);



// All <li> elements

// ADD A CLASS OF COOL TO ALL LIST ITEMS
// Counter variable
// Loop through elements
// Change class to cool


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// h2 element
// h2 text
// No. of <li> elements
// Content
// Update h2 using innerHTML (not textContent) because it contains markup