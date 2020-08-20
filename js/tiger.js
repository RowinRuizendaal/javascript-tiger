/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/


//Punten
var point = 0; //Punten telling
///

//Prices shop levels
var priceClicker = 200; //Begin prijs van automatic cliker
var clickerLevel = 1; //Level van automatic cliker 


//Achievements default
var aantal = 0; //Aantal verdiende achievements
var resetTigerAchievement = false; //Achievement reset tiger gelijk aan FALSE
var hiddenFeatureAchievement = false; //Achievement hidden feature gelijk aan FALSE
var calculateAchievement = false;

///



function Headlineimage() {
    var artikel = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg'];
    var randArtikel = artikel[Math.floor(Math.random() * artikel.length)]; //Pak een random naam uit de lijst
    document.getElementsByClassName('headline image')[0].src = 'images/artikel/' + randArtikel;
    var toonPoints = document.getElementsByClassName('points')[0];

    if (randArtikel == '1.jpg') {
        randArtikel = 'Image: Good headline';
        point++;
        toonPoints.innerHTML = 'Clicks: ' + point;

    } else if (randArtikel == '2.jpg') {
        randArtikel = 'Image: Willy';
        point++;
        toonPoints.innerHTML = 'Clicks: ' + point;
    } else if (randArtikel == '3.jpg') {
        randArtikel = 'Image: Loading Afro';
        point++;
        toonPoints.innerHTML = 'Clicks: ' + point;
    } else if (randArtikel == '4.jpg') {
        randArtikel = 'Image: Advocado meme';
        point++;
        toonPoints.innerHTML = 'Clicks: ' + point;
    } else if (randArtikel == '5.jpg') {
        randArtikel = 'Image: Selfie time';
        point++;
        toonPoints.innerHTML = 'Clicks: ' + point;
    } else if (randArtikel == '6.jpg') {
        randArtikel = 'Image: Funny memes';
        point++;
        toonPoints.innerHTML = 'Clicks: ' + point;
    } else if (randArtikel == '7.jpg') {
        randArtikel = 'Image: Nicolas cage';
        point++;
        toonPoints.innerHTML = 'Clicks: ' + point;
    } else {
        randArtikel = 'Undefined';
    }

    document.getElementsByClassName('Intro')[0].textContent = "";
    document.getElementsByClassName('image')[0].classList.add('scale-up-center');
    document.getElementsByClassName('image')[0].textContent = randArtikel;



}

function kaftimage() {
    var kaft = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
    var randKaft = kaft[Math.floor(Math.random() * kaft.length)]; //Pak een random naam uit de lijst
    document.getElementsByClassName('headline cover')[0].src = 'images/kaft/' + randKaft;
    var toonPoints = document.getElementsByClassName('points')[0];

    if (randKaft == '1.jpg') {
        randKaft = 'Cover: Mooie bloemen';
        point += 0.25;
        toonPoints.innerHTML = 'Clicks: ' + point;
    } else if (randKaft == '2.jpg') {
        randKaft = 'Cover: Hero cape';
        point += 0.25;
        toonPoints.innerHTML = 'Clicks: ' + point;
    } else if (randKaft == '3.jpg') {
        randKaft = 'Cover: Best cover ever';
        point += 0.25;
        toonPoints.innerHTML = 'Clicks: ' + point;
    } else {
        randKaft = 'Cover: World map';
        point += 0.25;
        toonPoints.innerHTML = 'Clicks: ' + point;
    }

    document.getElementsByClassName('Intro')[0].textContent = "";
    document.getElementsByClassName('kaft')[0].classList.add('scale-up-center');
    document.getElementsByClassName('kaft')[0].textContent = randKaft;


}

function hoofdKleur() {
    var kleuren = ['blue', 'green', 'olive', 'gold'];
    var randKleur = kleuren[Math.floor(Math.random() * kleuren.length)];
    document.getElementsByClassName('head')[0].style.backgroundColor = randKleur;
    document.getElementsByClassName('hoofd')[0].textContent = 'Head: ' + randKleur;
    point += 0.25;
    document.getElementsByClassName('points')[0].innerHTML = 'Clicks: ' + point;
}

