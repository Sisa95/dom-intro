// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen


function totalPhoneBill () {
    var bill = document.querySelector(".billString").value;

    var callCount = 0;
  	var smsCount = 0;
    var callCost = 2.75;
    var smsCost = 0.65;
    var totalBill;
    var str = bill.replace(/ /g,'')
  	var input = str.split(',');
 
    for(var i = 0; i < input.length; i++) {
        if(input[i] === "call") {
            callCount++;
        } else if(input[i] === "sms"){
        	smsCount++;
        }
    }
    totalBill = (smsCount * smsCost) + (callCount * callCost)
   
    if(totalBill >=20 && totalBill < 30){
        document.querySelector(".billTotal").style.color = "orange";
        document.querySelector(".billTotal").innerHTML = totalBill.toFixed(2);
    } else if(totalBill >=30){
        document.querySelector(".billTotal").style.color = "red";
        document.querySelector(".billTotal").innerHTML = totalBill.toFixed(2);
    } else {
    document.querySelector(".billTotal").innerHTML = totalBill.toFixed(2);
    }
}

setInterval(totalPhoneBill, 1000);

 /* 
        ******TODO*****
    add keydown event listner on key down C = write call to text area S = write
    sms to text area        
    add range slider 
    
    
    code example
    
    <textarea id="myTextarea">
342 Alvin Road
Ducksburg</textarea>

<p>Click the button to change the contents of the text area.</p>

<button type="button" onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  document.getElementById("myTextarea").value = "Fifth Avenue, New York City";
}*/