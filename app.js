const bill = document.querySelector("#bill");
const service = document.querySelector("#service-review");
const sharing = document.querySelector("#sharing");
const result = document.querySelector(".result");
const submitBtn = document.querySelector("#button");

submitBtn.addEventListener("click", function () {
  const bilValue = bill.value;
  const serviceValue = service.value;
  const noOfPeople = sharing.value;

  const total = (bilValue * serviceValue) / noOfPeople;

  if (total < 50) {
    result.classList.add("red");
  } else {
    result.classList.add("green");
  }

  result.innerText = total;

  bill.value = "";
  service.value = "";
  sharing.value = "";
});
