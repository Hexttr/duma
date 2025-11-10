// Данные о депутатах, комитетах и фракциях
const DEPUTIES_DATA = [
  {"id": 1, "order": 3, "surname": "Сапрыкин", "name": "Андрей", "patronymic": "Викторович", "photo": "assets/img/deputies/001.jpg", "committee": "Комитет по жилищно-коммунальному хозяйству", "fraction": "Единая Россия", "district": "Избирательный округ №1", "position": "Заместитель председателя"},
  {"id": 2, "order": 37, "surname": "Лещенко", "name": "Владимир", "patronymic": "Валерьевич", "photo": "assets/img/deputies/002.jpg", "committee": "Комитет по местному самоуправлению, регламенту и депутатской этике", "fraction": "Единая Россия", "district": "Избирательный округ №2"},
  {"id": 3, "order": 38, "surname": "Толстых", "name": "Вадим", "patronymic": "Александрович", "photo": "assets/img/deputies/003.jpg", "committee": "Комитет по бюджету, налогам и экономическому развитию", "fraction": "Единая Россия", "district": "Избирательный округ №3"},
  {"id": 4, "order": 39, "surname": "Лепехова", "name": "Ольга", "patronymic": "Владимировна", "photo": "assets/img/deputies/004.jpg", "committee": "Комитет по градостроительству, муниципальному имуществу, землепользованию и поддержке предпринимательства", "fraction": "Единая Россия", "district": "Избирательный округ №4"},
  {"id": 5, "order": 5, "surname": "Ермак", "name": "Андрей", "patronymic": "Эдуардович", "photo": "assets/img/deputies/005.jpg", "committee": "Комитет по социальной политике, взаимодействию с общественными организациями, участниками специальной военной операции и членами их семей", "fraction": "Единая Россия", "district": "Избирательный округ №5"},
  {"id": 6, "order": 6, "surname": "Пудовкина", "name": "Анна", "patronymic": "Юрьевна", "photo": "assets/img/deputies/006.jpg", "committee": "Комитет по развитию городской инфраструктуры", "fraction": "Единая Россия", "district": "Избирательный округ №6"},
  {"id": 7, "order": 7, "surname": "Чепурнов", "name": "Максим", "patronymic": "Вадимович", "photo": "assets/img/deputies/007.jpg", "committee": "Комитет по градостроительству, муниципальному имуществу, землепользованию и поддержке предпринимательства", "fraction": "Единая Россия", "district": "Избирательный округ №7"},
  {"id": 8, "order": 8, "surname": "Кулакова", "name": "Елена", "patronymic": "Васильевна", "photo": "assets/img/deputies/008.jpg", "committee": "Комитет по бюджету, налогам и экономическому развитию", "fraction": "Единая Россия", "district": "Избирательный округ №8"},
  {"id": 9, "order": 9, "surname": "Милюков", "name": "Степан", "patronymic": "Олегович", "photo": "assets/img/deputies/009.jpg", "committee": "Комитет по развитию городской инфраструктуры", "fraction": "Единая Россия", "district": "Избирательный округ №9"},
  {"id": 10, "order": 10, "surname": "Плотникова", "name": "Ольга", "patronymic": "Васильевна", "photo": "assets/img/deputies/010.jpg", "committee": "Комитет по жилищно-коммунальному хозяйству", "fraction": "Единая Россия", "district": "Избирательный округ №10"},
  {"id": 11, "order": 11, "surname": "Выжимов", "name": "Евгений", "patronymic": "Дмитриевич", "photo": "assets/img/deputies/011.jpg", "committee": "Комитет по социальной политике, взаимодействию с общественными организациями, участниками специальной военной операции и членами их семей", "fraction": "Единая Россия", "district": "Избирательный округ №11"},
  {"id": 12, "order": 12, "surname": "Журавский", "name": "Алексей", "patronymic": "Евгеньевич", "photo": "assets/img/deputies/012.jpg", "committee": "Комитет по жилищно-коммунальному хозяйству", "fraction": "Единая Россия", "district": "Избирательный округ №12"},
  {"id": 13, "order": 13, "surname": "Очнев", "name": "Артем", "patronymic": "Федорович", "photo": "assets/img/deputies/013.jpg", "committee": "Комитет по развитию городской инфраструктуры", "fraction": "Единая Россия", "district": "Избирательный округ №13"},
  {"id": 14, "order": 2, "surname": "Леонова", "name": "Елена", "patronymic": "Васильевна", "photo": "assets/img/deputies/014.jpg", "committee": "Комитет по местному самоуправлению, регламенту и депутатской этике", "fraction": "Родина", "district": "Избирательный округ №14", "position": "Первый заместитель председателя"},
  {"id": 15, "order": 15, "surname": "Лысикова", "name": "Марина", "patronymic": "Валерьевна", "photo": "assets/img/deputies/015.jpg", "committee": "Комитет по развитию городской инфраструктуры", "fraction": "Единая Россия", "district": "Избирательный округ №15"},
  {"id": 16, "order": 16, "surname": "Петров", "name": "Андрей", "patronymic": "Владимирович", "photo": "assets/img/deputies/016.jpg", "committee": "Комитет по градостроительству, муниципальному имуществу, землепользованию и поддержке предпринимательства", "fraction": "Единая Россия", "district": "Избирательный округ №16"},
  {"id": 17, "order": 17, "surname": "Бастрыкина", "name": "Елена", "patronymic": "Михайловна", "photo": "assets/img/deputies/017.jpg", "committee": "Комитет по жилищно-коммунальному хозяйству", "fraction": "Единая Россия", "district": "Избирательный округ №17"},
  {"id": 18, "order": 18, "surname": "Неплюев", "name": "Дмитрий", "patronymic": "Михайлович", "photo": "assets/img/deputies/018.jpg", "committee": "Комитет по жилищно-коммунальному хозяйству", "fraction": "Родина", "district": "Избирательный округ №18"},
  {"id": 19, "order": 19, "surname": "Антипов", "name": "Игорь", "patronymic": "Игоревич", "photo": "assets/img/deputies/019.jpg", "committee": "Комитет по градостроительству, муниципальному имуществу, землепользованию и поддержке предпринимательства", "fraction": "Единая Россия", "district": "Единый избирательный округ"},
  {"id": 20, "order": 20, "surname": "Асеев", "name": "Александр", "patronymic": "Александрович", "photo": "assets/img/deputies/020.jpg", "committee": "Комитет по местному самоуправлению, регламенту и депутатской этике", "fraction": "ЛДПР", "district": "Единый избирательный округ"},
  {"id": 21, "order": 21, "surname": "Баранов", "name": "Александр", "patronymic": "Викторович", "photo": "assets/img/deputies/021.jpg", "committee": "Комитет по социальной политике, взаимодействию с общественными организациями, участниками специальной военной операции и членами их семей", "fraction": "Единая Россия", "district": "Единый избирательный округ"},
  {"id": 22, "order": 22, "surname": "Беляев", "name": "Валерий", "patronymic": "Анатольевич", "photo": "assets/img/deputies/022.jpg", "committee": "Комитет по градостроительству, муниципальному имуществу, землепользованию и поддержке предпринимательства", "fraction": "Единая Россия", "district": "Единый избирательный округ"},
  {"id": 23, "order": 23, "surname": "Бударин", "name": "Михаил", "patronymic": "Валерьевич", "photo": "assets/img/deputies/023.jpg", "committee": "Комитет по местному самоуправлению, регламенту и депутатской этике", "fraction": "Единая Россия", "district": "Единый избирательный округ"},
  {"id": 24, "order": 24, "surname": "Воронин", "name": "Никита", "patronymic": "Игоревич", "photo": "assets/img/deputies/024.jpg", "committee": "Комитет по социальной политике, взаимодействию с общественными организациями, участниками специальной военной операции и членами их семей", "fraction": "Единая Россия", "district": "Единый избирательный округ"},
  {"id": 25, "order": 4, "surname": "Иржанов", "name": "Валерий", "patronymic": "Маратович", "photo": "assets/img/deputies/025.jpg", "committee": "Комитет по бюджету, налогам и экономическому развитию", "fraction": "Единая Россия", "district": "Единый избирательный округ", "position": "Заместитель председателя"},
  {"id": 26, "order": 26, "surname": "Колпаков", "name": "Андрей", "patronymic": "Владимирович", "photo": "assets/img/deputies/026.jpg", "committee": "Комитет по местному самоуправлению, регламенту и депутатской этике", "fraction": "Единая Россия", "district": "Единый избирательный округ"},
  {"id": 27, "order": 27, "surname": "Колосницын", "name": "Павел", "patronymic": "Юрьевич", "photo": "assets/img/deputies/027.jpg", "committee": "Комитет по жилищно-коммунальному хозяйству", "fraction": "КПРФ", "district": "Единый избирательный округ"},
  {"id": 28, "order": 1, "surname": "Кутейников", "name": "Константин", "patronymic": "Александрович", "photo": "assets/img/deputies/028.jpg", "committee": "Комитет по местному самоуправлению, регламенту и депутатской этике", "fraction": "Единая Россия", "district": "Единый избирательный округ", "position": "Председатель"},
  {"id": 29, "order": 29, "surname": "Мищенко", "name": "Елена", "patronymic": "Сергеевна", "photo": "assets/img/deputies/029.jpg", "committee": "Комитет по бюджету, налогам и экономическому развитию", "fraction": "Единая Россия", "district": "Единый избирательный округ"},
  {"id": 30, "order": 30, "surname": "Перова", "name": "Анастасия", "patronymic": "Геннадьевна", "photo": "assets/img/deputies/030.jpg", "committee": "Комитет по социальной политике, взаимодействию с общественными организациями, участниками специальной военной операции и членами их семей", "fraction": "Единая Россия", "district": "Единый избирательный округ"},
  {"id": 31, "order": 31, "surname": "Поляков", "name": "Дмитрий", "patronymic": "Викторович", "photo": "assets/img/deputies/031.jpg", "committee": "Комитет по развитию городской инфраструктуры", "fraction": "Справедливая Россия", "district": "Единый избирательный округ"},
  {"id": 32, "order": 32, "surname": "Попова", "name": "Лариса", "patronymic": "Анатольевна", "photo": "assets/img/deputies/032.jpg", "committee": "Комитет по бюджету, налогам и экономическому развитию", "fraction": "КПРФ", "district": "Единый избирательный округ"},
  {"id": 33, "order": 33, "surname": "Пустовалова", "name": "Татьяна", "patronymic": "Михайловна", "photo": "assets/img/deputies/033.jpg", "committee": "Комитет по бюджету, налогам и экономическому развитию", "fraction": "Родина", "district": "Единый избирательный округ"},
  {"id": 34, "order": 34, "surname": "Служаков", "name": "Олег", "patronymic": "Антонович", "photo": "assets/img/deputies/034.jpg", "committee": "Комитет по градостроительству, муниципальному имуществу, землепользованию и поддержке предпринимательства", "fraction": "Единая Россия", "district": "Единый избирательный округ"},
  {"id": 35, "order": 35, "surname": "Стариков", "name": "Валерий", "patronymic": "Тимофеевич", "photo": "assets/img/deputies/035.jpg", "committee": "Комитет по развитию городской инфраструктуры", "fraction": "Родина", "district": "Единый избирательный округ"},
  {"id": 36, "order": 36, "surname": "Шанина", "name": "Любовь", "patronymic": "Михайловна", "photo": "assets/img/deputies/036.jpg", "committee": "Комитет по социальной политике, взаимодействию с общественными организациями, участниками специальной военной операции и членами их семей", "fraction": "Родина", "district": "Единый избирательный округ"}
];

