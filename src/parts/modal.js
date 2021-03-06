function modal() {
    
    // Modal window for button "Вызвать замерщика"

    let btn = document.querySelector('.header_btn'),
        testo = document.querySelector('.popup_engineer'),
        overlay = document.querySelector('.overlay');

    btn.addEventListener('click', function() {
        testo.style.display = 'flex';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    overlay.addEventListener('click', (e) => {
        if (!e.target.closest('.popup_form')) {
            testo.style.display = 'none';
            btn.classList.remove('more-splash');
            document.body.style.overflow = '';
        }
    });


    // Modal windows for popup "Заказать обратный звонок" и "Спросите у нашего специалиста"

    let phoneLink = document.querySelectorAll('.phone_link'),
        popup = document.querySelector('.popup'),
        over = document.querySelector('.over');

    for (let i = 0; i < phoneLink.length; i++) {

        phoneLink[i].addEventListener('click', function(e) {
            e.preventDefault();
            popup.style.display = 'flex';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });

        over.addEventListener('click', function(e) {
            if (!e.target.closest('.popup_form')) {
                popup.style.display = 'none';
                phoneLink[i].classList.remove('more-splash');
                document.body.style.overflow = '';
            }
        });

    }
}

module.exports = modal;