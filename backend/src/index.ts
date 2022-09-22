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
  const q =
    "INSERT INTO books (`id`,`title`,`description`,`cover`, `price`) VALUES (?)";
  const values = [
    uuidV4(),
    request.body.title,
    request.body.description,
    request.body.cover,
    request.body.price,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return response.json(err);
    return response.status(201).json(data);
  });
});

app.put("/books/:id", (request, response) => {
  const bookId = request.params.id;
  const q =
    "UPDATE books SET `title` = ?, `description` = ?, `price` = ?, `cover` = ? WHERE id = ?";

  const values = [
    request.body.title,
    request.body.description,
    request.body.price,
    request.body.cover,
  ];

  db.query(q, [...values, bookId], (err, data) => {
    if (err) return response.json(err);
    return response.json(data);
  });
});

app.delete("/books/:id", (request, response) => {
  const bookId = request.params.id;
  const q = "DELETE FROM books WHERE id = ?";

  db.query(q, [bookId], (err, data) => {
    if (err) return response.json(err);
    return response.json("Book has been deleted successfully");
  });
});

app.listen(port, () => console.log("Server is running 🚀"));
