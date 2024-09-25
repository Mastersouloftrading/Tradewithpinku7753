// Function for the navbar
function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
}

// Function for the home slider
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function() {
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').appendChild(items[0]);
});

prev.addEventListener('click', function() {
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').prepend(items[items.length - 1]);
});

/////////////////////////////////////////////

// Function to toggle the modal open/close
function toggleModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
                if (modal.style.display === 'block') {
                        modal.style.display = 'none'; // Hide the modal if it's currently open
                } else {
                        modal.style.display = 'block'; // Show the modal if it's currently hidden
                }
        }
}

// Function to close the modal
function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
                modal.style.display = 'none'; // Hide the modal
        }
}

// Modal-related event listeners
function initModalListeners() {
        // Close modal when clicking outside of the modal content
        window.addEventListener('click', (event) => {
                const modal = document.querySelector('.box'); // Select the currently open modal (assuming class 'box' is for modals)
                if (modal && event.target === modal) {
                        closeModal(modal.id); // Close modal when clicking outside the modal content
                }
        });

        // Add event listeners to close buttons (for all modals)
        document.querySelectorAll('.close').forEach((btn) => {
                btn.addEventListener('click', () => {
                        const modal = btn.closest('.box'); // Get the closest modal
                        if (modal) {
                                closeModal(modal.id); // Close the modal
                        }
                });
        });
}

// Experience section box logic
function initExperienceBoxListeners() {
        document.querySelectorAll('.exp-box-1, .exp-box-2, .exp-box-3, .exp-box-4, .exp-box-5, .exp-box-6').forEach((box, index) => {
                box.addEventListener('click', () => {
                        toggleModal('mybox'); // Use toggleModal for the common experience modal
                        document.getElementById('box-text').innerText = document.getElementById(`exp-box-p-${index + 1}`).innerText;
                });
        });
}

// Initialize all event listeners for the modals and boxes
function initializeAllListeners() {
        initModalListeners();
        initExperienceBoxListeners();
}

// Call this function after the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', initializeAllListeners);
