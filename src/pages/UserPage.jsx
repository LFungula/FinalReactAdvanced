import { Heading, Image } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export const loader = async ({ params }) => {
  const user = await fetch(`http://localhost:3000/users/${params.userId}`);
  const events = await fetch(`http://localhost:3000/events`);

  return { user: await user.json(), events: await events.json() };
};

export const UserPage = () => {
  const { user, events } = useLoaderData();

  //eventByUser = events.filter((event) => event.createdBy === user.id)

  return (
    <>
      <Heading> {user.name} </Heading>
      <Image src={user.image} alt={user.name} />
      <h2>Events by {user.name}:</h2>
      <ul></ul>
    </>
  );
};
