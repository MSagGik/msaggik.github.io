const languageButtons = document.querySelectorAll("[data-lang-btn]");
const supportedLanguages = ["ru", "en"];
const currentPath = window.location.pathname;
let currentLanguage = localStorage.getItem("language") || getBrowserLanguage() || "ru";
let currentTextData = {};
let currentImageData = {};
let currentVideoData = {};

const mainPageTexts = {
  "main_page-author": {
    ru: "Максим Сагациян",
    en: "Maxim Sagaciyang",
  },
  "main_page-about": {
    ru: "Обо мне",
    en: "About",
  },
  "main_page-directions_header_a": {
    ru: "Разработка мобильных приложений для ",
    en: "Development of mobile applications for ",
  },
  "main_page-directions_header_b": {
    ru: ", интеграция с ",
    en: ", integration with ",
  },
  "main_page-directions_header_c": {
    ru: " и ",
    en: "and ",
  },
  "main_page-directions_header_d": {
    ru: "ИИ",
    en: "AI",
  },
  "main_page-dev_smarthome_name_connect": {
    ru: "Библиотека Bluetooth",
    en: "Bluetooth library",
  },
  "main_page-dev_smarthome_desc_connect": {
    ru: "Контроль над сокетами и потоками данных",
    en: "Control over sockets and data flows",
  },
  "main_page-dev_smarthome_name_device": {
    ru: "IoT устройство",
    en: "IoT device",
  },
  "main_page-dev_smarthome_desc_device": {
    ru: "Умное освещение и климат контроль",
    en: "Smart lighting and climate control",
  },
  "main_page-dev_playlistmaker_desc": {
    ru: "Поиск, воспроизведение и организация музыки с интеграцией iTunes",
    en: "Find, play, and organize your music with iTunes integration",
  },
  "main_page-dev_searchjob_desc": {
    ru: "Поиск и добавление в избранное вакансий сервиса HeadHunter",
    en: "Search and add to favorites vacancies of the HeadHunter service",
  },
  "main_page-dev_smarthome_desc": {
    ru: "Управление умным домом через Bluetooth",
    en: "Smart Home Control via Bluetooth",
  },
  "main_page-dev_swapiapp_desc": {
    ru: "Интерактивный гид по вселенной «Звёздных войн»",
    en: "An interactive guide to the Star Wars universe",
  },
  "main_page-dev_githubclientapp_desc": {
    ru: "Клиентское приложение для работы с сервисом GitHub",
    en: "Client application for working with the GitHub service",
  },
  "main_page-about-me-a": {
    ru: "Я — Максим Сагациян, эксперт в разработке Android-приложений",
    en: "I am Maxim Sagaciyang, an expert in Android application development",
  },
  "main_page-about-me-b": {
    ru: "Создаю высококачественные решения с использованием современных технологий, включая IoT и искусственный интеллект",
    en: "I create high-quality solutions using modern technologies, including IoT and artificial intelligence",
  },
  "main_page-about-me-c": {
    ru: "Готов к сотрудничеству на фриланс-основе и в рамках долгосрочных проектов",
    en: "I am ready to cooperate on a freelance basis and within long-term projects",
  },
  "main_page-about-me-click": {
    ru: "Больше обо мне",
    en: "More about me",
  },
  "main_page-legal-click": {
    ru: "Правовая информация",
    en: "Legal information",
  },
  "main_page-about-me-mail": {
    ru: "Моя почта",
    en: "My mail",
  },
  "main_page-about-me-click-c": {
    ru: "© Максим Сагациян 2025",
    en: "© Maxim Sagaciyang 2025",
  },
};

const mainPageImages = {
  "main_page-dev_smart_home_album": {
    ru: "media/smarthome/smart_home_main_ru.webp",
    en: "media/smarthome/smart_home_main_en.webp",
  },
  "main_page-dev_playlistmaker_album": {
    ru: "media/playlistmaker/playlistmaker_main_ru.webp",
    en: "media/playlistmaker/playlistmaker_main_en.webp",
  },
  "main_page-dev_searchjob_album": {
    ru: "media/searchjob/searchjob_main_ru.webp",
    en: "media/searchjob/searchjob_main_en.webp",
  },
  "main_page-dev_swapi_album": {
    ru: "media/swapiapp/swapi_main_ru.webp",
    en: "media/swapiapp/swapi_main_en.webp",
  },
  "main_page-dev_githubclienapp_album": {
    ru: "media/githubclientapp/githubclientapp_main_ru.webp",
    en: "media/githubclientapp/githubclientapp_main_en.webp",
  },
  "main_page-dev_githubclientapp_album_cloud": {
    ru: "media/githubclientapp/githubclientapp_cloud_ru.webp",
    en: "media/githubclientapp/githubclientapp_cloud_en.webp",
  },
  "main_page-dev_swapi_album_cloud": {
    ru: "media/swapiapp/swapi_cloud_ru.webp",
    en: "media/swapiapp/swapi_cloud_en.webp",
  },
  "main_page-dev_searchjob_album_cloud": {
    ru: "media/searchjob/searchjob_cloud_ru.webp",
    en: "media/searchjob/searchjob_cloud_en.webp",
  },
  "main_page-dev_playlistmaker_album_cloud": {
    ru: "media/playlistmaker/playlistmaker_cloud_ru.webp",
    en: "media/playlistmaker/playlistmaker_cloud_en.webp",
  },
  "main_page-dev_smart_home_album_cloud": {
    ru: "media/smarthome/smart_home_main_device_ru.webp",
    en: "media/smarthome/smart_home_main_device_en.webp",
  },
};

