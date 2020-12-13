import * as React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import theme from "./theme";
import { QuestionnairePage } from "./modules/Questionnaire";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LandingPage } from "./modules/Landing";

export const App = () => {
  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <Router>
        <Switch>
          <Route path="/znajdz-zawod">
            <QuestionnairePage />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
};
