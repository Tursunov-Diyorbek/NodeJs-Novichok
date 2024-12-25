// // console.log(__dirname);
// // console.log(__filename);
// // const Logger = require("./logger");

// // const logger = new Logger();

// // logger.on("message", (data) => {
// //   console.log("Logging", data);
// // });

// // logger.log("GET", "/admin/users");
// // logger.log("POST", "/products/add");
// // logger.log("DELETE", "/users/12");

// const http = require("http");
// const path = require("path");
// const fs = require("fs");

// // const server = http.createServer((req, res) => {
// //   if (req.url === "/") {
// //     fs.readFile(
// //       path.join(__dirname, "public", "index.html"),
// //       (err, content) => {
// //         if (err) throw err;
// //         res.writeHead(200, { "Content-Type": "text/html" });
// //         res.end(content);
// //       }
// //     );
// //   }
// // });

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     const books = [
//       {
//         id: 1,
//         name: "The Lord of the Rings",
//         author: "R Robert",
//       },
//       {
//         id: 2,
//         name: "The Hobbit",
//         author: "A Medison",
//       },
//       {
//         id: 3,
//         name: "The Silmarillion",
//         author: "J. R. R. Tolkien",
//       },
//     ];

//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(books));
//   }
// });

// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const http = require("http");
const getBodyData = require("./util");

const books = [
  {
    id: 1,
    name: "The Lord of the Rings",
    author: "R Robert",
  },
  {
    id: 2,
    name: "The Hobbit",
    author: "A Medison",
  },
  {
    id: 3,
    name: "The Silmarillion",
    author: "J. R. R. Tolkien",
  },
];

const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>/books</h1>");
    res.end();
  } else if (req.url === "/books" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "aplication/json charset=utf-8" });

    const responsive = {
      message: "Success",
      status: 1,
      books,
    };

    res.end(JSON.stringify(responsive));
  } else if (req.url === "/books" && req.method === "POST") {
    const data = await getBodyData(req);
    const { name, author } = JSON.parse(data);
    const newBook = {
      id: books.length + 1,
      name,
      author,
    };
    books.push(newBook);
    const responsive = {
      message: "Success",
      status: 1,
      book: newBook,
    };
    res.writeHead(200, { "Content-Type": "aplication/json charset=utf-8" });
    res.end(JSON.stringify(responsive));
  } else if (req.url.match(/\/books\/(\d+)/) && req.method === "GET") {
    const id = req.url.split("/")[2];
    const book = books.find((book) => book.id === parseInt(id));
    const responsive = {
      message: "Success",
      status: 1,
      book,
    };
    res.writeHead(200, { "Content-Type": "aplication/json charset=utf-8" });
    res.end(JSON.stringify(responsive));
  } else if (req.url.match(/\/books\/(\d+)/) && req.method === "PUT") {
    const id = req.url.split("/")[2];
    const data = await getBodyData(req);
    const { name, author } = JSON.parse(data);
    const book = books.find((book) => book.id === parseInt(id));
    book.name = name;
    book.author = author;
    const responsive = {
      message: "Success",
      status: 1,
      book,
    };
    res.writeHead(200, { "Content-Type": "aplication/json charset=utf-8" });
    res.end(JSON.stringify(responsive));
  } else if (req.url.match(/\/books\/(\d+)/) && req.method === "DELETE") {
    const id = req.url.split("/")[2];
    const book = books.find((book) => book.id === parseInt(id));
    const index = books.indexOf(book);
    books.splice(index, 1);
    const responsive = {
      message: "Success",
      status: 1,
      book,
    };
    res.writeHead(200, { "Content-Type": "aplication/json charset=utf-8" });
    res.end(JSON.stringify(responsive));
  }
});

server.listen(3000, () => console.log("Server running on port 3000"));
