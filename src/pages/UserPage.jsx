import { Flex, Image } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";
import { EventCard } from "../components/EventCard";
import { CustomText } from "../components/UI/CustomText";
import { CustomHeader } from "../components/UI/CustomHeader";

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
    <Flex flexDir="column" align="center" maxW="100%" wrap="wrap">
      <CustomHeader> {user.name} </CustomHeader>
      <Image
        src={user.image}
        alt={user.name}
        borderRadius="lg"
        boxShadow="sm"
        maxW="90%"
        m="2"
      />
      <CustomText m="2">
        Events by {user.name} ({totalEvents}):
      </CustomText>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        justify="center"
        align="center"
        maxW="100%"
        wrap={{ base: "wrap", md: "nowrap" }}
        gap="2"
        overflowY={{ base: "scroll", md: "clip" }}
      >
        {eventsByUser.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </Flex>
    </Flex>
  );
};
