$(function () {
    /****************************************/
    /******         jQUERY             ******/
    /******      COMMON SECTION        ******/
    /******                            ******/
    $("#burger_menu_button").pageslide();

    pageChecker(); // déclencheur des fonctions de redimensionnements suivant la page affichée

    // pageslide est le plugin qui génére le menu latéral gauche
    // il devient visible quand la largeur de la page est inférieure à 600px et qu'on appuie sur le bouton burger
    $(window).resize(function () {
        let windowWidth = $(window).width();
        let href = window.location.href;
        let suitablePageForMobile = true;

        pageIsGiant = href.includes('planetesgeantes.html') ? true : false;
        pageIsInt = href.includes('planetesint.html') ? true : false;
        suitablePageForMobile = ((pageIsGiant) || (pageIsInt)) ? false : true;

        if (windowWidth < 600) {
            // renvoie vers index.html si on essaie d'afficher les pages des planètes géantes ou des planètes intérieurs sur un mobile
            if (suitablePageForMobile == false) {
                href = href.replace('planetesgeantes.html', '');
                href = href.replace('planetesint.html', '');
                href += 'index.html';
                window.location.replace(href);
            }

            // si la largeur est inférieure à 600px et que pageslide est caché alors le body peut s'afficher sans restriction
            if ($('#pageslide').is(':hidden')) {
                $('body').attr('style', '');
            }
        } else { // repli du pageslide si la largeur dépasse 600px
            $.pageslide.close();
            $('body').attr('style', '');
        }

        pageChecker(); // déclencheur des fonctions de redimensionnements suivant la page affichée
    });

    /******                            ******/
    /******      COMMON SECTION        ******/
    /******         jQUERY             ******/
    /****************************************/
    /******         jQUERY             ******/
    /******       MAIN ACCUEIL         ******/
    /******                            ******/

    /*** LEFT SECTION ***/
    // menu accordéon dans la partie gauche de la page principale
    $('#mainaccueil aside h2').click(function () {
        $('#mainaccueil aside p').slideUp("slow");

        var affected_Element = $(this).next();
        if ($(affected_Element).is(":hidden")) {
            $(affected_Element).slideDown("slow");
        } else {
            $(affected_Element).slideUp("slow");
        }
    });

    /******                            ******/
    /******       MAIN ACCUEIL         ******/
    /******         jQUERY             ******/
    /****************************************/
    /****************************************/
    /******         jQUERY             ******/
    /******      MAIN PLANETES INT     ******/
    /******                            ******/


    // effet de fondu au chargement de la page pour éviter de voir les planetes glitcher
    $('#mainplanetesint').ready(function () {
        $('#mainplanetesint section').fadeIn(1000);
    });

    // déclenchement de la rotation des planètes dans la page des planètes intérieures
    $('#mainplanetesint aside li input').click(function () {
        var affected_Element = $(this).attr('id');

        switch (affected_Element) {
            case 'mercurybutton':
                $('#sol').css({
                    'transition': 'linear 1.5s'
                });
                $('#mercury').addClass('mercuryanim');
                break;

            case 'venusbutton':
                $('#sol').css({
                    'transition': 'linear 1.5s'
                });
                $('#venus').addClass('venusanim');
                break;

            case 'earthbutton':
                $('#sol').css({
                    'transition': 'linear 1.5s'
                });
                $('#earth').addClass('earthanim');
                break;

            case 'marsbutton':
                $('#sol').css({
                    'transition': 'linear 1.5s'
                });
                $('#mars').addClass('marsanim');
                break;

            case 'animbutton':
                $('#sol').css({
                    'transition': 'linear 1.5s'
                });
                $('#mercury').addClass('mercuryanim');
                $('#venus').addClass('venusanim');
                $('#earth').addClass('earthanim');
                $('#mars').addClass('marsanim');
                break;

            case 'resetbutton':
                $('.planets').fadeOut(500, 'linear', function () {
                    $('.planets').removeClass('mercuryanim venusanim earthanim marsanim').fadeIn(500, 'linear').delay(500);
                    solResize();
                    $('#sol').delay(3000).css({
                        'transition': 'linear 1s'
                    });
                });
                break;

            default:
                console.log('Buttons for planet int have issues');
                break;
        }

        solResize(); //
    });

    /******                            ******/
    /******      MAIN PLANETES INT     ******/
    /******         jQUERY             ******/
    /****************************************/
    /******         jQUERY             ******/
    /******   MAIN PLANETES GEANTES    ******/
    /******                            ******/

    // contenu de la boite modale dans planètes géantes suivant la planète cliquée
    $('#giantcontainer li').click(function () {
        var affected_Element = $(this).attr('id');
        var popup_Content;

        switch (affected_Element) {
            case 'jupiter':
                popup_Content = {
                    imgPath: 'img/jupiter.png',
                    planetName: 'Jupiter',
                    planetDescr: 'Victus universis caro ferina est lactisque abundans copia qua sustentantur, et herbae multiplices et siquae alites capi per aucupium possint, et plerosque mos vidimus frumenti usum et vini penitus ignorantes.'
                };
                break;

            case 'saturne':
                popup_Content = {
                    imgPath: 'img/saturne.png',
                    planetName: 'Saturne',
                    planetDescr: 'Proinde concepta rabie saeviore, quam desperatio incendebat et fames, amplificatis viribus ardore incohibili in excidium urbium matris Seleuciae efferebantur, quam comes tuebatur Castricius tresque legiones bellicis sudoribus induratae.'
                };
                break;

            case 'uranus':
                popup_Content = {
                    imgPath: 'img/uranus.png',
                    planetName: 'Uranus',
                    planetDescr: 'Quanta autem vis amicitiae sit, ex hoc intellegi maxime potest, quod ex infinita societate generis humani, quam conciliavit ipsa natura, ita contracta res est et adducta in angustum ut omnis caritas aut inter duos aut inter paucos iungeretur.'
                };
                break;

            case 'neptune':
                popup_Content = {
                    imgPath: 'img/neptune.png',
                    planetName: 'Neptune',
                    planetDescr: 'Alii nullo quaerente vultus severitate adsimulata patrimonia sua in inmensum extollunt, cultorum ut puta feracium multiplicantes annuos fructus, quae a primo ad ultimum solem se abunde iactitant possidere, ignorantes profecto maiores suos, per quos ita magnitudo Romana porrigitur, non divitiis eluxisse sed per bella saevissima, nec opibus nec victu nec indumentorum vilitate gregariis militibus discrepantes opposita cuncta superasse virtute.'
                };
                break;

            default:
                console.log('Planet selection has issues');
                break;
        }

        $('#planetpic').attr('src', popup_Content.imgPath);
        $('#planetname').text(popup_Content.planetName);
        $('#poptext').text(popup_Content.planetDescr);

        $('#conteneur').css({
            'opacity': '0.4',
            'pointer-events': 'none'
        });

        $('#popup').fadeIn();
    });

    // fermeture de la boite modale au clic
    $('#cross').click(function () {
        $('#popup').fadeOut();

        $('#conteneur').css({
            'opacity': '1',
            'pointer-events': 'auto'
        });
    });


}); // FIN DU SCRIPT JQUERY

