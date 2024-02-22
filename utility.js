function totalPrice(ticketSelected) {
    const totalPrice = document.getElementById('total-price');
    const grandPrice = document.getElementById('grand-total');
    let daam;
    daam = ticketSelected * 550;
    totalPrice.innerText = daam;
    grandPrice.innerText = daam;
    return totalPrice;
}

function grandTotal() {
    const totalPrice = document.getElementById('total-price');
    const daam = parseInt(totalPrice.innerText)

    const grandPrice = document.getElementById('grand-total');
    const discount = document.getElementById('discount');
    const check = discount.value ;

    if(daam === 2200){
        const element = document.getElementById('gayeb');
        if(check === 'NEW15') {
            grandPrice.innerText = daam * 0.85;
            element.classList.add('hidden');
            const parentDiv = document.getElementById('last');
            const newDivElement = document.createElement('div');
            newDivElement.innerHTML = `
            <div class="flex justify-between py-2 text-[#030712] font-medium">
                <h4>Total Discount</h4>
                    <h4>BDT <span id="">330</span></h4>
                </div>
            `;

            const lastChild = parentDiv.lastElementChild;
            parentDiv.insertBefore(newDivElement, lastChild);
        }
        else if(check === 'Couple 20') {
            grandPrice.innerText = daam * 0.80;
            element.classList.add('hidden');
            const parentDiv = document.getElementById('last');
            const newDivElement = document.createElement('div');
            newDivElement.innerHTML = `
            <div class="flex justify-between py-2 text-[#030712] font-medium">
                <h4>Total Discount</h4>
                    <h4>BDT <span id="">440</span></h4>
                </div>
            `;

            const lastChild = parentDiv.lastElementChild;
            parentDiv.insertBefore(newDivElement, lastChild);
        } 
    }
    else {
        grandPrice.innerText = daam ;
    }
}

document.getElementById('number').addEventListener('keyup', function(event) {
    const text = event.target.value;
    const value = text.toString();
    const deleteButton = document.getElementById('btn-enable');

    const table = document.getElementById("tbl");
    const rows = table.getElementsByTagName("tr");

    if(value.length > 0 && rows.length > 1){
        deleteButton.removeAttribute('disabled');
    }
    else {
        deleteButton.setAttribute('disabled', true);
    }
})