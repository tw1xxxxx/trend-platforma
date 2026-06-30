# ТРЕНД-ПЛАТФОРМА — структура и текстовое наполнение сайта

> Актуально на момент выгрузки. Пути к медиафайлам — абсолютные пути на компьютере.

---

## Общая структура сайта

```
Сайт
├── Глобальные элементы (на всех страницах)
│   ├── Шапка (Header)
│   ├── Модальное окно «Оставить заявку»
│   └── Футер (Footer)
│
├── Главная страница (/)
│   ├── Hero
│   ├── Услуги / Направления (#services)
│   ├── Обучение (#education)
│   └── Трендвотчинг (#about)
│
└── Страница курсов (/education)
    └── Программы обучения (3 карточки)
```

**Мета-данные сайта:**
- Title: Разработка бренда одежды
- Description: Стильные и современные решения для вашего бренда

---

## Медиафайлы — пути на компьютере

### Используются на сайте (папка проекта `public/`)

| Назначение | URL на сайте | Абсолютный путь |
|------------|--------------|-----------------|
| Hero — фоновое видео | `/back.mp4` | `C:\work26\trend-platforma\public\back.mp4` |
| Обучение — фото специалиста | `/images/education/specialist.png` | `C:\work26\trend-platforma\public\images\education\specialist.png` |
| Курсы — семинары | `/images/education/seminars.jpg` | `C:\work26\trend-platforma\public\images\education\seminars.jpg` |
| Курсы — конструирование | `/images/education/construction.jpg` | `C:\work26\trend-platforma\public\images\education\construction.jpg` |
| Курсы — бизнес | `/images/education/business.jpg` | `C:\work26\trend-platforma\public\images\education\business.jpg` |
| Трендвотчинг — индустрия | `/images/about/industry.jpg` | `C:\work26\trend-platforma\public\images\about\industry.jpg` |
| Трендвотчинг — производство | `/images/about/production.jpg` | `C:\work26\trend-platforma\public\images\about\production.jpg` |
| Трендвотчинг — стиль | `/images/about/style.jpg` | `C:\work26\trend-platforma\public\images\about\style.jpg` |

### Исходники и черновики (папка Cursor assets)

| Описание | Абсолютный путь |
|----------|-----------------|
| Оригинал фото специалиста (текущий, в полный рост) | `C:\Users\mixar\.cursor\projects\c-work26-trend-platforma\assets\c__Users_mixar_AppData_Roaming_Cursor_User_workspaceStorage_72b46fd68d3a9d8945da967171e7e91d_images_photo_2026-06-27_12-19-01-Photoroom-4b7f84eb-215b-4c27-ae45-6f9e716a307c.png` |
| Предыдущее фото специалиста (портрет) | `C:\Users\mixar\.cursor\projects\c-work26-trend-platforma\assets\c__Users_mixar_AppData_Roaming_Cursor_User_workspaceStorage_72b46fd68d3a9d8945da967171e7e91d_images_photo_2026-03-22_14-02-27-Photoroom-0cc7225e-c241-46d5-b206-1d7bed370a38.png` |
| Черновик — семинары | `C:\Users\mixar\.cursor\projects\c-work26-trend-platforma\assets\seminars.jpg` |
| Черновик — конструирование | `C:\Users\mixar\.cursor\projects\c-work26-trend-platforma\assets\construction.jpg` |
| Черновик — бизнес | `C:\Users\mixar\.cursor\projects\c-work26-trend-platforma\assets\business.jpg` |
| Черновик — индустрия | `C:\Users\mixar\.cursor\projects\c-work26-trend-platforma\assets\about-industry.jpg` |
| Черновик — производство | `C:\Users\mixar\.cursor\projects\c-work26-trend-platforma\assets\about-production.jpg` |
| Черновик — стиль | `C:\Users\mixar\.cursor\projects\c-work26-trend-platforma\assets\about-style.jpg` |

### Скриншоты и референсы из чата

| Описание | Абсолютный путь |
|----------|-----------------|
| Скриншот hero | `C:\Users\mixar\.cursor\projects\c-work26-trend-platforma\assets\c__Users_mixar_AppData_Roaming_Cursor_User_workspaceStorage_72b46fd68d3a9d8945da967171e7e91d_images_image-2484352b-0cc9-4882-bcf8-7c11603507c1.png` |
| Скриншот hero (мобильный) | `C:\Users\mixar\.cursor\projects\c-work26-trend-platforma\assets\c__Users_mixar_AppData_Roaming_Cursor_User_workspaceStorage_72b46fd68d3a9d8945da967171e7e91d_images_image-2abe8d49-f297-4a0d-a1fa-1b1257674065.png` |
| Скриншот блока трендвотчинга | `C:\Users\mixar\.cursor\projects\c-work26-trend-platforma\assets\c__Users_mixar_AppData_Roaming_Cursor_User_workspaceStorage_72b46fd68d3a9d8945da967171e7e91d_images_image-8b4da454-ba91-4685-b92c-e183924af95e.png` |
| Скриншот блока обучения | `C:\Users\mixar\.cursor\projects\c-work26-trend-platforma\assets\c__Users_mixar_AppData_Roaming_Cursor_User_workspaceStorage_72b46fd68d3a9d8945da967171e7e91d_images_image-db5a0d42-64f6-45b9-b9ef-a52c27b45966.png` |

---

## Глобальные элементы

### Шапка (Header)

- Телефон: **+7 (999) 000-00-00**
- Меню:
  - Услуги → `#services`
  - Обучение → `#education`
  - О нас → `#about`