const legalPageTexts = {
  "main_page-author": {
    ru: "Максим Сагациян",
    en: "Maxim Sagaciyang",
  },
  "main_page-about": {
    ru: "Обо мне",
    en: "About",
  },
  "main_page-about-me-click-c": {
    ru: "© Максим Сагациян 2025",
    en: "© Maxim Sagaciyang 2025",
  },
  "legal-description-at": {
    ru: "Правовая информация",
    en: "Legal information",
  },
  "legal-description-a1": {
    ru: "Используемый шрифт",
    en: "Font used",
  },
  "legal-description-a2": {
    ru: "(https://fonts.google.com/specimen/Geologica/license) по лицензии",
    en: "(https://fonts.google.com/specimen/Geologica/license) under license",
  },
  "legal-description-a3": {
    ru: "(https://openfontlicense.org/open-font-license-official-text/), дата обращения 28 апреля 2025 года",
    en: "(https://openfontlicense.org/open-font-license-official-text/), date accessed 28 April 2025",
  },
  "legal-description-a4": {
    ru: "Информация о лицензировании и используемом контенте для каждого приложения доступна в соответствующем репозитории, ссылка на который указана на странице описания приложения",
    en: "Licensing and content information for each application is available in the corresponding repository, a link to which is provided on the application description page",
  },
};

const aboutPageTexts = {
  "main_page-author": {
    ru: "Максим Сагациян",
    en: "Maxim Sagaciyang",
  },
  "main_page-about": {
    ru: "Разработка",
    en: "Development",
  },
  "main_page-about-me-click-c": {
    ru: "© Максим Сагациян 2025",
    en: "© Maxim Sagaciyang 2025",
  },
  "about_page-header-a": {
    ru: "Привет, меня зовут Максим,",
    en: "Hi, my name is Maxim,",
  },
  "about_page-header-b": {
    ru: "я Android разработчик,",
    en: "I am an Android developer,",
  },
  "about_page-header-c": {
    ru: "кандидат технических наук в области анализа и внедрения ИИ",
    en: "a PhD in the field of analysis and implementation of artificial intelligence",
  },
  "about-experience": {
    ru: "Опыт",
    en: "Experience",
  },
  "about-tech": {
    ru: "Стек технологий",
    en: "Tech stack",
  },
  "about-programming-languages": {
    ru: "• Языки программирования:",
    en: "• Programming languages:",
  },
  "about-lib": {
    ru: "• Библиотеки для Android разработки",
    en: "• Libraries for Android development",
  },
  "about-math": {
    ru: "• Математика, алгоритмы и структуры данных",
    en: "• Mathematics, algorithms and data structures",
  },
  "about-contacts": {
    ru: "Контакты",
    en: "Contacts",
  },
}

