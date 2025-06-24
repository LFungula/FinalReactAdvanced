import { Button, Flex, Image } from "@chakra-ui/react";
import { Link, useLoaderData } from "react-router-dom";
import { Time, Date } from "../components/TimeAndDates";
import { Categories } from "../components/Catagories";
import { CustomText } from "../components/UI/CustomText";
import { CustomHeader } from "../components/UI/CustomHeader";

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
    return user ? user.name : `${event.createdBy} (unregistered user)`;
  };

  const linkUser = () => {
    const user = users.find((user) => user.id === event.createdBy);
    return user ? (
      <CustomHeader margin="0">
        <Link to={`/users/${event.createdBy}`}>by {userName}</Link>
      </CustomHeader>
    ) : (
      <CustomHeader>by {userName}</CustomHeader>
    );
  };

  const userName = getUserName();

  return (
    <Flex
      className="eventpage_Main"
      flexDir="column"
      align="center"
      maxW="100%"
      gap="2"
      h="100%"
    >
      <Flex
        className="eventpage_heading"
        flexDir="column"
        wrap="wrap"
        justify="center"
        align="center"
        gap="2"
      >
        <CustomHeader>{event.title} </CustomHeader>
        {linkUser()}
      </Flex>
      <Flex
        className="eventpage_body"
        flexDir="column"
        align="center"
        m="2"
        gap="2"
      >
        <Image
          src={event.image}
          alt={event.title}
          borderRadius="lg"
          m="2"
          maxH="sm"
        />
        <Flex className="eventpage_info"></Flex>
        <CustomText> Location: {event.location} </CustomText>
        <Categories categoryIds={event.categoryIds} />
        <Date start={event.startTime} end={event.endTime} />
        <Time start={event.startTime} end={event.endTime} />
        <CustomText> {event.description} </CustomText>
        <Flex m="2" gap="2" dir="row">
          <Button
            size="md"
            colorScheme="red"
            onClick={() => {
              window.location.href += "/delete";
            }}
          >
            Delete this event
          </Button>
          <Button
            size="md"
            colorScheme="blue"
            onClick={() => {
              window.location.href += "/edit";
            }}
          >
            Edit this event
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
