import { AppDataSource } from "./data-source"
import e = require('express')
import routers from "./routes/routes"

const app = e()

app.use(e.json())
app.use(routers)

AppDataSource.initialize().then(async () => {
    console.log("Database is running")
    app.listen(3333, () => {
        console.log("Server is running well on port",3333)
    })
}).catch(error => {
    console.log(error)
    console.log("VAI SE FUDER")
})