const playlistmakerPageTexts = {
  "main_page-author": {
    ru: "Максим Сагациян",
    en: "Maxim Sagaciyang",
  },
  "main_page-about": {
    ru: "Обо мне",
    en: "About",
  },
  "main_page-about-me-click-c": {
    ru: "© Максим Сагациян 2025",
    en: "© Maxim Sagaciyang 2025",
  },
  "playlistmaker-description-short": {
    ru: "Приложение поиска, организации и воспроизведения музыкальных треков с интеграцией iTunes API",
    en: "An app for finding, organizing and playing music tracks with iTunes API integration",
  },
  "playlistmaker-description-a1": {
    ru: "это интуитивно понятное приложение для поиска, организации и прослушивания музыкальных треков с помощью",
    en: "is an intuitive app for finding, organizing and listening to music tracks using",
  },
  "playlistmaker-description-a2": {
    ru: "iTunes API от Apple (https://www.apple.com/itunes/)",
    en: "Apple's iTunes API (https://www.apple.com/itunes/)",
  },
  "playlistmaker-description-bt": {
    ru: "Основные функции:",
    en: "Main functions:",
  },
  "playlistmaker-description-b11": {
    ru: "Поиск треков:",
    en: "Search tracks:",
  },
  "playlistmaker-description-b12": {
    ru: "быстрый поиск по названию, исполнителю или альбому",
    en: "quick search by title, artist or album",
  },
  "playlistmaker-description-b21": {
    ru: "Воспроизведение демо:",
    en: "Play demo:",
  },
  "playlistmaker-description-b22": {
    ru: "прослушивание фрагментов треков (около 30 секунд)",
    en: "listen to fragments of tracks (about 30 seconds)",
  },
  "playlistmaker-description-b31": {
    ru: "Метаданные треков:",
    en: "Track metadata:",
  },
  "playlistmaker-description-b32": {
    ru: "основная информация о треках (исполнитель, альбом, год и др.)",
    en: "basic information about tracks (artist, album, year, etc.)",
  },
  "playlistmaker-description-b41": {
    ru: "Избранное:",
    en: "Favorites:",
  },
  "playlistmaker-description-b42": {
    ru: "добавление треков в избранное для быстрого доступа",
    en: "Add tracks to favorites for quick access",
  },
  "playlistmaker-description-b51": {
    ru: "Умные плейлисты:",
    en: "Smart Playlists:",
  },
  "playlistmaker-description-b52": {
    ru: "создание и редактирование плейлистов с настраиваемой обложкой и описанием",
    en: "Create and edit playlists with customizable cover art and description",
  },
  "playlistmaker-description-b61": {
    ru: "Темы оформления:",
    en: "Themes:",
  },
  "playlistmaker-description-b62": {
    ru: "переключение между светлой и темной темами",
    en: "Switch between light and dark themes",
  },
  "playlistmaker-description-b71": {
    ru: "Поддержка нескольких языков:",
    en: "Multi-language support:",
  },
  "playlistmaker-description-b72": {
    ru: "поддержка русского, английского и китайского языков",
    en: "Russian, English and Chinese support",
  },
  "playlistmaker-description-ct": {
    ru: "Технологический стек:",
    en: "Tech stack:",
  },
  "playlistmaker-description-c1": {
    ru: "Язык Kotlin",
    en: "Kotlin language",
  },
  "playlistmaker-description-c2": {
    ru: "Clean Architecture, MVVM и Single Activity",
    en: "Clean Architecture, MVVM and Single Activity",
  },
  "playlistmaker-description-c3": {
    ru: "REST API для iTunes",
    en: "REST API for iTunes",
  },
  "playlistmaker-description-c4": {
    ru: "Coroutines и ThreadPoolExecutor",
    en: "Coroutines and ThreadPoolExecutor",
  },
  "playlistmaker-description-c5": {
    ru: "SQLite, Room и SharedPreferences для хранения данных",
    en: "SQLite, Room and SharedPreferences for data storage",
  },
  "playlistmaker-description-c6": {
    ru: "Koin, Glide, Gson, LiveData, Retrofit и OkHttp",
    en: "Koin, Glide, Gson, LiveData, Retrofit and OkHttp",
  },
  "playlistmaker-description-dt": {
    ru: "Назначение приложения:",
    en: "Purpose of the application:",
  },
  "playlistmaker-description-d1": {
    ru: "Разработано в рамках образовательного проекта в",
    en: "Developed as part of the educational project at",
  },
  "playlistmaker-description-d2": {
    ru: "Яндекс.Практикум (https://practicum.yandex.ru/)",
    en: "INO СPE «Yandex EdTech» (https://practicum.yandex.ru/)",
  },
  "playlistmaker-description-et": {
    ru: "Репозиторий приложения:",
    en: "Application repository:",
  },
  "playlistmaker-description-g": {
    ru: "Посмотреть другие приложения",
    en: "View other apps",
  },
};

const playlistmakerPageImages = {
  "playlistmaker-description-image-a": {
    ru: "../media/playlistmaker/playlistmaker_light_page_a_ru.webp",
    en: "../media/playlistmaker/playlistmaker_light_page_a_en.webp",
  },
  "playlistmaker-description-image-b": {
    ru: "../media/playlistmaker/playlistmaker_light_page_b_ru.webp",
    en: "../media/playlistmaker/playlistmaker_light_page_b_en.webp",
  },
  "playlistmaker-description-image-c": {
    ru: "../media/playlistmaker/playlistmaker_light_page_c_ru.webp",
    en: "../media/playlistmaker/playlistmaker_light_page_c_en.webp",
  },
  "playlistmaker-description-image-d": {
    ru: "../media/playlistmaker/playlistmaker_light_page_d_ru.webp",
    en: "../media/playlistmaker/playlistmaker_light_page_d_en.webp",
  },
  "playlistmaker-description-image-e": {
    ru: "../media/playlistmaker/playlistmaker_light_page_e_ru.webp",
    en: "../media/playlistmaker/playlistmaker_light_page_e_en.webp",
  },
};

