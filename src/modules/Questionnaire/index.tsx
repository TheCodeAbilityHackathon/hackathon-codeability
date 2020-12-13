import * as React from "react";
import {
  Box,
  Text,
  VStack,
  Heading,
  Center,
  Flex,
  Container,
  Grid,
  GridItem,
  HStack,
  Image,
  Link as ChakraLink,
  Button,
} from "@chakra-ui/react";
import { IoMdArrowBack } from "react-icons/io";
import { useState } from "react";
import { getFlatOptions, getNextBranchId } from "../../utils";
import heartPerson from "../../assets/person_heart.svg";
import learningPerson from "../../assets/person_learning.svg";
import disabilities from "../../data/disabilities.json";
import { BooleanQuestionField } from "../../components/BooleanQuestionField";
import { Logo, Page, PageContainer } from "../../components/Page";
import { ButtonTeal } from "../../components/Button";
import { QuestionnaireProvider, useQuestionnaireState } from "./context";
import interests from "../../data/interests.json";
import { TagButton } from "../../components/TagButton";
import getJobSuggestion from "../../business_logic/getJobSuggestion";
import { AnimateComponent } from "../../components/AnimateComponent";
import { ReactComponent as PersonSvg } from "../../assets/walking_person.svg";
import { ProfessionCard } from "../../components/ProfessionCard";
import { ReactComponent as BgWave } from "../../assets/icons_wave_top.svg";
import { ReactComponent as BgIconRight } from "../../assets/icons_bottom_right.svg";
import { ReactComponent as BgIconLeft } from "../../assets/icons_bottom_left.svg";
import { coderslabLink, Wave } from "../../components/Wave";
import { Link } from "react-router-dom";

const flatOptions = getFlatOptions(disabilities);
const ids = flatOptions.map(({ value }) => value);

export const QuestionnairePage = () => {
  return (
    <QuestionnaireProvider>
      {({ step }) => (
        <>
          {step === "result" ? (
            <>
              <StepResult />
              <Box
                position="absolute"
                top="60vh"
                left="5%"
                transform="rotate(90deg)"
                zIndex={-1}
              >
                <AnimateComponent transition={{ duration: 0.7 }}>
                  <BgIconLeft style={{ width: 230, height: 230 }} />
                </AnimateComponent>
              </Box>
            </>
          ) : (
            <Page display="flex">
              <Flex align="center" justify="center" textAlign="center" grow={1}>
                {
                  {
                    start: <StepStart />,
                    interests: <StepInterests />,
                    disabilities: <StepDisabilities />,
                  }[step]
                }
              </Flex>
              <Box position="absolute" top="20%" right="18%" zIndex={-1}>
                <AnimateComponent transition={{ duration: 0.7 }}>
                  <BgWave style={{ width: 40, height: 40 }} />
                </AnimateComponent>
              </Box>
              <Box position="absolute" bottom="10%" left="5%" zIndex={-1}>
                <AnimateComponent transition={{ delay: 0.2, duration: 0.6 }}>
                  <BgIconLeft style={{ width: 230, height: 230 }} />
                </AnimateComponent>
              </Box>
              <Box position="absolute" bottom="10%" right="10%" zIndex={-1}>
                <AnimateComponent transition={{ delay: 0.1, duration: 0.8 }}>
                  <BgIconRight style={{ width: 230, height: 230 }} />
                </AnimateComponent>
              </Box>
            </Page>
          )}
        </>
      )}
    </QuestionnaireProvider>
  );
};

