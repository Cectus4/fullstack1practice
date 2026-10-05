// ===================================
// 1. Модальное окно
// ===================================
const orderDialog = document.getElementById('order-dialog');
const orderButtons = document.querySelectorAll('.product-card__button');
const closeDialogButton = document.getElementById('close-order-dialog');
const selectedProductInput = document.getElementById('selected-product');
const orderForm = document.getElementById('order-form');
const successMessage = document.getElementById('success-message');

if (orderDialog && orderButtons.length && closeDialogButton) {
    orderButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (selectedProductInput) {
                selectedProductInput.value = button.dataset.product || '';
            }
            orderDialog.showModal();
        });
    });

    closeDialogButton.addEventListener('click', () => {
        orderDialog.close();
    });
}

if (orderForm) {
    orderForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formElements = Array.from(orderForm.elements);
        formElements.forEach((el) => {
            if (el.willValidate) el.removeAttribute('aria-invalid');
        });

        if (!orderForm.checkValidity()) {
            formElements.forEach((el) => {
                if (el.willValidate && !el.checkValidity()) {
                    el.setAttribute('aria-invalid', 'true');
                }
            });
            orderForm.reportValidity();
            return;
        }

        if (successMessage) successMessage.hidden = false;
        orderForm.reset();
        if (orderDialog) orderDialog.close();
    });
}

// ===================================
// 2. Форма на отдельной странице order.html
// ===================================
const orderFormPage = document.getElementById('order-form-page');
const successMessagePage = document.getElementById('success-message-page');

if (orderFormPage) {
    orderFormPage.addEventListener('submit', (event) => {
        event.preventDefault();

        const formElements = Array.from(orderFormPage.elements);
        formElements.forEach((el) => {
            if (el.willValidate) el.removeAttribute('aria-invalid');
        });

        if (!orderFormPage.checkValidity()) {
            formElements.forEach((el) => {
                if (el.willValidate && !el.checkValidity()) {
                    el.setAttribute('aria-invalid', 'true');
                }
            });
            orderFormPage.reportValidity();
            return;
        }

        if (successMessagePage) {
            successMessagePage.hidden = false;
            successMessagePage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        orderFormPage.reset();
    });
}

// ===================================
// 3. Страница товара: подстановка данных по ?id=
// ===================================
const PRODUCTS = {
    "1": {
        title: "Орущий чел",
        description: "Громкий товар для громких покупок. Орущий чел — идеальный выбор для тех, кто хочет выразить свои эмоции максимально громко.",
        price: "Цена: 2 руб.",
        image: "images/img2.jpg",
        alt: "Орущий чел",
        badge: "Хит",
        badgeClass: "product-card--discount"
    },
    "2": {
        title: "Как я после 15 октября",
        description: "Состояние, знакомое каждому. Товар для тех, кто понимает.",
        price: "Цена: 8 $",
        image: "images/img1.jpg",
        alt: "Как я после 15 октября",
        badge: "Новинка",
        badgeClass: "product-card--new"
    },
    "3": {
        title: "Угарный пхп чувак",
        description: "Товар для настоящих backend-разработчиков. PHP — это не диагноз, это образ жизни.",
        price: "Цена: 999 руб.",
        image: "images/img2.jfif",
        alt: "Угарный пхп чувак",
        badge: "",
        badgeClass: ""
    }
};

const productTitle = document.getElementById('product-title');

if (productTitle) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id') || '1';
    const product = PRODUCTS[id];

    if (product) {
        productTitle.textContent = product.title;
        document.title = product.title + ' – Учебный интернет-магазин';

        const crumb = document.getElementById('product-crumb');
        if (crumb) crumb.textContent = product.title;

        const descEl = document.getElementById('product-description');
        if (descEl) descEl.textContent = product.description;

        const priceEl = document.getElementById('product-price');
        if (priceEl) priceEl.textContent = product.price;

        const imgEl = document.getElementById('product-image');
        if (imgEl) {
            imgEl.src = product.image;
            imgEl.alt = product.alt;
        }

        const badgeEl = document.getElementById('product-badge');
        const wrapper = document.getElementById('product-badge-wrapper');

        if (wrapper) {
            wrapper.className = 'product-card ' + (product.badgeClass || '');
        }

        if (badgeEl) {
            if (product.badge) {
                badgeEl.textContent = product.badge;
                badgeEl.hidden = false;
            } else {
                badgeEl.hidden = true;
            }
        }

        const btn = document.getElementById('product-order-button');
        if (btn) btn.dataset.product = product.title;
    }
}