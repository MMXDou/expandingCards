var cards = document.querySelectorAll('.card');

for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function () {


        if (!(this.classList.contains("expanded"))) {
            // cards.classList.remove('expanded');
            cards.forEach((card) => {
                card.classList.remove('expanded');
            })
            this.classList.add('expanded');
        }

    })

}