const StepResult = () => {
  const { disabilities, chosenInterests } = useQuestionnaireState();
  const suggestions = getJobSuggestion({
    disabilities,
    interests: chosenInterests,
  });

  return (
    <Box>
      <PageContainer>
        <Logo />
        <Button
          as={Link}
          to="/"
          position="absolute"
          mt={20}
          fontWeight="bold"
          leftIcon={<IoMdArrowBack />}
          colorScheme="purple"
          variant="link"
        >
          Wróć
        </Button>
        <Box>
          <Box
            zIndex={-1}
            position="absolute"
            width="100vw"
            height="100vh"
            overflow="hidden"
            top="0"
            left="0"
          >
            <Box position="absolute" left="calc(50% - 8rem)" top="8rem">
              <AnimateComponent transition={{ delay: 0.1 }}>
                <PersonSvg />
              </AnimateComponent>
            </Box>
          </Box>
          <AnimateComponent>
            <Box py="16rem">
              <Heading as="h2" size="2xl">
                Zawody które do Ciebie pasują
              </Heading>
              <Text fontSize="xl" mt={4}>
                Wybierz ten który Cię zainteresował i dowiedz się więcej.
              </Text>
            </Box>
          </AnimateComponent>
        </Box>

        <Grid templateColumns="repeat(2, 1fr)" gap={10}>
          {suggestions.map((suggestion, i) => (
            <GridItem rowSpan={1}>
              <AnimateComponent transition={{ delay: 0.1 + i * 0.1 }}>
                <ProfessionCard key={suggestion.value}>
                  <Heading as="h4" size="xl" mb={4}>
                    {suggestion.label}
                  </Heading>
                  <Text fontSize="md">
                    {suggestion.description.substring(0, 200) + "..."}
                  </Text>
                </ProfessionCard>
              </AnimateComponent>
            </GridItem>
          ))}
        </Grid>
      </PageContainer>
      <HStack justify="center" pt={16} pb={12}>
        <Center w="35%" p={6}>
          <Image
            objectFit="cover"
            src={heartPerson}
            alt="Person reading illustration"
          />
        </Center>
        <Box w="32%" p={6}>
          <Heading as="h2" size="xl">
            Mentoring
          </Heading>
          <Text fontSize="xl" mt={4}>
            Czasami potrzebujemy, by ktoś nakierował nas na odpowiednią ścieżkę.
            Dzięki programowi mentorskiemu masz szanse spotkać się i porozmawiać
            z ludźmi, którzy mają podobne doświadczenia i zmagają się z
            podobnymi wyzwaniami.
          </Text>
          <ButtonTeal mt="12" disabled>
            Zobacz
          </ButtonTeal>
        </Box>
      </HStack>

      <Wave color="brand.300" />
      <HStack bg="brand.300" justify="center" pt={16} pb={12} color="white">
        <VStack spacing={6} w="32%" p={6} align="flex-end" textAlign="right">
          <Heading as="h2" size="xl">
            Rozwój
          </Heading>
          <Text fontSize="xl">
            Jeżeli masz wymarzoną pracę do której brakuje Ci kwalifikacji,
            uzupełnij swoją wiedzę materiałami które dla Ciebie przygotowaliśmy
          </Text>
          <Box>
            <ButtonTeal as={ChakraLink} isExternal mt="6" href={coderslabLink}>
              Dowiedz się więcej
            </ButtonTeal>
          </Box>
        </VStack>
        <Center w="35%" p={6}>
          <Image
            objectFit="cover"
            src={learningPerson}
            alt="Person learning illustration"
          />
        </Center>
      </HStack>
    </Box>
  );
};

const StepDisabilities = () => {
  const [currentId, setCurrentId] = useState<string>(ids[0]);
  const { setStep, disabilities, setDisabilities } = useQuestionnaireState();
  const currentOption = flatOptions.find(({ value }) => value === currentId);

  return (
    <AnimateComponent>
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
    </AnimateComponent>
  );
};

const StepStart = () => {
  const { setStep } = useQuestionnaireState();

  return (
    <AnimateComponent>
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
        <ButtonTeal
          onClick={() => {
            setStep("interests");
          }}
        >
          Zaczynajmy!
        </ButtonTeal>
      </VStack>
    </AnimateComponent>
  );
};

const StepInterests = () => {
  const {
    setStep,
    chosenInterests,
    setChosenInterests,
  } = useQuestionnaireState();

  return (
    <AnimateComponent>
      <VStack spacing={8}>
        <Heading as="h2" size="2xl">
          Jakie są twoje pasje i zainteresowania?
        </Heading>
        <Center>
          <Container maxWidth="70ch">
            <Text fontSize="2xl">Możesz zaznaczyć wiele opcji</Text>
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
        <ButtonTeal
          onClick={() => {
            setStep("disabilities");
          }}
        >
          Dalej
        </ButtonTeal>
      </VStack>
    </AnimateComponent>
  );
};
