import { useState } from "react";
import { Searchbar } from "./UI/Searchbar";
import { CategoryFilter } from "./UI/CategoryFilter";
import { Flex, Tag } from "@chakra-ui/react";
import { EventCard } from "./EventCard";

export const SearchResults = ({ events }) => {
  const [searchItem, setSearchItem] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  console.log(categoryFilter);

  const handleChangeInput = (event) => {
    setSearchItem(event.target.value);
  };

  const setCategory = (id) => {
    setCategoryFilter(id);
  };

  const searchedResults =
    searchItem === ""
      ? events
      : events.filter((event) => {
          return event.title.toLowerCase().includes(searchItem.toLowerCase());
        });

  const filteredResults =
    categoryFilter !== ""
      ? searchedResults.filter((event) => {
          return event.categoryIds.includes(categoryFilter);
        })
      : searchedResults;

  return (
    <>
      <Searchbar handleChangeInput={handleChangeInput} />
      <CategoryFilter onSetCategory={setCategory} />
      {categoryFilter === "" ? (
        ""
      ) : (
        <Tag
          p="2"
          m="2"
          variant="solid"
          colorScheme="blue"
          size="sm"
          onClick={() => {
            setCategoryFilter("");
          }}
        >
          Reset Fiters
        </Tag>
      )}
      <Flex justify="center" wrap="wrap">
        {filteredResults.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </Flex>
    </>
  );
};
