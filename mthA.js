//Version: 1.0,
//Author: SCOTTJSON
//Created: MAY 2013

(function(){

    function multiplyBy(number){
        (this.value *= number);
        return this;
    }
    function divideBy(number){
        this.value /= number;
        return this;
    }
    function modulus(number){
        this.value %= number;
        return this;
    }
    function percentOf(number){
        this.value = this.value / number * 100;
        return this;
    }
    function percentOff(number){
        this.value = number*(1-(this.value/100));
        return this;
    }
    function toRadians(number){
        this.value = this.value*(Math.PI/180);
        return this;
    }

    function mthA(number){
        if(!(this instanceof mthA)){
            return new mthA(number);
        }
        this.value = number;
        return this;
    }
    mthA.prototype.value = 0;
    mthA.prototype.getValue = function(){
        return this.value;
    };
    mthA.prototype.toString = function(){
        return this.value.toString();
    };

    mthA.prototype.multiplyBy = 
    mthA.prototype.timesBy =
    mthA.prototype.timesedBy =
    mthA.prototype.multipliedBy = multiplyBy;

    mthA.prototype.divideBy = divideBy;

    mthA.prototype.modulus = modulus;

    mthA.prototype.percentOf = percentOf;

    mthA.prototype.percentOff = percentOff;

    mthA.prototype.percentOff = percentOff;

    mthA.prototype.toRadians = toRadians;

    window.mthA = mthA;

    function mthACalculate(){
        var number1 = document.getElementById("mthAnumber1").value;
        var number2 = document.getElementById("mthAnumber2").value;
        var task = document.getElementById("mthATask").value;
        var result = document.getElementById("mthAresult");
        result.value = mthA(number1)[task](number2).value;
    }
    
    window.mthACalculate = mthACalculate;

})();