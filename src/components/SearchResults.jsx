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
    //console.log("id in setCategory:", id);
    setCategoryFilter(id);
  };

  const searchedResults =
    searchItem === ""
      ? events
      : events.filter((event) => {
          return event.title.toLowerCase().includes(searchItem.toLowerCase());
        });

  //console.log("searchedResults", searchedResults);

  const filteredResults =
    categoryFilter !== ""
      ? searchedResults.filter((event) => {
          return event.categoryIds.includes(categoryFilter);
        })
      : searchedResults;

  //console.log("filteredResults", filteredResults);

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
      <Flex
        flexDir="column"
        justify="center"
        align="center"
        maxW="100%"
        wrap="wrap"
        gap="2"
        scrollBehavior="smooth"
        overflowY="scroll"
      >
        {filteredResults.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </Flex>
    </>
  );
};
