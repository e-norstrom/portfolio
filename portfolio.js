
document.addEventListener("DOMContentLoaded", function(event) {
  console.log('DOM is loaded.');
});

document.querySelector('.nav-toggle-button').addEventListener('click', toggle);

let hiddenItems = true;

function toggle() {
  let navButtons = document.querySelectorAll('.nav-container > li');

  if (hiddenItems) {
    navButtons.forEach((thing) => {
      thing.style.display = 'block';
      hiddenItems = false;
    });
  } else {
      navButtons.forEach((thing) => {
        thing.style.display = 'none';
        hiddenItems = true;
    });
  }
}
