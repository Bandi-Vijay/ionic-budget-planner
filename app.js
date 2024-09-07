const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount')
const cancelBtn = document.querySelector('#btn-cancel')
const confirmBtn = document.querySelector('#btn-confirm')
const expensesList = document.querySelector('#expense-list')
const totalExpensesOutput = document.querySelector('#total-expenses')
const alertController = document.querySelector('#ion-alert')

let totalExpenses=0

const clear = ()=>{
    reasonInput.value=''
    amountInput.value=''
}

confirmBtn.addEventListener('click',()=>{
    const enteredReason = reasonInput.value
    const enteredAmount = amountInput.value
    if(enteredReason.trim().length<=0||enteredAmount<=0||enteredAmount.trim().length<=0){
        (async function presentAlert(){
            const alert = document.createElement('ion-alert');
            alert.header = 'Invalid inputs';
            alert.message = 'Please enter valid reason and amount';
            alert.buttons = ['Okay'];
            alertController.appendChild(alert);
            await alert.present();  
        })() 
        return
    }
    console.log(enteredReason,enteredAmount)

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ": $ "+enteredAmount

    expensesList.appendChild(newItem)
    totalExpenses+= +enteredAmount
    totalExpensesOutput.textContent=totalExpenses
    clear()
})

cancelBtn.addEventListener('click',clear)