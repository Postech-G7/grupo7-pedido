import ExpressConfig from "./express.config";

const PORT = 3000;

const app = ExpressConfig();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
