'use strict';
$(window).load(function() {


    // LIGHTBOX VIDEO
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

    //PRELOADER
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.


    if ($('.isotope_items').length) {

        // PORTFOLIO ISOTOPE
        var $container = $('.isotope_items');
        $container.isotope();

        $('.portfolio_filter ul li').on("click", function() {
            $(".portfolio_filter ul li").removeClass("select-cat");
            $(this).addClass("select-cat");
            var selector = $(this).attr('data-filter');
            $(".isotope_items").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
            return false;
        });

    }

}); // window load end 



$(document).ready(function() {


    // WOW JS
    new WOW({ mobile: false }).init();



    //SMOOTH SCROLL
    $(document).on("scroll", onScroll);
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function() {
            $(this).removeClass('active');
            if ($(window).width() < 837) {
                $('.nav-menu').slideUp();
            }
        });

        $(this).addClass('active');

        var target = this.hash,
            //menu = target;
            target = $(target);
        $('html, body').stop().animate({
            'scrollTop': target.offset().top - 70
        }, 750, 'swing');
    });


    function onScroll(event) {
        if ($('#home').length) {
            var scrollPos = $(document).scrollTop();
            $('nav ul li a').each(function() {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));
                /*       if (refElement.position().top - 50 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                          $('nav ul li a').removeClass("active");
                          currLink.addClass("active");
                      } else {
                          currLink.removeClass("active");
                      } */
            });
        }
    }


    //NAVBAR SHOW - HIDE
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var homeheight = $(".home").height() - 86;

        if (scroll > homeheight) {
            $("nav").slideDown(100);
        } else {
            $("nav").slideUp(100);
        }
    });


    // RESPONSIVE MENU
    $('.responsive').on('click', function(e) {
        $('.nav-menu').slideToggle();
    });


    // HOME PAGE HEIGHT
    function centerInit() {
        var hometext = $('.home')

        hometext.css({
            "height": $(window).height() + "px"
        });
    }
    centerInit();
    $(window).resize(centerInit);


    // HOME TYPED JS
    $(".element").typed({
        strings: ["Leon Ring", " a Web Developer"],
        typeSpeed: 10,
        loop: true,
        backDelay: 2000
    });



    // MAGNIFIC POPUP FOR PORTFOLIO PAGE
    $('.link').magnificPopup({
        type: 'image',
        gallery: { enabled: true },
        zoom: { enabled: true, duration: 300 }
    });

    // OWL CAROUSEL GENERAL JS
    var owlcar = $('.owl-carousel');
    if (owlcar.length) {
        owlcar.each(function() {
            var $owl = $(this);
            var itemsData = $owl.data('items');
            var autoPlayData = $owl.data('autoplay');
            var paginationData = $owl.data('pagination');
            var navigationData = $owl.data('navigation');
            var stopOnHoverData = $owl.data('stop-on-hover');
            var itemsDesktopData = $owl.data('items-desktop');
            var itemsDesktopSmallData = $owl.data('items-desktop-small');
            var itemsTabletData = $owl.data('items-tablet');
            var itemsTabletSmallData = $owl.data('items-tablet-small');
            $owl.owlCarousel({
                items: itemsData,
                pagination: paginationData,
                navigation: navigationData,
                autoPlay: autoPlayData,
                stopOnHover: stopOnHoverData,
                navigationText: ["<", ">"],
                itemsCustom: [
                    [0, 1],
                    [500, itemsTabletSmallData],
                    [710, itemsTabletData],
                    [992, itemsDesktopSmallData],
                    [1199, itemsDesktopData]
                ],
            });
        });
    }



});
// document ready end 


const angular = ["ringoffire.jpg"];
const javaScript = ["zoom_pollo_loco.png", "pokedex.jpg", "join.png"];
const Classes = ['el_pollo_img', 'img_portfolio', 'join_img', 'img_portfolio']
const overlayText = ['El Pollo Loco - Jump and Run Game', 'PokeDex - working with Rest Api', 'Join - Canbanboard', 'Ring Of Fire - Multiplayergame']
const links = ['https://leon-ring.developerakademie.net/Projekt%208%20-%20El_Pollo_Loco/index.html', 'https://leon-ring.developerakademie.net/Projekt%207%20-%20PokedeX/index.html', 'https://leon-ring.developerakademie.net/Join/index.html', 'https://leon-ring.developerakademie.net/ringooffire/']
let currentPorjects = all;;
let delay = 0.5;

