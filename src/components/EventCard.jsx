import {
  Card,
  CardBody,
  CardHeader,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { Time, Date } from "./TimeAndDates";
import { Categories } from "./Catagories";

export const EventCard = ({ event }) => {
  return (
    <LinkBox m="2" maxW="90%" w="sm" h="sm">
      <Card w="100%" h="100%" alignItems="center" bg="green.100">
        <LinkOverlay href={`event/${event.id}`}>
          <CardHeader>
            {" "}
            <Heading> {event.title}</Heading>{" "}
          </CardHeader>
        </LinkOverlay>
        <CardBody h="100%" flexDir="column" wrap="wrap" align="center">
          <Image
            src={event.image}
            alt={event.title}
            h="40%"
            w="80%"
            objectFit="cover"
          />
          <Flex flexDir="column" scrollBehavior="smooth" overflowY="scroll">
            <Flex flexDir="row" justify="center">
              <Categories categoryIds={event.categoryIds} />
            </Flex>
            <Text>
              <Date start={event.startTime} end={event.endTime} />
            </Text>
            <Text>
              <Time start={event.startTime} end={event.endTime} />
            </Text>
            <Text noOfLines={1}> {event.description} </Text>{" "}
          </Flex>
        </CardBody>
      </Card>
    </LinkBox>
  );
};
