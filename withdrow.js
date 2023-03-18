//  add even handler with the withdrow button
// get the withdrow amount the input field
// also make sure to convert the input into a number by useing parseFloat
// get previouse withdrow total
// calculate total widthdrow
// set total width amount
// get the prevouse balance
// step 1

// document.getElementById('btn-withdrw').addEventListener('click', function () {
// step 2
// const withdrowFiield = document.getElementById('deposit-widtdrow')
// const newWithdrowAmountstring = withdrowFiield.value;
// const newWidthAmount = parseFloat(newWithdrowAmountstring)

// step 3

// const WidrowTotalElement = document.getElementById('withdrow-total');
// const prevouseWidthTotalString = WidrowTotalElement.innerText;
// const previousewithdrowTotal = parseFloat(prevouseWidthTotalString)

//  step 4
// const currentWidthTotal = previousewithdrowTotal + newWidthAmount;

//  step 5

// WidrowTotalElement.innerText = currentWidthTotal

// step 6
//     const balanceTotalElement = document.getElementById('balance-total')
//     const prevouseWidthTotalStrings = balanceTotalElement.innerText;

//     const prevouseWidthTotal = parseFloat(prevouseWidthTotalStrings)

//     const newBalanceTotalWidthrow = prevouseWidthTotal - newWidthAmount;
//     balanceTotalElement.innerText = newBalanceTotalWidthrow;
//     // step 7 clear the depost field

//     withdrowFiield.value = '';

// })


// bank withdrow script

// step 1

document.getElementById('btn-withdrw').addEventListener('click', function () {

    // step 2

    const widthdrowField = document.getElementById('deposit-widtdrow');
    const newWithdrowAmountString = widthdrowField.value;
    const newWithdrowAmount = parseFloat(newWithdrowAmountString);

    // step 7 clear the depost field
    widthdrowField.value = '';


    if (isNaN(newWithdrowAmount)) {
        alert('please provide a valid numbers')
        return;
    }





    // step 3

    const withdrowTotalElement = document.getElementById('withdrow-total');
    const withdrowTotalString = withdrowTotalElement.innerText;
    const withdrowTotal = parseFloat(withdrowTotalString)


    // step 5
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalString)

    if (newWithdrowAmount > balanceTotal) {
        alert('balance not avaialbe ')
        return;
    }

    // step 4

    const currentWithdrowTotal = newWithdrowAmount + withdrowTotal;

    withdrowTotalElement.innerText = currentWithdrowTotal

    // step 6
    const totalBalanceReduce = balanceTotal - newWithdrowAmount;

    balanceTotalElement.innerText = totalBalanceReduce;
    // step 7


})
