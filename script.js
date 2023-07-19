let table = document.getElementById("table");

// Generate Hart Chart
let refreshButton = document.getElementById("refresh-button");

refreshButton.addEventListener("click", function() {
    let wordFindingStr = getWordFinding();

    let colors = document.getElementById("color");
    let colorsValue = colors.value;

    let content = document.getElementById("content");
    let contentValue = content.value;

    for (let i = 0, row; row = table.rows[i]; i++) {
        for (let j = 0, col; col = row.cells[j]; j++) {
            col.innerText = getCharacter(contentValue);
            col.style.color = getColor(colorsValue);
        }
    }
})

function getCharacter(content) {
    let alphaChars = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
    let numericChars = "1234567890";
    let alphaNumericChars = alphaChars + numericChars;

    if (content === "" || content === "letters") {
        return alphaChars.charAt(Math.floor(Math.random() * alphaChars.length));
    } else if (content === "letters-numbers") {
        return alphaNumericChars.charAt(Math.floor(Math.random() * alphaNumericChars.length));
    }
}

function getColor(colors) {
    let colorOptions;

    if (colors === "" || colors === "black-white") {
        colorOptions = ["black"];
    } else if (colors === "multicolor-2") {
        colorOptions = ["red", "green"];
    } else if (colors === "multicolor-3") {
        colorOptions = ["red", "green", "blue"];
    }

    let randomChoice = Math.floor(Math.random() * colorOptions.length);
    return colorOptions[randomChoice];
}

function getWordFinding() {
    let numCharsOfWordsCombo = getNumCharsOfWordsCombo(20);

    let result = "";

    for (let i = 0; i < numCharsOfWordsCombo.length; i++) {
        let wordLength = numCharsOfWordsCombo[i];
        if (wordLength === 1) {
            let randomIndex = getRandomNumber(0, words1Char.length);
            result += words1Char[randomIndex];
        } else if (wordLength === 2) {
            let randomIndex = getRandomNumber(0, words2Char.length);
            result += words2Char[randomIndex];
        } else if (wordLength === 3) {
            let randomIndex = getRandomNumber(0, words3Char.length);
            result += words3Char[randomIndex];
        } else if (wordLength === 4) {
            let randomIndex = getRandomNumber(0, words4Char.length);
            result += words4Char[randomIndex];
        } else if (wordLength === 5) {
            let randomIndex = getRandomNumber(0, words5Char.length);
            result += words5Char[randomIndex];
        } else if (wordLength === 6) {
            let randomIndex = getRandomNumber(0, words6Char.length);
            result += words6Char[randomIndex];
        } else if (wordLength === 7) {
            let randomIndex = getRandomNumber(0, words7Char.length);
            result += words7Char[randomIndex];
        } else if (wordLength === 8) {
            let randomIndex = getRandomNumber(0, words8Char.length);
            result += words8Char[randomIndex];
        }
    }

    return result;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getNumCharsOfWordsCombo(numChars) {
    while (true) {
        let combo = [];
        for (let i = 0; i < 5; i++){
            combo.push(getRandomNumber(1, 8));
        }

        let lastNum = numChars - combo.reduce((accu, curr) => accu + curr, 0);
        combo.push(lastNum);

        if (lastNum > 0 && lastNum < 9) {
            return combo;
        }
        combo = [];
    }
}

// Download PDF of generated Hart Chart
let downloadButton = document.getElementById("download-button");
downloadButton.addEventListener("click", function() {
    let opt = {
        margin:       [5, 7, 0, 0],
        filename:     'minhs-hart-chart.pdf',
        image:        { type: 'jpeg', quality: 1.00 },
        html2canvas:  { dpi: 200, scale: 5, width: 1050, height: 700},
        jsPDF:        { unit: 'px', format: 'letter', orientation: 'landscape' }
      };

    html2pdf().set(opt).from(table).save();
});
