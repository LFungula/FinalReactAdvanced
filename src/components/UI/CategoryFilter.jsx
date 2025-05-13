import { Flex, Tag } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const CategoryFilter = () => {
  const [categories, setCategories] = useState([]);
  const [choosenCategoryFilter, setChoosenCategoryFilter] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch(`http://localhost:3000/categories`);
      const categories = await response.json();
      setCategories(categories);
    }
    fetchCategories();
  }, []);
  //console.log(choosenCategoryFilter);
  return (
    <>
      <Flex>
        {categories.map((category) => (
          <Tag
            key={category.id}
            p="2"
            m="2"
            variant="solid"
            colorScheme="green"
            size="sm"
            onClick={() => {
              setChoosenCategoryFilter(category.id);
            }}
          >
            {category.name}
          </Tag>
        ))}
      </Flex>
    </>
  );
};
