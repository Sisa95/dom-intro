// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.  
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

  

    var sum = document.querySelector(".calculateButton");
    var updateSettings = document.querySelector(".updateSettings");

    var callCost = 0;
    var smsCost = 0;
    var warningCap = 0;
    var criticalCap = 0;
    var totalBill = 0
    var call = parseFloat(0.00);
    var sms = 0;

function settingsFunction(){
    //clearing html
  var callCostSetting = document.querySelector(".callCostSetting").innerHTML = "0.00"
  var totalSettings = document.querySelector(".totalSettings").innerHTML = "0.00"

  //resetting variable
   

    var callCostSetting = document.querySelector(".callCostSetting").value;
    var smsCostSetting = document.querySelector(".smsCostSetting").value;
    var warningLevelSetting = document.querySelector(".warningLevelSetting").value;
    var criticalLevelSetting = document.querySelector(".criticalLevelSetting").value; 

    callCost = Number(callCostSetting);
    smsCost = Number(smsCostSetting)
    warningCap = Number(warningLevelSetting)
    criticalCap = Number(criticalLevelSetting)
}

function calculate(){
   

    var callTotalSettings = document.querySelector(".callTotalSettings");
    var smsTotalSettings = document.querySelector(".smsTotalSettings")
    var totalSettings = document.querySelector(".totalSettings")

    var radioButtonChecked= document.querySelector("input[name='billItemTypeWithSettings']:checked");
  
    if (radioButtonChecked){
        var billItemTypeWithSettings = radioButtonChecked.value;
        
       
        if(billItemTypeWithSettings === "call") {
            call = call + callCost;  
        } else if(billItemTypeWithSettings === "sms"){
            sms = sms + smsCost; 
        }

        totalBill = call + sms;
      
       
            callTotalSettings.innerHTML = call.toFixed(2); 
            smsTotalSettings.innerHTML = sms.toFixed(2); 
            totalSettings.innerHTML = totalBill.toFixed(2); 

            if(totalBill >=warningCap && totalBill < criticalCap ){
                totalSettings.style.color = "orange"; 
            } else if(totalBill > criticalCap){
                totalSettings.style.color = "red";
            } else if(totalBill < criticalCap){
                totalSettings.style.color = "black";
            }
        

    }

}
sum.addEventListener("click", calculate);
updateSettings.addEventListener("click", settingsFunction)
