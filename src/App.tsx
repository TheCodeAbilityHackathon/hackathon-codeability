import * as React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import theme from "./theme";
import { QuestionnairePage } from "./modules/Questionnaire";

export const App = () => {
  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <QuestionnairePage />
    </ChakraProvider>
  );
};
