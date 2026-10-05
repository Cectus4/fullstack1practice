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