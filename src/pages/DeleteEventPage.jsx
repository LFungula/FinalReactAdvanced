import { Heading } from "@chakra-ui/react";
import { useActionData } from "react-router-dom";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

export const DeleteEventPage = () => {
  return <Heading> Warning! You are about te delete an event!</Heading>;
};
