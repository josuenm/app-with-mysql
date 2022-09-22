import cors from "cors";
import express from "express";
import { v4 as uuidV4 } from "uuid";
import db from "./database/config";

const port = 8080;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  response.json("hello, backend is running");
});

app.get("/books", (request, response) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return response.json(err);
    return response.json(data);
  });
});

app.post("/books", (request, response) => {
  const { title, description, cover, price } = request.body;

  const q = "INSERT INTO books (`??`,`??`,`??`,`??`, `??`) VALUES (?)";

  const data = [
    "id",
    "title",
    "description",
    "cover",
    "price",
    uuidV4(),
    title,
    description,
    cover,
    price,
  ];

  db.query(q, data, (err, data) => {
    if (err) return response.json(err);
    return response.status(201).json(data);
  });
});

app.put("/books/:id", (request, response) => {
  const bookId = request.params.id;
  const { title, description, price, cover } = request.body;

  const q = "UPDATE books SET ?? = ?, ?? = ?, ?? = ?, ?? = ? WHERE ?? = ?";

  const data = [
    "title",
    title,
    "description",
    description,
    "price",
    price,
    "cover",
    cover,
    "id",
    bookId,
  ];

  db.query(q, data, (err, data) => {
    if (err) return response.json(err);
    return response.json(data);
  });
});

app.delete("/books/:id", (request, response) => {
  const bookId = request.params.id;
  const q = "DELETE FROM books WHERE ?? = ?";

  const data = ["id", bookId];

  db.query(q, data, (err, data) => {
    if (err) return response.json(err);
    return response.json("Book has been deleted successfully");
  });
});

app.listen(port, () => console.log("Server is running 🚀"));
