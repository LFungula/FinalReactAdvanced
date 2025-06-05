import { Heading, Text, Button, Flex } from "@chakra-ui/react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Confirm } from "../components/UI/Confirm";
import { useState } from "react";

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
    window.alert("The event is deleted. You will return to teh homepage");
    navigate("/");
  };

  return (
    <>
      <Flex wrap="wrap">
        <Heading> Warning! You are about to delete an event!</Heading>
        <Text>
          {" "}
          You are about to delete the event &quot;{event.title}&quot; by{" "}
          {userName}.
        </Text>
        <Text> This action is permanent and can not be undone. </Text>
        <Text> Are you sure you want to proceed?</Text>

        <Button onClick={handleIsOpen}>Yes, delete this event</Button>
      </Flex>
      <Confirm isOpen={isOpen} onClose={onClose} onYes={onYes} onNo={onNo} />
    </>
  );
};
