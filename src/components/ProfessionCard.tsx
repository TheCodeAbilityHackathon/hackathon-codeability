import React from "react";
import { Box, ChakraStyleProps } from "@chakra-ui/react";

export const ProfessionCard: React.FC<ChakraStyleProps> = ({ ...props }) => {
  return (
    <Box
      p={8}
      borderRadius={6}
      bg="white"
      filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
      {...props}
    />
  );
};