function strepen() {
    var kleurenStrepen = ['blue', 'green', 'olive', 'white', 'gold'];
    var randkleurStrepen = kleurenStrepen[Math.floor(Math.random() * kleurenStrepen.length)];
    
    document.getElementsByClassName('stripe one')[0].style.backgroundColor = randkleurStrepen;
    document.getElementsByClassName('stripe two')[0].style.backgroundColor = randkleurStrepen;
    document.getElementsByClassName('stripe three')[0].style.backgroundColor = randkleurStrepen;
    document.getElementsByClassName('stripe four')[0].style.backgroundColor = randkleurStrepen;
    document.getElementsByClassName('stripe five')[0].style.backgroundColor = randkleurStrepen;
    document.getElementsByClassName('stripe six')[0].style.backgroundColor = randkleurStrepen;
    document.getElementsByClassName('stripe seven')[0].style.backgroundColor = randkleurStrepen;
    document.getElementsByClassName('stripe eight')[0].style.backgroundColor = randkleurStrepen;
    document.getElementsByClassName('stripe nine')[0].style.backgroundColor = randkleurStrepen;
    document.getElementsByClassName('strepen')[0].textContent = 'Stripes: ' + randkleurStrepen;
    document.getElementsByClassName('Intro')[0].textContent = "";
    point += 0.25;
    document.getElementsByClassName('points')[0].innerHTML = 'Clicks: ' + point;

}

function oren() {
    var kleurenOren = ['blue', 'green', 'olive', 'white', 'gold'];
    var randkleurOren = kleurenOren[Math.floor(Math.random() * kleurenOren.length)];
    document.getElementsByClassName('ear')[0].style.backgroundColor = randkleurOren;
    document.getElementsByClassName('ear right')[0].style.backgroundColor = randkleurOren;
    document.getElementsByClassName('oren')[0].textContent = 'Ears: ' + randkleurOren;
    document.getElementsByClassName('Intro')[0].textContent = "";
    point += 0.25;
    document.getElementsByClassName('points')[0].innerHTML = 'Clicks: ' + point;
}

function handen() {
    var kleurenHanden = ['blue', 'green', 'olive', 'white', 'gold'];
    var randkleurHanden = kleurenHanden[Math.floor(Math.random() * kleurenHanden.length)];
    document.getElementsByClassName('hand')[0].style.backgroundColor = randkleurHanden;
    document.getElementsByClassName('hand right')[0].style.backgroundColor = randkleurHanden;
    document.getElementsByClassName('handen')[0].textContent = 'Hands: ' + randkleurHanden;
    document.getElementsByClassName('Intro')[0].textContent = "";
    point += 0.25;
    document.getElementsByClassName('points')[0].innerHTML = 'Clicks: ' + point;
}

function removeAlert() {
    document.getElementsByClassName("alert")[0].setAttribute("hidden", "");

}

function shopBear() {
    if (point < 5000) {
        var alert = document.getElementsByClassName("alert")[0];
        alert.removeAttribute("hidden");
        alert.style.backgroundColor = 'red';
        alert.textContent = "Not enough clicks " + (5000 - point) + " More clicks needed";
    } else {
        point -= 5000;
        console.log('Gekocht:' + point + " over");
        window.open("bear.html", "_self");
        document.getElementsByClassName('points')[0].innerHTML = 'Clicks: ' + point;
        console.log(point);


    }
}

