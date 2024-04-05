document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const question = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const heightHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const currentPosition = window.scrollY;

        if (currentPosition < heightHero) {
            hiddeElementsHeader();
        } else {
            showElementsHeader();
        }
    })

    //tabs
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(clickedButton) {
            const tabTarget = clickedButton.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`);

            hideAllTabs();
            tab.classList.add('shows__list--is-active');
            removeActiveButton()
            clickedButton.target.classList.add('shows__tabs__button--is-active');
        })
    }

    //FAQ section, accordion
    for (let i = 0; i < question.length; i++) {
        question[i].addEventListener('click', openOrClose);
    }
})

//hide header
function hiddeElementsHeader() {
    const header = document.querySelector('.header');
    header.classList.add('header--is-hidden');
}

//show header
function showElementsHeader() {
    const header = document.querySelector('.header');
    header.classList.remove('header--is-hidden');
}

function openOrClose(element) {
    const classe = 'faq__questions__item--is-open';
    const elementFather = element.target.parentNode;

    elementFather.classList.toggle(classe);
}

function removeActiveButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function hideAllTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}