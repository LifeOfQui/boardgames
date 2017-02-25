var codeWords = ['Strauss', 'Bett', 'Flöte', 'Kiwi', 'London', 'Jet', 'Alien', 'Dieb', 'Burg', 'Ton', 'Forscher', 'Peking', 'Bein', 'Bulle', 'Mast', 'Kraft', 'Flasche', 'Boxer', 'Bart', 'Schelle', 'Herz', 'Vorsatz', 'Harz', 'Steuer', 'Mini', 'Indien', 'Kamm', 'Krebs', 'Bach', 'Barren', 'Luxemburg', 'Pension', 'Decke', 'Löffel', 'Rücken', 'Flur', 'Gericht', 'Haupt', 'Maler', 'Futter', 'Zelle', 'Heide', 'Busch', 'Orange', 'Schuppen', 'Platte', 'Rock', 'Wand', 'Stift', 'Becken', 'Stempel', 'Erde', 'Rost', 'Zylinder', 'Schnabeltier', 'Meer', 'Fuss', 'Maus', 'Messer', 'Theater', 'Polizei', 'Schiff', 'Pilot', 'Daumen', 'Lehrer', 'Tag', 'König', 'Glas', 'Zahn', 'Königin', 'Hund', 'Pferd', 'Schuh', 'Stuhl', 'Krone', 'Eis', 'Gold', 'Gabel', 'Zeit', 'Welle', 'Maschine', 'Bande', 'Erika', 'Bär', 'Leim', 'New York', 'Kreis', 'Rom', 'Brötchen', 'Morgenstern', 'Moskau', 'Hand', 'Seite', 'Jahr', 'Hollywood', 'Mittel', 'Shakespeare', 'Griechenland', 'Bau', 'Fliege', 'Kunde', 'Bayern', 'Schild', 'Dinosaurier', 'Geschirr', 'Gang', 'Dietrich', 'Niete', 'Ente', 'Papier', 'Wind', 'Leben', 'Koch', 'Wasser', 'Gesicht', 'Katze', 'Riese', 'Auto', 'Löwe', 'Glück', 'Strand', 'Auge', 'Apfel', 'Wald', 'Gürtel', 'Kirche', 'Zwerg', 'Zitrone', 'Auflauf', 'Öl', 'Stock', 'Lager', 'Schule', 'Mark', 'Feige', 'Jura', 'Satz', 'Rolle', 'Millionär', 'Fall', 'Grund', 'Mangel', 'Dichtung', 'Chor', 'Kapelle', 'Hahn', 'Schotten', 'Gehalt', 'Jäger', 'Takt', 'Börse', 'Demo', 'Schimmel', 'Schalter', 'Scheibe', 'Wanze', 'Bogen', 'Käfer', 'Riegel', 'Finger', 'Umzug', 'Leuchte', 'Atlas', 'Po', 'Bock', 'Funken', 'Schein', 'Flügel', 'Drache', 'Mond', 'Tokyo', 'Antarktis', 'Karotte', 'Osten', 'Winnetou', 'Loch Ness', 'Moos', 'Melone', 'Honig', 'Frankreich', 'Olymp', 'Schokolade', 'Roulette', 'Verein', 'Pass', 'Atlantis', 'Wolkenkratzer', 'Mexiko', 'Golf', 'Lösung', 'Einhorn', 'Wirtschaft', 'Bund', 'Berliner', 'Siegel', 'Bahn', 'Tau', 'Messe', 'Kiel', 'Strudel', 'Drossel', 'Kissen', 'Schwarz', 'Geschoss', 'Schneemann', 'Fallschirm', 'Ritter', 'Konzern', 'Pirat', 'Hupe', 'Pinguin', 'Krankheit', 'Spinne', 'Torte', 'Botschaft', 'Satellit', 'Essen', 'Afrika', 'Chemie', 'Quartett', 'Bar', 'Tafel', 'Abgabe', 'Blüte', 'Elfenbein', 'Ausdruck', 'Reif', 'Nagel', 'Linie', 'Mutter', 'Tempo', 'Fessel', 'Riemen', 'Blinker', 'Drucker', 'Sekretär', 'Gummi', 'Radio', 'Kette', 'Luft', 'Telefon', 'Beton', 'Knete', 'Adler', 'Uhr', 'Hai', 'Kuh', 'Schaf', 'Pfeil', 'Präsent', 'Familie', 'Braten', 'Nikolaus', 'Stern', 'Schlitten', 'Krippe', 'Päckchen', 'Weihnachten', 'Advent', 'Oktopus', 'Hubschrauber', 'Krankenhaus', 'Anwalt', 'Hotel', 'Nacht', 'Optik', 'Europa', 'Wurm', 'Skelett', 'Ketchup', 'Känguru', 'Gras', 'Hase', 'Lakritze', 'Hering', 'Bergsteiger', 'Nadel', 'Brand', 'Knie', 'Schornstein', 'Topf', 'Zunge', 'Erbse', 'Schirm', 'Frost', 'Rose', 'Mantel', 'Rechner', 'Feldherr', 'Kloss', 'Sosse', 'Umhang', 'Zentaur', 'Boot', 'Kiefer', 'Zug'];

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function generateRandomNumberArray(lengthOfRandomNumberArray, range) {
    var arr = [];
    while(arr.length < lengthOfRandomNumberArray){
       var randomnumber = Math.ceil(Math.random() * range - 1)
       if(arr.indexOf(randomnumber) > -1) continue;
       arr[arr.length] = randomnumber;
    }

    return arr;
}

