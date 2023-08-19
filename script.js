
let table = document.getElementById("table");

// Generate Hart Chart
let generateButton = document.getElementById("generate-button");

generateButton.addEventListener("click", function() {
    getChart();
});

let colorSelect = document.getElementById("color");
colorSelect.onchange = function(){
    getChart();
};

let styleSelect = document.getElementById("style");
styleSelect.onchange = function(){
    getChart();
};

let contentSelect = document.getElementById("content");
contentSelect.onchange = function(){
    getChart();
};

document.body.onkeyup = function(event) {
    if (event.key == " " ||
        event.code == "Space" ||
        event.keyCode == 32
    ) {
        getChart();
    }
}

function getChart() {
    // User's chosen attributes
    let colors = document.getElementById("color");
    let colorsValue = colors.value;

    let style = document.getElementById("style");
    let styleValue = style.value;

    let content = document.getElementById("content");
    let contentValue = content.value;

    // Get color options
    let colorOptions = getColorOptions(colorsValue);

    // Traverse table
    let numCols = table.rows[0].cells.length;
    let numColPairs = numCols / 2;

    let col1 = 0;
    let col2 = numCols - 1;
    let count = 0;

    while (0 < numColPairs) {
        let twentyChars = getTwentyChars(contentValue, 20).toUpperCase();

        for (let row = 0; row < table.rows.length; row++) {
            table.rows[row].cells[col1].innerText = twentyChars[count++];
            table.rows[row].cells[col1].style.color = getColoring(colorOptions, styleValue, col1, row);
            table.rows[row].cells[col2].innerText = twentyChars[count++];
            table.rows[row].cells[col2].style.color = getColoring(colorOptions, styleValue, col2, row);
        }

        count = 0;
        col1++;
        col2--;
        numColPairs--;
    }
}

function getTwentyChars(content, numChars) {
    if (content === "" || content === "letters") {
        return getCharacters("letters", numChars);
    } else if (content === "letters-numbers") {
        return getCharacters("letters-numbers", numChars);
    } else if (content === "word-finding", numChars) {
        return getWordFinding(numChars);
    }
}

function getCharacters(content, numChars) {
    let result = "";

    let alphaChars = "abcdefghijklmnopqrstuvwxyz";
    let numericChars = "1234567890";
    let alphaNumericChars = alphaChars + numericChars;

    for (let i = 0; i < numChars; i++) {
        if (content === "letters") {
            result += alphaChars.charAt(getRandomNumber(0, alphaChars.length - 1));
        } else if (content === "letters-numbers") {
            result += alphaNumericChars.charAt(getRandomNumber(0, alphaNumericChars.length - 1));
        }
    }

    return result;
}

function getColorOptions(colors) {
    let colorOptions;

    if (colors === "" || colors === "black-white") {
        colorOptions = ["black"];
    } else if (colors === "multicolor-2-red-green") {
        colorOptions = ["red", "green"];
    } else if (colors === "multicolor-2-red-blue") {
        colorOptions = ["red", "blue"];
    } else if (colors === "multicolor-2-blue-green") {
        colorOptions = ["blue", "green"];
    } else if (colors === "multicolor-3-red-green-blue") {
        colorOptions = ["red", "green", "blue"];
    }

    colorOptions = shuffle(colorOptions);
    return colorOptions;
}

function getColoring(colorOptions, style, col, row) {
    if (style === "" || style === "random") {
        let randomChoice = Math.floor(Math.random() * colorOptions.length);
        return colorOptions[randomChoice];
    } else if (style === "column") {
        return colorOptions[col % colorOptions.length]
    } else if (style === "row") {
        return colorOptions[row % colorOptions.length];
    }
}

function getWordFinding(numChars) {
    let numCharsOfWordsCombo = getNumCharsOfWordsCombo(numChars);

    let result = "";

    for (let i = 0; i < numCharsOfWordsCombo.length; i++) {
        let wordLength = numCharsOfWordsCombo[i];
        if (wordLength === 1) {
            let randomIndex = getRandomNumber(0, words1Char.length - 1);
            result += words1Char[randomIndex];
        } else if (wordLength === 2) {
            let randomIndex = getRandomNumber(0, words2Char.length - 1);
            result += words2Char[randomIndex];
        } else if (wordLength === 3) {
            let randomIndex = getRandomNumber(0, words3Char.length - 1);
            result += words3Char[randomIndex];
        } else if (wordLength === 4) {
            let randomIndex = getRandomNumber(0, words4Char.length - 1);
            result += words4Char[randomIndex];
        } else if (wordLength === 5) {
            let randomIndex = getRandomNumber(0, words5Char.length - 1);
            result += words5Char[randomIndex];
        } else if (wordLength === 6) {
            let randomIndex = getRandomNumber(0, words6Char.length - 1);
            result += words6Char[randomIndex];
        } else if (wordLength === 7) {
            let randomIndex = getRandomNumber(0, words7Char.length - 1);
            result += words7Char[randomIndex];
        } else if (wordLength === 8) {
            let randomIndex = getRandomNumber(0, words8Char.length - 1);
            result += words8Char[randomIndex];
        }
    }

    return result;
}

// Fisher-Yates (aka Knuth) Shuffle
function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
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
    const { jsPDF } = window.jspdf;
    const scale = window.innerWidth / window.outerWidth;
    if (scale != 1) {
       document.body.style.zoom = scale;
    }

    let pdf = new jsPDF('l', 'pt', 'a4');
    pdf.html(document.getElementById('table'), {
        html2canvas: {
            scale: 1 // default is window.devicePixelRatio
        },
        callback: function () {
            pdf.save('minhs-hart-chart.pdf');
        },
        y: 50
    });
});
