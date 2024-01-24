let input = document.querySelector("#number");
let btn = document.querySelector("#btn");
let output = document.querySelector("#output");

btn.addEventListener("click", () => {
  if (input.value == "") {
    alert("Please enter a valid number");
  } else {
    for (let i = 1; i <= 10; i++) {
      output.innerHTML += `<p> ${input.value}  X  ${i} =  ${
        input.value * i
      }<p>`;
      setTimeout(() => {
        location.reload();
      }, 30000);
    }
  }
});
