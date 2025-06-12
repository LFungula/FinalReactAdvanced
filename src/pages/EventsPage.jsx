import { Flex } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

import { SearchResults } from "../components/SearchResults";
import { CustomHeader } from "../components/UI/CustomHeader";

export const loader = async () => {
  const response = await fetch("http://localhost:3000/events");
  return { events: await response.json() };
};

export const EventsPage = () => {
  const { events } = useLoaderData();

  return (
    <Flex flexDir="column" align="center" overflowY="clip" h="100%">
      <CustomHeader>List of events</CustomHeader>
      <SearchResults events={events} />
    </Flex>
  );
};
