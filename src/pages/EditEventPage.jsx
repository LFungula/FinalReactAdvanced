import { Flex, Tag, Text } from "@chakra-ui/react";
//import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import { CustomHeader } from "../components/UI/CustomHeader";
import { Categories } from "../components/Catagories";
import {
  formStyle,
  buttonStyle,
  inputStyle,
  labelStyle,
  checkboxLabelStyle,
} from "../components/UI/EventFormStyling";

export const loader = async ({ params }) => {
  const event = await fetch(`http://localhost:3000/events/${params.eventId}`);
  const users = await fetch(`http://localhost:3000/users`);
  return {
    event: await event.json(),
    users: await users.json(),
  };
};

export const EditEventPage = () => {
  const { event, users } = useLoaderData();

  const getUserName = () => {
    const user = users.find((user) => user.id === event.createdBy);
    return user ? user.name : event.createdBy;
  };

  const userName = getUserName();

  const ogEvent = { ...event };

  // Input states

  const [title, setTitle] = useState(ogEvent.title);
  const [description, setDescription] = useState(ogEvent.description);
  const [location, setLocation] = useState(ogEvent.location);
  const [startTime, setStartTime] = useState(ogEvent.startTime);
  const [endTime, setEndTime] = useState(ogEvent.endTime);
  const [image, setImage] = useState(ogEvent.image);
  const [categoryIds, setCategoryIds] = useState(ogEvent.categoryIds);
  const [createdBy, setCreatedBy] = useState(ogEvent.createdBy);

  //const [isComplete, setIsComplete] = useState(false);

  // //Checkbox stuff
  //make state to save categories in
  const [allCategories, setAllCategories] = useState([]);

  //load current categories, maybe something changed, so no hardcodes values.
  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch(`http://localhost:3000/categories`);
      const categories = await response.json();
      setAllCategories(categories);
    }
    fetchCategories();
  }, []);

  const handleCheck = (checkboxID) => {
    setCategoryIds((prev) => {
      if (prev.includes(checkboxID)) {
        const updated = prev.filter((id) => {
          const keep = id !== checkboxID;
          console.log(`Filtering id=${id}, keep=${keep}`);
          return keep;
        });
        console.log(`${checkboxID} is weg. categoryIds update:`, updated);
        return updated;
      } else {
        const updated = [...prev, checkboxID];
        console.log(
          `${checkboxID} is toegevoegd. Updated categoryIds:`,
          updated
        );
        return updated;
      }
    });

    console.log("categoryIds afterupdate ", categoryIds);
  };

  //Editing event
  async function editEvent() {
    await fetch(`http://localhost:3000/events/${event.id}`, {
      method: "PUT",
      body: JSON.stringify({
        title,
        description,
        image,
        categoryIds,
        location,
        startTime,
        endTime,
        createdBy,
      }),
      headers: { "Content-Type": "application/json;charset=utf-8" },
    });
    console.log("event edited");
    confirmUpdate();
  }

  //closing window
  const navigate = useNavigate();
  const confirmUpdate = () => {
    window.alert("The event is updated. You will return to the homepage");
    navigate("/");
  };

  //Submitting form and warpping up

  const handleSubmit = (editedEvent) => {
    editedEvent.preventDefault();
    console.log("categoryIds afterupdate ", categoryIds);
    editEvent();
  };

  return (
    <>
      <Flex
        className="editEventpage_Main"
        flexDir="column"
        align="center"
        maxW="100%"
        gap="2"
        h="100%"
      >
        <CustomHeader> Event editor </CustomHeader>
        <Text style={labelStyle}>
          {ogEvent.title} by {userName}
        </Text>

        <Flex direction="column" h="full" w="90%" wrap="wrap">
          <form onSubmit={handleSubmit} style={formStyle}>
            <label style={labelStyle}>
              <Text>Current title:</Text>
              <Text fontSize="larger">{ogEvent.title}</Text>
              <Text>Update title to:</Text>
              <input
                style={inputStyle}
                type="text"
                placeholder="Title of the new event"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required
              />
            </label>
            <label style={labelStyle}>
              <Text>Current description:</Text>
              <Text fontSize="larger">{ogEvent.description}</Text>
              <Text>Update description to:</Text>
              <textarea
                style={inputStyle}
                type="Text"
                placeholder="Describe your event here"
                required
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={description}
              ></textarea>
            </label>
            <label style={labelStyle}>
              <Text>Cuttent link to Image (URL): </Text>
              <Text fontSize="larger"> {ogEvent.image}</Text>
              <Text>Update link to Image (URL): </Text>
              to:
              <input
                style={inputStyle}
                type="url"
                required
                value={image}
                placeholder="Copy the URL of your image here"
                onChange={(e) => {
                  setImage(e.target.value);
                }}
              ></input>
            </label>
            <label style={labelStyle}>
              <Text>Current location: </Text>
              <Text fontSize="larger">{ogEvent.location}</Text>
              <Text>Update location to: </Text>
              <input
                style={inputStyle}
                type="Text"
                placeholder="The location of your event"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                value={location}
                required
              ></input>
            </label>
            <label style={labelStyle}>
              <Text>Current starting date and time </Text>
              <Text fontSize="larger">
                Date: {ogEvent.startTime.slice(8, 10)}-
                {ogEvent.startTime.slice(5, 7)}-{ogEvent.startTime.slice(0, 4)},
                Time: {ogEvent.startTime.slice(11, 16)}{" "}
              </Text>
              <Text>Update starting date and time to: </Text>
              <input
                style={inputStyle}
                type="datetime-local"
                onChange={(e) => setStartTime(e.target.value)}
                value={startTime}
                required
              ></input>
            </label>
            <label style={labelStyle}>
              <Text>Current end date and time: </Text>
              <Text fontSize="larger">
                Date: {ogEvent.endTime.slice(8, 10)}-
                {ogEvent.endTime.slice(5, 7)}-{ogEvent.endTime.slice(0, 4)},
                Time: {ogEvent.endTime.slice(11, 16)}{" "}
              </Text>
              <Text>Update end date and time to: </Text>
              <input
                style={inputStyle}
                type="datetime-local"
                onChange={(e) => setEndTime(e.target.value)}
                value={endTime}
                required
              ></input>
            </label>

            <label style={checkboxLabelStyle} display="flex" direction="column">
              <Flex direction="row" gap="0.5rem" justify="flex-start">
                <Text style={{ fontWeight: "500" }}>Current categories:</Text>
                <Categories categoryIds={ogEvent.categoryIds}></Categories>
              </Flex>{" "}
              <Text>
                {" "}
                If you change nothing, the categories will remain the same.{" "}
              </Text>
              <Text style={{ fontWeight: "500" }}>Update caterory to:</Text>
              <Flex gap="0.5rem" justify="space-between">
                {allCategories.map((singleCategory) => {
                  return (
                    <Flex key={singleCategory.id} dir="row" gap="2" wrap="wrap">
                      <Tag
                        p="2"
                        m="2"
                        variant="solid"
                        colorScheme="green"
                        size="md"
                      >
                        {singleCategory.name}
                      </Tag>
                      <input
                        key={singleCategory.id}
                        type="checkbox"
                        name={singleCategory.name}
                        label={singleCategory.name}
                        id={singleCategory.id}
                        value={singleCategory.value}
                        checked={categoryIds.includes(singleCategory.id)}
                        onChange={() => handleCheck(singleCategory.id)}
                      ></input>
                    </Flex>
                  );
                })}
              </Flex>
            </label>
            <label>
              <input
                type="submit"
                value="Edit this event"
                style={buttonStyle}
              ></input>
            </label>
          </form>
        </Flex>
      </Flex>
    </>
  );
};
