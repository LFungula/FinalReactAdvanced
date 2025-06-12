import { Heading } from "@chakra-ui/react";

export const CustomHeader = ({ ...props }) => {
  return (
    <Heading
      bg="seashell"
      width="100vw"
      p="2"
      textAlign="center"
      marginTop="4"
      marginBottom="4"
      {...props}
    ></Heading>
  );
};
