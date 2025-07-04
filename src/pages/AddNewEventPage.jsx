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
  const [allCategories, setAllCategories] = useState([]);

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
  };

  //Check if nothing is empty
  //  const checkIfEmpty = () => {};

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
    event.preventDefault();
    let isComplete = false;
    console.log("categoryIds afterupdate ", categoryIds);
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
                {allCategories.map((singleCategory) => {
                  return (
                    <Flex
                      key={singleCategory.id}
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
