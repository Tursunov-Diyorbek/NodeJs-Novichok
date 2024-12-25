const path = require("path");

//Basename metodi (Fayl nomi)
console.log(path.basename(__filename));

//Dirname metodi (Papka nomi)
console.log(path.dirname(__filename));

//Extname metodi (Fayl turi)
console.log(path.extname(__filename));

//Ob'ektga qabul qiladi
const pathObj = path.parse(__filename);
console.log(pathObj);

//Str qabul qiladi
// /database/mongodb/db.js
console.log(path.join(__dirname, "database", "mongodb", "db.js"));
