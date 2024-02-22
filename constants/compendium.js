import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import proverbs from "./books/oldTestament/proverbs";
import james from "./books/newTestament/james";

const oldTestamentBooks = [
    "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth",
    "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Esther",
    "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel",
    "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai",
    "Zechariah", "Malachi",
];

const newTestamentBooks = [
    "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians",
    "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Philemon",
    "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John", "Jude", "Revelation"
];

const testaments = [
    "Old",
    "New"
]

function getChapterCount(book) {
    switch (book.toLowerCase()) {
        case "genesis":
            return 50;
        case "exodus":
            return 40;
        case "leviticus":
            return 27;
        case "numbers":
            return 36;
        case "deuteronomy":
            return 34;
        case "joshua":
            return 24;
        case "judges":
            return 21;
        case "ruth":
            return 4;
        case "1 samuel":
            return 31;
        case "2 samuel":
            return 24;
        case "1 kings":
            return 22;
        case "2 kings":
            return 25;
        case "1 chronicles":
            return 29;
        case "2 chronicles":
            return 36;
        case "ezra":
            return 10;
        case "nehemiah":
            return 13;
        case "esther":
            return 10;
        case "job":
            return 42;
        case "psalms":
            return 150;
        case "proverbs":
            return 31;
        case "ecclesiastes":
            return 12;
        case "song of solomon":
            return 8;
        case "isaiah":
            return 66;
        case "jeremiah":
            return 52;
        case "lamentations":
            return 5;
        case "ezekiel":
            return 48;
        case "daniel":
            return 12;
        case "hosea":
            return 14;
        case "joel":
            return 3;
        case "amos":
            return 9;
        case "obadiah":
            return 1;
        case "jonah":
            return 4;
        case "micah":
            return 7;
        case "nahum":
            return 3;
        case "habakkuk":
            return 3;
        case "zephaniah":
            return 3;
        case "haggai":
            return 2;
        case "zechariah":
            return 14;
        case "malachi":
            return 4;
        case "matthew":
            return 28;
        case "mark":
            return 16;
        case "luke":
            return 24;
        case "john":
            return 21;
        case "acts":
            return 28;
        case "romans":
            return 16;
        case "1 corinthians":
            return 16;
        case "2 corinthians":
            return 13;
        case "galatians":
            return 6;
        case "ephesians":
            return 6;
        case "philippians":
            return 4;
        case "colossians":
            return 4;
        case "1 thessalonians":
            return 5;
        case "2 thessalonians":
            return 3;
        case "1 timothy":
            return 6;
        case "2 timothy":
            return 4;
        case "titus":
            return 3;
        case "philemon":
            return 1;
        case "hebrews":
            return 13;
        case "james":
            return 5;
        case "1 peter":
            return 5;
        case "2 peter":
            return 3;
        case "1 john":
            return 5;
        case "2 john":
            return 1;
        case "3 john":
            return 1;
        case "jude":
            return 1;
        case "revelation":
            return 22;
        default:
            return "Book not found";
    }
}

function getRandomTestament() {
    const testamentIndex = Math.floor(Math.random() * 2);
    return testaments[testamentIndex];
}

function getRandomBook(testament) {
    if (!testament) {
        testament = getRandomTestament();
    }
    switch(testament) {
        case "Old": {
            return oldTestamentBooks[Math.floor(Math.random() * oldTestamentBooks.length)];
        }
        case "New": {
            return newTestamentBooks[Math.floor(Math.random() * newTestamentBooks.length)];
        }
    }
    return "Unable to return a book"
}

function getRandomChapter(testament, book) {
    testament = testament? testament : getRandomTestament();
    book = book? book : getRandomBook(testament);

    return range(0, getChapterCount(book) - 1);
}

function getRandomVerse(testament, book, chapter) {
    testament = testament? testament : getRandomTestament();
    book = book? book : getRandomBook(testament);
    chapter = chapter? chapter : getRandomChapter(testament, book);
    try {
        switch(book.toLowerCase()) {
            case "proverbs": {
                return range(1, proverbs.proverbs[chapter].length);
            }
            case "james": {
                return range(1, james.james[chapter].length);
            }
        }
    } catch(e) {
        return 1;
    }

    return 1;
}

function generateVerseObject(testament, book, chapter, verse) {
    chapter = chapter === 'All' ? null : chapter;

    testament = testament? testament : getRandomTestament();
    book = book? book[range(0, book.length - 1)] : getRandomBook(testament);
    chapter = chapter !== null ? chapter : getRandomChapter(testament, book);
    verse = verse? verse : getRandomVerse(testament, book, chapter);
    verse--;
    const verseObject = {
        book: book,
        chapter: parseInt(chapter),
        verse: parseInt(verse),
        text: ""
    };
    verseObject.text = capitalize(retrieveVerseText(verseObject));

    return verseObject;
}

function range(min, max) {
    const randomFraction = parseInt(uuidv4().slice(0, 8), 16) / 0xffffffff;
    return Math.floor(randomFraction * (max - min + 1)) + min;
}

function capitalize(string) {
    if (typeof string !== 'string') {
        return string;
    }

    return string.charAt(0).toUpperCase() + string.slice(1);
}

function retrieveVerseText(obj) {
    try {
        switch(obj.book.toLowerCase()) {
            case "proverbs": {
                return proverbs.proverbs[obj.chapter][obj.verse];
            }
            case "james": {
                return james.james[obj.chapter][obj.verse];
            }
        }
    } catch(e) {
        return `Error retrieving verse:\n${e}\n\n${obj.testament}:${obj.book}:${obj.chapter}:${obj.verse}`;
    }
    return "Book not found."
}

module.exports = {
    getChapterCount,
    getRandomTestament,
    getRandomBook,
    getRandomChapter,
    getRandomVerse,
    generateVerseObject,
    range,
};