function render() {
    selectPortfolio('all')
}

function navigateBack() {
    window.location.href = 'https://leon-ring.developerakademie.net/portfolio/index.html'
}

function selectPortfolio(id) {
    delay = 0.5;
    if (id === "javaScript") {
        currentPorjects = 'js';
        loadPortfolioJs()
    } else if (id === "angular") {
        currentPorjects = 'ng';
        loadPortfolioAngular()
    } else if (currentPorjects !== "all") {
        currentPorjects = 'all';
        loadPortfolioJs()
        loadPortfolioAngular()
    }
}

function loadPortfolioAngular() {
    if (currentPorjects !== 'all') {
        document.getElementById('containerPortfolio').innerHTML = "";
    }
    document.getElementById('containerPortfolio').style.opacity = 0;

    for (let i = 0; i < angular.length; i++) {
        const img = angular[i];
        let newId = javaScript.length + i
        const clas = Classes[newId];
        const link = links[newId];
        document.getElementById('containerPortfolio').innerHTML += generatePortfolio(img, clas, delay, newId, link);
        delay += 0.2;
    }

    setTimeout(() => {
        document.getElementById('containerPortfolio').style.opacity = 1;
    }, 300);
}

function loadPortfolioJs() {
    document.getElementById('containerPortfolio').innerHTML = "";
    document.getElementById('containerPortfolio').style.opacity = 0;

    for (let i = 0; i < javaScript.length; i++) {
        const img = javaScript[i];
        const jsclass = Classes[i];
        const link = links[i];
        document.getElementById('containerPortfolio').innerHTML += generatePortfolio(img, jsclass, delay, i, link);
        delay += 0.2;
    }

    setTimeout(() => {
        document.getElementById('containerPortfolio').style.opacity = 1;
    }, 300);
}

function generatePortfolio(img, clas, delay, i, link) {
    return `  
    <div class="place_portfolio_box  wow fadeUp2" data-wow-delay="${delay}s">
        <a target="_blank" href="${link}" onmouseleave="hoverOfProject()" onmouseenter="hoverOnProject(this.id)" id="project${i}" class="hoverContainer"> </a>
        <div  id="p${i}" class="box_portfolio" >
            <img  class="${clas}" src="images/${img}">
        </div>
    </div>`
}

function hoverOnProject(id) {
    let box = document.getElementById(id).parentElement;
    let portfolioBox = box.querySelector(".box_portfolio");
    let idNum = id.replace(/^\D+/g, '');
    portfolioBox.innerHTML += generateOverlay(idNum, overlayText)
}

function hoverOfProject() {
    const overlayProjects = document.querySelectorAll(".overlay_project");
    overlayProjects.forEach((overlayProject) => {
        overlayProject.remove()
    });
}

function generateOverlay(id, overlay) {
    return `
    <div class="overlay_project wow fadeInUpBig" >
    <p id="overlayText${id}" class="overlay_text">${overlay[id]}</p>
    </div>`
}

/* Contact Form JS
(function($) {
    'use strict';

    $(".contact-form").on('submit', function(e) {
        e.preventDefault();

        var uri = $(this).attr('action');
        $("#con_submit").val('Wait...');
        var con_name = $("#con_name").val();
        var con_email = $("#con_email").val();
        var con_message = $("#con_message").val();

        var required = 0;
        $(".requie", this).each(function() {
            if ($(this).val() == '') {
                $(this).addClass('reqError');
                required += 1;
            } else {
                if ($(this).hasClass('reqError')) {
                    $(this).removeClass('reqError');
                    if (required > 0) {
                        required -= 1;
                    }
                }
            }
        });
        if (required === 0) {
            $.ajax({
                type: "POST",
                url: 'mail.php',
                data: { con_name: con_name, con_email: con_email, con_message: con_message },
                success: function(data) {
                    $(".contact-form input, .contact-form textarea").val('');
                    $("#con_submit, .sitebtn").val('Done!');
                    $("#con_submit .sitebtn").addClass("ok");
                }
            });
        } else {
            $("#con_submit, .sitebtn").val('Failed!');
        }
    });
    $(".requie").keyup(function() {
        $(this).removeClass('reqError');
    });

})(jQuery); */