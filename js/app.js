var switchButton = document.getElementById("switch");
var monthPrice = document.querySelectorAll(".month-price");
var yearPrice = document.querySelectorAll(".year-price");

function switchPrice() {

    for (i=0; i <= monthPrice.length; i++) {

        if (switchButton.checked) {
            
            monthPrice[i].style.display = "none"
            yearPrice[i].style.display = "block"
        
        } else {
            
            monthPrice[i].style.display = "block"
            yearPrice[i].style.display = "none"

        }
    }
}