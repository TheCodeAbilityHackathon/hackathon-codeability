import { Box } from "@chakra-ui/react";
import * as React from "react";
import { ReactComponent as WaveSvg } from "../assets/wave.svg";

export const Wave = ({ color, ...props }: any) => (
  <Box color={color}>
    <WaveSvg {...props} />
  </Box>
);

export const coderslabLink = "https://coderslab.pl/pl";
export const pracujLink = "https://www.pracuj.pl/praca";
