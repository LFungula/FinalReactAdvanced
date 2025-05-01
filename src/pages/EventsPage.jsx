import { Heading } from "@chakra-ui/react";
import { Link, useLoaderData } from "react-router-dom";

export const loader = async () => {
  const response = await fetch("http://localhost:3000/events");
  return { events: await response.json() };
};

export const EventsPage = () => {
  const { events } = useLoaderData();

  return (
    <>
      <Heading>List of events</Heading>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <Link to={`event/${event.id}`}>{event.title} </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
