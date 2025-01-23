let totalCount = 0;

function addItem() {
    const itemInput = document.getElementById('itemInput');
    const quantityInput = document.getElementById('quantityInput');
    const itemName = itemInput.value;
    const quantity = quantityInput.value;

    if (itemName && quantity) {
        const table = document.getElementById('itemTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        newRow.innerHTML = `<td>${itemName}</td><td>${quantity}</td><td><button onclick="removeItem(this)">Remove</button></td>`;
        totalCount += parseInt(quantity);
        document.getElementById('totalCount').innerText = totalCount;
        itemInput.value = '';
        quantityInput.value = '';
    } else {
        alert('Skriv både produkt og mengde.');
    }
}

function removeItem(button) {
    const row = button.parentNode.parentNode;
    const quantity = parseInt(row.cells[1].innerText);
    totalCount -= quantity;
    document.getElementById('totalCount').innerText = totalCount;
    row.remove();
}

function placeOrder() {
    if (totalCount > 0) {
        alert('Order placed successfully!');
        totalCount = 0;
        document.getElementById('totalCount').innerText = totalCount;
        document.getElementById('itemTable').getElementsByTagName('tbody')[0].innerHTML = '';
    } else {
        alert('Ingen produkter til å bestille.');
    }
}
