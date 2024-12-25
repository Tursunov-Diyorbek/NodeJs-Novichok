const url = require("url");

const myUrl = new URL(
  "http://mywebsite.com:3000/hello.html?id=100&status=active"
);

//Umumiy URL manzil
console.log(myUrl.href);

//Port bilan birga
console.log(myUrl.host);

//Domenni o'zi
console.log(myUrl.hostname);

//Path
console.log(myUrl.pathname);

//Query parametr
console.log(myUrl.search);

//Object
console.log(myUrl.searchParams);

//Add new parametr
myUrl.searchParams.append("firstName", "Diko");
console.log(myUrl.searchParams);

//Id
console.log(myUrl.searchParams.get("id"));

//tsikl
console.log(
  myUrl.searchParams.forEach((name, value) => {
    console.log(`${value}: ${name}`);
  })
);
