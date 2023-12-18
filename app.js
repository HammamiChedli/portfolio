const sections = document.querySelectorAll(".section")
const sectBtns = document.querySelectorAll('.controllers')
const sectBtn = document.querySelectorAll('.control')
const allSection = document.querySelector('.main-contenaire')
const txtName = document.querySelector('.txt-efect')
document.getElementById("home").classList.add('active')


function createProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach((progressBar) => {
        const progText = progressBar.querySelector('.prog-text');
        const progress = progressBar.querySelector('.progress');
        const progPercentage = parseInt(progText.textContent);
        const span = progress.querySelector('span');

        const startWidth = 0;
        const endWidth = progPercentage;

        let currentWidth = startWidth;
        const increment = (endWidth - startWidth) / 100; // Increment per millisecond

        const interval = setInterval(() => {
            currentWidth += increment;
            span.style.width = currentWidth + '%';

            if (currentWidth >= endWidth) {
                clearInterval(interval);
            }
        }, 20); // Interval in milliseconds (adjust as needed)
    });
}


function displayTextOneByOne(text, delay) {
    let index = 0;

    function printNextChar() {
        if (index < text.length) {
            txtName.innerHTML += text[index]
            index++;
            setTimeout(printNextChar, delay);
        }
    }

    printNextChar();
}

displayTextOneByOne("Développeur full-strack", 150);



function pagesTransition() {
    //button active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let curentBtn = document.querySelectorAll('.active-btn');
            curentBtn[0].className = curentBtn[0].className.replace("active-btn", " ")
            this.className += " active-btn"

        })

    }

    // section target class

    allSection.addEventListener("click", function (e) {
        const id = e.target.dataset.id
        if (id) {
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            //  e.target.classList.add('active')

            sections.forEach((section) => {
                section.classList.remove('active')

            })
            const elt = document.getElementById(id)
            elt.classList.add("active")
        }

    })

}
pagesTransition()

function createProgressBarsWhenActive() {
    const targetNode = document.querySelector('.about');
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const isActive = targetNode.classList.contains('active');
                if (isActive) {
                    createProgressBars();
                    observer.disconnect();
                    break;
                }
            }
        }
    });

    observer.observe(targetNode, { attributes: true });
}

createProgressBarsWhenActive();

const formBTN = document.querySelector('#form-btn-submit')
formBTN.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e.target)
})
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
