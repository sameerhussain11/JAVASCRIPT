const products = [
    {
        prodName: "Smartphone",
        prodDesc: "Experience the latest in mobile technology with the SmartPhone XYZ. With its sleek design and powerful performance, it's perfect for staying connected on the go.",
        prodImage: "img/Smartphone.jpeg",
        prodPrice: "5000 PKR"
    },
    {
        prodName: "Laptop",
        prodDesc: "The UltraBook ABC combines portability with performance, making it ideal for work or play. Its lightweight design and long battery life ensure you can stay productive wherever you go.",
        prodImage: "img/Laptop.jpeg",
        prodPrice: "55,000 PKR"
    },
    {
        prodName: "Fitness Tracker",
        prodDesc: "Track your fitness goals with the FitPro 2000. With its advanced sensors and intuitive interface, you can monitor your activity levels, heart rate, and sleep patterns to stay on top of your health and wellness.",
        prodImage: "img/Fitness Tracker.jpeg",
        prodPrice: "2000 PKR"
    },
    {
        prodName: "Wireless Earbuds",
        prodDesc: "Immerse yourself in your favorite music with the AirSound Max wireless earbuds. Featuring crisp sound quality and a comfortable fit, they're perfect for workouts, commutes, or just relaxing at home.",
        prodImage: "img/Wireless Earbuds.jpeg",
        prodPrice: "2500 PKR"
    },
    {
        prodName: "Smartwatch",
        prodDesc: "Stay connected and organized with the TechWrist 500 smartwatch. With its touchscreen display and built-in apps, you can check notifications, track your fitness, and even make payments right from your wrist.",
        prodImage: "img/Smartwatch.jpeg",
        prodPrice: "10,000 PKR"
    },
];



let cd = document.getElementById('card-d');

for(let i = 0; i < products.length; i++){
    cd.innerHTML += `
    <div class="card text-white bg-dark" style=" padding-top:15px; width: 20rem;">
      <img src="${products[i].prodImage}" class="card-img-top img-fluid" alt="IMG Deleted">
      <div class="card-body">
        <h5 class="card-title">${products[i].prodName}</h5>
        <p class="card-text">${products[i].prodDesc}</p>
        <h4>Price: ${products[i].prodPrice}</h4>
        <a href="#" class="btn btn-primary">Buy Now</a>
      </div>
    </div>
    `;
}




