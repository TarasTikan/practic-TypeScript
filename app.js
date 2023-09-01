// Завдання 1
var age;
var names;
var toggle;
var empty;
var notInitialize;
var callback = function (a) {
    return age = 50;
};
names = "Max";
toggle = true;
empty = null;
notInitialize = undefined;
callback = function (a) {
    return 100 + a;
};
// Завдання 2
var anything;
anything = "Text";
anything = {};
// Завдання 3
var person;
person = ["Max", 21];
// Завдання 4
var some;
some = "Text";
var str;
if (typeof some === "string") {
    str = some;
}
// Завдання 5
var Load;
(function (Load) {
    Load[Load["LOADING"] = 0] = "LOADING";
    Load[Load["READY"] = 1] = "READY";
})(Load || (Load = {}));
var page = {
    load: Load.READY,
};
if (page.load === Load.READY) {
    console.log("Сторінка завантажена");
}
if (page.load === Load.LOADING) {
    console.log("сторінка завантажується");
}
// Завдання 6
var union;
var literal;
// Завдання 7
function showMeasage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
var page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-05-01"),
    },
};
var page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
