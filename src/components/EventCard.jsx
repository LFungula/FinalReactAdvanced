import {
  Card,
  CardBody,
  CardHeader,
  Image,
  LinkBox,
  LinkOverlay,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { Time, Date } from "./TimeAndDates";
import { Categories } from "./Catagories";
import { CustomText } from "./UI/CustomText";

export const EventCard = ({ event }) => {
  return (
    <LinkBox m="2" maxW="90%" w="sm" h="lg">
      <Card
        w="100%"
        h="100%"
        align="center"
        bg="seashell"
        textAlign="center"
        p="2"
      >
        <LinkOverlay href={`/event/${event.id}`}>
          <CardHeader>
            <Heading size="lg" noOfLines={1}>
              {event.title}
            </Heading>
          </CardHeader>
        </LinkOverlay>
        <CardBody h="100%" flexDir="column" wrap="wrap" align="center">
          <Image
            src={event.image}
            alt={event.title}
            h="40%"
            w="80%"
            objectFit="cover"
            borderRadius="lg"
          />
          <Flex flexDir="column">
            <Flex flexDir="row" justify="center">
              <Categories categoryIds={event.categoryIds} />
            </Flex>
            <Date start={event.startTime} end={event.endTime} />
            <Time start={event.startTime} end={event.endTime} />
            <CustomText noOfLines={2}> {event.description} </CustomText>
          </Flex>
        </CardBody>
      </Card>
    </LinkBox>
  );
};
