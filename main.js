

document.addEventListener('DOMContentLoaded', function() {
    const fadeEl = document.querySelectorAll('.kagulat');

    function fadeEls() {
        fadeEl.forEach(function(element) {
            if (saScreenNaba(element)) {
                element.classList.add('inmona');
            }

        });
    }



    


    function saScreenNaba(el) {
        return (el.getBoundingClientRect().top + (el.getBoundingClientRect().height / 2)) < 0 || (el.getBoundingClientRect().top + (el.getBoundingClientRect().height / 2)) < window.innerHeight;
    }

    fadeEls();


    window.addEventListener('scroll', fadeEls);
    window.addEventListener('resize', fadeEls);
});