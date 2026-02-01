//WIFI SELECT
const wifiSelect = document.querySelector("#wifiSelect");
const wifiReturn = document.querySelector("#wifiReturn");

wifiSelect.addEventListener("change", () => {
  if (wifiSelect.value === "cozy cottage") {
    wifiReturn.textContent = "Wi-Fi Name: Cozy Cottage\nPassword: 2841061660a";
  } else if (wifiSelect.value === "yiamarin") {
    wifiReturn.textContent = "Wi-Fi Name: Yiamarin\nPassword: 2841061660a";
  } else {
    wifiReturn.textContent = "Select room for Wi-Fi";
  }
});

//WEATHER
!(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = "https://weatherwidget.io/js/widget.min.js";
    fjs.parentNode.insertBefore(js, fjs);
  }
})(document, "script", "weatherwidget-io-js");
