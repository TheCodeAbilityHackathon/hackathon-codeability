import React from "react";
import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

export const TagButton: React.FC<ButtonProps & { isSelected: boolean }> = ({
  isSelected,
  ...props
}) => {
  return (
    <ChakraButton
      px={4}
      borderRadius={10}
      borderWidth={2}
      borderColor={isSelected ? "transparent" : undefined}
      colorScheme="purple"
      fontWeight="bold"
      size="md"
      variant={isSelected ? "solid" : "outline"}
      {...props}
    />
  );
};
