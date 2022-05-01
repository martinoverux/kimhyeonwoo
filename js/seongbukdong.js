document.addEventListener("DOMContentLoaded", function() {

// Get the button that opens the modal
const btn = document.querySelectorAll("button.modal-custom-button");

// All page modals
const modals = document.querySelectorAll('.modal-custom');

// Get the <span> element that closes the modal
const spans = document.getElementsByClassName("close-modal");

// When the user clicks the button, open the modal
for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function (e) {
        e.preventDefault();
        modal = document.querySelector(e.target.getAttribute("href"));
        modal.style.display = 'block';
    }
}

// When the user clicks on <span> (x), close the modal
for (let i = 0; i < spans.length; i++) {
    spans[i].onclick = function () {
        for (let index in modals) {
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        }
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target.classList.contains('modal-custom')) {
        for (let index in modals) {
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        }
    }
}
});