var playingTeamNr = 0;
var redFound = 0;
var blueFound = 0;

function setup() {
    playingTeamNr = 0;
    redFound = 0;
    blueFound = 0;

    // document.querySelector('.setupBtn').style.display = 'none';
    document.querySelector('.playGameBtn').style.display = 'inline-block';

    document.querySelector('.matrix').innerHTML = '';

    const matrixArr = generateRandomNumberArray(25, codeWords.length);
    const arr2 = [...matrixArr];
    let randomIndexes = shuffleArray(arr2);
    const firstTeamArr = randomIndexes.splice(0, 9);
    const secondTeamArr = randomIndexes.splice(0, 8);
    const blackArr = randomIndexes.splice(0, 1);

    var sid = '';
    var actualColor = '';
    var colorCount = 0;


    matrixArr.forEach(function(ele) {
        var matrix = document.querySelector('.matrix');
        if (codeWords[ele] === undefined) {
            alert(ele);
        }

        // IF RED
        if (firstTeamArr.indexOf(ele) > -1) {
            matrix.innerHTML += '<div class="codeWord red">' + codeWords[ele] + '</div>';
            if (actualColor !== 'red') {
                if (actualColor == 'blue') sid=sid + String.fromCharCode(64+colorCount);
                else if (actualColor == 'yellow') sid=sid + String.fromCharCode(48+colorCount);
                colorCount = 1;
            } else {
                colorCount++;
            }
            actualColor = 'red'
        // IF BLUE
        } else if (secondTeamArr.indexOf(ele) > -1) {
            matrix.innerHTML += '<div class="codeWord blue">' + codeWords[ele] + '</div>';
            if (actualColor !== 'blue') {
                if (actualColor == 'red') sid += String.fromCharCode(96+colorCount);
                else if (actualColor == 'yellow') sid += String.fromCharCode(48+colorCount);

                colorCount = 1;
            } else {

                colorCount++;
            }
            actualColor = 'blue';
        // IF BLACK
        } else if (blackArr.indexOf(ele) > -1) {
            matrix.innerHTML += '<div class="codeWord black">' + codeWords[ele] + '</div>';
            if (actualColor == 'red') sid += String.fromCharCode(96+colorCount);
            else if (actualColor == 'blue') sid += String.fromCharCode(64+colorCount);
            else if (actualColor == 'yellow') sid += String.fromCharCode(48+colorCount);

            sid += '0';
            colorCount = 0;
            actualColor = '';
        // IF YELLOW
        } else {
            matrix.innerHTML += '<div class="codeWord yellow">' + codeWords[ele] + '</div>';
            if (actualColor !== 'yellow') {
                if (actualColor == 'red') sid += String.fromCharCode(96+colorCount);
                else if (actualColor == 'blue') sid += String.fromCharCode(64+colorCount);
                colorCount = 1;
            } else {
                colorCount++;
            }
            actualColor = 'yellow';
        }
    });
    if (actualColor == 'red') sid += String.fromCharCode(96+colorCount);
    else if (actualColor == 'blue') sid += String.fromCharCode(64+colorCount);
    else if (actualColor == 'yellow') sid += String.fromCharCode(48+colorCount);

    console.log(sid);
    var encodedString = btoa(sid);
    var path = `${window.location.protocol + '//' + window.location.host + window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/"))}`;
    var path = `${window.location.protocol + '//' + window.location.host + window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/"))}`;
    console.log(path);
    var qrCodeImg = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(`${path}/chief.html?sid=${encodedString}`)}`;
    document.querySelector('.qrCodeImg').src = qrCodeImg;
    document.querySelector('.chiefURL').innerHTML = '<a href="'+path+'/chief.html?sid='+encodedString+'" target=_blank>Link</a>';
}

function playGame() {
    setup();

    document.querySelector('.settings').style.display = 'none';
    document.querySelector('.redTeamCount').style.display = 'block';
    document.querySelector('.blueTeamCount').style.display = 'block';
    document.querySelector('.endTurnBtn').style.display = 'inline-block';
    document.querySelector('.chiefOverlayBtn').style.display = 'inline-block';

    var codeWord = document.querySelectorAll('.codeWord');

    document.querySelector('.teamPlayingColor').innerHTML = 'TEAM RED IS PLAYING';
    document.querySelector('.teamPlayingColor').style.backgroundColor = 'rgb(156, 0, 6)';

    for (var i = 0; i < codeWord.length; i++) {
        codeWord[i].classList.add('invisible');
        codeWord[i].addEventListener('click', function(event) {
            this.classList.remove('invisible');

            if (playingTeamNr === 0 && this.classList.contains('red')) {
                redFound++;
                checkWinning();
            } else if (playingTeamNr === 0 && this.classList.contains('blue')) {
                blueFound++;
                checkWinning();
                playingTeamNr = 1;
                document.querySelector('.teamPlayingColor').innerHTML = 'TEAM BLUE IS PLAYING';
                document.querySelector('.teamPlayingColor').style.backgroundColor = 'rgb(49, 67, 113)';
                return;
            }

            if (playingTeamNr === 1 && this.classList.contains('blue')) {
                blueFound++;
                checkWinning();
            } else if (playingTeamNr === 1 && this.classList.contains('red')) {
                redFound++;
                checkWinning();
                playingTeamNr = 0;
                document.querySelector('.teamPlayingColor').innerHTML = 'TEAM RED IS PLAYING';
                document.querySelector('.teamPlayingColor').style.backgroundColor = 'rgb(156, 0, 6)';
                return;
            }

            if (this.classList.contains('black')) {
                document.querySelector('.matrix').innerHTML = '';
                if (playingTeamNr === 0) {
                    document.querySelector('.teamPlayingColor').innerHTML = 'TEAM BLUE WINS!';
                    document.querySelector('.teamPlayingColor').style.backgroundColor = 'rgb(49, 67, 113)';
                    document.querySelector('.setupBtn').style.display = 'inline-block';
                    document.querySelector('.playGameBtn').style.display = 'none';
                    document.querySelector('.endTurnBtn').style.display = 'none';
                } else {
                    document.querySelector('.teamPlayingColor').innerHTML = 'TEAM RED WINS!';
                    document.querySelector('.teamPlayingColor').style.backgroundColor = 'rgb(156, 0, 6)';
                    document.querySelector('.setupBtn').style.display = 'inline-block';
                    document.querySelector('.playGameBtn').style.display = 'none';
                    document.querySelector('.endTurnBtn').style.display = 'none';
                }

            }
        });
    }
}

function endTurn() {
    if (playingTeamNr === 0) {
        playingTeamNr = 1;
        document.querySelector('.teamPlayingColor').innerHTML = 'TEAM BLUE IS PLAYING';
        document.querySelector('.teamPlayingColor').style.backgroundColor = 'rgb(49, 67, 113)';
    } else {
        playingTeamNr = 0;
        document.querySelector('.teamPlayingColor').innerHTML = 'TEAM RED IS PLAYING';
        document.querySelector('.teamPlayingColor').style.backgroundColor = 'rgb(156, 0, 6)';
    }
}

function checkWinning() {
    document.querySelector('.redTeamCount').innerHTML = 'TEAM RED: ' + redFound + ' Agenten kontaktiert!';
    document.querySelector('.blueTeamCount').innerHTML = 'TEAM BLUE: ' + blueFound + ' Agenten kontaktiert!';
    if (redFound === 9) {
        document.querySelector('.matrix').innerHTML = '';
        document.querySelector('.teamPlayingColor').innerHTML = 'TEAM RED WINS!';
        document.querySelector('.teamPlayingColor').style.backgroundColor = 'rgb(156, 0, 6)';
        document.querySelector('.setupBtn').style.display = 'inline-block';
        document.querySelector('.playGameBtn').style.display = 'none';
        document.querySelector('.endTurnBtn').style.display = 'none';
    } else if (blueFound === 8) {
        document.querySelector('.matrix').innerHTML = '';
        document.querySelector('.teamPlayingColor').innerHTML = 'TEAM BLUE WINS!';
        document.querySelector('.teamPlayingColor').style.backgroundColor = 'rgb(49, 67, 113)';
        document.querySelector('.setupBtn').style.display = 'inline-block';
        document.querySelector('.playGameBtn').style.display = 'none';
        document.querySelector('.endTurnBtn').style.display = 'none';
    }
}

document.querySelector('.chiefOverlay').addEventListener('click', function() {
    if (this.offsetParent === null) {
        this.style.display = "flex";
    } else {
        this.style.display = "none";
    }
});