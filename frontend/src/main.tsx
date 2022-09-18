import { Box, ChakraProvider } from "@chakra-ui/react";
import { BookContextProvider } from "@contexts/bookContext";
import Add from "@pages/Add";
import Books from "@pages/Books";
import Update from "@pages/Update";
import theme from "@utils/theme";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <BookContextProvider>
          <Box minH="100vh" bg="gray.100">
            <Routes>
              <Route path="/" element={<Books />} />
              <Route path="/add" element={<Add />} />
              <Route path="/update/:id" element={<Update />} />
            </Routes>
          </Box>
        </BookContextProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
