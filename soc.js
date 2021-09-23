window.onload = () => {
    // ACCORDION
    const accordionHeader = document.querySelectorAll('.accordion-head');
    if (accordionHeader.length > 0) {
        Array.from(accordionHeader).forEach(head => {
            head.addEventListener('click', () => {
                const accordionBody = head.nextElementSibling;
                if (accordionBody.style.display === "") {
                    accordionBody.style.display = "flex";
                } else {
                    accordionBody.style.display = "";
                }
            })
        })
    }
    // SUBMIT ALERT
    const submits = document.querySelectorAll('.form-item-submit');
    if (submits.length > 0) {
        Array.from(submits).forEach(submit => {
            submit.addEventListener('click', (e) => {
                e.preventDefault();
                const alert = document.getElementById('form-alert');
                alert.style.opacity = "1";
                setTimeout(() => {
                    alert.style.opacity = "0";
                }, 2000);
            })
        })
    }
    // CAROUSEL
    const pictures = document.querySelectorAll('.carousel-pic');
    const rights = document.querySelectorAll('.fa-chevron-right');
    const lefts = document.querySelectorAll('.fa-chevron-left');
    const active = document.getElementById('carousel-active');
    const miniatures = document.querySelectorAll('.carousel-miniature');
    const choosePic = (src) => {
        active.src = src;
    }
    if (active) { var i = active.dataset.pic; }
    if (rights.length > 0 && pictures.length > 0) {
        var choosen;
        console.log(i)
        Array.from(rights).forEach(right => {
            right.addEventListener('click', () => {
                if (i === "0" || i === 0) {
                    i = 2;
                } else {
                    i++;
                }
                choosen = document.querySelectorAll('img[data-pic]')[i];
                if (!choosen) {
                    i = pictures.length - 1;
                }
                choosen = document.querySelectorAll('img[data-pic]')[i];
                choosePic(choosen.src);
            })
        })
    }
    if (lefts.length > 0 && pictures.length > 0) {
        var i = active.dataset.pic;
        var choosen;
        Array.from(lefts).forEach(left => {
            left.addEventListener('click', () => {
                if (i === "1" || i === 1) {
                    i = 0;
                } else {
                    i--;
                }
                choosen = document.querySelectorAll('img[data-pic]')[i];
                if (!choosen) {
                    i = pictures.length - (pictures.length - 1);
                }
                choosen = document.querySelectorAll('img[data-pic]')[i];
                choosePic(choosen.src);
            })
        })
    }
    if (miniatures.length > 0) {
        Array.from(miniatures).forEach(picture => {
            picture.addEventListener('click', () => {
                choosePic(picture.src);
                i = parseInt(picture.dataset.pic) + 1;
            })
        })
    }
    // POPUP
    const opens = document.querySelectorAll('.open-popup');
    const closes = document.querySelectorAll('.close-popup');
    if (opens.length > 0 && closes.length > 0) {
        Array.from(opens).forEach(open => {
            open.addEventListener('click', () => {
                var popup = document.getElementById(open.dataset.popup);
                popup.style.display = "flex";
            })
        })
        Array.from(closes).forEach(close => {
            close.addEventListener('click', () => {
                var popup = document.getElementById(close.dataset.popup);
                popup.style.display = "none";
            })
        })
    }
    // MOBILE MENU
    const mobileOpens = document.querySelectorAll('.mobile-open');
    const mobileItems = document.querySelectorAll('.mobile-items');
    if (mobileOpens.length > 0 && mobileItems.length > 0) {
        Array.from(mobileOpens).forEach(open => {
            open.addEventListener('click', () => {
                Array.from(mobileItems).forEach(items => {
                    items.style.display = "flex";
                })
            })
            Array.from(mobileItems).forEach(items => {
                items.addEventListener('mouseleave', () => {
                    items.style.display = "none";
                })
            })
        })
    }
}