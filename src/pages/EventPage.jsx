import React, { useEffect, useState } from "react";
import { Heading } from "@chakra-ui/react";

export const EventPage = ({ event }) => {
  const [Categories, setCategories] = useState([]);
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchAllCategories() {
      const response = await fetch(`http://localhost:3000/categories`);
      const allCategories = await response.json();
      setCategories(allCategories);
    }
    fetchAllCategories();
  }, []);

  useEffect(() => {
    async function fetchAllUsers() {
      const response = await fetch(`http://localhost:3000/users`);
      const allUsers = await response.json();
      setUsers(allUsers);
    }
    fetchAllUsers();
  }, []);

  const getUserName = (userID, userList) => {
    const user = userList.find((user) => user.id === userID);
    return user ? user.name : "User not registerd";
  };

  const getCathegory = (categoryID, categoryList) => {
    const category = categoryList.find(
      (category) => category.id === categoryID
    );
    return category ? category.name : "Category not listed";
  };

  const userName = getUserName(event.createdBy, Users);
  const categoryName = getCathegory(event.categoryIds, Categories);

  return (
    <>
      <Heading>{event.title} </Heading>
      <div>
        <p>by {userName}</p>
        <img src={event.image} width="25%" />
        <p>
          {event.categoryIds.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </p>
        <p> location: {event.location} </p>
        <p>
          {" "}
          from {event.startTime.slice(0, 10)} to {event.endTime.slice(0, 10)}{" "}
        </p>
        <p>
          {" "}
          from {event.startTime.slice(11, 16)} to {event.endTime.slice(11, 16)}{" "}
        </p>
        <p> {event.description} </p>{" "}
      </div>
    </>
  );
};
