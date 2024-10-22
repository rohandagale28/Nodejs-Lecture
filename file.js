const fs = require("fs");
const os = require("os");

console.log(os.cpus().length);

// blocking request
// fs.writeFileSync("./test.txt", "hello world");

// non-blocking
// fs.writeFile("./test.txt", "hello world async", (err) => {});

fs.appendFileSync("./test.txt", `hey there\n`);

fs.cpSync("./test.txt", "./copy.txt");

fs.unlinkSync("./copy.txt");

console.log(fs.statSync("./test.txt"));

const data = fs.readFile("./contact.txt", "utf-8", (res, result) => {
  console.log(result);
});

fs.mkdirSync("my-doc/a/b", { recursive: true });

console.log(data);
