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
import deepMap from "deep-map";

const multistepForm = [
  {
    value: "movement",
    label: "Ruchową",
    options: [
      { value: "limbs", label: "Brak kończyn lub ich części", options: [] },
      {
        value: "nervous_system",
        label: "Uszkodzenia układu nerwowego",
        options: [
          { value: "brain", label: "Mózgowe porażenie dziecięce", options: [] },
          { value: "muscle", label: "Rdzeniowy zanik mięśni", options: [] },
          {
            value: "heine_medina",
            label: "choroby Heinego-Medina",
            options: [],
          },
          {
            value: "multiple_sclerosis",
            label: "stwardnienie rozsiane",
            options: [],
          },
        ],
      },
      {
        value: "skeleton",
        label: "Niepoprawne uformowanie szkieletu",
        options: [],
      },
      { value: "joints", label: "Uszkodzenia stawów", options: [] },
    ],
  },
  { value: "intellectual", label: "Intelektualną", options: [] },
  { value: "sight", label: "Wzroku", options: [] },
  { value: "mental", label: "Choroba Psychiczna", options: [] },
  { value: "hearing", label: "Słuchu", options: [] },
  { value: "speech", label: "Mowy", options: [] },
];

const BooleanQuestionField = ({ label, name, ...props }: any) => {
  const [field, meta, helpers] = useField<"yes" | "no">(name);

  return (
    <FormControl as="fieldset">
      <FormLabel htmlFor={field.name} as="legend">
        {label}
      </FormLabel>
      <RadioGroup
        {...field}
        onChange={(value: "yes" | "no") => {
          props?.onChange(value);
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
  const [index, setIndex] = useState(0);

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
