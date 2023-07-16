let table = document.getElementById("table");

// Generate Hart Chart
let refreshButton = document.getElementById("refresh-button");
refreshButton.addEventListener("click", function() {
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