/****************************************/
/******           jS               ******/
/******      COMMON SECTION        ******/
/******                            ******/

// déclencheur des fonctions de redimensionnements suivant la page affichée
function pageChecker() {
    var actualPage = document.getElementById("conteneur").className;
    if (actualPage == "indexPage") {
        spacemanResize();
    } else if (actualPage == "giantPage") {
        giantResize();
    } else if (actualPage == "intPage") {
        solResize();
    }
}

/******                            ******/
/******      COMMON SECTION        ******/
/******           jS               ******/
/****************************************/
/******           jS               ******/
/******       MAIN ACCUEIL         ******/
/******                            ******/

/*** RIGHT SECTION ***/

// redimensionnement de l'astronaute qui défile sur la page d'index
// sa taille dépend de la taille de la fenêtre
// la taille du texte "hello" dépend aussi de la taille de la fenêtre
function spacemanResize() {
    var windowWidth = $(window).width();
    var spacemanMaxWidth;
    var helloLeftOffset;

    if (windowWidth > 1024) {
        spacemanMaxWidth = 100 + '%';
        helloLeftOffset = 4.3 + 'em';
    } else if ((windowWidth > 600) && (windowWidth < 1024)) {
        spacemanMaxWidth = (parseInt((windowWidth - 604) / 7) + 40) + '%';
        helloLeftOffset = (((windowWidth - 604) / 168) + 1.8).toFixed(1) + 'em';
    }

    $('#spaceman').css('max-width', spacemanMaxWidth);
    $('#spacebox p').css('left', helloLeftOffset);
}

