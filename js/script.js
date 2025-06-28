const subscriptionPlansContainer = document.querySelector('.subscription-plans');
const items = document.querySelectorAll('.subscription-plans__item');
const continueBtn = document.querySelector('.subscription-plans__continue-btn');
const itemsBadge = document.querySelector('.item__badge');
const itemsBadgeWrapper = document.querySelector('.item__badge-wrapper');

function changeActive(index) {
    const activeItem = items[index];

    items.forEach((item) => item.classList.remove('item--active'));
    activeItem.classList.add('item--active');

    if (index === 0) {
        itemsBadge.classList.add('item__badge--active');
        itemsBadgeWrapper.classList.add('item__badge-wrapper--active');
    } else {
        itemsBadge.classList.remove('item__badge--active');
        itemsBadgeWrapper.classList.remove('item__badge-wrapper--active');
    }

    continueBtn.setAttribute('href', activeItem.getAttribute('data-link'));
}

changeActive(0);

subscriptionPlansContainer.addEventListener('click', (e) => {
    const item = e.target.closest('.subscription-plans__item');

    if (item) {
        const index = Array.from(items).indexOf(item);
        changeActive(index);
    }
});

const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
if (isIOS) {
    function setVH() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    window.addEventListener('resize', setVH);
    setVH();
}
