import React from 'react';

const App = () => {
    React.useEffect(() => {
        const copies = document.querySelectorAll('.copy-btn');

        Array.from(copies).forEach(copy => {
            copy.addEventListener('click', () => {
                var value = copy.dataset.copy;
                const element = document.querySelector(`[data-copy='${value + 1}']`);
                navigator.clipboard.writeText(element.innerHTML);
                copy.style.background = "#0083b0";
                copy.style.color = "#fff";
                copy.style.border = "2Px solid #0083b0";
                copy.innerHTML = "Copié !"
                setTimeout(() => {
                    copy.style.background = "#fff";
                    copy.style.color = "#0083b0";
                    copy.style.border = "2Px solid #0083b0";
                    copy.innerHTML = "Copier"
                }, 1500);
            })
        })

        const nav = document.getElementById('flyaway-navbar');
        const slider = document.getElementById('slider');
        const closeBtn = document.getElementById('close');
        if (nav && slider && closeBtn) {
            slider.addEventListener('click', () => {
                nav.classList.remove('hidden');
                nav.classList.add('show');
            })

            closeBtn.addEventListener('click', () => {
                nav.classList.remove('show');
                nav.classList.add('hidden');
            })
        }
    })
};

export default App;