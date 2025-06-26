import { Flex, Tag, Text } from "@chakra-ui/react";
//import { useToast } from "@chakra-ui/react";
import { TermsOfEvents } from "../components/UI/TermsOfEvents";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CategorieIsEmpty } from "../components/CategorieIsEmpty";
import { CustomHeader } from "../components/UI/CustomHeader";
import {
  formStyle,
  buttonStyle,
  inputStyle,
  labelStyle,
  checkboxLabelStyle,
} from "../components/UI/EventFormStyling";

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

  // //Checkbox stuff
  //make state to save categories in
  const [availableCategories, setAvailableCategories] = useState([]);
  //Controlls modal for checkboxcheck

  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
  };

  //load current categories, maybe something changed, so no hardcodes values.
  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch(`http://localhost:3000/categories`);
      const categories = await response.json();
      setAvailableCategories(categories);
    }
    fetchCategories();
  }, []);

  //creating an new array based on the substracted data, add "checked" key/value, to keep track of individual states/checks
  const checkboxCategories = availableCategories.map((v) => ({
    ...v,
    checked: false,
  }));

  //listing the choosen categories in a new array by ID
  const listCategoryIds = () => {
    const listOfCategoryIds = checkboxCategories
      .filter((cat) => cat.checked === true)
      .map((cat) => cat.id);
    setCategoryIds(listOfCategoryIds);
  };

  //handeling the ckeckbox's behaviour toggeling the chackedvalue
  const handleCheck = (id) => {
    const matchID = () => {
      checkboxCategories.find((c) => {
        c.id === id ? (c.checked = !c.checked) : c;
      });
      return checkboxCategories;
    };
    matchID();
    console.log(checkboxCategories);
    listCategoryIds();
  };

  //Clean Checkboxes
  const cleanCheckboxes = () => {
    checkboxCategories.map((c) => (c.checked = false));
  };

  //CleanUpFunction
  const cleanUp = () => {
    setTitle("");
    setDescription("");
    setLocation("");
    setStartTime("");
    setEndTime("");
    setImage("");
    setCategoryIds([]);
    setCreatedBy("");
    cleanCheckboxes();
  };

  //Check if nothing is empty
  const checkIfEmpty = () => {};

  //Posting new  event
  async function postEvent() {
    await fetch("http://localhost:3000/events", {
      method: "POST",
      body: JSON.stringify({
        createdBy,
        title,
        description,
        image,
        categoryIds,
        location,
        startTime,
        endTime,
      }),
      headers: { "Content-Type": "application/json;charset=utf-8" },
    });
    cleanUp();
    console.log("event added");
    confirmAdd();
  }

  //closing window
  const navigate = useNavigate();
  const confirmAdd = () => {
    window.alert("New event is added. You will return to the homepage");
    navigate("/");
  };

  const handleSubmit = (event) => {
    let isComplete = false;

    event.preventDefault();
    categoryIds.length === 0 ? setIsOpen(true) : (isComplete = true);
    isComplete === true
      ? postEvent()
      : console.log(
          "Oops! It seems you've forgotten something, check your event and try again"
        );
  };

  return (
    <>
      <Flex
        className="addEventpage_Main"
        flexDir="column"
        align="center"
        maxW="100%"
        gap="2"
        h="100%"
      >
        <TermsOfEvents />

        <CustomHeader> Your new event here!</CustomHeader>

        <Flex direction="column" h="full" w="90%" wrap="wrap">
          <form onSubmit={handleSubmit} style={formStyle}>
            <label style={labelStyle}>
              <Text>Title:</Text>
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
              <Text>Description:</Text>
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
              <Text>Link to Image (URL):</Text>
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
              <Text>Location:</Text>
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
              <Text>Starting date and time:</Text>
              <input
                style={inputStyle}
                type="datetime-local"
                onChange={(e) => setStartTime(e.target.value)}
                value={startTime}
                required
              ></input>
            </label>
            <label style={labelStyle}>
              <Text>End date and time:</Text>
              <input
                style={inputStyle}
                type="datetime-local"
                onChange={(e) => setEndTime(e.target.value)}
                value={endTime}
                required
              ></input>
            </label>

            <label style={checkboxLabelStyle} display="flex" direction="column">
              <Text style={{ fontWeight: "500" }}>Update caterory to:</Text>
              <Flex gap="0.5rem" justify="space-between">
                {checkboxCategories.map((checkbox) => {
                  return (
                    <Flex
                      key={checkbox.id}
                      flexDirection="row"
                      gap="2"
                      wrap="wrap"
                      justify="space-between"
                    >
                      <Tag
                        p="2"
                        m="2"
                        variant="solid"
                        colorScheme="green"
                        size="md"
                      >
                        {checkbox.name}
                      </Tag>
                      <input
                        key={checkbox.id}
                        type="checkbox"
                        name={checkbox.name}
                        label={checkbox.name}
                        id={checkbox.id}
                        value={checkbox.value}
                        checked={checkboxCategories.checked}
                        onChange={() => handleCheck(checkbox.id)}
                      ></input>
                    </Flex>
                  );
                })}
              </Flex>
            </label>
            <label style={labelStyle}>
              <Text>Your name:</Text>
              <input
                style={inputStyle}
                type="Text"
                placeholder="What is your name?"
                onChange={(e) => {
                  setCreatedBy(e.target.value);
                }}
                value={createdBy}
                required
              ></input>
            </label>
            <label>
              <input
                type="submit"
                value="Submit new event"
                style={buttonStyle}
              ></input>
            </label>
          </form>
        </Flex>
      </Flex>

      <CategorieIsEmpty isOpen={isOpen} onClose={onClose} />
    </>
  );
};
