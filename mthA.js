//Version: 1.0,
//Author: SCOTTJSON
//Created: MAY 2013

function mthA(number1, task, number2) {
    
    var result = undefined;
    
    switch(task){
        case "times":
            result = number1*number2;
            break;

        case "divideby":
            result = number1/number2;
            break;

        case "remainder":
            result = number1%number2;
            break; 

        case "percentof":
            result = (number1/number2)*100;
            break; 

        case "%off":  //20% off $50 = Answer: $40
            result = number2*(1-(number1/100));
            break; 

        case "toradians":
            var pi = Math.PI;
            result = number1*(pi/180);
            break;
    }
    return result;
};

function mthACalculate(){
    var number1 = document.getElementById("mthAnumber1").value;
    var number2 = document.getElementById("mthAnumber2").value;
    var task = document.getElementById("mthATask").value;
    var result = document.getElementById("mthAresult");
    result.value = mthA(number1, task, number2);
}