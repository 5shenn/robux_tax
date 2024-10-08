
function calculateEarnedAmount() {
    const amountInput = document.getElementById('cost').value.replace(/R |,/g, '').trim(); 
    let totalAmount = parseFloat(amountInput);
    
    if (!isNaN(totalAmount)) {
        const earnedAmount = (totalAmount * 0.70); 
        document.getElementById('amount').value = 'R ' + Math.round(earnedAmount).toLocaleString(); 
    } else {
        document.getElementById('amount').value = 'Invalid input'; 
    }
}


function calculateTotalAmount() {
    const amountInput = document.getElementById('cost').value.replace(/R |,/g, '').trim(); 
    let earnedAmount = parseFloat(amountInput);
    
    if (!isNaN(earnedAmount)) {
        const totalAmount = (earnedAmount / 0.70); 
        document.getElementById('amount').value = 'R ' + Math.round(totalAmount).toLocaleString();
    } else {
        document.getElementById('amount').value = 'Invalid input'; 
    }
}

function formatNumberWithCommas(input) {
    let value = input.value.replace(/R |,/g, '').trim();

    if (!isNaN(value) && value.length > 0) {
        
        input.value = 'R ' + Number(value).toLocaleString();
    } else {
        input.value = 'R '; 
    }
}