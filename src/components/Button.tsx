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
