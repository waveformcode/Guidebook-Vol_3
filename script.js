//APARTMENT INFORMATION BUTTON
const btn = document.querySelector("#btn");
const infoPanel = document.querySelector("#infoPanel");
const body = document.querySelector("#body");

btn.addEventListener("click", () => {
  infoPanel.classList.toggle("active");
});

//PANEL INFORMATION ON/OFF
infoPanel.addEventListener("click", (event) => {
  if (event.target === infoPanel || event.target === body) {
    infoPanel.classList.remove("active");
  }
});

//WIFI SELECT
const wifiSelect = document.querySelector("#wifiSelect");
const wifiReturn = document.querySelector("#wifiReturn");

wifiSelect.addEventListener("change", () => {
  if (wifiSelect.value === "cozy") {
    wifiReturn.textContent = "Wi-Fi Name: Cozy Cottage\nPassword: 2841061660a";
  } else if (wifiSelect.value === "yiamarin") {
    wifiReturn.textContent = "Wi-Fi Name: Yiamarin\nPassword: 2841061660a";
  } else {
    wifiReturn.textContent = "Select room for Wi-Fi";
  }
});
