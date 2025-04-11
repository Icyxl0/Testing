function updateScreenWidth() {
  let screenWidth = window.innerWidth;
  document.getElementById('width-counter').innerText = "width: " + screenWidth;
}

function updateScreenHeight() {
  let screenWidth = window.innerHeight;
  document.getElementById('height-counter').innerText = "height: " + screenWidth;

}

updateScreenWidth();
updateScreenHeight();
window.addEventListener('resize', updateScreenWidth);
window.addEventListener('resize', updateScreenHeight)
