const fs = require("fs")
const { sortWithPrimesOnly } = require("./index")

for (let i = 0; i < 10; ++i) {
    const data = fs.readFileSync(`./testcases/test${i}.txt`).toString("utf-8")
    const points = data.split(" ").map(val => parseInt(val))
    const newData = fs.readFileSync(`./validation/test${i}.txt`).toString("utf-8")
    if (newData == sortWithPrimesOnly(points).join(" ")) {
        console.log(`Passed test case ${i}`)
    }
    else {
        console.log(`Failed test case ${i}`)
    }
}
