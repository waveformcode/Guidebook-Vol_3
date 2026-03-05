//WIFI ACCESS
const wifiBox = document.querySelector("#wifiBox");
const wifiAccess = document.querySelector("#wifiAccess");
const body = document.querySelector("#body");

wifiBox.addEventListener("click", () => {
  wifiAccess.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

//WIFI ACCESS ON/OFF
wifiAccess.addEventListener("click", (event) => {
  if (event.target === wifiAccess) {
    wifiAccess.classList.remove("active");
    document.body.classList.remove("no-scroll");
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

//NEARBY ESSENTIALS LIST
const nearbyList = document.querySelector("#nearbyList");
const nearbyButton = document.querySelector("#nearbyButton");
const main = document.querySelector("#main");
const pageOverflow = document.querySelector("#pageOverlay");

nearbyButton.addEventListener("click", () => {
  nearbyList.classList.toggle("open");
  pageOverlay.classList.toggle("active");
});

pageOverlay.addEventListener("click", () => {
  nearbyList.classList.remove("open");
  pageOverlay.classList.remove("active");
});

// DRIVING BUTTON / MODAL
const drivingBtn = document.querySelector("#drivingButton");
const drivingModal = document.querySelector("#drivingModal");

drivingBtn.addEventListener("click", () => {
  drivingModal.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

drivingModal.addEventListener("click", () => {
  drivingModal.classList.remove("active");
  document.body.classList.remove("no-scroll");
});

// SAFETY & EMERGENCY
const safetyModal = document.querySelector("#safetyModal");
const safetyBtn = document.querySelector("#safetyBtn");
const safetyOverlay = document.querySelector(".safety-overlay");
const safetySheet = document.querySelector("#safetySheet");

// OPEN
safetyBtn.addEventListener("click", () => {
  safetyModal.classList.add("active");
  document.body.classList.add("modal-open");
  document.body.classList.toggle("no-scroll");
});

// CLOSE (tap outside)
safetyOverlay.addEventListener("click", () => {
  safetyModal.classList.remove("active");
  document.body.classList.remove("modal-open");
  document.body.classList.remove("no-scroll");
});

// SWIPE DOWN CLOSE
let startY = 0;
let currentY = 0;
let dragging = false;

safetySheet.addEventListener("touchstart", (e) => {
  startY = e.touches[0].clientY;
  dragging = true;
});

safetySheet.addEventListener("touchmove", (e) => {
  if (!dragging) return;

  currentY = e.touches[0].clientY;
  const diff = currentY - startY;

  if (diff > 0) {
    safetySheet.style.transform = `translateY(${diff}px)`;
  }
});

safetySheet.addEventListener("touchend", () => {
  if (!dragging) return;

  const diff = currentY - startY;

  if (diff > 120) {
    safetyModal.classList.remove("active");
    document.body.classList.remove("modal-open");
    document.body.classList.remove("no-scroll");
  }

  safetySheet.style.transform = "";
  dragging = false;
});
