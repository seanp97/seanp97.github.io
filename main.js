function firstHero() {
    $(".bgImage").css('background-image','linear-gradient(0deg, rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)), url("https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60 100w")').delay(500);
}

function secondHero() {
    $(".bgImage").css('background-image','linear-gradient(0deg, rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)), url("https://images.unsplash.com/photo-1546146830-2cca9512c68e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80 500w")').delay(500);
}

function thirdHero() {
    $(".bgImage").css('background-image','linear-gradient(0deg, rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)), url("https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=6016&q=80")').delay(500);
}

function fourthHero() {
    $(".bgImage").css('background-image','linear-gradient(0deg, rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)), url("https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=60 100w")').delay(500);
}

function overlayFadeOut() {
    setTimeout(function () {
        $(".overlayLoad").fadeOut(650);
    },1000);

    setTimeout(function () {
        $(".navCont").css({'border-bottom' : '2px solid #fff'}).fadeIn(600);
    }, 2250);
}

function liFadeIn() {
    setTimeout(function () {
        $("ul li:first-child").fadeIn(700);
    },2000);

    setTimeout(function () {
        $("ul li:nth-child(2)").fadeIn(700);
    },2250);

    setTimeout(function () {
        $("ul li:nth-child(3)").fadeIn(700);
    },2500);

    setTimeout(function () {
        $("ul li:nth-child(4)").fadeIn(700);
    },2750);
}

function titleChange() {
    $(".navCont li").each(function () {
        $(this).click(function () {
            var navText = $(this).text();
            var clientName = "Sean Pelser - " + navText;
            $(document).prop('title', clientName);

            $(this).addClass("navHover");
            $(".navCont li").not(this).removeClass("navHover");
        });
    });
}

function closeModal() {
    $(".modal .fa-close").click(function () {
        $('.modal').modal('hide');
    });
}

$(document).ready(function () {
    if ($(window).width() > 900) {
        overlayFadeOut();
    }
    if ($(window).width() > 900) {
        liFadeIn();
    }
    titleChange();
    closeModal();
    if ($(window).width() > 900) { 
        setTimeout(function () {
            $("ul.navLink li:first-child").trigger("click");
        },3450);
    }
    else {
        setTimeout(function () {
            $("ul.navLink li:first-child").trigger("click");
        },500);
    }
});

$(document).resize(function () {
    $(".overlayLoad").hide(50);
});