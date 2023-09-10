function encodeMessage(message, legend) {
    message = message.toLowerCase();
    const words = message.split(" ");
    const alphabet = "abcdefghijklmnopqrstuvwxy";
    let wordsProblems = words.map((word) => {
        let encodedWord = [];
        for (let letter of word) {
            if (!alphabet.includes(letter)) {
                encodedWord.push(letter);
                continue;
            }
            const problems = Object.values(legend[letter]);
            const random = Math.floor(Math.random() * problems[0].length);
            const problem = problems[0][random];
            encodedWord.push(problem);
        }

        return encodedWord;
    });

    return wordsProblems;
}

function multiplication(table, nums) {
    for (let num of nums) {
        for (let i = 1; i <= 12; i++) {
            table[`${num}x${i}`] = num * i;
        }
    }
    return table;
}

function multAndDiv(table, nums) {
    multiplication(table, nums);
    for (let num of nums) {
        for (let i = 1; i <= 12; i++) {
            table[`${num * i}/${num}`] = i;
        }
    }
}

function division(table, nums) {
    for (let num of nums) {
        for (let i = 1; i <= 27; i++) {
            table[`${num * i}/${num}`] = i;
        }
    }
}

function produceTable(nums, mathType) {
    let table = {};
    if (mathType == "multiplication") {
        multiplication(table, nums);
    }
    if (mathType == "multAndDiv") {
        console.log("here");
        multAndDiv(table, nums);
    }
    if (mathType == "division") {
        division(table, nums);
    }
    return table;
}

function getKeys(table, timesTable) {
    const valuesSet = new Set(Object.values(timesTable));
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let letter of alphabet) {
        const values = Array.from(valuesSet);
        let randomIndex = Math.floor(Math.random() * values.length);
        const key = values[randomIndex];
        const newObject = {};
        newObject[key] = [];
        table[letter] = newObject;
        valuesSet.delete(key);
    }
    return table;
}
function getValues(timesTable, legend) {
    for (let item in legend) {
        const itemKeys = Object.keys(legend[item]);
        const value = Number(itemKeys[0]);
        for (let answer in timesTable) {
            if (value === timesTable[answer]) {
                legend[item][value].push(answer);
            }
        }
    }
}

//This function should loop through the alphabet and assign values
//and problems to each letter to create a legend for the message
function makeLegend(timesTable) {
    let legend = getKeys({}, timesTable);
    getValues(timesTable, legend);
    return legend;
}

export { makeLegend, produceTable, encodeMessage };

