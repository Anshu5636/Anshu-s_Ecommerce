const productCategories = {
    electronics: [
        { id: 'e1', name: 'Wireless Earbuds', price: 199.99, description: 'Noise-cancelling bluetooth earbuds', category: 'electronics' },
        { id: 'e2', name: '4K Smart TV', price: 599.99, description: '55-inch OLED Smart Television', category: 'electronics' },
        { id: 'e3', name: 'Laptop', price: 1099.99, description: 'High-performance ultrabook', category: 'electronics' },
        { id: 'e4', name: 'Gaming Console', price: 499.99, description: 'Next-gen gaming system', category: 'electronics' },
        { id: 'e5', name: 'Smartphone', price: 799.99, description: 'Latest model with advanced features', category: 'electronics' },
        { id: 'e6', name: 'Wireless Charger', price: 49.99, description: 'Fast charging pad', category: 'electronics' },
        { id: 'e7', name: 'Bluetooth Speaker', price: 129.99, description: 'Portable waterproof speaker', category: 'electronics' },
        { id: 'e8', name: 'Digital Camera', price: 549.99, description: 'Mirrorless professional camera', category: 'electronics' },
        { id: 'e9', name: 'Smart Watch', price: 299.99, description: 'Fitness and health tracking', category: 'electronics' },
        { id: 'e10', name: 'Noise-Cancelling Headphones', price: 349.99, description: 'Premium over-ear headphones', category: 'electronics' }
    ],
    clothing: [
        { id: 'c1', name: 'Casual T-Shirt', price: 29.99, description: 'Comfortable cotton t-shirt', category: 'clothing' },
        { id: 'c2', name: 'Denim Jeans', price: 79.99, description: 'Classic slim-fit jeans', category: 'clothing' },
        { id: 'c3', name: 'Hoodie', price: 49.99, description: 'Warm and cozy pullover', category: 'clothing' },
        { id: 'c4', name: 'Dress Shirt', price: 59.99, description: 'Formal cotton dress shirt', category: 'clothing' },
        { id: 'c5', name: 'Running Shoes', price: 129.99, description: 'Lightweight athletic sneakers', category: 'clothing' },
        { id: 'c6', name: 'Winter Jacket', price: 199.99, description: 'Insulated waterproof coat', category: 'clothing' },
        { id: 'c7', name: 'Yoga Pants', price: 44.99, description: 'Stretchy comfortable leggings', category: 'clothing' },
        { id: 'c8', name: 'Polo Shirt', price: 39.99, description: 'Classic cotton polo', category: 'clothing' },
        { id: 'c9', name: 'Sweater', price: 69.99, description: 'Knitted winter sweater', category: 'clothing' },
        { id: 'c10', name: 'Baseball Cap', price: 24.99, description: 'Adjustable sports cap', category: 'clothing' }
    ],
    'home-kitchen': [
        { id: 'h1', name: 'Coffee Maker', price: 89.99, description: 'Programmable drip coffee machine', category: 'home-kitchen' },
        { id: 'h2', name: 'Air Fryer', price: 129.99, description: 'Digital air fryer with preset modes', category: 'home-kitchen' },
        { id: 'h3', name: 'Blender', price: 79.99, description: 'High-power smoothie blender', category: 'home-kitchen' },
        { id: 'h4', name: 'Electric Kettle', price: 49.99, description: 'Quick boil temperature control', category: 'home-kitchen' },
        { id: 'h5', name: 'Microwave Oven', price: 149.99, description: 'Stainless steel countertop microwave', category: 'home-kitchen' },
        { id: 'h6', name: 'Stand Mixer', price: 299.99, description: 'Professional baking mixer', category: 'home-kitchen' },
        { id: 'h7', name: 'Toaster', price: 39.99, description: '2-slice compact toaster', category: 'home-kitchen' },
        { id: 'h8', name: 'Rice Cooker', price: 69.99, description: 'Multi-function rice preparation', category: 'home-kitchen' },
        { id: 'h9', name: 'Pressure Cooker', price: 99.99, description: 'Instant multi-use cooker', category: 'home-kitchen' },
        { id: 'h10', name: 'Food Processor', price: 159.99, description: 'Multi-function kitchen assistant', category: 'home-kitchen' }
    ],
    books: [
        { id: 'b1', name: 'Science Fiction Novel', price: 16.99, description: 'Bestselling sci-fi book', category: 'books' },
        { id: 'b2', name: 'Mystery Thriller', price: 14.99, description: 'Gripping detective story', category: 'books' },
        { id: 'b3', name: 'Self-Help Book', price: 19.99, description: 'Personal development guide', category: 'books' },
        { id: 'b4', name: 'Cookbook', price: 24.99, description: 'Gourmet recipes collection', category: 'books' },
        { id: 'b5', name: 'Historical Fiction', price: 15.99, description: 'Epic historical novel', category: 'books' },
        { id: 'b6', name: 'Biography', price: 21.99, description: 'Inspiring life story', category: 'books' },
        { id: 'b7', name: 'Science Textbook', price: 79.99, description: 'Advanced academic reference', category: 'books' },
        { id: 'b8', name: 'Poetry Collection', price: 12.99, description: 'Contemporary poetry anthology', category: 'books' },
        { id: 'b9', name: 'Business Strategy', price: 29.99, description: 'Leadership and management', category: 'books' },
        { id: 'b10', name: 'Language Learning', price: 18.99, description: 'Comprehensive language guide', category: 'books' }
    ]
};

