import { Flex, Heading } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";
import { UserCard } from "../components/Usercard";

export const loader = async () => {
  const response = await fetch(`http://localhost:3000/users`);
  return { users: await response.json() };
};

export const Users = () => {
  const { users } = useLoaderData();

  return (
    <Flex flexDir="column" align="center" w="100%" h="full">
      <Heading> Users </Heading>

      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </Flex>
  );
};
