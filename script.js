const sidebar = document.getElementById('containerMenu');
const closeButton = document.getElementById('buttonClick');
// const links = document.querySelectorAll()

// closeButton.addEventListener('click', closeSidebar);

function closeSidebar() {
  console.log(sidebar.classList)

  sidebar.classList.remove('closeMenu');
}