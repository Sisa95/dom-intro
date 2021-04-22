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

  

    var sum = document.querySelector(".button-primary");
    var updateSettings = document.querySelector(".updateSettings");

    var callCost = callCostSetting;


function settingsFunction(){
    var callCostSetting = document.querySelector(".callCostSetting").value;
    var smsCostSetting = document.querySelector(".smsCostSetting").value;
    var warningLevelSetting = document.querySelector(".warningLevelSetting").value;
    var criticalLevelSetting = document.querySelector(".criticalLevelSetting").value;
    var totalSettings = document.querySelector(".totalSettings")

    var callTotalSettings = document.querySelector(".callTotalSettings");
    var smsTotalSettings = document.querySelector(".smsTotalSettings")

   
    alert(callCost)


    if(totalBill >= warningLevelSetting && totalBill < warningLevelSetting ){
        totalSettings.style.color = "orange"; 
    } else if(totalBill >=50){
        totalSettings.style.color = "red";
    } else if(totalBill < 30){
        totalSettings.style.color = "black";
    }   
    
}

function calculate(){
 

    totalBill = callCost + smsCost;

    callTotalSettings.innerHTML = callCost.toFixed(2); 
    callTotalSettings.innerHTML = smsCost.toFixed(2); 
    totalSettings.innerHTML = totalBill.toFixed(2); 

    var radioButtonChecked= document.querySelector("input[name='billItemType']:checked");
    if (radioButtonChecked){
        var billItemTypeWithSettings = radioButtonChecked.value

        if(billItemTypeWithSettings === "call") {
            alert()
            callCost += callCostSetting ;    
        } else if(billItemTypeWithSettings === "sms"){
            smsCost += smsCostSetting;
        }
    }

}

updateSettings.addEventListener("click", settingsFunction)
sum.addEventListener("click", calculate)