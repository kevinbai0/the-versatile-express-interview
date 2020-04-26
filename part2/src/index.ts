import express from "express"
import { transactions } from "./data"

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())

app.get("/", (req, res) => {
    return res.send("Hello world :)")
})

app.get("/transactions", (req, res) => {
    const success = true //Math.random() < 0.5
    return res.status(success ? 200 : 500).send({
        status: success ? 200 : 500,
        ...(success && { data: transactions }),
        message: success ? "Success" : "Bad request!"
    })
})

app.listen(port, () => console.log(`listening on ${port}`))
