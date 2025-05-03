import { Flex, Tag } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <Flex justify="space-around" p="2" bg="green.100">
      <Tag size="md" p="2" colorScheme="blue" variant="solid">
        <Link to="/">Events</Link>
      </Tag>
      <Tag size="md" p="2" colorScheme="blue" variant="solid">
        <Link to="/event/new">Add a new event</Link>
      </Tag>
      <Tag size="md" p="2" colorScheme="blue" variant="solid">
        <Link to="/users">Our registered users</Link>
      </Tag>
    </Flex>
  );
};
