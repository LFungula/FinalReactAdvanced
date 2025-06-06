import { Tag } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Categories = (categoryIds) => {
  const event = categoryIds;

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch(`http://localhost:3000/categories`);
      const categories = await response.json();
      setCategories(categories);
    }
    fetchCategories();
  }, []);

  //  console.log(event);
  //  console.log(categories);

  const getCategories = () => {
    const categoryNames = event.categoryIds.map((id) => {
      const category = categories.find((category) => category.id === id);
      return category ? category.name : "Category not listed";
    });
    return categoryNames;
  };

  const categoryName = getCategories();

  return (
    <>
      {categoryName.map((name, index) => (
        <Tag
          key={index}
          p="2"
          m="2"
          variant="solid"
          colorScheme="green"
          size="md"
        >
          {" "}
          {name}{" "}
        </Tag>
      ))}
    </>
  );
};