const COMMITTEES_DATA = [
  {"id": 1, "name": "Комитет по местному самоуправлению, регламенту и депутатской этике"},
  {"id": 2, "name": "Комитет по бюджету, налогам и экономическому развитию"},
  {"id": 3, "name": "Комитет по градостроительству, муниципальному имуществу, землепользованию и поддержке предпринимательства"},
  {"id": 4, "name": "Комитет по жилищно-коммунальному хозяйству"},
  {"id": 5, "name": "Комитет по развитию городской инфраструктуры"},
  {"id": 6, "name": "Комитет по социальной политике, взаимодействию с общественными организациями, участниками специальной военной операции и членами их семей"}
];

const FRACTIONS_DATA = [
  {"id": 1, "name": "Единая Россия", "logo": "assets/img/fractions/placeholder.svg"},
  {"id": 2, "name": "КПРФ", "logo": "assets/img/fractions/placeholder.svg"},
  {"id": 3, "name": "ЛДПР", "logo": "assets/img/fractions/placeholder.svg"},
  {"id": 4, "name": "Справедливая Россия", "logo": "assets/img/fractions/placeholder.svg"},
  {"id": 5, "name": "Родина", "logo": "assets/img/fractions/placeholder.svg"}
];

// Глобальные переменные для работы с данными
let deputiesData = DEPUTIES_DATA;
let committeesData = COMMITTEES_DATA;
let fractionsData = FRACTIONS_DATA;
let currentFilter = 'all';
let currentCommittee = '';
let currentFraction = '';

