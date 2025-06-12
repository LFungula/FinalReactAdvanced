import { Flex } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";
import { UserCard } from "../components/Usercard";
import { CustomHeader } from "../components/UI/CustomHeader";

export const loader = async () => {
  const response = await fetch(`http://localhost:3000/users`);
  return { users: await response.json() };
};

export const Users = () => {
  const { users } = useLoaderData();

  return (
    <Flex
      flexDir="column"
      align="center"
      w="100%"
      h="full"
      justifyContent="space-around"
    >
      <CustomHeader> Users </CustomHeader>
      <Flex
        alignSelf="center"
        margin="auto"
        flexDir="column"
        align="center"
        gap="10"
        h="100%"
      >
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </Flex>
    </Flex>
  );
};
