import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users = [
  {
    name: "John",
    lastName: "Doe",
    age: 25,
  },
  {
    name: "Jane",
    lastName: "Doe",
    age: 24,
  },
];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;
  const userId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
  const userWithId = { ...user, id: userId };

  users.push(userWithId);

  res.send(`user with the name ${user.name} added to the databse`);
});

router.get("/:id", (request, response) => {
  const { id } = request.params; //params es un objeto

  const foundUser = users.find((user) => user.id === id);

  response.send(foundUser);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`se ha eliminado ${req.body.user} con el id ${id}`);
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { name, lastName, age } = req.body;

  const user = users.find((user) => user.id === id);

  console.log(user, "user");
  if (name) user.name = name;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`user with id ${id} has been updated.`);
});
export default router;
