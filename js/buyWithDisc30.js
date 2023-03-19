document.getElementById('btn-buy-now-watch').addEventListener('click', function () {
    // console.log('btn clicked');
    const priceElement = document.getElementById('original-price');
    const priceWithoutDiscountString = priceElement.innerText;
    console.log(priceWithoutDiscountString);
    const priceWithoutDiscount = parseFloat(priceWithoutDiscountString);
    const priceAfterDiscount = priceWithoutDiscount - (priceWithoutDiscount * 30 / 100);

    const priceMessageElement = document.getElementById('pay-message');
    priceMessageElement.innerText = "Please pay only $" + priceAfterDiscount;
})

//Advance apply button 
document.getElementById('btn-apply').addEventListener('click', function () {
    const originalPriceString = document.getElementById('original-price2').innerText;
    const originalPrice = parseFloat(originalPriceString);

    const discCupon = document.getElementById('discount-cupon').innerText;
    const discountMessage = document.getElementById('discount-message');

    if (discCupon === 'DISC30') {
        discountMessage.innerText = 'Please pay $' + (originalPrice - (originalPrice * .3));
    } else {
        discountMessage.innerText = "No discount available";
    }
})