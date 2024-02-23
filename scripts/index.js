
const allBtn = document.querySelectorAll(".select-button");
for (const btn of allBtn) {
  btn.addEventListener("click", function (event) {
     const name = event.target.parentNode.childNodes[1].innerText;
     const price = getValueById("per-seat-amount");
     const category = "economy";
    const selectedSeat = document.getElementById(
      "selected-seat-container"
    );
    event.target.setAttribute("disabled", false);

  
    if (
      // getValueById("budget") - parseInt(price) < 0 ||
      getValueById("cart") + 1 > 4 ||
      getValueById("left") - 0 < 0
    ) {
      alert("Limit Extended");
      return;
    }
    event.target.parentNode.style.backgroundColor ="grey-300";
    event.target.parentNode.style.color = "black";
    const div = document.createElement("div");
    div.classList.add("flex");
    div.classList.add("justify-between");
    div.classList.add("m-2")
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    console.log(name);
    p1.innerText = name;
    p2.innerText = price;
    p3.innerText = category;
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    selectedSeat.appendChild(div);
    // updateBudget(price);
    updateLeftSeat();
    updateTotalCost(price);
    updateGrandTotal();
    updateCartCount();

  });
};

function updateTotalCost(price) {
  const previousTotal = document.getElementById("total-cost").innerText;
  const convertedTotal = parseInt(previousTotal);
  const convertedPrice = parseInt(price);
  const sum = convertedTotal + convertedPrice;
  document.getElementById("total-cost").innerText = sum;
}

function updateGrandTotal(control) {
  const previousTotal = document.getElementById("total-cost").innerText;
  console.log(previousTotal);
  const convertedTotal = parseInt(previousTotal);
  const couponCode = document.getElementById("coupon-code").value;
  if (control) {
    if (couponCode === "Couple 20") {
      const discount = convertedTotal * 0.2;
      document.getElementById("grand-total").innerText =
        convertedTotal - discount;
        document.getElementById("coupon-div").classList.add("hidden")
    }else if (couponCode === "New15"){
      const discount = convertedTotal * 0.15;
      document.getElementById("grand-total").innerText =
        convertedTotal - discount;
        document.getElementById("coupon-div").classList.add("hidden")
    }
     else  {
      alert("Invalid Coupon Code No Discount");
      return;
    }
  } else {
    document.getElementById("grand-total").innerText = convertedTotal;
  }
 
}
function updateLeftSeat() {
  const defaultLeft = document.getElementById("left").innerText;
  const convertDefaultLeft = parseInt(defaultLeft);
  document.getElementById("left").innerText = convertDefaultLeft - 1;
}
function updateCartCount() {
  const defaultCartCount = document.getElementById("cart").innerText;

  const convertDefaultCartCount = parseInt(defaultCartCount);
  document.getElementById("cart").innerText = convertDefaultCartCount + 1;
}

function getValueById(id) {
  const targetElement = document.getElementById(id).innerText;
  return parseInt(targetElement);
};
function getConvertedValue(id) {
  const price = document.getElementById(id).innerText;
  const convertedPrice = parseInt(price);
  return convertedPrice;
};
const quantity = document.getElementById("quantity").value;

document.getElementById("next-button").addEventListener("click" , function(quantity){
   console.log(25, quantity);
})