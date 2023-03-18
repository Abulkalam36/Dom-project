// document.getElementById('btn-submit').addEventListener('click', function () {
//  the depost amount form the depost input field
// for input field use .value to the the value inside the input field
// const depositField = document.getElementById('deposit-field');
// const newdepositAmountString = depositField.value;
// const newdepositAmount = parseFloat(newdepositAmountString)
//    steep -3 get the current deposit total amount 
// const depostTotalElement = document.getElementById('deopsit-total')
// for non-input (element other then input,textarea) use innerText to get the text

// const previousDepostTotalString = depostTotalElement.innerText;
// const previousDepostTotal = parseFloat(previousDepostTotalString)

//  add numbers to set the total depost
// const currentDepositTotal = newdepositAmount + previousDepostTotal;

//  set the depost total

// depostTotalElement.innerText = currentDepositTotal;

//    step -5 get balance current total
// const balanceTotalElement = document.getElementById('balance-total');

// const previouseBalanceTotoalstring = balanceTotalElement.innerText;
// const previouseBalanceTotoal = parseFloat(previouseBalanceTotoalstring)

// step-6 calculate current total balance 
// const currentBalanceTotal = previouseBalanceTotoal + newdepositAmount;

// set the balance total

// balanceTotalElement.innerText = currentBalanceTotal

// step 7 clear the depost field

// depositField.value = '';

// })


// bank deposit script 
// step 0

document.getElementById('btn-submit').addEventListener('click', function () {

    // step 1
    const depositField = document.getElementById('deposit-field');
    const newdepositAmountString = depositField.value;
    const newdepositAmount = parseFloat(newdepositAmountString);

    //clear data 
    depositField.value = '';

    if (isNaN(newdepositAmount)) {
        alert('please provide a valid numbers')
        return;
    }

    // step 2
    const depositTotalAmount = document.getElementById('deopsit-total');
    const PrevousDepostTotalString = depositTotalAmount.innerText;
    const PrevousDepostTotal = parseFloat(PrevousDepostTotalString)


    // step 3

    const currentDepositTotal = newdepositAmount + PrevousDepostTotal;

    // step 4

    depositTotalAmount.innerText = currentDepositTotal


    // step 5


    const balanceTotalElement = document.getElementById('balance-total');
    const previoustotalBalanceString = balanceTotalElement.innerText;
    const previoustotalBalance = parseFloat(previoustotalBalanceString)

    // step 6

    const currentTotalBalance = newdepositAmount + previoustotalBalance;
    balanceTotalElement.innerText = currentTotalBalance;
})