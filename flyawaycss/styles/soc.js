import React from "react";


const Soc = () => {
    React.useEffect(() => {
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

    })
}

export default Soc;