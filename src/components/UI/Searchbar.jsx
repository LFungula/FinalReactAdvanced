import { Input } from "@chakra-ui/react";

export const Searchbar = ({ handleChangeInput }) => {
  return (
    <Input
      borderRadius="none"
      bgColor="seashell"
      type="text"
      placeholder="Search for an event here..."
      onChange={handleChangeInput}
    ></Input>
  );
};
