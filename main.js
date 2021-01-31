const singlePersonAllowance = 342.72;
const singlePersonAllowance25 = 409.89;
const coupleAllowance = 488.89;
const coupleAllowance25 = 594.04;
const wageMultiplier = 0.63;
const workAllowanceStandard = 292;
const workAllowanceNoHousing = 512;
const childBeforeApril2017 = 281.25
const childElementDefault = 235.83


$(document).ready(function(){
    $("form").submit(function(e){   
    let radioGroup = 3;
        switch(radioGroup) { 
            case 0:
                 allowance = singlePersonAllowance
                break;
            case 1:
                 allowance = singlePersonAllowance25
                break;
            case 2:
                 allowance = coupleAllowance
                break;
            case 3: 
                 allowance = coupleAllowance25
                break;
            }
            let radioGroup2 = 0;
        switch(radioGroup2) {
            case 0:
                workAllowance = workAllowanceStandard;
                break;
            case 1: 
                workAllowance = workAllowanceNoHousing;   
                break;
        }
        EldestChildEligible = true;
        otherEligiblechildrenCount = 0;
        switch(EldestChildEligible) {
            case true:
                childElement = childBeforeApril2017 + (otherEligiblechildrenCount * childElementDefault);
                break;
            case false:
                childElement = EliglbeChildCount * childElementDefault;
            break;
        }
        housingElement = 630;
        
        wage = $('#wage1').val()
        wage2 = $('#wage2').val()
        let takehome = (parseFloat(wage) + parseFloat(wage2) - workAllowance ) * 0.63;
        console.log("Housing: "+housingElement,"child: "+ childElement, "allowance: " +allowance, "take home: " + takehome)
        e.preventDefault()
        total = (allowance + housingElement + childElement) - ((takehome))
        $("#total").val(total.toFixed(2));
    });
});
