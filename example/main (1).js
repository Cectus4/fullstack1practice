/* ===============================
   1. Переменные проекта
   =============================== */
:root {
  --color-bg: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-primary: #2563eb;
  --color-primary-dark: #1d4ed8;
  --color-border: #e2e8f0;
  --color-surface: #ffffff;
  --color-surface-accent: #eff6ff;
  --color-danger: #e11d48;
  --color-success: #16a34a;
  --color-success-bg: #f0fdf4;
  --color-white: #ffffff;

  --space-xs: 6px;
  --space-sm: 10px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 40px;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 18px;

  --shadow-sm: 0 2px 8px rgba(15, 23, 42, 0.05);
  --shadow-md: 0 10px 25px -5px rgba(15, 23, 42, 0.1);
  --shadow-lg: 0 20px 35px -10px rgba(37, 99, 235, 0.18);

  --container-width: 1140px;
}

/* ===============================
   2. Базовые стили
   =============================== */
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Segoe UI', system-ui, -apple-system, Arial, sans-serif;
  line-height: 1.6;
  color: var(--color-text);
  background-color: var(--color-bg);
}

main {
  padding: var(--space-lg);
}

/* Подсветка целевого якоря */
:target {
  outline: 2px dashed var(--color-primary);
  outline-offset: 6px;
  border-radius: var(--radius-sm);
}

/* ===============================
   3. Блок кнопки (button)
   =============================== */
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border: none;
  border-radius: var(--radius-sm);
  font: inherit;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    transform 0.15s ease,
    box-shadow 0.2s ease;
}

.button:active {
  transform: translateY(1px);
}

.button--primary {
  color: var(--color-white);
  background-color: var(--color-primary);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
}

.button--primary:hover {
  background-color: var(--color-primary-dark);
  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.35);
}

.button--secondary {
  color: var(--color-primary);
  background-color: var(--color-surface);
  border: 1.5px solid var(--color-primary);
}

.button--secondary:hover {
  color: var(--color-white);
  background-color: var(--color-primary);
}

.button:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
}

.button:disabled,
.button--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* ===============================
   4. Шапка и навигация (site-header, site-nav)
   =============================== */
.site-header {
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: 50;
}

.site-header__inner {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: var(--space-md) var(--space-lg);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-md);
}

.site-header__logo {
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.5px;
  color: var(--color-primary);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: opacity 0.2s ease;
}

.site-header__logo::before {
  content: '⚡';
  font-size: 22px;
}

.site-header__logo:hover {
  opacity: 0.85;
}

.site-nav__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: var(--space-xs);
  padding: 0;
  margin: 0;
  list-style: none;
}

.site-nav__item {
  margin-bottom: 0;
}

.site-nav__link {
  display: inline-block;
  padding: 8px 14px;
  color: var(--color-text);
  font-weight: 500;
  text-decoration: none;
  border-radius: var(--radius-sm);
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

.site-nav__link:hover {
  color: var(--color-primary);
  background-color: var(--color-surface-accent);
}

.site-nav__link:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
}

.site-nav__link--active {
  color: var(--color-white);
  background-color: var(--color-primary);
}

.site-nav__link--active:hover {
  color: var(--color-white);
  background-color: var(--color-primary-dark);
}

/* ===============================
   5. Хлебные крошки (breadcrumbs)
   =============================== */
.breadcrumbs {
  max-width: var(--container-width);
  margin: 0 auto var(--space-md);
  font-size: 14px;
  color: var(--color-muted);
}

.breadcrumbs__link {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 500;
}

.breadcrumbs__link:hover {
  text-decoration: underline;
}

.breadcrumbs__current::before {
  content: ' / ';
  color: var(--color-muted);
}

/* ===============================
   6. Основные компоненты страниц (hero, section, aside-info)
   =============================== */
.hero {
  max-width: var(--container-width);
  margin: 0 auto var(--space-xl);
  padding: var(--space-xl);
  background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 60%, #3b82f6 100%);
  color: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
}

.hero__title {
  margin-top: 0;
  margin-bottom: var(--space-sm);
  font-size: clamp(28px, 4vw, 42px);
  line-height: 1.2;
}

.hero__text {
  max-width: 650px;
  margin-bottom: var(--space-lg);
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
}

.hero .button--primary {
  background-color: var(--color-white);
  color: var(--color-primary);
}

.hero .button--primary:hover {
  background-color: #f1f5f9;
}

.section {
  max-width: var(--container-width);
  margin: 0 auto var(--space-xl);
}

.section__title {
  margin-top: 0;
  margin-bottom: var(--space-md);
  font-size: 26px;
}

.advantages-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: var(--space-md);
  padding: 0;
  list-style: none;
}

.advantages-list li {
  padding: var(--space-md);
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  font-weight: 500;
}

.advantages-list li::before {
  content: '✓ ';
  color: var(--color-primary);
  font-weight: 700;
}

