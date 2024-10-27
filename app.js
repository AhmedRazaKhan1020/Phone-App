console.log('Hello world!');
const cartitem =[]

const phones = [
  {
    brand: "Samsung",
    model: "Galaxy S21",
    ram: 8,
    rom: 128,
    camera: "64 megapixel",
    price: 799,
    image:"./",
  },
  {
    brand: "Apple",
    model: "iPhone 13",
    ram: 4,
    rom: 128,
    camera: "12 megapixel",
    price: 799,
    image:"./",
  },
  {
    brand: "OnePlus",
    model: "9",
    ram: 12,
    rom: 256,
    camera: "48 megapixel",
    price: 729,
    image:"./",
  },
  {
    brand: "Google",
    model: "Pixel 6",
    ram: 8,
    rom: 128,
    camera: "50 megapixel",
    price: 599,
    image:"./",
  },
  {
    brand: "Xiaomi",
    model: "Mi 11",
    ram: 8,
    rom: 256,
    camera: "108 megapixel",
    price: 749,
    image:"./",
  },
  {
    brand: "Sony",
    model: "Xperia 1 III",
    ram: 12,
    rom: 256,
    camera: "12 megapixel",
    price: 1299,
    image:"./",
  },
  {
    brand: "Oppo",
    model: "Find X3 Pro",
    ram: 12,
    rom: 256,
    camera: "50 megapixel",
    price: 1149,
  },
  {
    brand: "Vivo",
    model: "X60 Pro",
    ram: 12,
    rom: 256,
    camera: "48 megapixel",
    price: 999,
  },
  {
    brand: "Nokia",
    model: "G50",
    ram: 4,
    rom: 128,
    camera: "48 megapixel",
    price: 299,
  },
  {
    brand: "Motorola",
    model: "Edge 20",
    ram: 8,
    rom: 256,
    camera: "108 megapixel",
    price: 599,
  },
  {
    brand: "Realme",
    model: "GT",
    ram: 12,
    rom: 256,
    camera: "64 megapixel",
    price: 499,
  },
  {
    brand: "Asus",
    model: "ROG Phone 5",
    ram: 16,
    rom: 512,
    camera: "64 megapixel",
    price: 999,
  },
  {
    brand: "HTC",
    model: "Desire 21 Pro",
    ram: 8,
    rom: 128,
    camera: "48 megapixel",
    price: 399,
  },
  {
    brand: "Huawei",
    model: "P40 Pro",
    ram: 8,
    rom: 256,
    camera: "50 megapixel",
    price: 899,
  },
  {
    brand: "LG",
    model: "Wing",
    ram: 8,
    rom: 256,
    camera: "64 megapixel",
    price: 999,
  },
  {
    brand: "ZTE",
    model: "Axon 20",
    ram: 8,
    rom: 128,
    camera: "64 megapixel",
    price: 399,
  },
  {
    brand: "BlackBerry",
    model: "KEY2",
    ram: 6,
    rom: 64,
    camera: "12 megapixel",
    price: 649,
  },
  {
    brand: "Lenovo",
    model: "Legion Phone Duel",
    ram: 16,
    rom: 512,
    camera: "64 megapixel",
    price: 999,
  },
  {
    brand: "Alcatel",
    model: "3L",
    ram: 4,
    rom: 64,
    camera: "48 megapixel",
    price: 199,
  },
  {
    brand: "TCL",
    model: "10 Pro",
    ram: 6,
    rom: 128,
    camera: "64 megapixel",
    price: 449,
  },
];
const container = document.querySelector('#container');
const main = document.querySelector('.main');

phones.map((item, index) => {
  container.innerHTML += `
    <div class="card">
      <div class="content">
      <h2>${item.brand} ${item.model}</h2>
      <p>Storage: ${item.ram} / ${item.rom}</p>
      <p>price $${item.price}</p>
      <button onclick="addToCart(${index})">Add to Cart</button>
    </div>
    </div>
    `;
});
function addToCart(index) {
  const checkIndex = cartitem.indexOf(phones[index]);
  if (checkIndex === -1) {
    phones[index].quantity = 1;
    cartitem.push(phones[index]);
  } else {
    cartitem[checkIndex].quantity += 1;
  }
  console.log(cartitem)
  Swal.fire({
    title: "Good job!",
    text: "Item added to cart successfully!",
    icon: "success",
  });
  
}
function checkout() {
    console.log("checkout");
    // local storage ka undar data store krwana ha.
    const convertArrIntoStr = JSON.stringify(cartitem);
    localStorage.setItem("cart", convertArrIntoStr);
    window.location = "cart.html";
}