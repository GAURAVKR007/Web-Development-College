const fs = require('fs');

// fs.readFile('file.txt', "utf-8", (err,data)=>{
//     console.log(err,data);
// })

// console.log("Hello World")

const a = fs.readFileSync('file.txt')
console.log(a.toString())

fs.writeFile("file2.txt", "Mokey.D Luffy is the best Main Character of all time", ()=> {
    console.log("Written to this file")
})
