
document.addEventListener("DOMContentLoaded", function(event) {
  console.log('DOM is loaded.');
});

document.querySelector('.nav-toggle-button').addEventListener('click', toggleNavButtons);

let navButtonIcon = document.getElementById("nav-icon");
let navButtons = document.querySelectorAll('.nav-container > li');
let maxWidth = matchMedia("(max-width: 700px)");
let hiddenItems = true;
let show = 'inherit';
let hide = 'none';
let cross = 'fa-times';
let orgiginalIcon = 'fa-bars';

maxWidth.addListener(showNavOnWide);

// Helper function to toggle the navbar icon on smaller screens
let toggleIcon = function(element, icon) {
  element.classList.toggle(icon);
  if (!maxWidth.matches) {
    element.classList.remove(icon);
  }
};
// Helper function to set the display property of each child of a parent
let showOrHide = (parent, state) => {
  parent.forEach((element) => {
    element.style.display = state;
  });
}

function showNavOnWide() {
  hiddenItems = true;
  if (maxWidth.matches) {
    showOrHide(navButtons, hide);
  } else {
    showOrHide(navButtons, show);
    toggleIcon(navButtonIcon, cross);
  }
};

function toggleNavButtons() {
  if (hiddenItems) {
    showOrHide(navButtons, show);
    toggleIcon(navButtonIcon, cross);
    hiddenItems = false;
  } else {
      showOrHide(navButtons, hide);
      toggleIcon(navButtonIcon, cross);
      hiddenItems = true;
  }
}