.aside-info {
  max-width: var(--container-width);
  margin: 0 auto var(--space-xl);
  padding: var(--space-lg);
  border-left: 5px solid var(--color-primary);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  background-color: var(--color-surface-accent);
  box-shadow: var(--shadow-sm);
}

.aside-info__title {
  margin-top: 0;
  color: var(--color-primary-dark);
}

.aside-info__text {
  margin-bottom: 0;
}

/* ===============================
   7. Карточки и сетка товаров (products-grid, product-card)
   =============================== */
.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
}

.product-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  padding: var(--space-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background-color: var(--color-surface);
  box-shadow: var(--shadow-sm);
  transition:
    border-color 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.product-card:hover {
  border-color: var(--color-primary);
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.product-card__image {
  width: 100%;
  height: 210px;
  object-fit: cover;
  border-radius: var(--radius-sm);
  background-color: #f1f5f9;
  margin-bottom: var(--space-xs);
}

.product-card--featured {
  border: 2px solid var(--color-primary);
}

.product-card--discount {
  border: 2px solid var(--color-danger);
}

.product-card__title {
  margin: 0;
  font-size: 19px;
  color: var(--color-text);
}

.product-card__description {
  margin: 0;
  font-size: 14px;
  color: var(--color-muted);
}

.product-card__price {
  margin: var(--space-xs) 0;
  font-size: 18px;
  font-weight: 800;
  color: var(--color-text);
}

.product-card--discount .product-card__price {
  color: var(--color-danger);
}

.product-card__button {
  margin-top: auto;
  align-self: stretch;
}

/* ===============================
   8. Страница каталога и фильтры (catalog-layout, catalog-filters, filters-form)
   =============================== */
.catalog-layout {
  max-width: var(--container-width);
  margin: 0 auto var(--space-xl);
  display: grid;
  grid-template-columns: 270px 1fr;
  grid-template-areas: 'filters products';
  gap: var(--space-lg);
  align-items: start;
}

.catalog-filters {
  grid-area: filters;
  padding: var(--space-lg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background-color: var(--color-surface);
  box-shadow: var(--shadow-sm);
}

.catalog-filters__title {
  margin-top: 0;
  font-size: 20px;
}

.catalog-products {
  grid-area: products;
}

.catalog-products__title {
  margin-top: 0;
}

.filters-form {
  display: grid;
  gap: var(--space-md);
}

.filters-form__group {
  margin: 0;
  padding: var(--space-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background-color: var(--color-bg);
}

.filters-form__legend {
  font-weight: 700;
  padding: 0 6px;
}

.filters-form__label {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: var(--space-sm);
  cursor: pointer;
  font-size: 14px;
}

.filters-form__input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font: inherit;
  background-color: var(--color-surface);
  margin-bottom: var(--space-xs);
}

/* ===============================
   9. Модальное окно и форма заявки (order-dialog, order-form)
   =============================== */
.order-dialog {
  width: min(100% - 32px, 540px);
  padding: var(--space-xl);
  border: none;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.order-dialog::backdrop {
  background-color: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(3px);
}

.order-dialog__title {
  margin-top: 0;
}

.order-form__field {
  margin-bottom: var(--space-md);
}

.order-form__label {
  display: block;
  margin-bottom: var(--space-xs);
  font-weight: 600;
  font-size: 14px;
}

.order-form__input,
.order-form__select,
.order-form__textarea {
  width: 100%;
  padding: 11px 14px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font: inherit;
  background-color: var(--color-surface);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.order-form__checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
}

.order-form__checkbox {
  width: 16px;
  height: 16px;
}

.order-form__help {
  display: block;
  margin-top: var(--space-xs);
  color: var(--color-muted);
  font-size: 12px;
}

.order-form__input:hover,
.order-form__select:hover,
.order-form__textarea:hover {
  border-color: var(--color-primary);
}

.order-form__input:focus-visible,
.order-form__select:focus-visible,
.order-form__textarea:focus-visible {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
}

[aria-invalid='true'] {
  border-color: var(--color-danger);
}

.order-form__actions {
  display: flex;
  gap: var(--space-md);
  margin-top: var(--space-lg);
}

/* Сообщение об успешной отправке */
.success-message {
  max-width: var(--container-width);
  margin: var(--space-lg) auto;
  padding: var(--space-md) var(--space-lg);
  border-left: 4px solid var(--color-success);
  border-radius: var(--radius-sm);
  background-color: var(--color-success-bg);
  font-weight: 600;
  color: var(--color-success);
}

/* ===============================
   10. Подвал сайта (site-footer)
   =============================== */
.site-footer {
  background-color: #0f172a;
  color: #cbd5e1;
  margin-top: var(--space-xl);
}

.site-footer__inner {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: var(--space-xl) var(--space-lg);
  display: flex;
  flex-wrap: wrap;
  justify