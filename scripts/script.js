

const pop_up_1 = document.getElementById("pop_up_1");
const pop_up_1_start = document.getElementById("pop_up_1_start")
const pop_up_2 = document.getElementById("pop_up_2");
const difficulty = document.getElementById("difficulty");
const medium = document.getElementById("medium");
const hard = document.getElementById("hard");
const help = document.getElementById("help");
const help_button = document.getElementById("help_button");
const exit = document.getElementById("exit");
const pop_up_2_capitals = document.getElementById("pop_up_2_capitals");
const pop_up_2_fruits = document.getElementById("pop_up_2_fruits");
const pop_up_2_numbers = document.getElementById("pop_up_2_numbers");
const detail_about_game = document.getElementById("dataAboutGame");
const h2main = document.getElementById("h2main");
const hangManImage = document.getElementById("hangManImage");
const buttons = document.getElementById('buttons');
const myHeader = document.getElementById("h2main");
const pop_up_win = document.getElementById("pop_up_win");
const pop_up_lose = document.getElementById("pop_up_lose")
let category_span = document.getElementById("category_span");
let diff_span = document.getElementById("diff_span")
let category = document.getElementById("category");
let display = document.getElementById("guess");
let containerForLetters = document.querySelector(".buttons");

const delay0 = 500;
const delay = 1000;
const delay1 = 5000;
let chosen_category;
let createButtons;
let showPopUp = true;
let wordArray = [];
let randomWord;
let guessed = [];
let counterCorrectLetter = 0;
let space = 0;
let headerAnimationHandler;
let position = 30;
let moveRight = true;
let animationIsUnderWay = false;


class Capital {
    constructor(numberOfCapitals, difficulty, nameOfCapitals) {
        this.numberOfCapitals = numberOfCapitals;
        this.difficulty = difficulty;
        this.nameOfCapitals = nameOfCapitals;

    }
}

class Fruit {
    constructor(numberOfFruits, difficulty, nameOfFruits) {
        this.numberOfFruits = numberOfFruits;
        this.difficulty = difficulty;
        this.nameOfFruits = nameOfFruits;
    }

}

class Number {
    constructor(numberOfNumbers, difficulty, numbers) {
        this.numberOfNumbers = numberOfNumbers;
        this.difficulty = difficulty;
        this.numbers = numbers;
    }

}



const alphabetNumbers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']


myHeader.style.position = "relative";


function myFunction() {
    setTimeout(function () {
        headerAnimation = requestAnimationFrame(move);
    }, 100);
}
function move() {
    if (moveRight === true) {
        position++;
        if (position === 650) {
            moveRight = false;
        }
    }
    else {
        position--;
        if (position === 30) {
            moveRight = true;
        }
    }

    myHeader.style.left = `${position}px`;

    setTimeout(function () {
        headerAnimation = requestAnimationFrame(move);
    }, 100);
}

detail_about_game.style.display = "none";
h2main.style.display = "none";
difficulty.style.display = "none";
buttons.style.display = "none";
pop_up_1.style.display = 'none';
pop_up_2.style.display = 'none';
help.style.display = 'none';

setTimeout(function () {
    difficulty.style.display = "block";
    difficulty.style.opacity = 1;
}, delay);



