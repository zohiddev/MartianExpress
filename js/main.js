// Background image start

function ibg1() {
    let ibg = document.querySelectorAll(".ibg_g");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.background = 'linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
            ibg[i].style.backgroundSize = 'cover';
            ibg[i].style.backgroundPosition = 'center';
        }
    }
}

ibg1();

function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

// Background image end

// Slider start

$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});

// Slider end




// Menu - burger start 

const menuOpen = document.querySelector('.menu_open');
const menuClose = document.querySelector('.mobile_menu_close');
const modalBg = document.querySelector('.modal_bg');

menuOpen.addEventListener('click', function () {

    TweenMax.to('.mobile_menu', 1.5, {
        top: 0,
        opacity: 1,
        display: 'flex',
        ease: Power2.easeInOut
    });

    TweenMax.to('.modal_bg', 1.5, {
        opacity: 1,
        display: 'block',
        ease: Power2.easeInOut
    });

})

menuClose.addEventListener('click', function () {

    TweenMax.to('.mobile_menu', 1.5, {
        top: '-300px',
        opacity: 0,
        display: 'none',
        ease: Power2.easeInOut
    });

    TweenMax.to('.modal_bg', 1.5, {
        opacity: 0,
        display: 'none',
        ease: Power2.easeInOut
    });

})

modalBg.addEventListener('click', function () {

    TweenMax.to('.mobile_menu', 1.5, {
        top: '-300px',
        opacity: 0,
        display: 'none',
        ease: Power2.easeInOut
    });

    TweenMax.to('.modal_bg', 1.5, {
        opacity: 0,
        display: 'none',
        ease: Power2.easeInOut
    });

})


// Menu - burger start 

// Modal start

const modalOpen = document.querySelector('#modal_open');
const modalClose = document.querySelector('.modal_close_btn');
const menuModalOpen = document.querySelector('#menu_modal_open');

modalOpen.addEventListener('click', function () {
    TweenMax.to('.modal', 1.5, {
        top: 0,
        opacity: 1,
        display: 'block',
        ease: Power2.easeInOut
    });
})

modalClose.addEventListener('click', function () {
    TweenMax.to('.modal', 1.5, {
        top: '-100%',
        opacity: 0,
        display: 'none',
        ease: Power2.easeInOut
    });
})

menuModalOpen.addEventListener('click', function () {
    TweenMax.to('.mobile_menu', 1.5, {
        top: '-300px',
        opacity: 0,
        display: 'none',
        ease: Power2.easeInOut
    });

    TweenMax.to('.modal_bg', 1.5, {
        opacity: 0,
        display: 'none',
        ease: Power2.easeInOut
    });

    TweenMax.to('.modal', 1.5, {
        top: 0,
        opacity: 1,
        display: 'block',
        ease: Power2.easeInOut
    });
});

// Modal end

const forBrokers = document.querySelector('#for_brokers');
const forDrivers = document.querySelector('#for_drivers');


forBrokers.addEventListener('click', function () {
    TweenMax.to('.for_drivers', 1.5, {
        opacity: 0,
        display: 'none',
        ease: Power2.easeInOut
    });

    TweenMax.to('.for_brokers', 1.5, {
        opacity: 1,
        display: 'block',
        ease: Power2.easeInOut
    });

    function forBrokersView() {
        TweenMax.from('.offer_block_1 .offer_img', 1.5, {
            height: 0,
            ease: Expo.easeInOut
        })

        TweenMax.from('.offer_block_1 .offer_content_item', 1.5, {
            x: '100%',
            opacity: 0,
            stagger: 0.3,
            ease: Expo.easeInOut
        })
    }

    setTimeout(forBrokersView, 500)



    this.classList.add('status_active');
    forDrivers.classList.remove('status_active');

})

forDrivers.addEventListener('click', function () {
    TweenMax.to('.for_brokers', 1.5, {
        opacity: 0,
        display: 'none',
        ease: Power2.easeInOut
    });

    TweenMax.to('.for_drivers', 1.5, {
        opacity: 1,
        display: 'block',
        ease: Power2.easeInOut
    }, 1);

    TweenMax.from('.offer_block_4 .offer_img', 1.5, {
        height: 0,
        ease: Expo.easeInOut
    }, 2)

    TweenMax.from('.offer_block_4 .offer_content_item', 1.5, {
        x: '100%',
        opacity: 0,
        stagger: 0.3,
        ease: Expo.easeInOut
    }, 2)

    forBrokers.classList.remove('status_active');
    this.classList.add('status_active');


})

