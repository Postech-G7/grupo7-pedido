import { Environment } from "./environment.config"
import ExpressConfig from "configuration/express.config"

Environment()

const app = ExpressConfig()

app.listen(process.env.PORT , () => {
    console.log("Server Running on http://localhost:" + process.env.PORT)
})