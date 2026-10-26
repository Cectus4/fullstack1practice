/* ===============================
   1. Данные товаров
   =============================== */
const PRODUCTS = {
  1: {
    title: 'Орущий чел',
    description:
      'Громкий товар для громких покупок. Орущий чел — идеальный выбор для тех, кто хочет выразить свои эмоции максимально громко.',
    price: 'Цена: 2 руб.',
    image: 'images/img2.jpg',
    alt: 'Орущий чел',
    badge: 'Хит',
    badgeClass: 'product-card--discount',
    specs: [
      ['Категория', 'Учебные товары'],
      ['Артикул', 'SP-HIT-0001'],
      ['Вес', '1 кг'],
      ['Гарантия', '12 месяцев'],
      ['Наличие', 'В наличии на складе'],
    ],
  },
  2: {
    title: 'Как я после 15 октября',
    description:
      'Состояние, знакомое каждому. Товар для тех, кто понимает и ценит учебную нагрузку середины семестра.',
    price: 'Цена: 890 руб.',
    image: 'images/img1.jpg',
    alt: 'Как я после 15 октября',
    badge: 'Новинка',
    badgeClass: 'product-card--new',
    specs: [
      ['Категория', 'Учебные товары'],
      ['Артикул', 'SP-NEW-0002'],
      ['Вес', '0,8 кг'],
      ['Гарантия', '12 месяцев'],
      ['Наличие', 'Под заказ, 3 дня'],
    ],
  },
  3: {
    title: 'Угарный пхп чувак',
    description:
      'Товар для настоящих backend-разработчиков. PHP — это не диагноз, это образ жизни.',
    price: 'Цена: 999 руб.',
    image: 'images/img3.jpg',
    alt: 'Угарный пхп чувак',
    badge: 'Выбор редакции',
    badgeClass: 'product-card--featured',
    specs: [
      ['Категория', 'Учебные товары'],
      ['Артикул', 'SP-BACK-0003'],
      ['Вес', '1,2 кг'],
      ['Гарантия', '12 месяцев'],
      ['Наличие', 'В наличии на складе'],
    ],
  },
}

/* ===============================
   2. Общие утилиты
   =============================== */

/**
 * Подсвечивает ошибочные поля формы и возвращает результат проверки.
 * @param {HTMLFormElement} form
 * @returns {boolean}
 */
const validateForm = (form) => {
  const formElements = Array.from(form.elements)

  formElements.forEach((element) => {
    if (element.willValidate) {
      element.removeAttribute('aria-invalid')
    }
  })

  if (form.checkValidity()) {
    return true
  }

  formElements.forEach((element) => {
    if (element.willValidate && !element.checkValidity()) {
      element.setAttribute('aria-invalid', 'true')
    }
  })

  form.reportValidity()

  return false
}

/**
 * Показывает сообщение об успешной отправке формы.
 * @param {HTMLElement | null} message
 */
const showSuccessMessage = (message) => {
  if (!message) {
    return
  }

  message.hidden = false
  message.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

/* ===============================
   3. Модальное окно заявки (order-dialog)
   =============================== */
const orderDialog = document.getElementById('order-dialog')
const orderButtons = document.querySelectorAll('.product-card__button')
const closeDialogButton = document.getElementById('close-order-dialog')
const selectedProductInput = document.getElementById('selected-product')
const orderForm = document.getElementById('order-form')
const successMessage = document.getElementById('success-message')

if (orderDialog && orderButtons.length) {
  orderButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (selectedProductInput) {
        selectedProductInput.value = button.dataset.product || ''
      }

      if (successMessage) {
        successMessage.hidden = true
      }

      orderDialog.showModal()
    })
  })
}

if (orderDialog && closeDialogButton) {
  closeDialogButton.addEventListener('click', () => {
    orderDialog.close()
  })
}

// Закрытие по клику на затемнённую область вокруг окна
if (orderDialog) {
  orderDialog.addEventListener('click', (event) => {
    if (event.target === orderDialog) {
      orderDialog.close()
    }
  })
}

if (orderForm && orderDialog) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault()

    if (!validateForm(orderForm)) {
      return
    }

    orderForm.reset()
    orderDialog.close()
    showSuccessMessage(successMessage)
  })
}

/* ===============================
   4. Форма на странице оформления заказа (order-page-form)
   =============================== */
const orderPageForm = document.getElementById('order-page-form')
const pageProductSelect = document.getElementById('page-order-product')
const pageTopicSelect = document.getElementById('page-order-topic')

// Предзаполнение товара и темы при переходе с карточки товара (?id=1)
if (pageProductSelect) {
  const productId = new URLSearchParams(window.location.search).get('id')

  if (productId && pageProductSelect.querySelector(`option[value="${productId}"]`)) {
    pageProductSelect.value = productId

    if (pageTopicSelect) {
      pageTopicSelect.value = 'product'
    }
  }
}

