// Открытие модального окна
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

// Закрытие модального окна
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Закрытие модального окна при клике за его пределами
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}
