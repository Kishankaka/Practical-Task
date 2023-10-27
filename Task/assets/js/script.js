///// Disable button 
function handleCTA(id) {
let clickCount = 0;
const maxClicks = 2;
const btnDisable = document.getElementById(id);

btnDisable.addEventListener("click", () => {
  clickCount++;

  if (clickCount >= maxClicks) {
    btnDisable.disabled = true;
    // btnDisable.classList.add("bg-gray-500", "cursor-not-allowed");
  }
});
}

///// Disable button 


///// Type to write side in div
function handleOnInput(value, id) {
  const span = document.getElementById(id);
  if (value.trim()) {
    span.textContent = value;
    span.style.display = "block";
  } else {
    span.style.display = "none";
  }
}
