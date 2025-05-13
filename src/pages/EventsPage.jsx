import { Flex, Heading } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";
import { EventCard } from "../components/EventCard";
import { SearchResults } from "../components/SearchResults";

export const loader = async () => {
  const response = await fetch("http://localhost:3000/events");
  return { events: await response.json() };
};

export const EventsPage = () => {
  const { events } = useLoaderData();

  return (
    <Flex flexDir="column" align="center" maxW="100%" h="100%">
      <SearchResults events={events} />
      <Heading p="2">List of events</Heading>
      <Flex
        flexDir="column"
        justify="center"
        align="center"
        maxW="100%"
        wrap="wrap"
        gap="2"
        scrollBehavior="smooth"
        overflowY="scroll"
      >
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </Flex>
    </Flex>
  );
};
