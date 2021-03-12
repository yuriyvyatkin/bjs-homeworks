'use strict';

// Task № 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = Math.trunc(this._state * 1.5);
    }

    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(...args) {
        super(...args);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, ...args) {
        super(...args);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(...args) {
        super(...args);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(...args) {
        super(...args);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(...args) {
        super(...args);
        this.type = 'detective';
    }
}

// Task № 2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
            console.log(`Книга "${book.name}" добавлена в библиотеку.`);
        } else {
            console.log(
                `Книга "${book}" не может быть добавлена в библиотеку, так как её состояние 30% или менее.`
            );
        }
    }

    findBookBy(type, value) {
        const result = this.books.find((book) => book?.[type] === value);

        return result ? result : null;
    }

    giveBookByName(bookName) {
        const bookIndex = this.books.findIndex(
            (book) => book.name === bookName
        );

        return bookIndex > -1 ? this.books.splice(bookIndex, 1)[0] : null;
    }
}

// Sample usage

const library = new Library('Библиотека всемирной литературы');

library.addBook(new FantasticBook('Кинг Диана', 'Мишки Гамми', 1996, 240));
library.addBook(new DetectiveBook('Артур Дойл', 'Шерлок Холмс', 1919, 944));
library.addBook(
    new NovelBook('Маргарет Митчелл', 'Унесённые ветром', 2020, 1280)
);

console.log(library);

let foundBook = library.findBookBy('releaseDate', 1919);

console.log(foundBook);

let givenBook = library.giveBookByName('Унесённые ветром');

console.log(givenBook.state);

givenBook.state = 10;

console.log(givenBook.state);

givenBook.fix();
givenBook.fix();
givenBook.fix();

console.log(givenBook.state);

library.addBook(givenBook);

console.log(library);

// Task № 3

class StudentLog {
    constructor(name) {
        this.name = name;
        this.subjects = {};
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (!Number.isInteger(grade) || grade < 1 || grade > 5) {
            console.log(
                `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`
            );
            if (!(subject in this.subjects)) {
                return 0;
            }
        } else if (subject in this.subjects) {
            this.subjects[subject].push(grade);
        } else {
            this.subjects[subject] = [grade];
        }

        return this.subjects[subject].length;
    }

    getAverageBySubject(subject) {
        if (subject in this.subjects && this.subjects[subject].length) {
            let sum = this.subjects[subject].reduce(
                (acc, grade) => acc + grade
            );
            return sum / this.subjects[subject].length;
        } else {
            return 0;
        }
    }

    getTotalAverage() {
        let totalAverageGrade = Object.keys(this.subjects).reduce(
            ({ sum, count }, subject) => {
                sum += this.getAverageBySubject(subject);
                ++count;
                return { sum, count };
            },
            { sum: 0, count: 0 }
        );

        return totalAverageGrade.sum / totalAverageGrade.count;
    }
}

// Sample usage

const log = new StudentLog('Иван Петров');

log.addGrade(3, 'chemistry');
log.addGrade(4, 'chemistry');
log.addGrade(5.0000000000001, 'chemistry');

console.log(log);
console.log(log.getAverageBySubject('chemistry'));

log.addGrade(5, 'music');
log.addGrade(4, 'music');
console.log(log.getAverageBySubject('music'));

log.addGrade('3', 'physics');
log.addGrade(Object, 'physics');
console.log(log.getAverageBySubject('physics'));

console.log(log.getTotalAverage());
