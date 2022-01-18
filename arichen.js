const checkboxes = document.querySelector(".checkboxes");
const offerCode = document.querySelector("#offer-code");
const totalSeats = document.querySelector("#totalSeats");
const seatSelected = document.querySelector("#seats-selected");
const children = document.querySelector("#children");
const adult = document.querySelector("#adult");
const special = document.querySelector("#special");
const childrenPrice = document.querySelector("#childrenPrice");
const adultPrice = document.querySelector("#adultPrice");
const specialPrice = document.querySelector("#specialPrice");
let discount = document.querySelector("#discount");
const total = document.querySelector("#total");
const grandTotal = document.querySelector("#grandTotal");
const tabulate = document.querySelector(".tabulate");

checkboxes.addEventListener("change", () => {
    // count number of checkboxes checked
    let count = document.querySelectorAll('input[type="checkbox"]:checked').length;
    // display total seats selected in checkbox area
    totalSeats.innerHTML = count;
});


// add eventListener to calculate and fill table values
tabulate.addEventListener("click", () => {
    // count number of checkboxes checked
    let count = document.querySelectorAll('input[type="checkbox"]:checked').length;
    // add up all the values gotten from the children, adult and special input element
    let totalSeats = (Number(children.value) + Number(adult.value) + Number(special.value));
    // calculate discount amount from offercode
    if(offerCode.value == "ARICHEN300"){
        discountPrice = 300;
    }
    else{
        discountPrice = 0;
    }

    if(totalSeats > count){
        alert("The values exceeds the selected seats of "+count +"! Select more seats");
    }
    else{
        childrenTotal = 500 * Number(children.value);
        adultTotal = 1500 * Number(adult.value);
        specialTotal = 1000 * Number(special.value);
        totalPrice = (childrenTotal+adultTotal+specialTotal);

        seatSelected.innerHTML = count;
        childrenPrice.innerHTML = childrenTotal;
        adultPrice.innerHTML = adultTotal;
        specialPrice.innerHTML = specialTotal;
        total.innerHTML = totalPrice;
        discount.innerHTML = discountPrice;
        grandTotal.innerHTML = (totalPrice - discountPrice);
    }
})
