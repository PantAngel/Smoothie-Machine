// smoothie class
class Smoothie {
    constructor(base, fruits, toppings, image) {
        this.base = base;
        this.fruits = fruits;
        this.toppings = toppings;
        this.image = image; 
    }

    // text for the smoothie
    getDescription() {
        return `Smoothie with ${this.base}, Fruits: ${this.fruits.join(", ")}, Toppings: ${this.toppings.join(", ")}`;
    }

    // price
    getPrice() {
        const basePrice = 4; 
        const toppingPrice = this.toppings.length * 2.99; 
        return (basePrice + toppingPrice).toFixed(2);
    }
}

// when user clicks order
function placeOrder() {

    const base = document.getElementById('base').value;

    // getting fruits
    const fruitOptions = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(el => el.value);

    // toppings 
    const toppings = [];
    document.querySelectorAll('input[type="checkbox"]').forEach(el => {
        if (el.checked && el.value === "Protein Powder") {
            toppings.push(el.value);
        }
    });

    // photo depending on smoothie flavour
    let smoothieImage = "";

    if (fruitOptions.includes("Strawberry Banana")) {
        smoothieImage = "img/StrawBan.jpg";
    } 
    else if (fruitOptions.includes("Blueberry Pomegranete")) {
        smoothieImage = "img/BluePom.jpg";
    }
    else if (fruitOptions.includes("Mango Pineapple")) {
        smoothieImage = "img/MangoPineapple.jpg";
    }

    const smoothie = new Smoothie(base, fruitOptions, toppings, smoothieImage);

    // showing output + the picture
    document.getElementById('output').innerHTML = `
        <p>${smoothie.getDescription()}</p>
        <p>Total Price: $${smoothie.getPrice()}</p>
        <img src="${smoothie.image}" alt="Smoothie Image" style="width:250px; margin-top:10px; border-radius:10px;" />
    `;
}
