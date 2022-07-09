
"use strict";

let flask1 = document.getElementById("flask1");
let flask2 = document.getElementById("flask2");
let flask3 = document.getElementById("flask3");
let flask4 = document.getElementById("flask4");
let flask5 = document.getElementById("flask5");
const bubbles1 = document.getElementsByClassName('glow1');
const bubbles2 = document.getElementsByClassName('glow2');
const bubbles3 = document.getElementsByClassName('glow3');
const bubbles4 = document.getElementsByClassName('glow4');
const bubbles5 = document.getElementsByClassName('glow5');
let chemistrynameLength = 4;
let chemistrynames = [
    'гидро','хлор','ин','ан','дал','цикло','нид','гекс','рол','ка',
    'лин','кло','нонан','нол','бен','зол','окс','гли','лит',
    'кси','эти','лен','поли','ти','кол','трит','пен','бу','та',
    'про','ар','зил','ард','ал','па','аква','ви',
    'гид','де','аце','тон','ол','изо','бит','дио','лиз',
    'ват','цик','бон','тер','эпо','окта','тетра','ил','нат','диен'
];

let substanceName1 = document.getElementById("name1");
let substanceName2 = document.getElementById("name2");
let substanceName3 = document.getElementById("name3");
let substanceName4 = document.getElementById("name4");
let substanceName5 = document.getElementById("name5");

let name1 = "";
let name2 = "";
let name3 = "";
let name4 = "";
let name5 = "";

function getRandomSubstancesNames() {
    for(let i = 0; i < chemistrynameLength; i++) {
        let randomName1 = Math.floor(Math.random() * chemistrynames.length);
        let randomName2 = Math.floor(Math.random() * chemistrynames.length);
        let randomName3 = Math.floor(Math.random() * chemistrynames.length);
        let randomName4 = Math.floor(Math.random() * chemistrynames.length);
        let randomName5 = Math.floor(Math.random() * chemistrynames.length);
        name1 += chemistrynames[randomName1];
        name2 += chemistrynames[randomName2];
        name3 += chemistrynames[randomName3];
        name4 += chemistrynames[randomName4];
        name5 += chemistrynames[randomName5];
        substanceName1.innerHTML = name1;
        substanceName2.innerHTML = name2;
        substanceName3.innerHTML = name3;
        substanceName4.innerHTML = name4;
        substanceName5.innerHTML = name5;
    }
}

function renameRandomSubstancesNames() {
    substanceName1.innerHTML = "";
    substanceName2.innerHTML = "";
    substanceName3.innerHTML = "";
    substanceName4.innerHTML = "";
    substanceName5.innerHTML = "";
    name1 = "";
    name2 = "";
    name3 = "";
    name4 = "";
    name5 = "";
    getRandomSubstancesNames();
}

substanceName1.addEventListener('click', function() {
    substanceName1.innerHTML = "";
    name1 = "";
    for(let i = 0; i < chemistrynameLength; i++) {
        let randomName = Math.floor(Math.random() * chemistrynames.length);
        name1 += chemistrynames[randomName];
        substanceName1.innerHTML = name1;
    }
})

substanceName2.addEventListener('click', function() {
    substanceName2.innerHTML = "";
    name2 = "";
    for(let i = 0; i < chemistrynameLength; i++) {
        let randomName = Math.floor(Math.random() * chemistrynames.length);
        name2 += chemistrynames[randomName];
        substanceName2.innerHTML = name2;
    }
})

substanceName3.addEventListener('click', function() {
    substanceName3.innerHTML = "";
    name3 = "";
    for(let i = 0; i < chemistrynameLength; i++) {
        let randomName = Math.floor(Math.random() * chemistrynames.length);
        name3 += chemistrynames[randomName];
        substanceName3.innerHTML = name3;
    }
})

substanceName4.addEventListener('click', function() {
    substanceName4.innerHTML = "";
    name4 = "";
    for(let i = 0; i < chemistrynameLength; i++) {
        let randomName = Math.floor(Math.random() * chemistrynames.length);
        name4 += chemistrynames[randomName];
        substanceName4.innerHTML = name4;
    }
})

substanceName5.addEventListener('click', function() {
    substanceName5.innerHTML = "";
    name5 = "";
    for(let i = 0; i < chemistrynameLength; i++) {
        let randomName = Math.floor(Math.random() * chemistrynames.length);
        name5 += chemistrynames[randomName];
        substanceName5.innerHTML = name5;
    }
})

function colorFlasks() {
    flask1.style.filter = `hue-rotate(${getRandomInt(5, 1000)}deg)`;
    for(let i = 0; i < 4; i++) {
        bubbles1[i].style.filter = flask1.style.filter;
    }
    flask2.style.filter = `hue-rotate(${getRandomInt(5, 1000)}deg)`;
    for(let i = 0; i < 4; i++) {
        bubbles2[i].style.filter = flask2.style.filter;
    }
    flask3.style.filter = `hue-rotate(${getRandomInt(5, 1000)}deg)`;
    for(let i = 0; i < 4; i++) {
        bubbles3[i].style.filter = flask3.style.filter;
    }
    flask4.style.filter = `hue-rotate(${getRandomInt(5, 1000)}deg)`;
    for(let i = 0; i < 4; i++) {
        bubbles4[i].style.filter = flask4.style.filter;
    }
    flask5.style.filter = `hue-rotate(${getRandomInt(5, 1000)}deg)`;
    for(let i = 0; i < 4; i++) {
        bubbles5[i].style.filter = flask5.style.filter;
    }
}

flask1.addEventListener('click', function() {
    flask1.style.filter = `hue-rotate(${getRandomInt(5, 1000)}deg)`;
    for(let i = 0; i < 4; i++) {
        bubbles1[i].style.filter = flask1.style.filter;
    }
})

flask2.addEventListener('click', function() {
    flask2.style.filter = `hue-rotate(${getRandomInt(5, 1000)}deg)`;
    for(let i = 0; i < 4; i++) {
        bubbles2[i].style.filter = flask2.style.filter;
    }
})

flask3.addEventListener('click', function() {
    flask3.style.filter = `hue-rotate(${getRandomInt(5, 1000)}deg)`;
    for(let i = 0; i < 4; i++) {
        bubbles3[i].style.filter = flask3.style.filter;
    }
})

flask4.addEventListener('click', function() {
    flask4.style.filter = `hue-rotate(${getRandomInt(5, 1000)}deg)`;
    for(let i = 0; i < 4; i++) {
        bubbles4[i].style.filter = flask4.style.filter;
    }
})

flask5.addEventListener('click', function() {
    flask5.style.filter = `hue-rotate(${getRandomInt(5, 1000)}deg)`;
    for(let i = 0; i < 4; i++) {
        bubbles5[i].style.filter = flask5.style.filter;
    }
})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

colorFlasks();
getRandomSubstancesNames();