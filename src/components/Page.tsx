import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";

export const Page: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box
      w="full"
      pb="14"
      pt="14"
      mx="auto"
      maxW={{ base: "75rem", md: "85rem" }}
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
