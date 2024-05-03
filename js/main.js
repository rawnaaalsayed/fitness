$(".bmi-form").submit(function (e) {

    // امنع عملية الريلود اللى الفورم بيعملها و هو بيبعت الداتا 
    e.preventDefault();



    // الحاجات اللى بنستلمها من الفورم
    let age = $("#age").val();
    let height = $("#height").val() / 100;
    let weight = $("#weight").val();
    // المعادله 
    let bmi = weight / (height * height);
    $(".bmi-result-number").html("<span>bmi : </span>" + bmi.toFixed(1));
    // normal weihgt
    let perfectWeight = (height * height) * 25;
    $(".bmi-result-perfect").html("<span>best Weight for you : </span>" + Math.round(perfectWeight) +  "  kg");

    if (bmi >= 18.5 && bmi < 24.9) {
        $(".bmi-result-need").html("<span>you are good</span>");
        
    } else {
        if (perfectWeight > weight) {
            $(".bmi-result-need").html("<span>need to gain weight : </span>" + (Math.round(perfectWeight) - weight) + "  kg");
        } else {
            $(".bmi-result-need").html("<span>need to loss : </span>" + (weight - Math.round(perfectWeight)) + "  kg");
        }
    }

    if (bmi <= 18.5) {
        $(".bmi-result-text").html("<span>Your category : </span> Underweight");
        $(".bmi-result-text").html("<span>Your category : </span>Normal weight");
    } 
    else if(bmi > 18.5 && bmi <= 24.9){
        $(".bmi-result-text").html("<span>Your Catogory : </span> best weight")
    }
    else if (bmi >= 25 && bmi <= 34.9) {
        $(".bmi-result-text").html("<span>Your category : </span>Obesity Class I");
    } else if (bmi > 34.9 && bmi <= 39.9) {
        $(".bmi-result-text").html("<span>Your category : </span>Obesity Class II");
    } else if (bmi > 39.9) {
        $(".bmi-result-text").html("<span>Your category : </span>Obesity Class III");
    }
})


document.getElementById("btn").onclick = function () {
    document.getElementById('result').style.display = 'inline-block';
}