let isOpen = false;

function toggleMenu() {
  isOpen = !isOpen;
  const menu = document.getElementById("menu");
  const menuIcon = document.querySelector(".hamburger-menu img");
  menu.classList.toggle("open");

  if (isOpen) {
    menuIcon.src = "drive-download-20240418T164448Z-001/cross.png"; // Replace with path to your cross icon
  } else {
    menuIcon.src = "drive-download-20240418T164448Z-001/hamburger.png"; // Replace with path to your hamburger icon
  }
}

// Add event listeners to menu items
document.querySelectorAll(".menu-item").forEach((item) => {
    item.addEventListener("click", () => {
        toggleMenu(); // Close the menu when a menu item is clicked
        // Add logic to navigate to different pages based on the clicked item
        // For example, you can use window.location.href to navigate to a different URL
    });
});