/******                            ******/
/******       MAIN ACCUEIL         ******/
/******           jS               ******/
/****************************************/
/****************************************/
/******           jS               ******/
/******      MAIN PLANETES INT     ******/
/******                            ******/

// redimensionnement du systéme solaire dans la plage des planètes internes
// l'idée est que les planètes ne sortent jamais du cadre, il y a un dézoom adapté à chaque cas de figure
// la taille de fenêtre est prise en compte

function solResize() {
    var windowWidth = $(window).width();
    var solScale;
    var solReScale;
    var solheight;

    if ($('#mars').hasClass('marsanim')) {
        solReScale = 0.5;
    } else if ($('#earth').hasClass('earthanim')) {
        solReScale = 0.6;
    } else if ($('#venus').hasClass('venusanim')) {
        solReScale = 0.7;
    } else if ($('#mercury').hasClass('mercuryanim')) {
        solReScale = 0.9;
    } else {
        solReScale = 1;
    }

    if (windowWidth > 1024) {
        solScale = 1 * solReScale;
        solheight = 25 + 'em';
    } else if ((windowWidth > 600) && (windowWidth < 1024)) {
        var windowVariation = (windowWidth - 600);
        solScale = (((windowVariation / 942) + 0.55).toFixed(2) * solReScale);
        solheight = ((windowVariation / 85) + 20).toFixed(2) + 'em';
    }

    $('#sol').css({
        'transform': 'scale(' + solScale + ')',
        'height': solheight
    });

}

/******                            ******/
/******      MAIN PLANETES INT     ******/
/******           jS               ******/
/****************************************/
/******           jS               ******/
/******   MAIN PLANETES GEANTES    ******/
/******                            ******/

// redimensionnement de la page des planetes géantes et de sa boite modale
function giantResize() {
    var windowWidth = $(window).width();
    var giantHeight;
    var popupHeight;
    var popupTop;

    if (windowWidth > 1024) {
        giantHeight = 18 + 'em';
        popupHeight = 30 + 'em';
        popupTop = 26 + 'em';
    } else if ((windowWidth > 600) && (windowWidth < 1024)) {
        giantHeight = resizer(60.57, 11);
        popupHeight = resizer(42.4, 20);
        popupTop = resizer(42.4, 16);
    }

    function resizer(divider, lowestValue) {
        var windowVariation = (windowWidth - 600);
        var resize = ((windowVariation / divider) + lowestValue).toFixed(1) + 'em';
        return resize;
    }

    $('#mainplanetesgeantes div').css('height', giantHeight);
    $('#popup').css('height', popupHeight);
    $('#popup').css('top', popupTop);
}

/******                            ******/
/******   MAIN PLANETES GEANTES    ******/
/******           jS               ******/
/****************************************/
/******           jS               ******/
/******        MAIN CONTACT        ******/
/******                            ******/

// fonction de config de Google Maps lancée depuis la ligne de décaration de l'API Google dans le HTML
function initMap() {
    var home = { // position affichée sur la map
        lat: 47.239428,
        lng: -1.354181
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        center: home,
        zoom: 18,
        mapTypeId: "hybrid"
    });
    var marker = new google.maps.Marker({ // position du pointeur sur la map
        position: home,
        map: map
    });
}

/******                            ******/
/******        MAIN CONTACT        ******/
/******           jS               ******/
/****************************************/