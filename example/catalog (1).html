// Элементы модального окна
const orderDialog = document.getElementById('order-dialog')
const orderButtons = document.querySelectorAll('.product-card__button')
const closeDialogButton = document.getElementById('close-order-dialog')
const selectedProductInput = document.getElementById('selected-product')

// Открытие модального окна при клике на «Заказать»
if (orderDialog) {
  orderButtons.forEach((button) => {
    if (button.tagName === 'BUTTON') {
      button.addEventListener('click', () => {
        const productName = button.dataset.product
        if (selectedProductInput) {
          selectedProductInput.value = productName
        }
        orderDialog.showModal()
      })
    }
  })
}

// Закрытие модального окна
if (closeDialogButton && orderDialog) {
  closeDialogButton.addEventListener('click', () => {
    orderDialog.close()
  })
}

// Элементы формы и сообщения
const orderForm = document.getElementById('order-form')
const successMessage = document.getElementById('success-message')

// Обработка отправки формы
if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const formElements = Array.from(orderForm.elements)
    formElements.forEach((element) => {
      if (element.willValidate) {
        element.removeAttribute('aria-invalid')
      }
    })

    if (!orderForm.checkValidity()) {
      formElements.forEach((element) => {
        if (element.willValidate && !element.checkValidity()) {
          element.setAttribute('aria-invalid', 'true')
        }
      })
      orderForm.reportValidity()
      return
    }

    if (successMessage) {
      successMessage.hidden = false
    }
    orderForm.reset()
    if (orderDialog) {
      orderDialog.close()
    }
  })
}

// Обработка формы на отдельной странице заказа
const orderPageForm = document.getElementById('order-page-form')
if (orderPageForm) {
  orderPageForm.addEventListener('submit', (event) => {
    event.preventDefault()
    if (!orderPageForm.checkValidity()) {
      orderPageForm.reportValidity()
      return
    }
    alert('Заказ в TechPulse успешно оформлен!')
    orderPageForm.reset()
  })
}
