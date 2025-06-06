import { Flex, Tag } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <Flex justify="space-evenly" p="4" bg="seashell" align="center">
      <Tag
        size="md"
        p="2"
        colorScheme="blue"
        variant="solid"
        maxW="25%"
        align="center"
      >
        <Link to="/">Events</Link>
      </Tag>
      <Tag
        size="md"
        p="2"
        colorScheme="blue"
        variant="solid"
        maxW="25%"
        align="center"
      >
        <Link to="/event/new">Add a new event</Link>
      </Tag>
      <Tag
        size="md"
        p="2"
        colorScheme="blue"
        variant="solid"
        maxW="25%"
        align="center"
      >
        <Link to="/users">Our users</Link>
      </Tag>
    </Flex>
  );
};