function resetTiger() {
    
    document.getElementsByClassName('stripe one')[0].style.backgroundColor = '#000';
    document.getElementsByClassName('stripe two')[0].style.backgroundColor = '#000';
    document.getElementsByClassName('stripe three')[0].style.backgroundColor = '#000';
    document.getElementsByClassName('stripe four')[0].style.backgroundColor = '#000';
    document.getElementsByClassName('stripe five')[0].style.backgroundColor = '#000';
    document.getElementsByClassName('stripe six')[0].style.backgroundColor = '#000';
    document.getElementsByClassName('stripe seven')[0].style.backgroundColor = '#000';
    document.getElementsByClassName('stripe eight')[0].style.backgroundColor = '#000';
    document.getElementsByClassName('stripe nine')[0].style.backgroundColor = '#000';
    document.getElementsByClassName('head')[0].style.backgroundColor = '#DD6E42';
    document.getElementsByClassName('hand')[0].style.backgroundColor = '#DD6E42';
    document.getElementsByClassName('hand right')[0].style.backgroundColor = '#DD6E42';
    document.getElementsByClassName('ear')[0].style.backgroundColor = '#DD6E42';
    document.getElementsByClassName('ear right')[0].style.backgroundColor = '#DD6E42';



    if (resetTigerAchievement === false) {
        aantal++;
        point += 50;
        document.getElementsByClassName('points')[0].innerHTML = 'Clicks: ' + point;
        var tekst = 'Achievement unlocked: Reset your tiger (Click on me to close)';
        var alert = document.getElementsByClassName("alert")[0]; 
        alert.removeAttribute("hidden");
        alert.textContent = tekst;
        alert.style.backgroundColor = 'green';
        alert.classList.add("text");
        document.getElementsByClassName("modal-body-text")[0].innerHTML = "Completed:" + aantal;

        //add image to div
        var elem = document.createElement("img");
        elem.setAttribute("src", "images/award/checked.svg");
        elem.setAttribute("height", "5%");
        elem.setAttribute("width", "5%");
        elem.setAttribute("alt", "achievement", "<br>");
        var modalbody = document.getElementsByClassName("modal-body")[1];
        modalbody.appendChild(elem);
        modalbody.classList.add("text");
        modalbody.innerHTML += 'Reset your tiger reward: 50 clicks<br><br>';
        resetTigerAchievement = true;
    } else {
        console.log("Achievement already unlocked");
    }

}

function footer() {
    var kleurenFooter = ['blue', 'green', 'olive', 'black', 'pink', '#DD6E42'];
    var randkleurFooter = kleurenFooter[Math.floor(Math.random() * kleurenFooter.length)];
    document.getElementsByClassName('modal-footer')[0].style.backgroundColor = randkleurFooter;
    document.getElementsByClassName('modal-header')[0].style.backgroundColor = randkleurFooter;


    if (hiddenFeatureAchievement === false) {
        aantal++;
        point += 100;
        document.getElementsByClassName('points')[0].innerHTML = 'Clicks: ' + point;
        var tekst = 'Achievement unlocked: Hidden feature (Click on me to close)';
        var alert = document.getElementsByClassName("alert")[0];
        alert.removeAttribute("hidden");
        alert.textContent = tekst;
        alert.style.backgroundColor = 'green';
        alert.classList.add("text");
        document.getElementsByClassName("modal-body-text")[0].innerHTML = "Completed:" + aantal;

        //add image for achievement
        var elem = document.createElement("img");
        elem.setAttribute("src", "images/award/checked.svg");
        elem.setAttribute("height", "5%");
        elem.setAttribute("width", "5%");
        elem.setAttribute("alt", "achievement");
        var modalbody = document.getElementsByClassName("modal-body")[1];
        modalbody.appendChild(elem);
        modalbody.classList.add("text");
        modalbody.innerHTML += 'Hidden feature in footer reward: 100 clicks <br><br>';
        //

        hiddenFeatureAchievement = true;
    } else {
        console.log("Achievement already unlocked");
    }
}

function resetFooter() {
    document.getElementsByClassName('modal-header')[0].style.backgroundColor = '#5cb85c';
    document.getElementsByClassName('modal-footer')[0].style.backgroundColor = '#5cb85c';
}

function randomize() {
    hoofdKleur();
    strepen();
    handen();
    oren();
    kaftimage();
    Headlineimage();
}

function automaticPoints() {


    if (point < priceClicker) {
        var alert = document.getElementsByClassName("alert")[0];
        alert.removeAttribute("hidden");
        alert.style.backgroundColor = 'red';
        alert.textContent = ("Not enough clicks " + (priceClicker - point) + "  more clicks needed");
    } else {
        point -= priceClicker;
        console.log('Gekocht:' + point + " over");
        document.getElementsByClassName('points')[0].innerHTML = 'Clicks: ' + point;
        priceClicker += 500;
        document.getElementsByClassName("clicker-info")[0].innerHTML = "Automatic clicker " + priceClicker + " clicks " + "current level: " + clickerLevel;
        clickerLevel++;
        setInterval(function () {
            var berekening = point += 0.100 * clickerLevel;
            var afronden = berekening.toFixed(2);
            console.log(berekening);

            document.getElementsByClassName('points')[0].innerHTML = 'Clicks: ' + afronden;
        }, 100);


    }

}

