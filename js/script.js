const inputCelcius = document.getElementById("celsius");
const inputFahrenheit = document.getElementById("fahrenheit");
const form = document.querySelector("form");

// query button
const convert = document.getElementById("convert");
const reverse = document.getElementById("reverse");
const reset = document.getElementById("reset");
const celsiusFormula = document.querySelector(".c-to-f");
const fahrenheitFormula = document.querySelector(".f-to-c");
// const tempTypeInput = document.querySelector("input");
//
let formula = document.querySelector(".formula");
let penjelasan = document.getElementById("cara-konversi");

// Klik convert / submit
convert.addEventListener("click", () => {
  let celsius = inputCelcius.value;
  let fahrenheit = inputFahrenheit.value;
  if (inputFahrenheit.hasAttribute("readonly")) {
    if (isNaN(celsius) || celsius.trim() === "") {
      alert("Input Celcius tidak valid!");
      return;
    }
    fahrenheit = celsius * 1.8 + 32;
    inputFahrenheit.value = fahrenheit.toFixed(2);
    formula.innerHTML = `${celsius}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
  } else {
    if (isNaN(fahrenheit) || fahrenheit.trim() === "") {
      alert("Input Fahrenheit tidak valid!");
      return;
    }
    celsius = (fahrenheit - 32) / 1.8;
    inputCelcius.value = celsius.toFixed(2);
    formula.innerHTML = `${fahrenheit}°F - 32 / 1.8 = ${celsius.toFixed(2)}°C`;
  }
});

//tombol reset
reset.addEventListener("click", () => {
  inputCelcius.value = "";
  inputFahrenheit.value = "";
  formula.innerHTML = "";
});

//tombol reverse
reverse.addEventListener("click", () => {
  formula.innerHTML = "";
  let celsius = inputCelcius.value;
  let fahrenheit = inputFahrenheit.value;
  form.classList.toggle("flex-reverse");
  form.classList.toggle("flex");
  celsiusFormula.classList.toggle("hidden");
  fahrenheitFormula.classList.toggle("hidden");
  inputCelcius.toggleAttribute("readonly");
  inputFahrenheit.toggleAttribute("readonly");
  if (!celsius || !fahrenheit) {
    return;
  } else {
    if (inputFahrenheit.hasAttribute("readonly")) {
      formula.innerHTML = `${celsius}°C * (9/5) + 32 = ${fahrenheit}°F`;
    } else {
      formula.innerHTML = `${fahrenheit}°F - 32 / 1.8 = ${celsius}°C`;
    }
  }
});
