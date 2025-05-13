import { useState } from "react";
import { Searchbar } from "./UI/Searchbar";
import { CategoryFilter } from "./UI/CategoryFilter";

export const SearchResults = ({ events }) => {
  const [searchItem, setSearchItem] = useState("");
  const [categoryFilter, setCategoryFilter] = useState([]);

  //console.log(searchItem);
  console.log(categoryFilter);
  //console.log(events);

  const handleChangeInput = (event) => {
    setSearchItem(event.target.value);
  };

  const searchedResults =
    searchItem === ""
      ? events
      : events.filter((event) => {
          return event.title.toLowerCase().includes(searchItem.toLowerCase());
        });

  console.log(searchedResults);

  return (
    <>
      <Searchbar handleChangeInput={handleChangeInput} />
      <CategoryFilter />
    </>
  );
};
