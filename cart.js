
const data = localStorage.getItem("cart");
const convert = JSON.parse(data);
console.log(convert);

let main = document.querySelector(".main");
convert.map((item, index) => {
  main.innerHTML += `
    <div class="cart-box">
      <div class="cart-box-content">
        <h1>${item.brand} ${item.model}</h1>
        <p>Storage: ${item.ram} / ${item.rom}</p>
        <p>${item.camera}</p>
        <div class="quantity">
          <button onclick="minus(${index}, ${item.price})">-</button>
          <p id="qun-num-${index}">${item.quantity}</p>
          <button onclick="plus(${index}, ${item.price})">+</button>
        </div>
        <h4 id="price-${index}">Price $</h4>
      </div>
    </div>
  `;
});

function plus(index, price) {
    let quantityElem = document.querySelector(`#qun-num-${index}`);
    let priceElem = document.querySelector(`#price-${index}`);
    quantityElem.innerHTML++;
    priceElem.innerHTML = `Price $${price * quantityElem.innerHTML}`;
  }
  
  function minus(index, price) {
    let quantityElem = document.querySelector(`#qun-num-${index}`);
    let priceElem = document.querySelector(`#price-${index}`);
    if (quantityElem.innerHTML > "1") {
      quantityElem.innerHTML--;
      priceElem.innerHTML = `Price $${price * quantityElem.innerHTML}`;
    }
  }






 
  