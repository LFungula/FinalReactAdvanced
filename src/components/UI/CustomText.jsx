import { Text } from "@chakra-ui/react";

export const CustomText = ({ ...props }) => {
  return (
    <Text
      bg="seashell"
      borderRadius="lg"
      maxW="95%"
      p="2"
      textAlign="center"
      {...props}
    ></Text>
  );
};
