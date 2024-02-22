let ticketSelected = 0;
function setBackgroundColorById(elementId) {

    let count = 0;
    const element = document.getElementById(elementId);
    let seatleft = document.getElementById('seat-left');
    const totalSeat = parseInt(seatleft.innerText);

    let select = document.getElementById('selected-seat');
    const newTableRow = document.createElement('tr');

    if(!element.classList.contains('bg-green-400') && ticketSelected < 4) {
        element.classList.add('bg-green-400', 'text-white');
        ticketSelected ++;
        count++;

        newTableRow.className = 'text-center';
        newTableRow.id = `${elementId + elementId}`
        newTableRow.innerHTML = `
        <td class="py-1">${elementId}</td>
        <td class="py-1">Economy</td>
        <td class="py-1">550</td>      
        `;
        const tbodyElement = document.getElementById('tbody');
        tbodyElement.appendChild(newTableRow);
    } 
    else if(ticketSelected === 4) {
        if(element.classList.contains('bg-green-400')){
            element.classList.remove('bg-green-400', 'text-white');
            ticketSelected -= 1;
            count--;
            
            const parentElement = document.getElementById('tbody');
            const childElement = document.getElementById(elementId + elementId); 
            parentElement.removeChild(childElement);
        }
        else {
            alert('You have selected maximum number of tickets');
        }
    }
    else if(element.classList.contains('bg-green-400')){
        element.classList.remove('bg-green-400', 'text-white');
        ticketSelected -= 1;
        count--;

        const parentElement = document.getElementById('tbody');
        const childElement = document.getElementById(elementId + elementId); 
        parentElement.removeChild(childElement);
    }

    seatleft.innerText = totalSeat - count;
    select.innerText = ticketSelected;
    totalPrice(ticketSelected);
}