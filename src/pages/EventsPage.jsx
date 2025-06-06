import { Flex, Heading } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

import { SearchResults } from "../components/SearchResults";

export const loader = async () => {
  const response = await fetch("http://localhost:3000/events");
  return { events: await response.json() };
};

export const EventsPage = () => {
  const { events } = useLoaderData();

  return (
    <Flex flexDir="column" align="center" overflowY="scroll" h="100%">
      <Heading p="2">List of events</Heading>
      <SearchResults events={events} />
    </Flex>
  );
};
