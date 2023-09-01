// Завдання 1
let age: number;
let names: string;
let toggle: boolean;
let empty: null;
let notInitialize: undefined;
let callback = (a: number):number => 

age = 50;
names = "Max";
toggle = true;
empty = null;
notInitialize = undefined;
callback = (a) => {
  return 100 + a;
};

// Завдання 2
let anything: any;
anything = "Text";
anything = {};
// Завдання 3
let person: [string, number];
person = ["Max", 21];

// Завдання 4
let some: unknown;
some = "Text";

let str: string;

if (typeof some === "string") {
  str = some;
}

// Завдання 5
enum Load {
  LOADING,
  READY,
}
const page = {
  load: Load.READY,
};
if (page.load === Load.READY) {
  console.log("Сторінка завантажена");
}
if (page.load === Load.LOADING) {
  console.log("сторінка завантажується");
}

// Завдання 6
let union: string | number;
let literal: "enable" | "disable";
// Завдання 7
function showMeasage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

// Завдання 8
type PageBasePage = {
  title: string;
  likes: number;
  accounts: string[];
  status: "close" | "open";
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

type PageBaseTwo = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
};

const page1: PageBasePage = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: PageBaseTwo = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
