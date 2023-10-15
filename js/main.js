let burgerBtn = document.querySelector('.burger');

burgerBtn.addEventListener('click', () => {
    document.querySelector('.header').classList.toggle('active');
    window.setTimeout(() => {
        document.querySelector('.header__phone').classList.toggle('active');
    }, 50)
    burgerBtn.classList.toggle('active');
});

if (document.querySelector('.modal-form')) {
    let btnModalOpen = document.querySelector('.top-page__btn');
    let modal = document.querySelector('.modal-form');
    let btnModalClose = document.querySelector('.modal-form__close');
    btnModalOpen.addEventListener('click', () => {
        modal.setAttribute('open', true);
        modal.classList.add('open');
        window.setTimeout(() => {
            modal.querySelector('.modal-form__content').classList.add('active');
        }, 300);
    });
    btnModalClose.addEventListener('click', () => {
        modal.querySelector('.modal-form__content').classList.remove('active');

        window.setTimeout(() => {
            modal.classList.remove('open');
        }, 200);

        window.setTimeout(() => {
            modal.setAttribute('open', false);
        })
    });
}

if (document.querySelector('.reviews__slider')) {
    const reviews = new Swiper('.reviews__slider', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,


        navigation: {
            nextEl: '.reviews-button-next',
            prevEl: '.reviews-button-prev',
        },

    });
}
if (document.querySelector('.photos__slider')) {
    const photos = new Swiper('.photos__slider', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1.95,
        centeredSlides: true,
        spaceBetween: '30px',

        navigation: {
            nextEl: '.photos-button-next',
            prevEl: '.photos-button-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            993: {
                spaceBetween: 30
            },
            481: {
                slidesPerView: 1.95,
                slidesPerView: 1,
            },
            280: {
                spaceBetween: 15,
                slidesPerView: 1,
            }
        }
    });
}

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollSmoother.isTouch !== 1) {
    ScrollSmoother.create({
        wrapper: '.scroll-effect',
        content: '.wrapper',
        smooth: 1.2,
        effects: true,
    });

    gsap.fromTo('.info__decor', { x: 100, opacity: 0.1, y: 50 }, {
        x: 0,
        opacity: 1,
        y: 0,
        ease: Linear.easeNone,
        scrollTrigger: {
            trigger: '.info',
            start: document.querySelector('.top-page').clientHeight - 400,
            end: document.querySelector('.top-page').clientHeight - 400 + document.querySelector('.info').clientHeight / 2,

            scrub: true
        }
    });
    gsap.fromTo('.info__list', { x: -100, opacity: 0.1, y: 50 }, {
        x: 0,
        opacity: 1,
        y: 0,
        ease: Linear.easeNone,

        scrollTrigger: {
            trigger: '.info',
            start: document.querySelector('.top-page').clientHeight - 400,
            end: document.querySelector('.top-page').clientHeight - 400 + document.querySelector('.info').clientHeight / 2,

            scrub: true
        }
    });

    gsap.fromTo('.reviews__inner', { opacity: 0.2 }, {
        opacity: 1,
        scrollTrigger: {
            trigger: '.reviews',
            start: document.querySelector('.reviews').offsetTop - 500,
            end: document.querySelector('.reviews').offsetTop - 500 + document.querySelector('.reviews').clientHeight / 2,

            scrub: true
        }
    });

    // let itemsL = gsap.utils.toArray('.gallery-left .gallery__item')

    // itemsL.forEach(item => {
    //     gsap.fromTo(item, { opacity: 0, x: -40 }, {
    //         opacity: 1,
    //         x: 0,
    //         scrollTrigger: {
    //             trigger: item,
    //             start: '-500',
    //             end: '-100',
    //             scrub: true
    //         }
    //     })
    // })
    // let itemsR = gsap.utils.toArray('.gallery-right .gallery__item')

    // itemsR.forEach(item => {
    //     gsap.fromTo(item, { opacity: 0, x: 70 }, {
    //         opacity: 1,
    //         x: 0,
    //         scrollTrigger: {
    //             trigger: item,
    //             start: '-500',
    //             end: '-100',
    //             scrub: true
    //         }
    //     })
    // })

}

