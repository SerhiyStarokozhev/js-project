function modalSixtySeconds() {

    // Появление окна

    setTimeout(popupUp, 60000);

    function popupUp() {
        let modal = document.querySelector('#popup');
        modal.style.display = 'flex';
    }
}

module.exports = modalSixtySeconds;