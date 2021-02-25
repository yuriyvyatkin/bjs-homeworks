'use strict';

function getResult(a, b, c) {
    let x = [];

    let D = b ** 2 - 4 * a * c;

    if (D === 0) {
        let x1 = -b / 2 * a;
        x.push(x1);
    } else if (D > 0) {
        D = Math.sqrt(D);
        let x1 = (-b + D) / 2 * a;
        let x2 = (-b - D) / 2 * a;
        x.push(x1, x2);
    }

    return x;
}

function getAverageMark(marks) {
    let marksLength = marks.length;

    if (marksLength === 0) {
        return 0;
    }

    let maxMarksQuantity = 5;

    if (marksLength > maxMarksQuantity) {
        console.log('Количество введённых оценок больше, чем пять.');
        marksLength = maxMarksQuantity;
    }

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return (marks.slice(0, maxMarksQuantity).reduce(reducer)) / marksLength;
}

function askDrink(name, dateOfBirthday) {
    let userAge = new Date().getFullYear() - dateOfBirthday.getFullYear();

    const positiveAnswer = `Не желаете ли олд-фэшн, ${name}?`;
    const negativeAnswer = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;

    return userAge > 18 ? positiveAnswer : negativeAnswer;
}