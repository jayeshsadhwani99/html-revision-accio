console.log("Hello from the separate file");
const h1List2 = document.querySelectorAll("h1");

console.log(h1List2);

const usernameSession = sessionStorage.getItem("username");
console.log(usernameSession);

// sessionStorage.setItem("name", "Hello");

sessionStorage.removeItem("username");