const playlistmakerPageVideos = {
  "playlistmaker-description-video": {
    ru: {
      poster: "../media/playlistmaker/video/playlistmaker_video_start_ru.webp",
      src: "../media/playlistmaker/video/playlistmaker_video_ru.mp4",
    },
    en: {
      poster: "../media/playlistmaker/video/playlistmaker_video_start_en.webp",
      src: "../media/playlistmaker/video/playlistmaker_video_en.mp4",
    },
  },
};

const smartHomePageTexts = {
  "main_page-author": {
    ru: "Максим Сагациян",
    en: "Maxim Sagaciyang",
  },
  "main_page-about": {
    ru: "Обо мне",
    en: "About",
  },
  "main_page-about-me-click-c": {
    ru: "© Максим Сагациян 2025",
    en: "© Maxim Sagaciyang 2025",
  },
  "smart-home-description-short": {
    ru: "Android-приложение для управления умным домом через Bluetooth с поддержкой IoT-устройств на базе Atmega328p",
    en: "Android application for smart home control via Bluetooth with support for IoT devices based on Atmega328p",
  },
  "smart-home-description-a": {
    ru: "это современное решение для управления климатом, освещением и датчиками в системе умного дома. Проект включает Android-приложение, разработанную Bluetooth-библиотеку и прошивку для микроконтроллера с двунаправленным JSON-протоколом",
    en: "is a modern solution for climate control, lighting and sensors in a smart home system. The project includes an Android application, a developed Bluetooth library and firmware for a microcontroller with a bidirectional JSON protocol",
  },
  "smart-home-description-bt": {
    ru: "Основные функции:",
    en: "Main functions:",
  },
  "smart-home-description-b1": {
    ru: "Мониторинг температуры, влажности и давления через Bluetooth SPP",
    en: "Monitoring temperature, humidity and pressure via Bluetooth SPP",
  },
  "smart-home-description-b2": {
    ru: "Настройка RGB-подсветки с режимами: моноцвет, композиция из палитры изображений (с использованием Palette API), автоматические сценарии",
    en: "RGB backlight customization with modes: monocolor, composition from image palette (using Palette API), automatic scripts",
  },
  "smart-home-description-b3": {
    ru: "Акустическая обратная связь и LED-индикация на устройстве",
    en: "Acoustic feedback and LED indication on the device",
  },
  "smart-home-description-b4": {
    ru: "Анализ изображений для генерации цветовых схем освещения",
    en: "Image analysis to generate lighting color schemes",
  },
  "smart-home-description-b5": {
    ru: "Реактивное обновление данных через SharedFlow и Coroutines",
    en: "Reactive data updating via SharedFlow and Coroutines",
  },
  "smart-home-description-b6": {
    ru: "Автоматическое отключение ресивера при простое",
    en: "Automatic shutdown of the receiver when idle",
  },
  "smart-home-description-b7": {
    ru: "Поддержка светлой/тёмной тем, трёх языков (русский, английский, китайский)",
    en: "Support for light/dark themes, three languages (Russian, English, Chinese)",
  },
  "smart-home-description-b8": {
    ru: "Вертикальный и горизонтальный режимы экрана",
    en: "Vertical and horizontal screen modes",
  },
  "smart-home-description-b9": {
    ru: "Анимации и адаптивная вёрстка (FlexboxLayout, ViewPager2)",
    en: "Animations and adaptive layout (FlexboxLayout, ViewPager2)",
  },
  "smart-home-description-ct": {
    ru: "Технологический стек:",
    en: "Tech stack:",
  },
  "smart-home-description-c1": {
    ru: "Языки: Kotlin (Android), C/C++ (прошивка Atmega328p)",
    en: "Languages: Kotlin (Android), C/C++ (Atmega328p firmware)",
  },
  "smart-home-description-c2": {
    ru: "Архитектура: Clean Architecture + MVVM, многомодульная структура",
    en: "Architecture: Clean Architecture + MVVM, multi-module structure",
  },
  "smart-home-description-c3": {
    ru: "Собственная Bluetooth-библиотека с поддержкой потоковой передачи данных",
    en: "Own Bluetooth library with support for data streaming",
  },
  "smart-home-description-c4": {
    ru: "Bluetooth SPP, сокеты",
    en: "Bluetooth SPP, sockets",
  },
  "smart-home-description-c5": {
    ru: "Протокол взаимодействия на основе JSON с оптимизацией для микроконтроллеров (примеры сообщений: LED_MONO, TIME_UPDATE, COM_ENABLED)",
    en: "JSON-based communication protocol optimized for microcontrollers (message examples: LED_MONO, TIME_UPDATE, COM_ENABLED)",
  },
  "smart-home-description-c6": {
    ru: "Прошивка устройства с обработкой сенсоров и управлением RGB-лентой",
    en: "Firmware for a device with sensor processing and RGB strip control",
  },
  "smart-home-description-c7": {
    ru: "Gradle + Proguard для оптимизации сборки",
    en: "Gradle + Proguard for build optimization",
  },
  "smart-home-description-dt": {
    ru: "Репозиторий приложения:",
    en: "Application repository:",
  },
  "smart-home-description-e": {
    ru: "Проект демонстрирует комплексный подход к созданию IoT-решений: от проектирования аппаратной части до реализации реактивного интерфейса с поддержкой современных Android-технологий",
    en: "The project demonstrates a comprehensive approach to creating IoT solutions: from hardware design to implementing a reactive interface with support for modern Android technologies",
  },
  "smart-home-description-g": {
    ru: "Посмотреть другие приложения",
    en: "View other apps",
  },
};

