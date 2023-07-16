let refreshButton = document.getElementById("refresh-button");
refreshButton.addEventListener("click", function() {
    let color = document.getElementById("color");
    let colorValue = color.value;

    let content = document.getElementById("content");
    let contentValue = content.value;

    if (colorValue === "black-white" && contentValue === "letters") {
        getAlphaCharsBlackWhite();
    } else if (colorValue === "black-white" && contentValue === "letters-numbers") {
        getAlphaNumericCharsBlackWhite();
    } else if (colorValue === "multicolor-2" && contentValue === "letters") {
        getAlphaCharsMulticolor2("red", "green");
    } else if (colorValue === "multicolor-2" && contentValue === "letters-numbers") {
        getAlphaNumericCharsMulticolor2("red", "green");
    } else if (colorValue === "multicolor-3" && contentValue === "letters") {
        getAlphaCharsMulticolor3("red", "green", "blue");
    } else if (colorValue === "multicolor-3" && contentValue === "letters-numbers") {
        getAlphaNumericCharsMulticolor3("red", "green", "blue");
    }
})

let table = document.getElementById("table");

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

function getAlphaCharsBlackWhite() {
    let letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();

    for (let i = 0, row; row = table.rows[i]; i++) {
        for (let j = 0, col; col = row.cells[j]; j++) {
            col.innerText = letters.charAt(Math.floor(Math.random() * letters.length));
            col.style.color = "black";
        }
    }
}

function getAlphaNumericCharsBlackWhite() {
    let letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
    let nums = '1234567890'
    let alphaNumericChars = letters + nums;

    for (let i = 0, row; row = table.rows[i]; i++) {
        for (let j = 0, col; col = row.cells[j]; j++) {
            col.innerText = alphaNumericChars.charAt(Math.floor(Math.random() * alphaNumericChars.length));
            col.style.color = "black";
        }
    }
}

function getAlphaCharsMulticolor2(color1, color2) {
    let letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();

    for (let i = 0, row; row = table.rows[i]; i++) {
        for (let j = 0, col; col = row.cells[j]; j++) {
            col.innerText = letters.charAt(Math.floor(Math.random() * letters.length));
            Math.random() < 0.5 ? col.style.color = color1 : col.style.color = color2;
        }
    }
}

function getAlphaNumericCharsMulticolor2(color1, color2) {
    let letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
    let nums = '1234567890'
    let alphaNumericChars = letters + nums;

    for (let i = 0, row; row = table.rows[i]; i++) {
        for (let j = 0, col; col = row.cells[j]; j++) {
            col.innerText = alphaNumericChars.charAt(Math.floor(Math.random() * alphaNumericChars.length));
            Math.random() < 0.5 ? col.style.color = color1 : col.style.color = color2;
        }
    }
}

function getAlphaCharsMulticolor3(color1, color2, color3) {
    let letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();

    for (let i = 0, row; row = table.rows[i]; i++) {
        for (let j = 0, col; col = row.cells[j]; j++) {
            col.innerText = letters.charAt(Math.floor(Math.random() * letters.length));
            let randomChoice = Math.floor(Math.random() * 3);
            if (randomChoice === 1) {
                col.style.color = color1;
            } else if (randomChoice === 2) {
                col.style.color = color2;
            } else {
                col.style.color = color3;
            }
        }
    }
}

function getAlphaNumericCharsMulticolor3(color1, color2, color3) {
    let letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
    let nums = '1234567890'
    let alphaNumericChars = letters + nums;

    for (let i = 0, row; row = table.rows[i]; i++) {
        for (let j = 0, col; col = row.cells[j]; j++) {
            col.innerText = alphaNumericChars.charAt(Math.floor(Math.random() * alphaNumericChars.length));
            let randomChoice = Math.floor(Math.random() * 3);
            if (randomChoice === 1) {
                col.style.color = color1;
            } else if (randomChoice === 2) {
                col.style.color = color2;
            } else {
                col.style.color = color3;
            }
        }
    }
}
