import { Heading } from "@chakra-ui/react";
import { Link, useLoaderData } from "react-router-dom";

export const loader = async () => {
  const response = await fetch(`http://localhost:3000/users`);
  return { users: await response.json() };
};

export const Users = () => {
  const { users } = useLoaderData();

  return (
    <>
      <Heading> Users </Heading>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
