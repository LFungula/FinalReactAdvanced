import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Link, useLoaderData } from "react-router-dom";
import { Time, Date } from "../components/TimeAndDates";
import { Categories } from "../components/Catagories";

export const loader = async ({ params }) => {
  const event = await fetch(`http://localhost:3000/events/${params.eventId}`);
  const users = await fetch(`http://localhost:3000/users`);

  return {
    event: await event.json(),
    users: await users.json(),
  };
};

//

export const EventPage = () => {
  const { event, users } = useLoaderData();

  const getUserName = () => {
    const user = users.find((user) => user.id === event.createdBy);
    return user ? user.name : "unregisterd user";
  };

  const userName = getUserName();

  return (
    <Flex
      className="eventpage_Main"
      flexDir="column"
      align="center"
      maxW="100%"
      gap="2"
    >
      <Flex
        className="eventpage_heading"
        flexDir="column"
        wrap="wrap"
        justify="center"
        align="center"
        h="100%"
      >
        <Heading>{event.title} </Heading>{" "}
        <Heading w="100%" align="center" size="md">
          <Link to={`/users/user/${event.createdBy}`}>by {userName}</Link>
        </Heading>
      </Flex>
      <Flex className="eventpage_body" flexDir="column" align="center" m="2">
        <Image
          src={event.image}
          alt={event.title}
          border="2px solid pink"
          borderRadius="lg"
          m="2"
        />
        <Flex
          className="eventpage_info"
          flexDir="column"
          wrap="wrap"
          justify="center"
        ></Flex>
        <Text> location: {event.location} </Text>
        <Categories categoryIds={event.categoryIds} />
        <Date start={event.startTime} end={event.endTime} />
        <Time start={event.startTime} end={event.endTime} />
        <Text> {event.description} </Text>
      </Flex>
    </Flex>
  );
};
