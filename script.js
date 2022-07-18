
const items = document.querySelectorAll('.userInfo__item');
;

items.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    })
}) 