const fs = require("fs");

fs.readFile("./firstname.txt", "utf-8", (err, data1) => {
  const name = data1
  fs.readFile("./lastname.txt", "utf-8", (err, data2) => {
    const lastName = data2
    fs.readFile("./age.txt", "utf-8", (err, data3) => {
      const age = data3
      fs.readFile("./hobbies.txt", "utf-8", (err, data4) => {
        const hobbies = JSON.parse(data4)
        console.log(`${name} ${lastName} is ${age} years old and his hoobies are ${hobbies[0]} and ${hobbies[1]}`)
      })
    })
  })
  // your code here
})