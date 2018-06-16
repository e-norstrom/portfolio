
document.addEventListener("DOMContentLoaded", function(event) {
  console.log('DOM is loaded.');
});

document.querySelector('.nav-toggle-button').addEventListener('click', toggleNavButtons);

let navButtons = document.querySelectorAll('.nav-container > li');
let maxWidth = matchMedia("(max-width: 700px)");
let hiddenItems = true;
let show = 'inherit';
let hide = 'none';

maxWidth.addListener(showNavOnWide);

// Helper function to set the display property of each child of a parent
let showOrHide = (parent, state) => {
  parent.forEach((element) => {
    element.style.display = state;
  });
}

function showNavOnWide() {
  maxWidth.matches ? showOrHide(navButtons, hide) : showOrHide(navButtons, show);
};

function toggleNavButtons() {
  if (hiddenItems) {
    showOrHide(navButtons, show);
    hiddenItems = false;
  } else {
      showOrHide(navButtons, hide);
      hiddenItems = true;
  }
}









// function toggleNavButtons() {
//   if (hiddenItems) {
//     navButtons.forEach((thing) => {
//       thing.style.display = 'inherit';
//       hiddenItems = false;
//     });
//   } else {
//       navButtons.forEach((thing) => {
//         thing.style.display = 'none';
//         hiddenItems = true;
//     });
//   }
// }
