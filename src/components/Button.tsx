import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

export const Button: typeof ChakraButton = (props) => {
  return (
    <ChakraButton
      px={16}
      borderRadius={50}
      colorScheme="purple"
      size="lg"
      {...props}
    />
  );
};

export const ButtonTeal: typeof ChakraButton = (props) => {
  return (
    <ChakraButton
      px={16}
      borderRadius={50}
      color="brand.300"
      fontWeight="bold"
      colorScheme="brandTeal"
      size="lg"
      {...props}
    />
  );
};
