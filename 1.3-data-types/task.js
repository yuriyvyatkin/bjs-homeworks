'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
    let inputData = {
        percent: percent,
        contribution: contribution,
        amount: amount
    }

    for (let [key, value] in Object.entries(inputData)) {
        if (typeof value === 'string') {
            let intermediateValue = parseInt(value);

            if (isNaN(intermediateValue)) {
                console.log(`Параметр ${key} содержит неправильное значение ${value}`);
                return;
            } else if (intermediateValue < 0) {
                console.log(`Параметр ${key} содержит значение меньше нуля`);
                return;
            }

            inputData[key] = intermediateValue;
        }
    }

    if (!isFinite(date)) {
        console.log('Параметр date не содержит дату');
        return;
    }

    let startDate = new Date;
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