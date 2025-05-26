import { Flex, Heading, Image } from "@chakra-ui/react";
import { Link, useLoaderData } from "react-router-dom";
import { EventCard } from "../components/EventCard";

export const loader = async ({ params }) => {
  const user = await fetch(`http://localhost:3000/users/${params.userId}`);
  const events = await fetch(`http://localhost:3000/events`);

  return { user: await user.json(), events: await events.json() };
};

export const UserPage = () => {
  const { user, events } = useLoaderData();

  const eventsByUser = events.filter((event) => event.createdBy === user.id);
  const totalEvents = eventsByUser.length;
  console.log(totalEvents);

  return (
    <Flex flexDir="column" align="center" w="100%" h="full">
      <Heading> {user.name} </Heading>
      <Image
        src={user.image}
        alt={user.name}
        borderRadius="lg"
        boxShadow="sm"
        w="sm"
        maxW="90%"
        m="2"
      />
      <h2>
        Events by {user.name} ({totalEvents}):
      </h2>
      <Flex
        flexDir="column"
        justify="center"
        align="center"
        maxW="100%"
        wrap="wrap"
        gap="2"
      >
        {eventsByUser.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </Flex>
    </Flex>
  );
};
