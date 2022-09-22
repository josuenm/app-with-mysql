import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { BookCard } from "@components/bookCard";
import { BookContext } from "@contexts/bookContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const BooksPage = () => {
  const { books, List } = BookContext();

  useEffect(() => {
    List();
  }, []);

  return (
    <Container maxW={1100} py={10} bg="gray.100" textAlign="center">
      <Box py={5}>
        <Heading
          as="h1"
          fontSize="3xl"
          textAlign="center"
          color="purple.500"
          textTransform="uppercase"
        >
          uBook
        </Heading>

        <Text as="strong">Application to test MySQL</Text>
      </Box>

      <Box mb={10}>
        <Link to="/Add">
          <Button colorScheme="purple">Create new book</Button>
        </Link>
      </Box>

      <Flex
        justify={["flex-start", "flex-start", "space-between"]}
        alignItems={["center"]}
        direction={["column", "column", "row"]}
        gap={5}
      >
        {books.length > 0 &&
          books.map((item) => <BookCard key={item.id} data={item} />)}
      </Flex>
    </Container>
  );
};

export default BooksPage;
