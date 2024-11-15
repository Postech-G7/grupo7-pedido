import ExpressConfig from "./express.config";
import { Environment } from "./environment.config";

Environment();

const app = ExpressConfig();

app.listen(process.env.PORT, () => {
  console.log("Server is running on port" + process.env.PORT);
});