function credits() {
    var lijstMetStrings = ["©", "Rowin-Danilo Ruizendaal", " P18 Git", " Hogeschool van Amsterdam"];
    var message = "";
    var i;
    for (i = 0; i < lijstMetStrings.length; i++) {
        document.getElementsByClassName("Credits")[0].textContent = message += lijstMetStrings[i];
    }

}

credits();







function multiplyMe(event, getal1, getal2) {
    event.preventDefault();
    var waarde1 = document.getElementsByClassName('Getal1')[0].value;
    var waarde2 = document.getElementsByClassName('Getal2')[0].value;
    getal1 = waarde1;
    getal2 = waarde2;
    var berekening = getal1 * getal2;
    document.getElementsByClassName("result")[0].textContent = getal1 + " X " + getal2 + " = " + berekening;
    
       if (calculateAchievement === false) {
        aantal++;
        point += 150;
        document.getElementsByClassName('points')[0].innerHTML = 'Clicks: ' + point;
        var tekst = 'Achievement unlocked: Your first calculate sum (Click on me to close)';
        var alert =  document.getElementsByClassName("alert")[0];  
        alert.removeAttribute("hidden");
        alert.textContent = tekst;
        alert.style.backgroundColor = 'green';
        alert.classList.add("text");
        document.getElementsByClassName("modal-body-text")[0].innerHTML = "Completed:" + aantal;

        //add image for achievement
        var elem = document.createElement("img");
        elem.setAttribute("src", "images/award/checked.svg");
        elem.setAttribute("height", "5%");
        elem.setAttribute("width", "5%");
        elem.setAttribute("alt", "achievement");
        var modalbody = document.getElementsByClassName("modal-body")[1];    
        modalbody.appendChild(elem);
        modalbody.classList.add("text");
        modalbody.innerHTML += 'Your first calculate sum reward: 150 clicks <br><br>';
        //

        calculateAchievement = true;
    } else {
        console.log("Achievement already unlocked");
    }
    return berekening;


}




//Modals beginnen hier bron: w3schools
function achi() {

    // Get the modal
    var modal = document.getElementById('achievementModal');

    // Get the button that opens the modal
    var btn = document.getElementsByClassName("achievement-svg")[0];

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[1];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    };


    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

function shop() {

    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

function calculateThis() {

    // Get the modal
    var modal = document.getElementById('calculateModal');

    // Get the button that opens the modal
    var btn = document.getElementById("sommen-maken");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[2];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}
//Eind van modals






document.getElementsByClassName('headline picture')[0].addEventListener('click', Headlineimage);
document.getElementsByClassName('newspaper two')[0].addEventListener('click', kaftimage);
document.getElementsByClassName('head')[0].addEventListener('click', hoofdKleur);
document.getElementsByClassName('head')[0].addEventListener('click', strepen);
document.getElementsByClassName('ear')[0].addEventListener('click', oren);
document.getElementsByClassName('ear right')[0].addEventListener('click', oren);
document.getElementsByClassName('hand')[0].addEventListener('click', handen);
document.getElementsByClassName('hand right')[0].addEventListener('click', handen);
document.getElementsByClassName('alert')[0].addEventListener('click', removeAlert);
document.getElementsByClassName('bear-cub')[0].addEventListener('click', shopBear);
document.getElementsByClassName('reset')[0].addEventListener('click', resetTiger);
document.getElementsByClassName('modal-footer')[0].addEventListener('click', footer);
document.getElementsByClassName('close')[0].addEventListener('click', resetFooter);
document.getElementsByClassName('randomize-svg')[0].addEventListener('click', randomize);
document.getElementsByClassName('pointer')[0].addEventListener('click', automaticPoints);
document.getElementsByClassName("achievement-svg")[0].addEventListener('click', achi);
document.getElementById('myBtn').addEventListener('click', shop);
document.getElementById('sommen-maken').addEventListener('click', calculateThis);
document.getElementsByClassName("multiplyme")[0].addEventListener('click', multiplyMe);
