// табы в сервисах
//ищем табы
const tabsList = document.querySelectorAll('.link-service');
//ищем контент таба
const tabsContent = document.querySelectorAll('.list-content');

tabsList.forEach(function (item) {
    item.addEventListener('click', function () {
        let currentLink = item;
        //записываем дата атрибут в переменную
        let tabId = currentLink.getAttribute('data-list');
        //делаем проверку на поторный клик, чтобы еще раз не проверять есть ли классы
        if (!currentLink.classList.contains('active')) {
            let currentTab = document.querySelector(tabId);
            //перебираем элементы и удаляем класс у таба
            tabsList.forEach(function (item) {
                item.classList.remove('active');
            });
            //перебираем элементы  и удаяем класс у контента
            tabsContent.forEach(function (item) {
                item.classList.remove('active');
            });
            //добавляем класс табу
            currentLink.classList.add('active');
            //добавляем класс контенту
            currentTab.classList.add('active');
        }
    });
});

//слайдер отзывов с помощью библиотеки slick jquery
$('.slaider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.block-slaider'
});
$('.block-slaider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slaider-main',
    variableWidth: true,
    centerMode: true,
    focusOnSelect: true,
    prevArrow: '#arrow-slider-left',
    nextArrow: '#arrow-slider-right'
});

//имитация подгрузки
$('.load-btn').on('click', function (e) {
    e.preventDefault();
    //удаляем класс, который скрывает 12 изображений
    $('.block-amazing-img-more').removeClass('hide');
    //удаляем кнопку
    $('.load-btn').removeClass('load-btn');
});

// функция фильтров
const filterImg = document.querySelectorAll('.box');
const linkFilter = document.querySelectorAll('.link-filter');

document.querySelector('.list-filter').addEventListener('click', (event) => {
    // делаем проверку на нажатие
    if (event.target.tagName !== 'LI') return false;
    // две строки на удаление и добавление класса для таба
    event.target.closest('.list-filter').querySelector('.filter-current').classList.remove('filter-current');
    event.target.classList.add('filter-current');
    //в переменную записываем дата атрибут элемента на котором произошло нажатие
    let filterClass = event.target.dataset['f'];
    filterImg.forEach((elem) => {
        //удаляем класс , который мог скрывать какой-то элемент
        elem.classList.remove('none');
        // делем проверку на присутствие класса, который соответствует датаатрибуту
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            //убираем все изображения не соответствующие атрибуту
            elem.classList.add('none');
        }
    });
});
