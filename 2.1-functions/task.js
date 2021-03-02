'use strict';

// Задача № 1

function getSolutions(a, b, c) {
    let x = [];

    let D = b ** 2 - 4 * a * c;

    if (D === 0) {
        let x1 = -b / (2 * a);
        x.push(x1);
    } else if (D > 0) {
        let sqrtD = Math.sqrt(D);
        a = 2 * a;
        let x1 = (-b + sqrtD) / a;
        let x2 = (-b - sqrtD) / a;
        x.push(x1, x2);
    }

    return {
        D,
        roots: x
    };
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);

    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    let roots = result.roots;
    let rootsNumber = roots.length;

    if (rootsNumber === 2) {
        console.log(`Уравнение имеет два корня. X₁ = ${roots[0]}, X₂ = ${roots[1]}`);
    } else if (rootsNumber === 1) {
        console.log(`Уравнение имеет один корень X₁ = ${roots[0]}`);
    } else {
        console.log('Уравнение не имеет вещественных корней');
    }
}

// Задача № 2

function getAverageMark(marks) {
    let marksLength = marks.length;

    if (marksLength === 0) {
        return 0;
    }

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return (marks.reduce(reducer)) / marksLength;
}

function getAverageScore(data) {
    const inputData = data;
    let outputData = new Object();

    if (JSON.stringify(inputData) === '{}') {
        return {
            average: 0
        };
    }

    for (let prop in inputData) {
        outputData[prop] = getAverageMark(inputData[prop]);
    }

    outputData['average'] = getAverageMark(Object.values(outputData));

    return outputData;
}

// Задача № 3

function getDecodedValue(secret) {
    return secret ? 'Эмильо' : 'Родриго';
}

function getPersonData(secretData) {
    return {
        firstName: getDecodedValue(secretData.aaa),
        lastName: getDecodedValue(secretData.bbb)
    };
}