const smartHomePageImages = {
  "smart-home-description-image-a": {
    ru: "../media/smarthome/smart_home_light_night_page_a_ru.webp",
    en: "../media/smarthome/smart_home_light_night_page_a_en.webp",
  },
  "smart-home-description-image-b": {
    ru: "../media/smarthome/smart_home_light_page_b_ru.webp",
    en: "../media/smarthome/smart_home_light_page_b_en.webp",
  },
  "smart-home-description-image-c": {
    ru: "../media/smarthome/smart_home_light_page_c_ru.webp",
    en: "../media/smarthome/smart_home_light_page_c_en.webp",
  },
  "smart-home-description-image-d": {
    ru: "../media/smarthome/smart_home_light_page_d_ru.webp",
    en: "../media/smarthome/smart_home_light_page_d_en.webp",
  },
  "smart-home-description-image-e": {
    ru: "../media/smarthome/smart_home_light_page_e_ru.webp",
    en: "../media/smarthome/smart_home_light_page_e_en.webp",
  },
};

const smartHomePageVideos = {
  "smart-home-description-video": {
    ru: {
      poster: "../media/smarthome/video/smart_home_album_ru.webp",
      src: "../media/smarthome/video/smart_home_video_ru.mp4",
    },
    en: {
      poster: "../media/smarthome/video/smart_home_album_en.webp",
      src: "../media/smarthome/video/smart_home_video_en.mp4",
    },
  },
};

const searchJobPageTexts = {
  "main_page-author": {
    ru: "Максим Сагациян",
    en: "Maxim Sagaciyang",
  },
  "main_page-about": {
    ru: "Обо мне",
    en: "About",
  },
  "main_page-about-me-click-c": {
    ru: "© Максим Сагациян 2025",
    en: "© Maxim Sagaciyang 2025",
  },
  "searchjob-description-short": {
    ru: "Приложение поиска и добавления в избранное вакансий сервиса HeadHunter",
    en: "Application for searching and adding to favorites vacancies of the HeadHunter service",
  },
  "searchjob-description-a": {
    ru: "это Android приложение для поиска и организации вакансий с использованием",
    en: "this is an Android application for searching and organizing vacancies using the",
  },
  "searchjob-description-bt": {
    ru: "Основные функции:",
    en: "Main functions:",
  },
  "searchjob-description-b11": {
    ru: "Поиск вакансий:",
    en: "Search for vacancies:",
  },
  "searchjob-description-b12": {
    ru: "поиск актуальных вакансий в реальном времени используя API HeadHunter",
    en: "search for current vacancies in real time using the HeadHunter API",
  },
  "searchjob-description-b21": {
    ru: "Фильтр поиска:",
    en: "Search filter:",
  },
  "searchjob-description-b22": {
    ru: "настройка фильтрации поиска по профессии, месту работы и уровню зарплаты",
    en: "setting up search filtering by profession, place of work and salary level",
  },
  "searchjob-description-b31": {
    ru: "Избранные вакансии:",
    en: "Featured vacancies:",
  },
  "searchjob-description-b32": {
    ru: "добавление вакансий в избранное для быстрого доступа",
    en: "adding vacancies to favorites for quick access",
  },
  "searchjob-description-b41": {
    ru: "Экран описания вакансии:",
    en: "Job Description Screen:",
  },
  "searchjob-description-b42": {
    ru: "информация о вакансии",
    en: "information about the vacancy",
  },
  "searchjob-description-b51": {
    ru: "Темы оформления:",
    en: "Design themes:",
  },
  "searchjob-description-b52": {
    ru: "автоматическое переключение между светлой и тёмной темами",
    en: "automatic switching between light and dark themes",
  },
  "searchjob-description-ct": {
    ru: "Технологический стек:",
    en: "Tech stack:",
  },
  "searchjob-description-c1": {
    ru: "Язык Kotlin",
    en: "Kotlin language",
  },
  "searchjob-description-c2": {
    ru: "Modularization, Clean Architecture, MVVM и Single Activity",
    en: "Modularization, Clean Architecture, MVVM and Single Activity",
  },
  "searchjob-description-c3": {
    ru: "SQLite, Room и SharedPreferences для хранения данных",
    en: "SQLite, Room and SharedPreferences for data storage",
  },
  "searchjob-description-c4": {
    ru: "Koin, Glide, Gson, LiveData, Retrofit и OkHttp",
    en: "Koin, Glide, Gson, LiveData, Retrofit and OkHttp",
  },
  "searchjob-description-dt": {
    ru: "Назначение приложения:",
    en: "Purpose of the application:",
  },
  "searchjob-description-d1": {
    ru: "Разработано в составе команды разработчиков в рамках образовательного проекта в",
    en: "Developed by a team of developers as part of an educational project in",
  },
  "searchjob-description-d2": {
    ru: "Яндекс.Практикум (https://practicum.yandex.ru/)",
    en: "INO СPE «Yandex EdTech» (https://practicum.yandex.ru/)",
  },
  "searchjob-description-et": {
    ru: "Репозиторий приложения:",
    en: "Application repository:",
  },
  "searchjob-description-g": {
    ru: "Посмотреть другие приложения",
    en: "View other apps",
  },
};

