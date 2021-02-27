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
            } else {
                inputData[prop] = intermediateValue;
            }
        }
    }

    let S = inputData.amount - inputData.contribution;

    let P = inputData.percent / 100 / 12;

    let startDate = new Date();
    let endDate = date;

    let n = (endDate.getFullYear() - startDate.getFullYear()) * 12
    n = n - startDate.getMonth() + endDate.getMonth();

    let result = ((S * (P + P / (((1 + P) ** n) - 1))) * n).toFixed(2);

    console.log(result);

    return Number(result);
}

function getGreeting(name) {
    let result = !!name
        ? `Привет, мир! Меня зовут ${name}.`
        : 'Привет, мир! Меня зовут Аноним.';

    console.log(result);

    return result;
}