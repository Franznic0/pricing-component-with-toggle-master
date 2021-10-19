var switchButton = document.getElementById("switch");
var basic = document.getElementById("basic");
var professional = document.getElementById("professional");
var master = document.getElementById("master");
var monthPrice = document.querySelectorAll(".month-price")


function switchPrice() {

        if (switchButton.checked) {
            
            basic.innerHTML = "199.99";
            professional.innerHTML = "249.99";
            master.innerHTML = "399.99";
        
        } else {
            
            basic.innerHTML = "19.99";
            professional.innerHTML = "24.99";
            master.innerHTML = "39.99";
        
        }
    
}

switchButton.addEventListener('change' , switchPrice());

switchPrice();