if (orderPageForm) {
  orderPageForm.addEventListener('submit', (event) => {
    event.preventDefault()

    if (!validateForm(orderPageForm)) {
      return
    }

    orderPageForm.reset()
    showSuccessMessage(successMessage)
  })
}

/* ===============================
   5. Страница товара (product-detail)
   =============================== */
const productTitle = document.getElementById('product-title')

/**
 * Заполняет таблицу характеристик товара.
 * @param {HTMLElement | null} tableBody
 * @param {string[][]} specs
 */
const renderSpecs = (tableBody, specs) => {
  if (!tableBody) {
    return
  }

  tableBody.replaceChildren()

  specs.forEach(([name, value]) => {
    const row = document.createElement('tr')
    const rowHeader = document.createElement('th')
    const cell = document.createElement('td')

    rowHeader.scope = 'row'
    rowHeader.textContent = name
    cell.textContent = value

    row.append(rowHeader, cell)
    tableBody.append(row)
  })
}

if (productTitle) {
  const productId = new URLSearchParams(window.location.search).get('id') || '1'
  const product = PRODUCTS[productId] || PRODUCTS['1']

  const crumb = document.getElementById('product-crumb')
  const description = document.getElementById('product-description')
  const price = document.getElementById('product-price')
  const image = document.getElementById('product-image')
  const badge = document.getElementById('product-badge')
  const card = document.querySelector('.product-detail__card')
  const orderButton = document.getElementById('product-order-button')
  const orderLink = document.getElementById('product-order-link')
  const specsTable = document.getElementById('product-specs')

  productTitle.textContent = product.title
  document.title = `${product.title} — ShopProject`

  if (crumb) {
    crumb.textContent = product.title
  }

  if (description) {
    description.textContent = product.description
  }

  if (price) {
    price.textContent = product.price
  }

  if (image) {
    image.src = product.image
    image.alt = product.alt
  }

  if (card) {
    card.className = `product-detail__card product-card ${product.badgeClass}`.trim()
  }

  if (badge) {
    badge.textContent = product.badge
    badge.hidden = !product.badge
  }

  if (orderButton) {
    orderButton.dataset.product = product.title
  }

  if (orderLink) {
    orderLink.href = `order.html?id=${productId}`
  }

  renderSpecs(specsTable, product.specs)
}

/* ===============================
   6. Фильтры каталога (catalog-filters)
   =============================== */
const filtersForm = document.getElementById('catalog-filters-form')

if (filtersForm) {
  const categoryInputs = Array.from(
    filtersForm.querySelectorAll('input[name="category"]'),
  )
  const priceFromInput = document.getElementById('price-from')
  const priceToInput = document.getElementById('price-to')
  const cards = Array.from(document.querySelectorAll('.product-card'))
  const emptyMessage = document.getElementById('catalog-empty')

  const applyFilters = () => {
    const selectedCategories = categoryInputs
      .filter((input) => input.checked)
      .map((input) => input.value)

    const allSelected =
      selectedCategories.length === 0 || selectedCategories.includes('all')

    const priceFrom = Number.parseInt(priceFromInput?.value, 10)
    const priceTo = Number.parseInt(priceToInput?.value, 10)

    let visibleCount = 0

    cards.forEach((card) => {
      const category = card.dataset.category || ''
      const cardPrice = Number.parseInt(card.dataset.price, 10)

      const matchesCategory =
        allSelected || selectedCategories.includes(category)

      const matchesPriceFrom =
        Number.isNaN(priceFrom) || cardPrice >= priceFrom
      const matchesPriceTo = Number.isNaN(priceTo) || cardPrice <= priceTo

      const isVisible = matchesCategory && matchesPriceFrom && matchesPriceTo

      card.hidden = !isVisible

      if (isVisible) {
        visibleCount += 1
      }
    })

    if (emptyMessage) {
      emptyMessage.hidden = visibleCount > 0
    }
  }

  // «Все товары» и отдельные категории взаимоисключающие
  categoryInputs.forEach((input) => {
    input.addEventListener('change', () => {
      if (!input.checked) {
        return
      }

      if (input.value === 'all') {
        categoryInputs.forEach((other) => {
          if (other !== input) {
            other.checked = false
          }
        })
      } else {
        categoryInputs.forEach((other) => {
          if (other.value === 'all') {
            other.checked = false
          }
        })
      }
    })
  })

  filtersForm.addEventListener('submit', (event) => {
    event.preventDefault()
    applyFilters()
  })

  filtersForm.addEventListener('change', applyFilters)

  filtersForm.addEventListener('reset', () => {
    // Сначала форма сбрасывается, затем пересчитываем результат
    window.setTimeout(applyFilters, 0)
  })

  applyFilters()
}

/* ===============================
   7. Кнопка «Наверх» (scroll-top-btn)
   =============================== */
const scrollTopButton = document.querySelector('.scroll-top-btn')

if (scrollTopButton) {
  scrollTopButton.addEventListener('click', (event) => {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
}
