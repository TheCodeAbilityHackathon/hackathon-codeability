import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";
import { ReactComponent as LogoSvg } from "../assets/logo.svg";
import { Link } from "react-router-dom";

export const PageContainer: React.FC<BoxProps> = (props) => {
  return (
    <Box
      w="full"
      pb="14"
      pt="14"
      mx="auto"
      maxW={{ base: "75rem", md: "85rem" }}
      px={{ base: "2", md: "6" }}
      {...props}
    />
  );
};

export const Logo: React.FC = () => (
  <Box position="absolute">
    <Link to="/">
      <LogoSvg style={{ width: 110 }} />
    </Link>
  </Box>
);

export const Page: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <PageContainer {...props} minH="100vh">
      <Logo />
      {children}
    </PageContainer>
  );
};
