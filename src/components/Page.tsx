import { Box, BoxProps, Center } from "@chakra-ui/react";
import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";

export const Page: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box
      w="full"
      pb="12"
      pt="16"
      mx="auto"
      maxW="75rem"
      minH="100vh"
      px={{ base: "2", md: "6" }}
      {...props}
    >
      <Box position="absolute">
        <Logo style={{ width: 110 }} />
      </Box>
      {children}
    </Box>
  );
};
