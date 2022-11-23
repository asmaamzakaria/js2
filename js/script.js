var allproducts = document.querySelectorAll(".product-item")
var content = document.querySelector("#content")
var totalp = document.querySelector("#totalp")
var btn = document.querySelector("#addtocart")
var total=0;
allproducts.forEach(function(item){
    item.onclick= function(){
        total +=parseInt(item.getAttribute("price"))
        content.innerHTML += item.textContent+ " ."
        if (content.innerHTML !=""){
            btn.style.display = "block";

        }

    }
})
btn.onclick= function(){
// console.log(total)
totalp.innerHTML =  total
}