import {
  Card,
  CardHeader,
  LinkBox,
  LinkOverlay,
  Heading,
  Avatar,
  Flex,
} from "@chakra-ui/react";

export const UserCard = ({ user }) => {
  return (
    <LinkBox m="2" maxW="90%" w="sm" h="fit-content">
      <Card w="100%" h="100%" bg="seashell" justify="center">
        <LinkOverlay href={`users/${user.id}`}>
          <CardHeader>
            <Flex justify="space-around">
              <Avatar size="md" name={user.name} src={user.image} />
              <Heading> {user.name}</Heading>
            </Flex>
          </CardHeader>
        </LinkOverlay>
      </Card>
    </LinkBox>
  );
};