class ShoppingCart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
    }

    addItem(product, quantity = 1) {
        // Check if the item already exists in the cart
        const existingItemIndex = this.items.findIndex(item => item.id === product.id);

        if (existingItemIndex > -1) {
            // If item exists, update its quantity
            this.items[existingItemIndex].quantity += quantity;
        } else {
            // If item doesn't exist, add it with a quantity
            this.items.push({
                ...product, 
                quantity: quantity
            });
        }

        this.saveCart();
        this.updateCartDisplay();
    }

    removeItem(index) {
        this.items.splice(index, 1);
        this.saveCart();
        this.updateCartDisplay();
    }

    updateItemQuantity(index, newQuantity) {
        if (newQuantity > 0) {
            this.items[index].quantity = newQuantity;
            this.saveCart();
            this.updateCartDisplay();
        } else {
            // Remove item if quantity becomes 0
            this.removeItem(index);
        }
    }

    clearCart() {
        this.items = [];
        this.saveCart();
        this.updateCartDisplay();
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.items));
        this.updateCartCount();
    }

    updateCartCount() {
        const cartCountElements = document.querySelectorAll('#cart-count');
        const totalItems = this.items.reduce((total, item) => total + item.quantity, 0);
        cartCountElements.forEach(el => {
            el.textContent = totalItems;
        });
    }

    updateCartDisplay() {
        const cartItemsContainer = document.getElementById('cart-items');
        const cartEmptyElement = document.getElementById('cart-empty');
        const cartSummaryElement = document.getElementById('cart-summary');
        const cartTotalElement = document.getElementById('cart-total');

        if (cartItemsContainer) {
            cartItemsContainer.innerHTML = '';

            if (this.items.length === 0) {
                cartEmptyElement.classList.remove('hidden');
                cartSummaryElement.classList.add('hidden');
            } else {
                cartEmptyElement.classList.add('hidden');
                cartSummaryElement.classList.remove('hidden');

                let total = 0;
                this.items.forEach((item, index) => {
                    const itemTotal = item.price * item.quantity;
                    total += itemTotal;
                    const itemElement = document.createElement('div');
                    itemElement.classList.add('flex', 'justify-between', 'items-center', 'mb-4', 'pb-4', 'border-b');
                    itemElement.innerHTML = `
                        <span>${item.name}</span>
                        <div class="flex items-center">
                            <button onclick="cart.updateItemQuantity(${index}, ${item.quantity - 1})" class="px-2 bg-gray-200 rounded-l">-</button>
                            <span class="px-4">${item.quantity}</span>
                            <button onclick="cart.updateItemQuantity(${index}, ${item.quantity + 1})" class="px-2 bg-gray-200 rounded-r">+</button>
                        </div>
                        <span>$${itemTotal.toFixed(2)}</span>
                        <button onclick="cart.removeItem(${index})" class="text-red-500 hover:text-red-700">
                            Remove
                        </button>
                    `;
                    cartItemsContainer.appendChild(itemElement);
                });

                cartTotalElement.textContent = `$${total.toFixed(2)}`;
            }
        }
    }

    checkout() {
        alert('Thank you for your purchase!');
        this.clearCart();
    }
}

// Initialize cart
const cart = new ShoppingCart();

// Category Filtering
function initializeCategoryFiltering() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const productGrid = document.querySelector('main.container');

    function renderProducts(category = 'all') {
        // Clear existing products
        productGrid.innerHTML = '';

        // Determine which products to show
        const productsToShow = category === 'all' 
            ? Object.values(productCategories).flatMap(category => category)
            : productCategories[category];

        // Render products
        productsToShow.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.dataset.category = product.category;

            productCard.innerHTML = `
                <div class="bg-white rounded-lg shadow-md p-6 text-center">
                    <img src="/api/placeholder/300/300" alt="${product.name}" class="mx-auto mb-4 rounded">
                    <h2 class="text-xl font-semibold mb-2">${product.name}</h2>
                    <p class="text-gray-600 mb-4">${product.description}</p>
                    <p class="text-blue-600 font-bold mb-4">$${product.price.toFixed(2)}</p>
                    <button onclick="cart.addItem(${JSON.stringify(product).replace(/"/g, '&quot;')})" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                        Add to Cart
                    </button>
                </div>
            `;

            productGrid.appendChild(productCard);
        });
    }

    // Initial render of all products
    renderProducts();

    // Category button event listeners
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Get selected category and render
            const category = btn.dataset.category;
            renderProducts(category);
        });
    });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    cart.updateCartCount();
    cart.updateCartDisplay();
    
    // Only initialize category filtering on shop page
    if (document.querySelector('main.container')) {
        initializeCategoryFiltering();
    }
});