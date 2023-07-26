console.log("Hello from index.js");
const h2List = document.querySelectorAll("h2");

console.log(h2List);

const username = localStorage.getItem("username");
console.log(username);

const name = "Jayesh";

localStorage.setItem("name", name);

const myName = localStorage.getItem("name");
console.log(myName);

localStorage.removeItem("username");