medium.addEventListener('click', function () {
    difficulty.style.display = "none";

    setTimeout(function () {

        pop_up_2.style.display = "block";
        pop_up_2.style.opacity = 1;

    }, delay);

    pop_up_2_capitals.addEventListener('click', function () {

        pop_up_2.style.display = 'none';
        chosen_category = 'Capitals';
        category_span.textContent = chosen_category;

        const mediumCapitals = new Capital(23, "Medium", ["TEHRAN", "OTTAWAA", "BAKU", "BEIJING", "HAVANA", "LONDON", "ADDIS ABABA",
            "PARIS", "TOKYO", "BERLIN", "BAGDAD", "JAKARTA", "ROME", "MEXICO CITY", "MONACO", "ANKARA", "SINGAPORE", "OSLO", "LIMA", "ZAGREB", "MOSCOW", "MADRID", "HARARE"]);

        randomWord = mediumCapitals.nameOfCapitals[Math.floor(Math.random() * mediumCapitals.nameOfCapitals.length)];

        diff_span.textContent = mediumCapitals.difficulty;
        play();
        myFunction();
        detail_about_game.style.display = "block";
        h2main.style.display = "block";
        buttons.style.display = "block";
    })


    pop_up_2_fruits.addEventListener('click', function () {

        pop_up_2.style.display = 'none';
        chosen_category = 'Fruits';
        category_span.textContent = chosen_category;

        const mediumFruits = new Fruit(18, "Medium", ["APPLE", "FIG", "STRAWBERRIES", "COCONUT", "MELON", "PINEAPPLE", "GRAPE", "MANGO", "BANANA", "ORANGE",
            "POMEGRANATE", "WATERMELON", "LEMON", "KIWI", "CHERY", "DRAGONRFRUIT", "AVOCADOS", "PAPAYA"]);

        randomWord = mediumFruits.nameOfFruits[Math.floor(Math.random() * mediumFruits.nameOfFruits.length)];

        diff_span.textContent = mediumFruits.difficulty;
        play();
        myFunction();
        detail_about_game.style.display = "block";
        h2main.style.display = "block";
        buttons.style.display = "block";

    })

    pop_up_2_numbers.addEventListener('click', function () {

        pop_up_2.style.display = 'none';

        chosen_category = 'Numbers';
        category_span.textContent = chosen_category;

        const mediumNumbers = new Number(10, "Medium", ["207", "430", "213", "519", "759", "674", "348",
            "761", "134", "490"]);

        randomWord = mediumNumbers.numbers[Math.floor(Math.random() * mediumNumbers.numbers.length)];

        diff_span.textContent = mediumNumbers.difficulty;
        play();
        myFunction();
        detail_about_game.style.display = "block";
        h2main.style.display = "block";
        buttons.style.display = "block";

    })
})

hard.addEventListener('click', function () {
    difficulty.style.display = "none";

    setTimeout(function () {

        pop_up_2.style.display = "block";
        pop_up_2.style.opacity = 1;

    }, delay);

    pop_up_2_capitals.addEventListener('click', function () {

        pop_up_2.style.display = 'none';
        chosen_category = 'Capitals';
        category_span.textContent = chosen_category;

        const hardCapitals = new Capital(27, "Hard", ["TIRANA", "LUANDA", "YEREVAN", "CANBERRA", "NASSAU", "DHAKA", "BRIDGETOWN", "BELMOPAN", "PORTO NOVO", "SARAJEVO", "GABORONE", "SOFIA", "OUAGADOUGOU", "PARAIA", "MORONI", "DILI", "QUITO", "SAN SALVADOR", "ASMARA", "SUVA", "TBILISI", "ACCRA", "CONAKRY", "AMMAN", "BEIRUT", "MALE", "RABAT"]);

        randomWord = hardCapitals.nameOfCapitals[Math.floor(Math.random() * hardCapitals.nameOfCapitals.length)];

        diff_span.textContent = hardCapitals.difficulty;
        play();
        myFunction();
        detail_about_game.style.display = "block";
        h2main.style.display = "block";
        buttons.style.display = "block";
    })


    pop_up_2_fruits.addEventListener('click', function () {

        pop_up_2.style.display = 'none';
        chosen_category = 'Fruits';
        category_span.textContent = chosen_category;

        const hardFruits = new Fruit(18, "Hard", ["MULBERRY", "NECTARINE", "GUAVA", "CARAMBOLA", "DRAGON FRUIT", "RAMBUTAN", "MANGOSTEEN", "PHYSALIS FRUIT", "PASSION FRUIT", "PERSIMMON", "RAMBUTAN", "JACKFRUIT", "GUAVA", "CHIKOO", "DURIAN", "LYCHEE", "LONGAN", "CASHEW APPLE"]);

        randomWord = hardFruits.nameOfFruits[Math.floor(Math.random() * hardFruits.nameOfFruits.length)];

        diff_span.textContent = hardFruits.difficulty;
        play();
        myFunction();
        detail_about_game.style.display = "block";
        h2main.style.display = "block";
        buttons.style.display = "block";

    })

    pop_up_2_numbers.addEventListener('click', function () {

        pop_up_2.style.display = 'none';

        chosen_category = 'Numbers';
        category_span.textContent = chosen_category;

        const hardNumbers = new Number(10, "Hard", ["46", "81", "70", "45", "57", "71", "98", "21", "58", "87", "60", "37", "23"]);

        randomWord = hardNumbers.numbers[Math.floor(Math.random() * hardNumbers.numbers.length)];

        diff_span.textContent = hardNumbers.difficulty;
        play();
        myFunction();
        detail_about_game.style.display = "block";
        h2main.style.display = "block";
        buttons.style.display = "block";

    })
})

