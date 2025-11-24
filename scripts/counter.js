document.addEventListener('click', function (event) {
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const counterWrapper = event.target.closest('.counter');
        const counter = counterWrapper.querySelector('.items__current');
        let currentValue = parseInt(counter.innerText);
        if (event.target.dataset.action === 'plus') {
            currentValue++;
        }
        if (event.target.dataset.action === 'minus' && currentValue > 1) {
            currentValue--;
        }
        counter.innerText = currentValue;
    }
});
