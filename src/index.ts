import express from "express"
import { transactions } from "./data"

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())

app.get("/", (req, res) => {
    return res.send("Hello world :)")
})

app.get("/transactions", (req, res) => {
    return res.status(200).send({
        status: 200,
        data: transactions,
        message: "Success"
    })
})

app.listen(port, () => console.log(`listening on ${port}`))
