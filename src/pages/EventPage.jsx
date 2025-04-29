import React, { useEffect, useState } from "react";
import { Heading } from "@chakra-ui/react";

export const EventPage = ({ event }) => {
  const [Categories, setCategories] = useState([]);
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchAllUsers() {
      const response = await fetch(`http://localhost:3000/users`);
      const allUsers = await response.json();
      setUsers(allUsers);
    }
    fetchAllUsers();
  }, []);

  useEffect(() => {
    async function fetchAllCategories() {
      const response = await fetch(`http://localhost:3000/categories`);
      const allCategories = await response.json();
      setCategories(allCategories);
    }
    fetchAllCategories();
  }, []);

  const getUserName = () => {
    const user = Users.find((user) => user.id === event.createdBy);
    return user ? user.name : "User not registerd";
  };

  const getCategories = () => {
    const categoryNames = event.categoryIds.map((id) => {
      const category = Categories.find((category) => category.id === id);
      return category ? category.name : "Category not listed";
    });
    return categoryNames;
  };

  const userName = getUserName();
  const categoryName = getCategories();

  return (
    <>
      <Heading>{event.title} </Heading>
      <div>
        <p>by {userName}</p>
        <img src={event.image} width="25%" />
        <p>
          {categoryName.map((name, index) => (
            <li key={index}>{name} </li>
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
