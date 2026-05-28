<<<<<<< HEAD
const products = [
    {
        name: "Headphones",
        price: "$50",
        image: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd"
    },
    {
        name: "Smart Watch",
        price: "$80",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },
    {
        name: "Laptop",
        price: "$700",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    },
    {
        name: "Camera",
        price: "$400",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
    },
    {
        name: "short kurthi",
        price: "$750",
        image: "https://i.pinimg.com/originals/f3/52/61/f352616a16d406d794ccbfee98ebc42d.jpg"
    },
    {
        name: "earrings",
        price:"$200",
        image: "https://tse1.mm.bing.net/th/id/OIP.AiulUYKp4R27Bqhw-pN9HAHaHa?pid=Api&P=0&h=180"
    },
    {
        name: "pen",
        price: "$10",
        image: "https://tse4.mm.bing.net/th/id/OIP.7lwhlToRm2n3UrGYBg-QEAHaE6?pid=Api&P=0&h=180"
    }
];

const container = document.getElementById("productContainer");

function displayProducts(items) {
    container.innerHTML = "";

    items.forEach(product => {
        container.innerHTML += `
            <div class="card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">${product.price}</p>
                <button>Add to Cart</button>
            </div>
        `;
    });
}

displayProducts(products);

function filterProducts() {
    const search = document
        .getElementById("search")
        .value
        .toLowerCase();

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(search)
    );

    displayProducts(filtered);
=======
async function loadData() {

    const response = await fetch("data/users.json");

    const users = await response.json();

    let output = "";

    users.forEach(user => {
        output += `
            <div class="card">
                <h3>${user.name}</h3>
                <p>${user.role}</p>
            </div>
        `;
    });

    document.getElementById("output").innerHTML = output;
>>>>>>> fb333d4bba31fdd516159e8f77f58459c58180ea
}