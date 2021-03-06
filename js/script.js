onClick('eightGB', 'memory-cost', 0);
onClick('sixteenGB', 'memory-cost', 300);
onClick('ssd1', 'storage-cost', 0);
onClick('ssd2', 'storage-cost', 500);
onClick('ssd3', 'storage-cost', 1000);
onClick('free-delivery', 'delivery-cost', 0);
onClick('paid-delivery', 'delivery-cost', 20);

function onClick(clickID, updateID, price) {
    document.getElementById(clickID).addEventListener('click', function () {
        updatePrice(updateID, price);
    })
}

function updatePrice(itemID, price) {
    const memoryCost = document.getElementById(itemID);
    memoryCost.innerText = price;

    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const storagePrice = document.getElementById('storage-cost').innerText;
    const deliveryPrice = document.getElementById('delivery-cost').innerText;

    const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);
    const total = document.getElementById('total-price');
    total.innerText = totalPrice;
}

const code = 'pHero';
document.getElementById('apply-btn').addEventListener('click', function () {
    const promoCode = document.getElementById('promo-input').value;
    if (promoCode === code) {
        const price1 = document.getElementById('total-price');
        let price2 = parseFloat(price1.innerText);

        const disPrice = (price2 * 20) / 100;
        price2 = price2 - disPrice;

        price1.innerText = price2;
    } else
        console.log('Wrong Promo Code');
})