help_button.addEventListener('click', function () {

    pop_up_2.style.display = 'none';
    setTimeout(function () {

        help.style.display = 'block';

    }, delay0);
})

exit.addEventListener('click', function () {

    help.style.display = 'none';
    setTimeout(function () {

        pop_up_2.style.display = 'block';

    }, delay0);

})


alphabetNumbers.forEach(letter => {
    let span = document.createElement("span");
    let theLetter = document.createTextNode(letter);
    span.appendChild(theLetter);
    span.className = 'boxForLetter';
    containerForLetters.appendChild(span);
});


function play() {
    let letterGuessContainer = document.querySelector(".guess");
    let lettersAndSpaces = Array.from(randomWord);

    lettersAndSpaces.forEach(letter => {
        let createSpan = document.createElement("span");
        if (letter === ' ') {
            createSpan.className = 'wordWithSpace';
            space += 1;
        }
        letterGuessContainer.appendChild(createSpan);
    });

    let guessSpans = document.querySelectorAll(".guess span");
    let letterSpans = document.querySelectorAll(".boxForLetter span");
    let wrongClick = 0;

    document.addEventListener("click", (e) => {

        let theChosenLetterIsCorrect = false;
        if (e.target.classList.contains('boxForLetter')) {
            e.target.classList.add("clikedLetter");
            let clickedLetter = e.target.innerHTML.toLowerCase();
            let theChosenWord = Array.from(randomWord.toLowerCase());

            theChosenWord.forEach((wordLetter, wordIndex) => {

                if (clickedLetter == wordLetter) {
                    theChosenLetterIsCorrect = true;
                    guessSpans.forEach((span, spanIndex) => {
                        if (wordIndex === spanIndex) {
                            counterCorrectLetter++;
                            span.innerHTML = clickedLetter;
                        }
                    });
                    document.getElementById("correct_answer_sound").play();
                }
            });

            if (theChosenLetterIsCorrect !== true) {
                wrongClick++;
                document.getElementById(`test1`).innerHTML = `<img src="../images/${wrongClick}.jpg" alt="${wrongClick}" id="currentImage">`;
                document.getElementById("remain_lives_span").innerHTML = 7 - wrongClick;
                document.getElementById("wrong_answer_sound").play();
            }

            if (wrongClick == 7) {
                document.getElementById("test1").innerHTML = `<img src="../images/7.jpg" alt="7" id="currentImage">`;
                containerForLetters.classList.add("finished");
                category.style.display = "none";
                document.getElementById("guess").innerHTML = `<p>You <strong>LOSE</strong> the game</p>`
                document.getElementById("remain_lives").innerHTML = `<p>The hidden word or number is:<br> <strong>${randomWord}</strong> </p>`;

                setTimeout(function () {

                    document.getElementById("fail_sound").play();


                }, delay);


                setTimeout(function () {

                    pop_up_lose.style.display = "block";
                    pop_up_lose.style.opacity = 1;

                }, delay1);

                pop_up_play_again1.addEventListener('click', function () {

                    window.onbeforeunload = function () {
                        window.scrollTo(0, 0);
                    }
                    window.location.reload();

                })
            }


            if (lettersAndSpaces.length === (counterCorrectLetter + space)) {
                document.getElementById("test1").innerHTML = `<img src="../images/8.jpg" alt="8" id="currentImage">`;
                containerForLetters.classList.add("finished");
                category.style.display = "none";
                document.getElementById("guess").innerHTML = `<p>Congragulations!!! <br> You <strong>WIN</strong> the game</p>`;
                document.getElementById("remain_lives").innerHTML = `<p>You currectly guessed the:<br><strong>${randomWord}</strong> </p>`;

                setTimeout(function () {

                    document.getElementById("win_sound").play();

                }, delay);

                setTimeout(function () {

                    pop_up_win.style.display = "block";
                    pop_up_win.style.opacity = 1;
                }, delay1);

                pop_up_play_again2.addEventListener('click', function () {

                    window.location.reload();
                })
            }
        }

    });

}