// Header animation start

function lodingAnim() {
    TweenMax.to('.loader_wrapper', 1.5, {
        top: '-100%',
        opacity: 0,
        display: 'none',
        ease: Expo.easeInOut
    });
}

setTimeout(lodingAnim, 3000)

gsap.from('.menu_logo', 1.5, {
    delay: 4,
    x: '-100%',
    opacity: 0,
    esing: Expo.easeInOut
})

gsap.from('.nav_item', 1.5, {
    delay: 4.2,
    stagger: 0.2,
    x: '-100%',
    opacity: 0,
    esing: Expo.easeInOut
})

gsap.from('.menu_btn', 1.5, {
    delay: 4.2,
    x: '100%',
    opacity: 0,
    esing: Expo.easeInOut
})

gsap.from('.header_title', 1.5, {
    delay: 4.3,
    y: '100%',
    opacity: 0,
    esing: Expo.easeInOut
})

gsap.from('.header_text', 1.5, {
    delay: 4.8,
    y: '100%',
    opacity: 0,
    esing: Expo.easeInOut
})
// Header animation end 

// Scroll animation start


if ($(window).width() > 500) {

    document.addEventListener('DOMContentLoaded', function () {
        let wh = window.innerHeight;

        var controller = new ScrollMagic.Controller({
            globalSceneOptions: {
                triggerHook: 'onEnter'
            }
        });



        // about section animation start

        var timeLine = new TimelineMax();

        timeLine.from('.about_content', 1.5, {
            delay: 0,
            y: '100%',
            opacity: 0,
            ease: Expo.easeInOut
        })
            .from('.about_title .caption', 1.5, {
                x: '-100%',
                opacity: 0,
                ease: Expo.easeInOut
            }, 1)

            .from('.about_title .text', 1.5, {
                y: '100%',
                opacity: 0,
                ease: Expo.easeInOut
            }, 1)

            .from('.about_img', 1.5, {
                height: 0,
                ease: Expo.easeInOut
            }, 1)

        var aboutScene = new ScrollMagic.Scene({
            triggerElement: '.about'
        })

            .setTween(timeLine)
            .addTo(controller);

        // about section animation end

        // Offer_block_1 section start

        var timeLine2 = new TimelineMax();

        timeLine2.from('.offer_title', 1.5, {
            delay: 0,
            y: '100%',
            opacity: 0,
            ease: Expo.easeInOut
        })

            .from('.offer_block_1 .offer_img', 1.5, {
                height: 0,
                ease: Expo.easeInOut
            }, 1)

            .from('.offer_block_1 .offer_content_item', 1.5, {
                x: '100%',
                opacity: 0,
                stagger: 0.3,
                ease: Expo.easeInOut
            }, '-=1')

        var offerBlockOneScene = new ScrollMagic.Scene({
            triggerElement: '.offer_block_1'
        })

            .setTween(timeLine2)
            .addTo(controller);

        // Offer_block_1 section end

        // Offer_block_2 section start


        var timeLine3 = new TimelineMax();

        timeLine3.from('.offer_block_2 .offer_img', 1, {
            delay: 0,
            height: 0,
            ease: Expo.easeInOut
        })

            .from('.offer_block_2 .offer_content_item', 1, {
                x: '-100%',
                opacity: 0,
                stagger: 0.3,
                ease: Expo.easeInOut
            }, '-=1')

        var offerBlockTwoScene = new ScrollMagic.Scene({
            triggerElement: '.offer_block_2'
        })

            .setTween(timeLine3)
            .addTo(controller);


        // Offer_block_2 section end

        // Offer_block_3 section start


        var timeLine4 = new TimelineMax();

        timeLine4.from('.offer_block_3 .offer_img', 1, {
            delay: 0,
            height: 0,
            ease: Expo.easeInOut
        })

            .from('.offer_block_3 .offer_content_item', 1, {
                x: '100%',
                opacity: 0,
                stagger: 0.3,
                ease: Expo.easeInOut
            }, '-=1')

        var offerBlockThreeScene = new ScrollMagic.Scene({
            triggerElement: '.offer_block_3'
        })

            .setTween(timeLine4)
            .addTo(controller);

        // Offer_block_3 section end

        // Offer_block_5 section start


        var timeLine5 = new TimelineMax();

        timeLine4.from('.offer_block_5 .offer_img', 1, {
            delay: 0,
            height: 0,
            ease: Expo.easeInOut
        })

            .from('.offer_block_5 .offer_content_item', 1, {
                x: '-100%',
                opacity: 0,
                stagger: 0.3,
                ease: Expo.easeInOut
            }, '-=1')

        var offerBlockFiveScene = new ScrollMagic.Scene({
            triggerElement: '.offer_block_5'
        })

            .setTween(timeLine5)
            .addTo(controller);

        // Offer_block_5 section end

        // offer_form section start


        var timeLine6 = new TimelineMax();

        timeLine6.from('.offer_forms_content h2', 1.5, {
            delay: 0,
            y: '-100%',
            opacity: 0,
            ease: Expo.easeInOut
        }, 1)

            .from('.offer_forms .form_group', 1, {
                delay: 0,
                y: '100%',
                opacity: 0,
                stagger: 0.3,
                ease: Expo.easeInOut
            }, '-=1')

        var offerFormsScene = new ScrollMagic.Scene({
            triggerElement: '.for_brokers .offer_forms'
        })

            .setTween(timeLine6)
            .addTo(controller);

        // offer_form section end

        // icon_block section start

        var timeLine7 = new TimelineMax();

        timeLine7.from('.icon_block_1', 1, {
            x: '-100%',
            opacity: 0,
            ease: Expo.easeInOut
        }, 1)

            .from('.icon_block_2', 1, {
                delay: 0,
                y: '100%',
                opacity: 0,
                ease: Expo.easeInOut
            }, 1)

            .from('.icon_block_3', 1, {
                x: '100%',
                opacity: 0,
                ease: Expo.easeInOut
            }, 1)

        var iconBlocksScene = new ScrollMagic.Scene({
            triggerElement: '.icon_blocks'
        })

            .setTween(timeLine7)
            .addTo(controller);

        // icon_block section end

        // slider section start

        var timeLine8 = new TimelineMax();

        timeLine8.from('.slider_title .caption', 1.3, {
            delay: 0,
            y: '-100%',
            opacity: 0,
            ease: Expo.easeInOut
        }, 1)

            .from('.slider_content', 1.3, {
                y: '100%',
                opacity: 0,
                ease: Expo.easeInOut
            }, 1)

            .from('.slick-prev', 1.3, {
                x: '-100%',
                opacity: 0,
                ease: Expo.easeInOut
            }, 1)

            .from('.slick-next', 1.3, {
                x: '100%',
                opacity: 0,
                ease: Expo.easeInOut
            }, 1)

            .from('.content_author p', 1.3, {
                y: '100%',
                opacity: 0,
                stagger: 0.2,
                ease: Expo.easeInOut
            }, 1)



        var sliderScene = new ScrollMagic.Scene({
            triggerElement: '.slider_section'
        })

            .setTween(timeLine8)
            .addTo(controller);

        // slider section end

        // contact section start

        var timeLine9 = new TimelineMax();

        timeLine9.from('.contact .gradient-bg', 1.5, {
            delay: 0,
            width: 0,
            ease: Expo.easeInOut
        }, 2.2)

            .from('.contact video', 1.5, {
                y: '100%',
                width: 0,
                ease: Expo.easeInOut
            }, 1)

            .from('.contact .offer_content_item', 1.5, {
                y: '-100%',
                opacity: 0,
                stagger: 0.3,
                ease: Expo.easeInOut
            }, 1)

            .from('.contact .form_group', 1.5, {
                y: '100%',
                opacity: 0,
                stagger: 0.3,
                ease: Expo.easeInOut
            }, 2)

        var contactScene = new ScrollMagic.Scene({
            triggerElement: '.contact'
        })

            .setTween(timeLine9)
            .addTo(controller);

        // contact section end
    })

}


// Scroll animation end