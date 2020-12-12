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
import {
  Formik,
  Form,
  Field,
  FieldProps,
  useField,
  FieldAttributes,
} from "formik";
import { useState } from "react";
import { getFlatOptions, getNextBranchId } from "./utils";
import disabilities from "./data/disabilities.json";

const flatOptions = getFlatOptions(disabilities);
const ids = flatOptions.map(({ value }) => value);

const BooleanQuestionField = ({
  label,
  name,
  onChange,
}: {
  label: string;
  name: string;
  onChange(value: "yes" | "no"): void;
}) => {
  const [field, meta, helpers] = useField<"yes" | "no">(name);
  console.log(field);
  console.log(field.value);

  return (
    <FormControl as="fieldset">
      <FormLabel htmlFor={field.name} as="legend">
        {label}
      </FormLabel>
      <RadioGroup
        {...field}
        onChange={(value: "yes" | "no") => {
          onChange && onChange(value);
          helpers.setValue(value);
        }}
        id={field.name}
      >
        <HStack spacing="24px">
          <Radio value="yes">Tak</Radio>
          <Radio value="no">Nie</Radio>
        </HStack>
      </RadioGroup>
    </FormControl>
  );
};

export const App = () => {
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

            <VStack mt="8" spacing={16}>
              <VStack spacing={4} mb={8}>
                <Formik
                  initialValues={{}}
                  onSubmit={(values, actions) => {
                    console.log("submit", values);
                  }}
                >
                  <Form>
                    {currentOption && (
                      <BooleanQuestionField
                        name={currentOption.value}
                        label={currentOption.label}
                        onChange={(value) => {
                          const nextId = getNextBranchId(
                            value !== "yes",
                            ids,
                            currentId
                          );

                          if (!nextId) {
                            setFinishedStep(true);
                          } else {
                            setCurrentId(nextId);
                          }
                        }}
                      />
                    )}
                    {/* <Field name={multistepForm[index].value}>
                      {({ field, form }: FieldProps) => (
                        
                        <Button type="button" onClick={() => {}}>Yes</Button>
                        <Button type="button" onClick={() => {}}>No</Button>
                        <FormControl
                          isInvalid={Boolean(
                            form.errors.name && form.touched.name
                          )}
                        >
                          <FormLabel htmlFor={field.name}>First name</FormLabel>
                          <Input
                            {...field}
                            value={field.value || ""}
                            id={field.name}
                            placeholder="Name..."
                          />
                          <FormErrorMessage>
                            {form.errors.name}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field> */}
                    <Button
                      type="submit"
                      borderRadius={50}
                      colorScheme="pink"
                      size="lg"
                    >
                      SUBMIT
                    </Button>
                  </Form>
                </Formik>
              </VStack>
            </VStack>
          </Container>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
