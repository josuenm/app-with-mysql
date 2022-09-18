import { BookProps } from "@appTypes/books";
import { booksApi } from "@services/api";
import React, { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface StateContextProps {
  books: BookProps[];
  List: () => Promise<void>;
  Add: (data: Omit<BookProps, "id">) => Promise<void>;
  Delete: (id: string) => Promise<void>;
  Update: (data: Omit<BookProps, "id">) => Promise<void>;
}

const StateContext = createContext({} as StateContextProps);

export const BookContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const List = async () => {
    try {
      const res = await booksApi.list();
      if (res.data.length > 0) {
        setBooks(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const Add = async (book: Omit<BookProps, "id">) => {
    try {
      await booksApi.create(book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const Update = async (book: Omit<BookProps, "id">) => {
    try {
      await booksApi.update(book, location.pathname.replace("/update/", ""));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const Delete = async (id: string) => {
    try {
      await booksApi.delete(id);
      if (books.length === 1) {
        setBooks([]);
        return;
      }
      const newBookList = books.filter((book: BookProps) => book.id !== id);
      setBooks(newBookList);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StateContext.Provider value={{ books, List, Add, Delete, Update }}>
      {children}
    </StateContext.Provider>
  );
};

export const BookContext = () => useContext(StateContext);
