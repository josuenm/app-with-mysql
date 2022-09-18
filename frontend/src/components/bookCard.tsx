import { BookProps } from "@appTypes/books";
import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { BookContext } from "@contexts/bookContext";
import { Link } from "react-router-dom";

export const BookCard = ({ data }: { data: BookProps }) => {
  const { Delete } = BookContext();

  return (
    <Flex
      direction="column"
      justify="space-between"
      gap={2}
      w={300}
      border="2px solid #aaa"
      borderRadius="lg"
      p={5}
      bg="white"
    >
      <Image minH="250px" src={data.cover} alt="Book" />
      <Heading as="h3" fontSize="2xl">
        {data.title}
      </Heading>
      <Text>{data.description}</Text>
      <Text as="strong">
        {Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          currencyDisplay: "narrowSymbol",
        }).format(data.price)}
      </Text>

      <Link to={`/update/${data.id}`}>
        <Button colorScheme="purple" w="full">
          Update
        </Button>
      </Link>
      <Button
        onClick={() => Delete(data.id)}
        variant="outline"
        colorScheme="red"
        w="full"
      >
        Delete
      </Button>
    </Flex>
  );
};