const searchJobPageImages = {
  "searchjob-description-image-a": {
    ru: "../media/searchjob/searchjob_light_page_a_ru.webp",
    en: "../media/searchjob/searchjob_light_page_a_en.webp",
  },
  "searchjob-description-image-b": {
    ru: "../media/searchjob/searchjob_light_page_b_ru.webp",
    en: "../media/searchjob/searchjob_light_page_b_en.webp",
  },
  "searchjob-description-image-c": {
    ru: "../media/searchjob/searchjob_light_page_c_ru.webp",
    en: "../media/searchjob/searchjob_light_page_c_en.webp",
  },
  "searchjob-description-image-d": {
    ru: "../media/searchjob/searchjob_light_page_d_ru.webp",
    en: "../media/searchjob/searchjob_light_page_d_en.webp",
  },
};

const searchJobPageVideos = {
  "searchjob-description-video": {
    ru: {
      poster: "../media/searchjob/video/searchjob_light_video_album_ru.png",
      src: "../media/searchjob/video/searchjob_light_video_ru.mp4",
    },
    en: {
      poster: "../media/searchjob/video/searchjob_light_video_album_en.png",
      src: "../media/searchjob/video/searchjob_light_video_en.mp4",
    },
  },
};

const swApiPageTexts = {
  "main_page-author": {
    ru: "Максим Сагациян",
    en: "Maxim Sagaciyang",
  },
  "main_page-about": {
    ru: "Обо мне",
    en: "About",
  },
  "main_page-about-me-click-c": {
    ru: "© Максим Сагациян 2025",
    en: "© Maxim Sagaciyang 2025",
  },
  "swapi-description-short": {
    ru: "Интерактивный гид по вселенной «Звёздных войн» на вашем Android-устройстве",
    en: "An interactive guide to the Star Wars universe on your Android device",
  },
  "swapi-description-a1": {
    ru: "это современное Android-приложение для поиска и просмотра информации о культовой кино-вселенной \"Звёздные войны\" с использованием открытого",
    en: "is a modern Android application for searching and viewing information about the cult film universe \"Star Wars\" using the open",
  },
  "swapi-description-a2": {
    ru: "Приложение реализовано с применением актуальных архитектурных подходов и демонстрирует современные практики разработки мобильных приложений на Kotlin",
    en: "The application is implemented using current architectural approaches and demonstrates modern practices of mobile application development in Kotlin",
  },
  "swapi-description-bt": {
    ru: "Основные функции:",
    en: "Main functions:",
  },
  "swapi-description-b1": {
    ru: "Поиск персонажей, фильмов, планет, звездолётов и других объектов вселенной Star Wars",
    en: "Search for characters, movies, planets, starships and other objects in the Star Wars universe",
  },
  "swapi-description-b2": {
    ru: "Просмотр подробной информации о каждом объекте с удобной навигацией по категориям",
    en: "View detailed information about each object with easy navigation by category",
  },
  "swapi-description-b3": {
    ru: "Быстрая загрузка и отображение изображений",
    en: "Fast loading and display of images",
  },
  "swapi-description-b4": {
    ru: "Кэширование данных для офлайн-доступа",
    en: "Caching data for offline access",
  },
  "swapi-description-b5": {
    ru: "Интуитивно понятный интерфейс с поддержкой BottomNavigationView и вложенной навигацией",
    en: "Intuitive interface with BottomNavigationView and nested navigation support",
  },
  "swapi-description-b6": {
    ru: "Адаптивная архитектура, позволяющая легко масштабировать и расширять функциональность приложения",
    en: "Adaptive architecture that allows you to easily scale and expand the functionality of the application",
  },
  "swapi-description-ct": {
    ru: "Технологический стек:",
    en: "Tech stack:",
  },
  "swapi-description-c1": {
    ru: "Язык: Kotlin",
    en: "Language: Kotlin",
  },
  "swapi-description-c2": {
    ru: "Архитектура: Clean Architecture, MVVM и многомодульность для разделения ответственности и удобной поддержки",
    en: "Architecture: Clean Architecture, MVVM and multi-modularity for separation of concerns and easy maintenance",
  },
  "swapi-description-c3": {
    ru: "REST API: интеграция с SWAPI через Retrofit для надёжного обмена данными",
    en: "REST API: Integration with SWAPI via Retrofit for reliable data exchange",
  },
  "swapi-description-c4": {
    ru: "Хранение данных: Room для локального кэширования и быстрого доступа к информации",
    en: "Data storage: Room for local caching and fast access to information",
  },
  "swapi-description-c5": {
    ru: "Внедрение зависимостей: Koin - лёгкий DI-фреймворк для управления зависимостями",
    en: "Dependency Injection: Koin - A Lightweight DI Framework for Dependency Management",
  },
  "swapi-description-c6": {
    ru: "Навигация: Single Activity и Navigation Architecture Component (NavController) для управления переходами и вложенными графами навигации",
    en: "Navigation: Single Activity and Navigation Architecture Component (NavController) for managing transitions and nested navigation graphs",
  },
  "swapi-description-dt": {
    ru: "Назначение приложения:",
    en: "Purpose of the application:",
  },
  "swapi-description-d": {
    ru: "SwApiApp разработан в образовательных целях для демонстрации современных подходов к созданию Android-приложений и освоения работы с открытыми API",
    en: "SwApiApp is designed for educational purposes to demonstrate modern approaches to creating Android applications and mastering working with open APIs",
  },
  "swapi-description-et": {
    ru: "Репозиторий приложения:",
    en: "Application repository:",
  },
  "swapi-description-g": {
    ru: "Посмотреть другие приложения",
    en: "View other apps",
  },
};

