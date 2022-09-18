import { Button, Container, Flex, FormLabel, Input } from "@chakra-ui/react";
import { BookContext } from "@contexts/bookContext";
import { FormEvent, useState } from "react";

const UpdatePage = () => {
  const [book, setBook] = useState({
    cover: "",
    title: "",
    description: "",
    price: 0,
  });

  const { Update } = BookContext();

  const handleChange = (e: { target: HTMLInputElement }) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendForm = (e: FormEvent) => {
    e.preventDefault();
    Update(book);
  };

  return (
    <Container as="form" py={5} onSubmit={sendForm}>
      <Flex
        minH="100vh"
        direction="column"
        justify="center"
        alignItems="center"
        gap={5}
      >
        <Flex direction="column" w="full">
          <FormLabel htmlFor="title">Title:</FormLabel>
          <Input
            name="title"
            type="text"
            value={book.title}
            placeholder="Type your title..."
            onChange={handleChange}
            id="title"
            bg="white"
          />
        </Flex>
        <Flex direction="column" w="full">
          <FormLabel htmlFor="description">Description:</FormLabel>
          <Input
            name="description"
            type="text"
            value={book.description}
            onChange={handleChange}
            placeholder="Type your description..."
            id="description"
            bg="white"
          />
        </Flex>
        <Flex direction="column" w="full">
          <FormLabel htmlFor="price">Price:</FormLabel>
          <Input
            name="price"
            type="number"
            value={book.price}
            placeholder="Type your price..."
            onChange={handleChange}
            id="price"
            bg="white"
          />
        </Flex>
        <Button type="submit" colorScheme="purple" w="full">
          Update book
        </Button>
      </Flex>
    </Container>
  );
};

export default UpdatePage;
