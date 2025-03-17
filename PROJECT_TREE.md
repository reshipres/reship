# Структура проекта ReShip

Этот документ представляет структуру всех необходимых файлов проекта ReShip.

## Основная структура

```
reship/
│
├── node_modules/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│   ├── api/
│   │   ├── index.ts
│   │   ├── products.ts
│   │   └── user.ts
│   │
│   ├── assets/
│   │   ├── fonts/
│   │   └── images/
│   │
│   ├── components/
│   │   ├── BrandSlider.tsx
│   │   ├── CategoryMenu.tsx
│   │   ├── Features.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx (обновлен)
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── StreamerSection.tsx
│   │   ├── ToolPromoSection.tsx
│   │   └── BlogSection.tsx
│   │
│   ├── data/
│   │   ├── categories.ts
│   │   ├── products.ts
│   │   └── promoBanners.ts
│   │
│   ├── features/
│   │   ├── cart/
│   │   ├── auth/
│   │   └── products/
│   │
│   ├── hooks/
│   │   ├── useCart.ts
│   │   ├── useProducts.ts
│   │   └── useLocalStorage.ts
│   │
│   ├── layouts/
│   │   ├── index.ts
│   │   └── MainLayout.tsx
│   │
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── CatalogPage.tsx
│   │   ├── ProductPage.tsx
│   │   ├── CartPage.tsx
│   │   ├── CheckoutPage.tsx
│   │   ├── ContactsPage.tsx
│   │   ├── SearchPage.tsx
│   │   ├── auth/
│   │   │   ├── LoginPage.tsx
│   │   │   ├── RegisterPage.tsx
│   │   │   └── RecoverPage.tsx
│   │   ├── blog/
│   │   ├── community/
│   │   ├── tools/
│   │   └── index.ts
│   │
│   ├── store/
│   │   ├── index.ts
│   │   └── slices/
│   │       ├── cartSlice.ts
│   │       ├── filtersSlice.ts
│   │       ├── userSlice.ts
│   │       └── uiSlice.ts
│   │
│   ├── styles/
│   │   ├── global.css
│   │   └── variables.css
│   │
│   ├── types/
│   │   ├── product.types.ts
│   │   ├── user.types.ts
│   │   └── common.types.ts
│   │
│   ├── utils/
│   │   ├── api.ts
│   │   ├── formatters.ts
│   │   └── validators.ts
│   │
│   ├── App.css
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── logo.svg
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   └── setupTests.ts
│
├── .gitignore
├── craco.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

## Основные компоненты проекта

### Компоненты пользовательского интерфейса
- Hero - Обновленный слайдер на главной странице
- Header - Шапка сайта
- Footer - Подвал сайта
- BrandSlider - Слайдер с брендами
- ProductCard - Карточка товара
- ProductGrid - Сетка товаров
- CategoryMenu - Навигация по категориям
- Features - Блок преимуществ
- StreamerSection - Секция со стримерами
- ToolPromoSection - Промо секция с инструментами
- BlogSection - Секция с блог-постами

### Страницы
- HomePage - Главная страница
- CatalogPage - Страница каталога
- ProductPage - Страница товара
- CartPage - Корзина
- CheckoutPage - Оформление заказа
- SearchPage - Страница поиска
- LoginPage, RegisterPage, RecoverPage - Страницы авторизации
- и другие...

### Хранение данных и логика
- Redux Store с различными слайсами
- API интеграция
- Пользовательские хуки

### Утилиты и прочее
- Форматтеры и валидаторы
- Типы TypeScript
- Глобальные стили