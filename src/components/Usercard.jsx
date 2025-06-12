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
    <LinkBox
      m="2"
      maxW="90%"
      w={{ base: "sm", md: "md", lg: "lg" }}
      h="fit-content"
    >
      <Card w="100%" h="100%" bg="seashell" justify="center">
        <LinkOverlay href={`users/${user.id}`}>
          <CardHeader>
            <Flex justify="space-around" align="center" gap="2">
              <Avatar
                size={{ base: "md", md: "xl", lg: "2xl" }}
                name={user.name}
                src={user.image}
              />
              <Heading> {user.name}</Heading>
            </Flex>
          </CardHeader>
        </LinkOverlay>
      </Card>
    </LinkBox>
  );
};
