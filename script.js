// Select the elements
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const overlay = document.getElementById("overlay");

// Function to open the modal
function openModal() {
  modal.classList.add("open");
  overlay.classList.add("open");
}

// Function to close the modal
function closeModal() {
  modal.classList.remove("open");
  overlay.classList.remove("open");
}

// Add click event listener to the open modal button
openModalBtn.addEventListener("click", openModal);

// Add click event listener to the close modal button
closeModalBtn.addEventListener("click", closeModal);

// Add click event listener to the overlay
overlay.addEventListener("click", closeModal);
