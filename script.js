let inventory = []; 
function addItem() {
    const itemInput = document.getElementById("itemInput");
    const itemName = itemInput.value.trim();

    if (itemName === "") {
        alert("Please enter a valid item name.");
        return;
    }

    if (inventory.includes(itemName)) {
        alert("Item already exists in the inventory.");
        return;
    }

    inventory.push(itemName);
    itemInput.value = ""; 
    displayInventory();
}

function removeItem(index) {
    inventory.splice(index, 1);
    displayInventory();
}

function displayInventory() {
    const inventoryList = document.getElementById("inventoryList");
    inventoryList.innerHTML = "";

    inventory.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = it
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = function() {
            removeItem(index);
        };

        li.appendChild(removeButton);
        inventoryList.appendChild(li);
    });
}