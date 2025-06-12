import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Flex } from "@chakra-ui/react";
import unsplash from "../assets/unsplash.jpg";
//  this image was found on unsplash.com. Posted/created by : https://unsplash.com/@zeb_j

export const Root = () => {
  return (
    <Flex
      bg="seashell"
      direction="column"
      justify="flex-start"
      style={{
        backgroundImage: `url(${unsplash})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      minH="100vh"
    >
      <Navigation />
      <Outlet />
    </Flex>
  );
};
