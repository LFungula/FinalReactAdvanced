import { Flex, Heading } from "@chakra-ui/react";
//import { useToast } from "@chakra-ui/react";
import { TermsOfEvents } from "../components/UI/TermsOfEvents";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const checkboxCategries = availableCategories.map((v) => ({
    ...v,
    checked: false,
  }));

  //listing the choosen categories in a new array by ID
  const listCategoryIds = () => {
    const listOfCategoryIds = checkboxCategries
      .filter((cat) => cat.checked === true)
      .map((cat) => cat.id);
    setCategoryIds(listOfCategoryIds);
  };

  //handeling the ckeckbox's behaviour toggeling the chackedvalue
  const handleCheck = (id) => {
    const matchID = () => {
      checkboxCategries.find((c) => {
        c.id === id ? (c.checked = !c.checked) : c;
      });
      return checkboxCategries;
    };
    matchID();
    listCategoryIds();
  };

  //Clean Checkboxes
  const cleanCheckboxes = () => {
    checkboxCategries.map((c) => (c.checked = false));
  };

  //CleanUpFunction
  const cleanUp = () => {
    setTitle("");
    setDescription("");
    setLocation("");
    setStartTime("");
    setEndTime("");
    setImage("");
    setCategoryIds([""]);
    setCreatedBy("");
    cleanCheckboxes();
  };

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
    console.log("event added");
    cleanUp();
  }

  //closing window
  const navigate = useNavigate();
  const confirmAdd = () => {
    window.alert("New event is added. You will return to teh homepage");
    navigate("/");
  };

  //Submitting form and warpping up

  const handleSubmit = (event) => {
    event.preventDefault();
    //modal met checks 1 van de checkboxjes moet gebruikt worden

    postEvent();
    confirmAdd();
  };

  return (
    <Flex
      className="eventpage_Main"
      flexDir="column"
      align="center"
      maxW="100%"
      gap="2"
      h="100%"
    >
      <TermsOfEvents />

      <Heading> Your new event here!</Heading>

      <Flex direction="column" border="2px solid red" h="full">
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              placeholder="Title of the new event"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
          </label>
          <label>
            Description:
            <textarea
              type="Text"
              placeholder="Describe your event here"
              required
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
              required
            ></input>
          </label>
          <label>
            Starting Date:
            <input
              type="datetime-local"
              onChange={(e) => setStartTime(e.target.value)}
              value={startTime}
              required
            ></input>
          </label>
          <label>
            End Date:
            <input
              type="datetime-local"
              onChange={(e) => setEndTime(e.target.value)}
              value={endTime}
              required
            ></input>
          </label>
          <label>
            {checkboxCategries.map((checkbox) => {
              return (
                <>
                  {checkbox.name}
                  <input
                    key={checkbox.id}
                    type="checkbox"
                    name={checkbox.name}
                    label={checkbox.name}
                    id={checkbox.id}
                    value={checkbox.value}
                    checked={checkboxCategries.checked}
                    onChange={() => handleCheck(checkbox.id)}
                  ></input>
                </>
              );
            })}
          </label>
          <label>
            Your name:
            <input
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
            <input type="submit" value="Submit"></input>
          </label>
        </form>
      </Flex>
    </Flex>
  );
};