- Кнопка: **Оставить заявку** (модальное окно)

### Модальное окно заявки

- Заголовок: **Оставить заявку**
- Подзаголовок: Мы свяжемся с вами в ближайшее время
- Поля: Ваше имя, Телефон (+7)
- Кнопка: **Отправить**

### Футер (`#footer`)

**CTA-блок:**
- Подпись: Тренд-Платформа
- Заголовок: **Готовы создать свой бренд?**
- Кнопка: **Отправить заявку**

**Бренд:**
- Название: **Тренд — Платформа**
- Слоган: Смотрим в будущее — создаём **НАСТОЯЩЕЕ**. Полный цикл для fashion-брендов: от идеи до производства.

**Навигация:**
- Услуги → `/#services`
- Обучение → `/#education`
- Трендвотчинг → `/#about`
- Курсы → `/education`
- Контакты → `/#footer`

**Связь:**
- Телефон: +7 (999) 000-00-00
- Telegram: @trendplatforma
- ВКонтакте: группа ВКонтакте

**Адреса:**
- Офис: г. Москва, ул. Тверская, д. 12, офис 405
- Производство: Московская обл., г. Подольск, ул. Промышленная, д. 8

**Нижняя строка:**
- © 2026 Тренд-Платформа. Все права защищены.
- Политика конфиденциальности

---

## Главная страница (`/`)

### 1. Hero (первый экран)

- Видео-фон: `C:\work26\trend-platforma\public\back.mp4`
- Заголовок: **ТРЕНД**
- Подзаголовок: **— ПЛАТФОРМА**
- Слоган: Смотрим в будущее — создаём **настоящее**.
- Индикатор: Scroll

---

### 2. Услуги / Направления (`#services`)

Аккордеон из 3 направлений. При раскрытии — список услуг и кнопка **Связаться** (Telegram).

#### 01 — ДИЗАЙН

- Создание художественных эскизов
- Создание технических рисунков
- Формирование тех.документации для договоров и для цеха.
- Кнопка: **Связаться**

#### 02 — ПРОЕКТИРОВАНИЕ

- Создание лекал с нуля
- Проверка готовых лекал
- Диагностика и решение проблемы посадки вещи.
- Технология пошива для цеха.
- Отшив образца.
- Кнопка: **Связаться**

#### 03 — ПОШИВ

- Пошив для индивидуальных заказчиков
- Дизайнерская реконструкция готовых вещей. (Апсайклинг)
- Отшив образца для цеха, тестовых партий (от 5 шт).
- Кнопка: **Связаться**

---

### 3. Обучение (`#education`)

- Фото: `C:\work26\trend-platforma\public\images\education\specialist.png`
- Заголовок: **Обучение, семинары, переподготовка**

**Наш ведущий специалист:**

- Эксперт-практик, более 30-летний опыт в швейной и модной отрасли.
- Технолог-конструктор. Преподаватель.
- Опыт работы в домах моды.
- 15 лет помощи создателям брендов и селлерам (массмаркет).

- Кнопка: **Подробнее о курсах** → `/education`

---

### 4. Трендвотчинг (`#about`)

**Заголовок:** ТРЕНДВОТЧИНГ  
**Подзаголовок:** в fashion.

**Текст:**

- Следим за изменениями в технологиях, новостях индустрии и поведении людей.
- Выявляем закономерности — куда движется рынок.
- На основе анализа строим прогнозы, ищем новые возможности для продуктов, услуг или маркетинговых стратегий.

**Галерея (3 карточки):**

| № | Название | Описание | Фото |
|---|----------|----------|------|
| 01 | ИНДУСТРИЯ | Швейная и модная — разборы как должно быть и что реально происходит. | `C:\work26\trend-platforma\public\images\about\industry.jpg` |
| 02 | ПРОИЗВОДСТВО | Как устроено и как работает в реальности. | `C:\work26\trend-platforma\public\images\about\production.jpg` |
| 03 | СТИЛЬ | Тренды через мышление. | `C:\work26\trend-platforma\public\images\about\style.jpg` |

---

## Страница курсов (`/education`)

- Навигация: **На главную**
- Заголовок: **Обучение, семинары, переподготовка**

### Карточка 01 — Семинары, конференции

`C:\work26\trend-platforma\public\images\education\seminars.jpg`

На регулярной основе. Для конструкторов, технологов, владельцев брендов и цехов.

Кнопки: **Расписание**, **Запись**

---

### Карточка 02 — Конструирование — моделирование

`C:\work26\trend-platforma\public\images\education\construction.jpg`

**Технология.**

- Курс для профессионалов (повышение квалификации и ценника)

Кнопка: **Запись**

---

### Карточка 03 — Бизнес в модной индустрии

`C:\work26\trend-platforma\public\images\education\business.jpg`

- Лекции, семинары, курсы.
- Стратегии, ошибки, болевые точки.
- Находим выход. Решаем проблему.

Кнопка: **Запись**

---

## Контакты и ссылки (заглушки)

| Тип | Значение |
|-----|----------|
| Телефон | +7 (999) 000-00-00 |
| Telegram | https://t.me/username (@trendplatforma) |
| ВКонтакте | https://vk.com/trendplatforma |
| Офис | г. Москва, ул. Тверская, д. 12, офис 405 |
| Производство | Московская обл., г. Подольск, ул. Промышленная, д. 8 |

---

## Корневая папка проекта

`C:\work26\trend-platforma`