const swapiPageImages = {
  "swapi-description-image-a": {
    ru: "../media/swapiapp/swapi_page_a_ru.webp",
    en: "../media/swapiapp/swapi_page_a_en.webp",
  },
  "swapi-description-image-b": {
    ru: "../media/swapiapp/swapi_page_b_ru.webp",
    en: "../media/swapiapp/swapi_page_b_en.webp",
  },
};

const gitHubClientAppPageTexts = {
  "main_page-author": {
    ru: "Максим Сагациян",
    en: "Maxim Sagaciyang",
  },
  "main_page-about": {
    ru: "Обо мне",
    en: "About",
  },
  "main_page-about-me-click-c": {
    ru: "© Максим Сагациян 2025",
    en: "© Maxim Sagaciyang 2025",
  },
  "githubclientapp-description-short": {
    ru: "Клиентское приложение для работы с сервисом GitHub",
    en: "Client application for working with the GitHub service",
  },
  "githubclientapp-description-a1": {
    ru: "это учебный пример Android-приложения для взаимодействия с",
    en: "This is a tutorial example of an Android application for interacting with",
  },
  "githubclientapp-description-a2": {
    ru: "разработанное с применением актуальных технологий и архитектурных подходов. Проект демонстрирует современные практики создания мобильных клиентов для работы с облачными сервисами",
    en: "developed using current technologies and architectural approaches. The project demonstrates modern practices for creating mobile clients for working with cloud services",
  },
  "githubclientapp-description-bt": {
    ru: "Основные функции:",
    en: "Main functions:",
  },
  "githubclientapp-description-b1": {
    ru: "Просмотр публичной информации о репозиториях, пользователях и активности через REST API",
    en: "View public information about repositories, users and activity via REST API",
  },
  "githubclientapp-description-b2": {
    ru: "OAuth-авторизация с использованием токена",
    en: "OAuth authorization using a token",
  },
  "githubclientapp-description-b3": {
    ru: "Настройки светлой/тёмной тем и выбора языка (русский, английский и китайский)",
    en: "Light/dark theme and language selection settings (Russian, English and Chinese)",
  },
  "githubclientapp-description-ct": {
    ru: "Технологический стек:",
    en: "Tech stack:",
  },
  "githubclientapp-description-c1": {
    ru: "Язык: Kotlin",
    en: "Language: Kotlin",
  },
  "githubclientapp-description-c2": {
    ru: "OAuth аутентификация и авторизация с помощью токена",
    en: "OAuth authentication and authorization using token",
  },
  "githubclientapp-description-c3": {
    ru: "Gson, Glide и Retrofit",
    en: "Gson, Glide and Retrofit",
  },
  "githubclientapp-description-dt": {
    ru: "Назначение приложения:",
    en: "Purpose of the application:",
  },
  "githubclientapp-description-d": {
    ru: "Проект создан в учебных целях",
    en: "The project was created for educational purposes",
  },
  "githubclientapp-description-et": {
    ru: "Репозиторий приложения:",
    en: "Application repository:",
  },
  "githubclientapp-description-g": {
    ru: "Посмотреть другие приложения",
    en: "View other apps",
  },
};

