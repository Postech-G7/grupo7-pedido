import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('*', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`⚡Server is running on http://localhost:${port}`);
});

export {};