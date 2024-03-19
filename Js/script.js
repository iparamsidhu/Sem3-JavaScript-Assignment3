// Pizza Object
class Pizza {
    constructor(name, email, quantity, size, toppings, sauce, drinks, delivery) {
        this.name = name;
        this.email = email;
        this.quantity = quantity;
        this.size = size;
        this.toppings = toppings;
        this.sauce = sauce;
        this.drinks = drinks;
        this.delivery = delivery;
    }

    getDescription() {
        return `
            Name: ${this.name}<br>
            Email: ${this.email}<br>
            Quantity: ${this.quantity}<br>
            Size: ${this.size}<br>
            Toppings: ${this.toppings.join(', ')}<br>
            Sauce: ${this.sauce}<br>
            Drinks: ${this.drinks}<br>
            Delivery: ${this.delivery}
        `;
    }
}

// Add event listener to the order button
document.getElementById('order-btn').addEventListener('click', function() {
    // Grabbing form elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const quantityInput = document.getElementById('quantity');
    const sizeInputs = document.querySelectorAll('input[name="size"]');
    const toppingsInputs = document.querySelectorAll('input[name="toppings"]');
    const sauceInputs = document.querySelectorAll('input[name="sauce"]');
    const drinksInputs = document.querySelectorAll('input[name="drinks"]');
    const deliveryInput = document.getElementById('delivery');
    const pizzaDescription = document.getElementById('pizza-description');

    // Get the selected size
    let selectedSize = '';
    sizeInputs.forEach(input => {
        if (input.checked) {
            selectedSize = input.value;
        }
    });

    // Get the selected toppings
    let selectedToppings = [];
    toppingsInputs.forEach(input => {
        if (input.checked) {
            selectedToppings.push(input.value);
        }
    });

    // Get the selected sauce
    let selectedSauce = '';
    sauceInputs.forEach(input => {
        if (input.checked) {
            selectedSauce = input.value;
        }
    });

    // Get the selected drinks
    let selectedDrinks = '';
    drinksInputs.forEach(input => {
        if (input.checked) {
            selectedDrinks = input.value;
        }
    });

    // Create pizza object
    const pizza = new Pizza(
        nameInput.value,
        emailInput.value,
        quantityInput.value,
        selectedSize,
        selectedToppings,
        selectedSauce,
        selectedDrinks,
        deliveryInput.value
    );

    // Display pizza description
    pizzaDescription.innerHTML = pizza.getDescription();
});
