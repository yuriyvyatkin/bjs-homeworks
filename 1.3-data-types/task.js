'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
    let inputData = {
        percent: percent,
        contribution: contribution,
        amount: amount
    }

    for (let prop in inputData) {
        if (typeof inputData[prop] === 'string') {
            let intermediateValue = parseInt(inputData[prop]);

            if (isNaN(intermediateValue)) {
                console.log(`Параметр ${prop} содержит неправильное значение ${inputData[prop]}`);
                return;
            } else if (intermediateValue < 0) {
                console.log(`Параметр ${prop} содержит значение меньше нуля`);
                return;
            }

            inputData[prop] = intermediateValue;
        }
    }

    if (!isFinite(date)) {
        console.log('Параметр date не содержит дату');
        return;
    }

    let startDate = new Date();
    let endDate = date;

    if (endDate < startDate) {
        console.log('Параметр date содержит дату меньше текущей');
        return;
    }

    let n = (endDate.getFullYear() - startDate.getFullYear()) * 12
    n = n - startDate.getMonth() + endDate.getMonth();

    let S = inputData.amount - inputData.contribution;

    let P = inputData.percent / 100 / 12;

    let result = ((S * (P + P / (((1 + P) ** n) - 1))) * n).toFixed(2);

    console.log(result);

    return +result;
}

function getGreeting(name) {
    name = !name || !name.trim() ? 'Аноним' : name;

    let result = `Привет, мир! Меня зовут ${name}.`;

    console.log(result);

    return result;
}