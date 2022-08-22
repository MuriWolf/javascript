import App from "./modules/app.js";

const app = new App();

let something = "aa";
console.log(something);

if(something.length == 0) {
    console.log("Empty text");
} else {
    console.log("Something was typed");
}

//