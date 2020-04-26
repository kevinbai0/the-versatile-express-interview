const fs = require("fs")

for (let i = 0; i < 10; ++i) {
    const nums = []
    for (let j = 0; j < 1000; ++j) {
        nums.push(Math.floor(Math.random() * 1000 + 2))
    }
    fs.writeFileSync(`./testcases/test${i}.txt`, nums.join(" "))
}