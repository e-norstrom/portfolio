
document.addEventListener("DOMContentLoaded", function(event) {
  console.log('DOM is loaded.');
});

const burgerContainer = document.querySelector('.icon-container');
const burgerIcon = document.getElementById('burger-icon');
const navButtonsUl = document.querySelector('.nav-buttons');
const navButtons = document.querySelectorAll('.nav-buttons > li');
const maxWidth = matchMedia("(max-width: 700px)");
const show = 'inherit';
const hide = 'none';
const crossIcon = 'fa-times';
const dropDown = 'dropdown-fade-in';
let hiddenItems = true;

// Helper function to toggle the burger icon on small screens
const toggleIcon = function(element, icon) {
  element.classList.toggle(icon);
  if (!maxWidth.matches) {
    element.classList.remove(icon);
  }
};

// Helper function to set the display property of each child elemnt
const showOrHide = (parent, state) => {
  parent.forEach((element) => {
    element.style.display = state;
  });
}
//Helper function to add a class for each child element,
//used in toggleNavButtons to add a dropdown-fade-in class on click
const addClass = (parent, aClass) => {
  parent.forEach((element) => {
    element.classList.add(aClass);
  });
};
addClass(navButtons, dropDown);

// Reset navbar on resizing browser window
function resetNavBar() {
  hiddenItems = true;
  if (maxWidth.matches) {
    showOrHide(navButtons, hide);
  } else {
    showOrHide(navButtons, show);
    toggleIcon(burgerIcon, crossIcon);
  }
};

function toggleNavButtons() {
  if (hiddenItems) {
    addClass(navButtons, dropDown);
    showOrHide(navButtons, show);
    toggleIcon(burgerIcon, crossIcon);
    hiddenItems = false;
  } else {
      showOrHide(navButtons, hide);
      toggleIcon(burgerIcon, crossIcon);
      hiddenItems = true;
  }
};

function closeNavbarAfterClick() {
  if (maxWidth.matches) {
    showOrHide(navButtons, hide);
    toggleIcon(burgerIcon, crossIcon);
    hiddenItems = true;
  }
};

// addClass(navButtons, dropDown);
burgerContainer.addEventListener('click', toggleNavButtons);
navButtonsUl.addEventListener('click', closeNavbarAfterClick);
maxWidth.addListener(resetNavBar);