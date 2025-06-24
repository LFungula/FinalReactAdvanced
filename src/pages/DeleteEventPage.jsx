import { Heading, Button, Flex } from "@chakra-ui/react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Confirm } from "../components/UI/Confirm";
import { useState } from "react";
import { CustomText } from "../components/UI/CustomText";

export const loader = async ({ params }) => {
  const event = await fetch(`http://localhost:3000/events/${params.eventId}`);
  const users = await fetch(`http://localhost:3000/users`);
  return {
    event: await event.json(),
    users: await users.json(),
  };
};

export const DeleteEventPage = () => {
  const { event, users } = useLoaderData();
  const [isOpen, setIsOpen] = useState(false);

  const getUserName = () => {
    const user = users.find((user) => user.id === event.createdBy);
    return user ? user.name : "unregisterd user";
  };

  const userName = getUserName();

  //Deleting event and redirecting to homepage
  async function deleteEvent() {
    await fetch(`http://localhost:3000/events/${event.id}`, {
      method: "DELETE",
      body: JSON.stringify(),
      headers: { "Content-Type": "application/json;charset=utf-8" },
    });
  }

  //handeling modal
  const handleIsOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  const onYes = () => {
    setIsOpen(false);
    deleteEvent();
    confirmDelete();
  };
  const onNo = () => {
    setIsOpen(false);
  };

  //Confirm delition

  const navigate = useNavigate();

  const confirmDelete = () => {
    window.alert("The event is deleted. You will return to the homepage");
    navigate("/");
  };

  const goBack = () => navigate(-1);

  return (
    <>
      <Flex
        wrap="wrap"
        justify="center"
        bg="seashell"
        direction="column"
        alignItems="center"
        margin="auto"
        w="90%"
        p="2"
      >
        <Heading textAlign="center" m="2" p="2" color="red">
          Warning! You are about to delete an event!
        </Heading>
        <CustomText fontSize="2xl">
          You are about to delete the event &quot;{event.title}&quot; by{" "}
          {userName}.
        </CustomText>
        <CustomText fontSize="2xl">
          This action is permanent and can not be undone.
        </CustomText>
        <CustomText fontSize="2xl">
          {" "}
          Are you sure you want to proceed?
        </CustomText>
        <Button p="2" m="2" colorScheme="blue" onClick={goBack}>
          No! Go back to the event
        </Button>
        <Button p="2" m="2" colorScheme="red" onClick={handleIsOpen}>
          Yes, delete this event
        </Button>
      </Flex>
      <Confirm isOpen={isOpen} onClose={onClose} onYes={onYes} onNo={onNo} />
    </>
  );
};
