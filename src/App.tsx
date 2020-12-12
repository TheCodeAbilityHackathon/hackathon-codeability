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
  Radio,
} from "@chakra-ui/react";
import theme from "./theme";

export const App = () => (
  <ChakraProvider theme={extendTheme(theme)}>
    <Box textAlign="center" fontSize="xl" bg="">
      <Grid minH="100vh" p={3}>
        <Container>
          <VStack spacing={8}>
            <Heading as="h2" size="2xl">
              Witaj! Trafiłeś na stronę która pomoże wybrać ci ścieżkę zawodową!
            </Heading>
            <Text>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia
            </Text>
          </VStack>

          <VStack mt="8" spacing={16}>
            <VStack spacing={4}>
              <Heading as="h2" size="md">
                Czy masz niepełnosprawność ruchową?
              </Heading>
              <RadioGroup defaultValue="0">
                <Stack direction="column">
                  <Radio size="lg" value="1">
                    Tak
                  </Radio>
                  <Radio size="lg" value="0">
                    Nie
                  </Radio>
                </Stack>
              </RadioGroup>
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
        </Container>
      </Grid>
    </Box>
  </ChakraProvider>
);