// Инициализация секции депутатов
function initDeputiesSection() {
    populateDropdowns();
    renderDeputies();
    setupFilters();
}

// Заполнение выпадающих списков
function populateDropdowns() {
    const committeeSelect = document.getElementById('committee-select');
    const fractionSelect = document.getElementById('fraction-select');

    if (!committeeSelect || !fractionSelect) return;

    // Заполнение комитетов
    committeesData.forEach(committee => {
        const option = document.createElement('option');
        option.value = committee.name;
        option.textContent = committee.name;
        committeeSelect.appendChild(option);
    });

    // Заполнение фракций
    fractionsData.forEach(fraction => {
        const option = document.createElement('option');
        option.value = fraction.name;
        option.textContent = fraction.name;
        fractionSelect.appendChild(option);
    });
}

// Настройка фильтров
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const committeeSelect = document.getElementById('committee-select');
    const fractionSelect = document.getElementById('fraction-select');
    const searchDropdowns = document.querySelector('.search-dropdowns');

    if (!filterButtons.length || !searchDropdowns) return;

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Убираем активный класс со всех кнопок
            filterButtons.forEach(b => b.classList.remove('active'));
            // Добавляем активный класс на нажатую кнопку
            btn.classList.add('active');
            
            currentFilter = btn.dataset.filter;
            
            // Показываем/скрываем выпадающие списки
            if (currentFilter === 'committee' || currentFilter === 'fraction') {
                searchDropdowns.style.display = 'flex';
                if (currentFilter === 'committee') {
                    if (committeeSelect) committeeSelect.style.display = 'block';
                    if (fractionSelect) fractionSelect.style.display = 'none';
                } else {
                    if (committeeSelect) committeeSelect.style.display = 'none';
                    if (fractionSelect) fractionSelect.style.display = 'block';
                }
            } else {
                searchDropdowns.style.display = 'none';
                currentCommittee = '';
                currentFraction = '';
            }
            
            renderDeputies();
        });
    });

    // Обработчики для выпадающих списков
    if (committeeSelect) {
        committeeSelect.addEventListener('change', (e) => {
            currentCommittee = e.target.value;
            renderDeputies();
        });
    }

    if (fractionSelect) {
        fractionSelect.addEventListener('change', (e) => {
            currentFraction = e.target.value;
            renderDeputies();
        });
    }
}

