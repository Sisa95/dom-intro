// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

var radioBillAddBtn = document.querySelector(".radioBillAddBtn")

var callTotalTwo = document.querySelector(".callTotalTwo")
var smsTotalTwo = document.querySelector(".smsTotalTwo")
var totalTwo = document.querySelector(".totalTwo")

var callCount_RB =0;
var smsCount_RB = 0;
var totalBill_RB = 0;

function radioBillBtn() {
    var call_Cost = 2.75;
    var sms_Cost = 0.65;

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value

        if(billItemType === "call") {
            callCount_RB += call_Cost;    
        } else if(billItemType === "sms"){
            smsCount_RB += sms_Cost;
        }

        totalBill_RB = callCount_RB + smsCount_RB;

        callTotalTwo.innerHTML = callCount_RB.toFixed(2); 
        smsTotalTwo.innerHTML = smsCount_RB.toFixed(2); 
        totalTwo.innerHTML = totalBill_RB.toFixed(2);  
       
        if(totalBill_RB >=30 && totalBill_RB < 50 ){
            totalTwo.style.color = "orange"; 
        } else if(totalBill_RB >=50){
            totalTwo.style.color = "red";
        } else if(totalBill_RB < 30){
            totalTwo.style.color = "black";
        }
    }    
}

radioBillAddBtn.addEventListener("click", radioBillBtn)