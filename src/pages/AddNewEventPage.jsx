import { Flex, Heading } from "@chakra-ui/react";
//import { useToast } from "@chakra-ui/react";
import { TermsOfEvents } from "../components/UI/TermsOfEvents";
import { useEffect, useRef, useState } from "react";

export const AddNewEventPage = () => {
  // Input states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [image, setImage] = useState("");
  const [categoryIds, setCategoryIds] = useState([]);
  const [createdBy, setCreatedBy] = useState("");

  const [newEvent, setNewEvent] = useState([]);

  //Checkbox stuff
  const [availableCategories, setAvailableCategories] = useState([]);
  //load current catagories, maybe, something changed, no hard values.
  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch(`http://localhost:3000/categories`);
      const categories = await response.json();
      setAvailableCategories(categories);
    }
    fetchCategories();
  }, []);

  //creating an new array based on the substracted data, add "checked" key/value, to keep track of individual states
  const checkboxCategries = [...availableCategories].map((v) => ({
    ...v,
    checked: false,
  }));

  // to manage state of the content within the new array
  const [categoriesChecked, setCategoriesChecked] = useState(checkboxCategries);

  //handeling the ckeckbox's behaviour
  const handleCheck = (index) => {
    setCategoriesChecked(
      categoriesChecked.map((categorieChecked, currectIndex) => {
        return currectIndex === index
          ? { ...categorieChecked, checked: !categorieChecked.checked }
          : categorieChecked;
      })
    );
  };

  //CleanUpFunction
  const cleanUp = () => {
    setTitle("");
    setDescription("");
    setLocation("");
    setStartTime("");
    setEndTime("");
    setImage("");
    setCategoryIds("");
    setCreatedBy("");
  };

  //Submitting form
  const handleSubmit = (event) => {
    event.preventDefault();
    setNewEvent({
      createdBy,
      title,
      description,
      image,
      categoryIds,
      location,
      startTime,
      endTime,
    });
    console.log("event was formed");
    console.log(newEvent);
    createEvent({ newEvent });
  };

  //Postin net event event
  async function createEvent({ newEvent }) {
    const response = await fetch("http://localhost:3000/events", {
      method: "POST",
      body: JSON.stringify(newEvent),
      headers: { "Content-Type": "application/json;charset=utf-8" },
    });
    console.log("event added");
    cleanUp();
  }

  //console.log(checkboxCategries);
  console.log(availableCategories);

  return (
    <>
      <TermsOfEvents />
      <Flex direction="column" p="2" m="2">
        <Heading> Your new event here!</Heading>

        <Flex direction="column" border="2px solid red">
          <form onSubmit={handleSubmit}>
            <label>
              Title:
              <input
                type="text"
                placeholder="Title of the new event"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </label>
            <label>
              Description:
              <textarea
                type="Text"
                placeholder="Describe your event here"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={description}
              ></textarea>
            </label>
            <label>
              Location:
              <input
                type="Text"
                placeholder="The location of your event"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                value={location}
              ></input>
            </label>
            <label>
              Starting Date:
              <input
                type="datetime-local"
                onChange={(e) => setStartTime(e.target.value)}
                value={startTime}
              ></input>
            </label>
            <label>
              End Date:
              <input
                type="datetime-local"
                onChange={(e) => setEndTime(e.target.value)}
                value={endTime}
              ></input>
            </label>
            {categoriesChecked.map((checkbox, index) => {
              return (
                <label>
                  {checkbox.name}
                  <input
                    type="checkbox"
                    name={checkbox.name}
                    label={checkbox.name}
                    id={checkbox.id}
                    value={checked}
                    checked={checkboxCategries.checked}
                    onChange={() => handleCheck(index)}
                  ></input>
                </label>
              );
            })}

            <label>
              Your name:
              <input
                type="Text"
                placeholder="What is your name?"
                onChange={(e) => {
                  setCreatedBy(e.target.value);
                }}
                value={createdBy}
              ></input>
            </label>
            <label>
              <input type="submit" value="Submit"></input>
            </label>
          </form>
        </Flex>
      </Flex>
    </>
  );
};
