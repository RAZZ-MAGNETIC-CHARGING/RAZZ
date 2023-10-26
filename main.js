function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

/*The scrollTop method is already existing, it is why it had not worked, but you can right a new method called scrolltop */
function scrolltop() {
  window.scrollTo(0, 0);
};

