const cards = document.querySelectorAll('.card');
// console.log(cards[0]);

cards[0].addEventListener('click', function () {
    console.log(this);
})

for (i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function () {
        console.log(this.classList.contains("expanded"));
        if (!(this.classList.contains("expanded"))) {
            // cards.classList.remove('expanded');
            cards.forEach((card) => {
                card.classList.remove('expanded');
            })
            this.classList.add('expanded');
        }

    })

}
