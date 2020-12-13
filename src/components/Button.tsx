import React from "react";
import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

export const Button: React.FC<ButtonProps> = (props) => {
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

export const ButtonTeal: React.FC<ButtonProps> = (props) => {
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
