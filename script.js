fetch('products.json')
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById('productList');
    products.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="images/${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>${p.price}</p>
        <button class="btn-order" onclick="orderNow('${p.name}')">اطلب الآن</button>
      `;
      container.appendChild(card);
    });
  });

function orderNow(productName) {
  const waNumber = '9647000000000';
  const message = `مرحباً، أود طلب: ${productName}`;
  const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}