// Select all price elements
const prices = document.querySelectorAll(".prices");

let total = 0;

// Calculate total dynamically
prices.forEach(price => {
    total += Number(price.textContent);
});

// Create total row
const totalRow = document.createElement("tr");
totalRow.classList.add("total-row");

// Create single cell
const totalCell = document.createElement("td");
totalCell.colSpan = 2;
totalCell.textContent = `Total Price: Rs ${total}`;

// Append cell to row
totalRow.appendChild(totalCell);

// Append row to table
const table = document.getElementById("grocery-table");
table.appendChild(totalRow);