const gitHubClientAppPageImages = {
  "githubclientapp-description-image-a": {
    ru: "../media/githubclientapp/githubclientapp_page_a_ru.webp",
    en: "../media/githubclientapp/githubclientapp_page_a_en.webp",
  },
  "githubclientapp-description-image-b": {
    ru: "../media/githubclientapp/githubclientapp_page_b_ru.webp",
    en: "../media/githubclientapp/githubclientapp_page_b_en.webp",
  },
};

function determinePageData() {
  const pathParts = currentPath.split('/');
  const fileName = pathParts[pathParts.length - 1];
  switch (fileName) {
    case "index.html":
      currentTextData = mainPageTexts;
      currentImageData = mainPageImages;
      break;
    case "legal.html":
      currentTextData = legalPageTexts;
      break;
    case "about.html":
      currentTextData = aboutPageTexts;
      break;
    case "smarthome.html":
      currentTextData = smartHomePageTexts;
      currentImageData = smartHomePageImages;
      currentVideoData = smartHomePageVideos;
      break;
    case "playlistmaker.html":
      currentTextData = playlistmakerPageTexts;
      currentImageData = playlistmakerPageImages;
      currentVideoData = playlistmakerPageVideos;
      break;
    case "searchjob.html":
      currentTextData = searchJobPageTexts;
      currentImageData = searchJobPageImages;
      currentVideoData = searchJobPageVideos;
      break;
    case "swapiapp.html":
      currentTextData = swApiPageTexts;
      currentImageData = swapiPageImages;
      break;
    case "githubclientapp.html":
      currentTextData = gitHubClientAppPageTexts;
      currentImageData = gitHubClientAppPageImages
      break;
    default:
      currentTextData = mainPageTexts;
      currentImageData = mainPageImages;
      currentVideoData = playlistmakerPageVideos;
      break;
  }
}
determinePageData();

function updatePageData() {
  for (const key in currentTextData) {
    const elem = document.querySelector(`[data-lang=${key}]`);
    if (elem) {
      elem.textContent = currentTextData[key][currentLanguage];
    }
  }
  for (const key in currentImageData) {
    const imgElem = document.querySelector(`[data-lang-image=${key}]`);
    if (imgElem) {
      imgElem.src = currentImageData[key][currentLanguage];
    } else {
    }
  }
  for (const key in currentVideoData) {
    const videoSource = document.querySelector(`[data-lang-video=${key}]`);
    if (videoSource) {
      const video = videoSource.parentNode;
      video.poster = currentVideoData[key][currentLanguage].poster;
      videoSource.src = currentVideoData[key][currentLanguage].src;
    }
  }
}
updatePageData();

languageButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (!event.target.classList.contains("language-buttons_active")) {
      currentLanguage = event.target.dataset.langBtn;
      localStorage.setItem("language", currentLanguage);
      removeActiveClass(languageButtons, "language-buttons_active");
      button.classList.add("language-buttons_active");
      updatePageData();
    }
  });
});

function removeActiveClass(elements, activeClass) {
  elements.forEach((element) => {
    element.classList.remove(activeClass);
  });
}

function setActiveLanguageButton() {
  switch (currentLanguage) {
    case "ru":
      document
        .querySelector('[data-lang-btn="ru"]')
        .classList.add("language-buttons_active");
      break;
    case "en":
      document
        .querySelector('[data-lang-btn="en"]')
        .classList.add("language-buttons_active");
      break;

    default:
      document
        .querySelector('[data-lang-btn="ru"]')
        .classList.add("language-buttons_active");
      break;
  }
}
setActiveLanguageButton();

function getBrowserLanguage() {
  const browserLang = navigator.language.slice(0, 2).toLowerCase();
  return supportedLanguages.includes(browserLang) ? browserLang : null;
}