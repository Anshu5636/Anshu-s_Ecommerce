// Category Filtering Script
document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const productCards = document.querySelectorAll('.product-card');

    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Get selected category
            const category = btn.dataset.category;

            // Show/hide products
            productCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                    setTimeout(() => card.classList.add('show'), 10);
                } else {
                    card.classList.remove('show');
                    setTimeout(() => card.style.display = 'none', 300);
                }
            });
        });
    });
});