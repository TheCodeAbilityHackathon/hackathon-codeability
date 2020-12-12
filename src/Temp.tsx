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
} from "@chakra-ui/react";
import theme from "./theme";
import { Formik, Form, Field, FieldProps } from "formik";
import { useState } from "react";

type DisabilityCategory =
  | "movement"
  | "intellectual"
  | "sight"
  | "mental"
  | "hearing"
  | "speech";

const DISABILITY_CATEGORIES: Array<{
  value: DisabilityCategory;
  label: string;
}> = [
  { value: "movement", label: "Ruchową" },
  { value: "intellectual", label: "Intelektualną" },
  { value: "sight", label: "Wzroku" },
  { value: "mental", label: "Choroba Psychiczna" },
  { value: "hearing", label: "Słuchu" },
  { value: "speech", label: "Mowy" },
];

//Movement categories

type MovementCategory = "limbs" | "nervous_system" | "skeleton" | "joints";

const MOVEMENT_CATEGORIES: Array<{
  value: MovementCategory;
  label: string;
}> = [
  { value: "limbs", label: "Brak kończyn lub ich części" },
  { value: "nervous_system", label: "Uszkodzenia układu nerwowego" },
  { value: "skeleton", label: "Niepoprawne uformowanie szkieletu" },
  { value: "joints", label: "Uszkodzenia stawów" },
];

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

export const App = () => {
  const [categories, setCategories] = useState<DisabilityCategory[]>([]);
  const [categoriesMovement, setCategoriesMovement] = useState<
    MovementCategory[]
  >([]);

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
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia
              </Text>
            </VStack>

            <VStack mt="8" spacing={16}>
              <VStack spacing={4} mb={8}>
                <Formik
                  initialValues={{ name: "Sasuke" }}
                  onSubmit={(values, actions) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      actions.setSubmitting(false);
                    }, 1000);
                  }}
                >
                  <Form>
                    <Field name="disabilityType">
                      {({ field, form }: FieldProps) => (
                        <FormControl
                          isInvalid={Boolean(
                            form.errors.name && form.touched.name
                          )}
                        >
                          <FormLabel htmlFor="disabilityType">
                            First name
                          </FormLabel>
                          <Input
                            {...field}
                            value={field.value || ""}
                            id="disabilityType"
                            placeholder="Name..."
                          />
                          <FormErrorMessage>
                            {form.errors.name}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Form>
                </Formik>
              </VStack>

              <VStack spacing={4}>
                <Heading as="h2" size="md">
                  Jakie masz niepełnosprawności
                </Heading>
                <Stack direction="column">
                  <CheckboxGroup
                    value={categories}
                    colorScheme="green"
                    onChange={(value) =>
                      setCategories(value as DisabilityCategory[])
                    }
                  >
                    {DISABILITY_CATEGORIES.map((category) => (
                      <Checkbox value={category.value} key={category.value}>
                        {category.label}
                      </Checkbox>
                    ))}
                  </CheckboxGroup>
                </Stack>
                {categories.includes("movement") && (
                  <>
                    <Heading as="h2" size="md">
                      Jakiego typu?
                    </Heading>
                    <Stack direction="column">
                      <CheckboxGroup
                        value={categories}
                        colorScheme="green"
                        onChange={(value) =>
                          setCategoriesMovement(value as MovementCategory[])
                        }
                      >
                        {MOVEMENT_CATEGORIES.map((category) => (
                          <Checkbox value={category.value} key={category.value}>
                            {category.label}
                          </Checkbox>
                        ))}
                      </CheckboxGroup>
                    </Stack>
                  </>
                )}
              </VStack>
              <VStack spacing={4}>
                <Heading as="h2" size="md">
                  Jakie są twoje zainteresowania?
                </Heading>
                <RadioGroup defaultValue="0">
                  <Stack direction="column">
                    <Select placeholder="Wybierz" size="lg" />
                  </Stack>
                </RadioGroup>
              </VStack>
            </VStack>
            <Button borderRadius={50} colorScheme="pink" size="lg">
              Pokaż firmy w których
            </Button>
          </Container>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
