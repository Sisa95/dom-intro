// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button
var addButton = document.querySelector(".addToBillBtn")
//create a variable that will keep track of the total bill
var callTotalOne = document.querySelector(".callTotalOne")
var smsTotalOne = document.querySelector(".smsTotalOne")
var totalOne = document.querySelector(".totalOne")
//add an event listener for when the add button is pressed 

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'


// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
function textBillTotal() {
    var bill = document.querySelector(".billTypeText").value

    var callCount = 0;
  	var smsCount = 0;
    var callCost = 2.75;
    var smsCost = 0.65;
    var totalBill;
    var str = bill.replace(/ /g,'')
  	var input = str.split(',');

     
        if(bill === "call") {
            callCount += callCost
            
            
        } else if(input[i] === "sms"){
        	smsCount++;
        }
    
  
    totalBill = (smsCount * smsCost) + (callCount * callCost)
   
    if(totalBill >=20 && totalBill < 30){
        document.querySelector(".callTotalOne").style.color = "orange";
        document.querySelector(".callTotalOne").innerHTML = callCount.toFixed(2);
    } else if(totalBill >=30){
        document.querySelector(".callTotalOne").style.color = "red";
        document.querySelector(".callTotalOne").innerHTML = callCount.toFixed(2);
    } else if(totalBill < 20){
        document.querySelector(".callTotalOne").style.color = "black";
        document.querySelector(".callTotalOne").innerHTML = callCount.toFixed(2);
    }
    document.querySelector(".callTotalOne").innerHTML = callCount.toFixed(2);
}

addButton.addEventListener("click", textBillTotal)