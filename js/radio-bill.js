// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen


/*function increment(incrementor, target){
    var value = parseInt(document.getElementById(target).value);
    value+=incrementor;
    document.getElementById(target).value = value;
} */




function totalPhoneBill() {
    var callCost = 2.75;
    var smsCost = 0.65;
    var totalBill;
    var callTotal = 0;

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value
    // billItemType will be 'call' or 'sms'alert();
    if(billItemType == "call"){
        alert()
        var bill = parseInt(document.querySelector(".billString").value);
        bill += callCost   
        var billCost = document.querySelector(".radioBillAddBtn").innerHTML = bill

    }
}
   
}