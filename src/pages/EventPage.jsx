import { Heading } from "@chakra-ui/react";
import { Link, useLoaderData } from "react-router-dom";

export const loader = async ({ params }) => {
  const event = await fetch(`http://localhost:3000/events/${params.eventId}`);
  const users = await fetch(`http://localhost:3000/users`);
  const categories = await fetch(`http://localhost:3000/categories`);

  return {
    event: await event.json(),
    users: await users.json(),
    categories: await categories.json(),
  };
};

export const EventPage = () => {
  const { event, users, categories } = useLoaderData();

  const getUserName = () => {
    const user = users.find((user) => user.id === event.createdBy);
    return user ? user.name : "User not registerd";
  };

  const getCategories = () => {
    const categoryNames = event.categoryIds.map((id) => {
      const category = categories.find((category) => category.id === id);
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
        <Link to={`/users/user/${event.createdBy}`}>by {userName}</Link>
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
