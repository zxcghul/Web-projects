window.addEventListener("DOMContentLoaded", () => {
    const e = document.querySelector(".select__header"),
    o = document.querySelector(".select__body"),
    t = document.querySelectorAll(".select__item"),
    l = document.querySelector(".select__title"),
    r = document.querySelector(".select__header img");
    e.addEventListener("click", () => {
        o.classList.contains("select__body--active") ?  (o.classList.remove("select__body--active"), r.style.transform = "rotate(0deg)", o.classList.add("select__body"), o.style.maxHeight = null) : (o.classList.remove("select__body"), o.classList.add("select__body--active"), r.style.transform = "rotate(180deg)", o.style.maxHeight = o.scrollHeight + "px")
    }),
    t.forEach((e, t) => {
        e.addEventListener("click", () => {
            l.textContent = e.textContent,
            o.classList.remove("select__body--active"),
            o.classList.add("select__body"),
            r.style.transform = "rotate(0deg)"
        })
    });





    let flag = 0;

window.addEventListener('scroll', function () {
    let scrollY = window.scrollY;
    let mapOffset = document.querySelector('.map').offsetTop;

    if ((scrollY >= mapOffset - 300) && (flag == 0)) {
         
    let center = [55.61044237811829,37.494683374332915];
    let ballon1 = [55.56044237811829,37.494683374332915];
    let ballon2 = [55.61044237811829,37.624683374332915];
    let ballon3 = [55.61644237811829,37.294683374332915];

    function init() {
        let map = new ymaps.Map('map-element', {
        center: center,
        zoom: 11
        });

        let myPlacemark = new ymaps.Placemark(ballon1, {
            balloonContent: `
            <style>
                .ballon1 {
                padding: 0.5rem 1.5rem 1.5rem 1.5rem;
                border: 0.1rem solid #d6e9c6;
                border-radius: 0.4rem;
                }
                .ballon1-place {
                    color: #2B3350;
                }
                b {
                    line-height: 3.5rem;
                    font-size: 2rem;
                }
            </style>
            <div class="ballon1" style="text-align:center;">
            <b>Магазин1</b>
            <br/>
            <span class="ballon1-place">Адрес:</span> ул. Пушкина, 1018
            <br/>
            <span class="ballon1-place">Режим работы:</span> с 8:00 до 20:00
            </div>
            `
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map/vector.svg',
            iconImageSize: [70, 100],
            iconImageOffset: [-35, -100],
        });

        let myPlacemark1 = new ymaps.Placemark(ballon2, {
            balloonContent: `
            <style>
                .ballon1 {
                padding: 0.5rem 1.5rem 1.5rem 1.5rem;
                border: 0.1rem solid #d6e9c6;
                border-radius: 0.4rem;
                }
                .ballon1-place {
                    color: #2B3350;
                }
                b {
                    line-height: 3.5rem;
                    font-size: 2rem;
                }
            </style>
            <div class="ballon1" style="text-align:center;">
            <b>Магазин2</b>
            <br/>
            <span class="ballon1-place">Адрес:</span> ул. Балоновская, 9918
            <br/>
            <span class="ballon1-place">Режим работы:</span> с 10:00 до 22:00
            </div>
            `
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map/vector.svg',
            iconImageSize: [70, 100],
            iconImageOffset: [-35, -100],
        });

        let myPlacemark2 = new ymaps.Placemark(ballon3, {
            balloonContent: `
            <style>
                .ballon1 {
                padding: 0.5rem 1.5rem 1.5rem 1.5rem;
                border: 0.1rem solid #d6e9c6;
                border-radius: 0.4rem;
                }
                .ballon1-place {
                    color: #2B3350;
                }
                b {
                    line-height: 3.5rem;
                    font-size: 2rem;
                }
            </style>
            <div class="ballon1" style="text-align:center;">
            <b>Магазин3</b>
            <br/>
            <span class="ballon1-place">Адрес:</span> ул. Программная, 101001
            <br/>
            <span class="ballon1-place">Режим работы:</span> с 00:00 до 11:11
            </div>
            `
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map/Vector.svg',
            iconImageSize: [70, 100],
            iconImageOffset: [-35, -100],
        });

    
        let playsmark = new ymaps.Placemark(center, {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map/Vector.svg',
        iconImageSize: [70, 100],
        iconImageOffset: [-30, -100]
        });

        map.controls.remove('geolocationControl'); // удаляем геолокацию
        map.controls.remove('searchControl'); // удаляем поиск
        map.controls.remove('trafficControl'); // удаляем контроль трафика
        map.controls.remove('typeSelector'); // удаляем тип
        map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
        map.controls.remove('zoomControl'); // удаляем контрол зуммирования
        map.controls.remove('rulerControl'); // удаляем контрол правил
        map.behaviors.disable(['scrollZoom']); // отключаем скролл карты

        map.geoObjects.add(myPlacemark);
        map.geoObjects.add(myPlacemark1);
        map.geoObjects.add(myPlacemark2);
        map.geoObjects.add(playsmark);
    }
    
    ymaps.ready(init);
    flag = 1;

    }
    
});





    const a = document.querySelector(".header__mobile"),
    c = document.querySelector(".header__burger"),
    n = document.querySelector(".header__cross"),
    d = document.querySelector("body");
    c.addEventListener("click", () => {
        a.classList.toggle("active"),
        c.style.display = "none",
        n.style.display = "block",
        d.classList.add("noscroll")
    }),
    n.addEventListener("click", () => {
        a.classList.toggle("active"),
        c.style.display = "block",
        n.style.display = "none",
        d.classList.remove("noscroll")
    });
    const i = document.querySelector(".modal"),
    m = document.querySelectorAll(".button-modal");
    m.forEach(e => {
        e.addEventListener("click", () => {
            i.classList.add("active"),
            d.classList.add("noscroll2")
        })
    }),
    i.addEventListener("click", e => {
        e.target.closest(".modal__inner") ||  (i.classList.remove("active"), d.classList.remove("noscroll2"))
    }),
    document.addEventListener("keydown", e => {
        "Escape" === e.key &&  (i.classList.remove("active"), d.classList.remove("noscroll2"))
    });
    new Swiper(".slider", {
        loop: !0,
        pagination: {
            clickable: !0,
            el: ".slider__pagination"
        },
        navigation: {
            nextEl: ".slider__arrow-right",
            prevEl: ".slider__arrow-left"
        }
    });
    let u = document.querySelector(".facts__items"),
    _ = document.querySelectorAll(".facts__item"),
    y = document.querySelectorAll(".facts__answer"),
    v = document.querySelectorAll(".facts__plus"),
    f = document.querySelectorAll(".facts__minus");
    u.addEventListener("click", e => {
        var o = e.target.closest(".facts__item");
        o &&  _.forEach((e, t) => {
            (e !== o ||  !  _[t].classList.contains("facts__item--active")) &&  e === o ?  (y[t].classList.add("active"), _[t].classList.add("facts__item--active"), v[t].style.display = "none", f[t].style.display = "flex") : (y[t].classList.remove("active"), _[t].classList.remove("facts__item--active"), v[t].style.display = "flex", f[t].style.display = "none")
        })
    });
    const g = document.querySelector(".form__elements"),
    L = g.querySelector('input[type="tel"]'),
    p = new Inputmask("+7 (999) 999-99-99");
    p.mask(L);
    const h = new JustValidate(".form__elements");
    h.addField("#name", [{
        rule: "minLength",
        value: 2,
        errorMessage: "Кол-во символов меньше 2"
    },
    {
        rule: "maxLength",
        value: 30,
        errorMessage: "Кол-во символов больше 30"
    },
    {
        rule: "required",
        value: !0,
        errorMessage: "Введите имя"
    }]).addField("#check", [{
        rule: "required",
        value: !0,
        errorMessage: "Поставьте галочку"
    }]).addField("#telephone", [{
        rule: "required",
        value: !0,
        errorMessage: "Введите номер телефона"
    },
    {
        rule: "function",
        validator: function() {
            return 10 === L.inputmask.unmaskedvalue().length
        },
        errorMessage: "Введите коректный номер телефона!"
    }]).onSuccess(e => {
        if (document.querySelector("#check").checked) {
            const o = new FormData(e.target),
            l = {};
            o.forEach((e, t) => {
                l[t] = e
            }),
            t = l,
            fetch("mail.php", {
                method: "POST",
                body: JSON.stringify(t),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then(e => e.json()).then(e => {
                console.log("Письмо успешно ушло!");
                const i = document.querySelector(".modal"),
                m = document.querySelectorAll(".button-modal2");
                i.classList.add("active"),
                d.classList.add("noscroll2")
            });
            e.target.reset()
        }
        var t
    })
});
var ele = document.querySelector(".test__img-container"),
ele2 = document.querySelector(".test__txt"),
ele3 = document.querySelector(".slider__header"),
ele4 = document.querySelectorAll(".delivery__items"),
ele5 = document.querySelector(".test__img-container");
window.innerWidth <  768 &&  (ele.removeAttribute("data-aos"), ele2.removeAttribute("data-aos"), ele3.removeAttribute("data-aos"), ele5.removeAttribute("data-aos"), ele4.forEach((e, t) => {
    e.removeAttribute("data-aos")
}));