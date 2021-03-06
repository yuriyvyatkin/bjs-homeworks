'use strict';

String.prototype.isPalindrome = function () {
    let leftSubstring = this.toLowerCase().match(/[а-я]/g);

    let rightSubstring = leftSubstring
        .splice(Math.ceil(this.length / 2))
        .reverse();

    return rightSubstring.every((item, index) => item === leftSubstring[index]);
};

function getAverageMark(marks) {
    let marksLength = marks.length;

    if (marksLength === 0) {
        return 0;
    }

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    let roundedAverage = Math.round(marks.reduce(reducer) / marksLength);

    return roundedAverage;
}

function checkBirthday(birthday) {
    function UserException(message) {
        this.message = message;
        this.name = 'Ошибка ввода данных';
    }

    if (!birthday) {
        throw new UserException('Параметр birthday не содержит дату');
    }

    let diff = Date.now() - new Date(birthday).valueOf();

    let age = diff / (365.25 * 24 * 60 * 60 * 1000);

    return age >= 18;
}