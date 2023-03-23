import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js"; //cuando se usa export default puedes nombrarlo como quiereas en este caso usersRoute

const app = express(); //aqui iniciamos la aplicacion
const PORT = process.env.PORT || 5001;

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  console.log("test");
  res.send("hello from homepage");
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
