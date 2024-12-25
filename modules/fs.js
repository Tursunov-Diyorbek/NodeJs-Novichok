const fs = require("fs");
const path = require("path");

//Papka yaratish
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Papka yaratildi...");
// });

//File yaratish
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Node js orqali yaratildi",
//   (err) => {
//     if (err) throw err;
//     console.log("File yaratildi...");
//   }
// );

//Filega ma'lumot qo'shish
// fs.appendFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   " Hello Node js",
//   (err) => {
//     if (err) throw err;
//     console.log("File yaratildi...");
//   }
// );

//File o'qish
// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

//File o'zgartirish
// fs.rename(
//   path.join(__dirname, "/test", "hello.txt"),
//   path.join(__dirname, "/test", "hello2.txt"),
//   (err) => {
//     if (err) throw err;
//     console.log("File o'zgartirildi...");
//   }
// );

//File o'chirish
fs.unlink(path.join(__dirname, "/test", "hello2.txt"), (err) => {
  if (err) throw err;
  console.log("File o'chirildi...");
});
