import React, { useEffect, useState } from "react";
import { Heading } from "@chakra-ui/react";
import { EventPage } from "./EventPage";

export const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [eventChoice, setEventChoice] = useState("");

  useEffect(() => {
    async function fetchAllEvents() {
      const response = await fetch("http://localhost:3000/events");
      const allEvents = await response.json();
      setEvents(allEvents);
    }
    fetchAllEvents();
  }, []);

  return eventChoice ? (
    <EventPage event={eventChoice} />
  ) : (
    <>
      <Heading>List of events</Heading>
      <ul>
        {events.map((event) => (
          <li key={event.id} onClick={() => setEventChoice(event)}>
            {event.title}
          </li>
        ))}
      </ul>
    </>
  );
};
