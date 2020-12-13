import * as React from "react";
import {
  Box,
  Text,
  VStack,
  Heading,
  Center,
  Flex,
  Container,
} from "@chakra-ui/react";
import { useState } from "react";
import { getFlatOptions, getNextBranchId } from "../../utils";
import disabilities from "../../data/disabilities.json";
import { BooleanQuestionField } from "../../components/BooleanQuestionField";
import { Page } from "../../components/Page";
import { Button } from "../../components/Button";
import { QuestionnaireProvider, useQuestionnaireState } from "./context";
import interests from "../../data/interests.json";
import { HTMLMotionProps, motion } from "framer-motion";
import { TagButton } from "../../components/TagButton";
import getJobSuggestion from "../../business_logic/getJobSuggestion";
import { ReactComponent as BgWave } from "../../assets/icons_wave_top.svg";
import { ReactComponent as BgIconRight } from "../../assets/icons_bottom_right.svg";
import { ReactComponent as BgIconLeft } from "../../assets/icons_bottom_left.svg";

const flatOptions = getFlatOptions(disabilities);
const ids = flatOptions.map(({ value }) => value);

export const QuestionnairePage = () => {
  return (
    <QuestionnaireProvider>
      {({ step }) => (
        <Page display="flex">
          <Flex align="center" justify="center" textAlign="center" grow={1}>
            {
              {
                start: <StepStart />,
                interests: <StepInterests />,
                disabilities: <StepDisabilities />,
                result: <StepResult />,
              }[step]
            }
          </Flex>
          <Box position="absolute" top="20%" right="18%" zIndex={-1}>
            <BgWave style={{ width: 40, height: 40 }} />
          </Box>
          <Box position="absolute" bottom="10%" left="5%" zIndex={-1}>
            <BgIconLeft style={{ width: 230, height: 230 }} />
          </Box>
          <Box position="absolute" bottom="10%" right="10%" zIndex={-1}>
            <BgIconRight style={{ width: 230, height: 230 }} />
          </Box>
        </Page>
      )}
    </QuestionnaireProvider>
  );
};

const StepAnimate = (props: HTMLMotionProps<"div">) => (
  <motion.div
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    {...props}
  />
);

const StepResult = () => {
  const { disabilities, chosenInterests } = useQuestionnaireState();
  const suggestions = getJobSuggestion({
    disabilities,
    interests: chosenInterests,
  });

  return (
    <StepAnimate>
      <Box>
        <VStack mt="8" spacing={16}>
          {suggestions.map((suggestion) => (
            <Box key={suggestion.value}>
              <Text fontSize="md">{suggestion.label}</Text>
              <Text fontSize="md">{suggestion.description}</Text>
            </Box>
          ))}
        </VStack>
      </Box>
    </StepAnimate>
  );
};

const StepDisabilities = () => {
  const [currentId, setCurrentId] = useState<string>(ids[0]);
  const { setStep, disabilities, setDisabilities } = useQuestionnaireState();
  const currentOption = flatOptions.find(({ value }) => value === currentId);

  return (
    <StepAnimate>
      <Box>
        <VStack mt="8" spacing={16}>
          <Heading as="h2" size="xl">
            Czy posiadasz niepełnosprawność{" "}
            <strong>{currentOption?.label}</strong>?
          </Heading>

          <VStack spacing={4} mb={8}>
            {currentOption && (
              <BooleanQuestionField
                onClick={(value) => {
                  const nextId = getNextBranchId(value, ids, currentId);
                  if (value) {
                    setDisabilities([...disabilities, currentOption.value]);
                  }

                  if (!nextId) {
                    setStep("result");
                  } else {
                    setCurrentId(nextId);
                  }
                }}
              />
            )}
          </VStack>
        </VStack>
      </Box>
    </StepAnimate>
  );
};

const StepStart = () => {
  const { setStep } = useQuestionnaireState();

  return (
    <StepAnimate>
      <VStack spacing={12}>
        <Heading as="h2" size="3xl">
          Znajdź zawód dla siebie!
        </Heading>
        <Center>
          <Container maxWidth="70ch">
            <Text fontSize="2xl">
              Jesteś osobą z niepełnosprawnością i nie do końca wiesz co rynek
              pracy może Ci zaoferować? Odpowiedz na kilka pytań i sprawdź jakie
              zawody do Ciebie pasują.
            </Text>
          </Container>
        </Center>
        <Button
          onClick={() => {
            setStep("interests");
          }}
        >
          Zaczynajmy!
        </Button>
      </VStack>
    </StepAnimate>
  );
};

const StepInterests = () => {
  const {
    setStep,
    chosenInterests,
    setChosenInterests,
  } = useQuestionnaireState();

  return (
    <StepAnimate>
      <VStack spacing={8}>
        <Heading as="h2" size="2xl">
          Jakie są twoje pasje i zainteresowania?
        </Heading>
        <Center>
          <Container maxWidth="70ch">
            <Text fontSize="2xl">Możesz zaznczyć kilka opcji</Text>
          </Container>
        </Center>

        <Flex mw="90%" wrap="wrap" justifyContent="center">
          {interests.map((interest) => {
            const isSelected = chosenInterests.includes(interest.value);
            return (
              <TagButton
                mb={4}
                mx={4}
                key={interest.value}
                onClick={() =>
                  setChosenInterests(
                    isSelected
                      ? chosenInterests.filter((v) => v !== interest.value)
                      : [...chosenInterests, interest.value]
                  )
                }
                isSelected={isSelected}
              >
                {interest.label}
              </TagButton>
            );
          })}
        </Flex>
        <Button
          onClick={() => {
            setStep("disabilities");
          }}
        >
          Dalej
        </Button>
      </VStack>
    </StepAnimate>
  );
};
