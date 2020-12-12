import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  extendTheme,
  Heading,
  Container,
  Select,
  RadioGroup,
  Stack,
  Checkbox,
  CheckboxGroup,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  HStack,
  Radio,
  list,
} from "@chakra-ui/react";
import theme from "./theme";
import { useState } from "react";
import { getFlatOptions, getNextBranchId } from "./utils";
import disabilities from "./data/disabilities.json";

const flatOptions = getFlatOptions(disabilities);
const ids = flatOptions.map(({ value }) => value);

const BooleanQuestionField = ({
  label,
  name,
  onClick,
  renderLabel,
}: {
  label: string;
  name: string;
  onClick(value: boolean): void;
  renderLabel?(text: string): React.ReactNode;
}) => {
  return (
    <VStack spacing={8}>
      <FormLabel as="legend">
        {renderLabel ? renderLabel(label) : label}
      </FormLabel>
      <HStack spacing="24px">
        <Button
          onClick={() => onClick(true)}
          type="button"
          borderRadius={50}
          colorScheme="pink"
          size="lg"
        >
          Tak
        </Button>
        <Button
          onClick={() => onClick(false)}
          type="button"
          borderRadius={50}
          colorScheme="pink"
          size="lg"
        >
          Nie
        </Button>
      </HStack>
    </VStack>
  );
};

export const App = () => {
  const [disabilities, setDisabilities] = useState<string[]>([]);
  const [currentId, setCurrentId] = useState<string>(ids[0]);
  const [finishedStep, setFinishedStep] = useState<boolean>(false);
  const currentOption = flatOptions.find(({ value }) => value === currentId);

  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <Box textAlign="center" fontSize="xl" bg="">
        <Grid minH="100vh" p={3}>
          <Container>
            <VStack spacing={8}>
              <Heading as="h2" size="2xl">
                Witaj! Trafiłeś na stronę która pomoże wybrać ci ścieżkę
                zawodową!
              </Heading>
              <Text>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </Text>
            </VStack>

            {!finishedStep ? (
              <VStack mt="8" spacing={16}>
                <VStack spacing={4} mb={8}>
                  {currentOption && (
                    <BooleanQuestionField
                      name={currentOption.value}
                      label={currentOption.label}
                      onClick={(value) => {
                        const nextId = getNextBranchId(value, ids, currentId);
                        if (value) {
                          setDisabilities([
                            ...disabilities,
                            currentOption.value,
                          ]);
                        }

                        if (!nextId) {
                          setFinishedStep(true);
                        } else {
                          setCurrentId(nextId);
                        }
                      }}
                    />
                  )}
                </VStack>
              </VStack>
            ) : (
              <Text>Wartości: {disabilities.join(" ")}</Text>
            )}
          </Container>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