// Фильтрация депутатов
function filterDeputies() {
    let filtered = [...deputiesData];

    if (currentFilter === 'committee' && currentCommittee) {
        filtered = filtered.filter(deputy => deputy.committee === currentCommittee);
        // Сортируем по порядковому номеру после фильтрации
        filtered.sort((a, b) => {
            const orderA = a.order || 999;
            const orderB = b.order || 999;
            return orderA - orderB;
        });
    } else if (currentFilter === 'fraction' && currentFraction) {
        filtered = filtered.filter(deputy => deputy.fraction === currentFraction);
        // Сортируем по порядковому номеру после фильтрации
        filtered.sort((a, b) => {
            const orderA = a.order || 999;
            const orderB = b.order || 999;
            return orderA - orderB;
        });
    } else if (currentFilter === 'alphabet') {
        filtered.sort((a, b) => {
            const nameA = `${a.surname} ${a.name} ${a.patronymic}`;
            const nameB = `${b.surname} ${b.name} ${b.patronymic}`;
            return nameA.localeCompare(nameB, 'ru');
        });
    } else {
        // По умолчанию сортируем по порядковому номеру
        filtered.sort((a, b) => {
            const orderA = a.order || 999;
            const orderB = b.order || 999;
            return orderA - orderB;
        });
    }

    return filtered;
}

// Отображение депутатов
function renderDeputies() {
    const grid = document.getElementById('deputies-grid');
    if (!grid) return;

    const filtered = filterDeputies();

    grid.innerHTML = '';

    if (filtered.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: #6b7280; padding: 40px;">Депутаты не найдены</p>';
        return;
    }

    filtered.forEach(deputy => {
        const card = document.createElement('a');
        card.href = `#deputy-${deputy.id}`;
        card.className = 'deputy-card';
        card.setAttribute('role', 'listitem');

        const fullName = `${deputy.surname} ${deputy.name} ${deputy.patronymic}`;

        card.innerHTML = `
            <div class="deputy-photo">
                <img src="${deputy.photo}" alt="${fullName}" loading="lazy" draggable="false">
            </div>
            <div class="deputy-info">
                <h3 class="deputy-name"><span class="deputy-surname">${deputy.surname}</span><br>${deputy.name} ${deputy.patronymic}</h3>
                ${deputy.position ? `<div class="deputy-position">${deputy.position}</div>` : ''}
                <div class="deputy-committee">${deputy.committee}</div>
                <div class="deputy-fraction">${deputy.fraction}</div>
            </div>
        `;

        grid.appendChild(card);
    });
}

// Инициализация при загрузке страницы
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDeputiesSection);
} else {
    initDeputiesSection();
}
