import { BookProps } from "@appTypes/books";
import axios from "axios";

const BACKEND_URL = "http://localhost:8080";

const api = axios.create({
  baseURL: BACKEND_URL,
});

export const booksApi = {
  list: async () => {
    return await api
      .get("/books")
      .then((res) => res)
      .catch((err) => err.response);
  },

  create: async (data: Omit<BookProps, "id">) => {
    return await api
      .post("/books", data)
      .then((res) => res)
      .catch((err) => err.response);
  },

  update: async (data: Omit<BookProps, "id">, id: string) => {
    return await api
      .put(`/books/${id}`, data)
      .then((res) => res)
      .catch((err) => err.response);
  },

  delete: async (id: string) => {
    return await api
      .delete(`/books/${id}`)
      .then((res) => res)
      .catch((err) => err.response);
  },
};
