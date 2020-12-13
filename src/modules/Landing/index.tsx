import {
  Button,
  Image,
  Heading,
  HStack,
  Text,
  Box,
  Center,
  Container,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import * as React from "react";
import { Logo, PageContainer } from "../../components/Page";
import readingPerson from "../../assets/person_reading.svg";
import heartPerson from "../../assets/person_heart.svg";
import learningPerson from "../../assets/person_learning.svg";
import { ButtonTeal } from "../../components/Button";
import { Link } from "react-router-dom";
import { AnimateComponent } from "../../components/AnimateComponent";
import { coderslabLink, pracujLink, Wave } from "../../components/Wave";

export const LandingPage = () => {
  return (
    <Box>
      <PageContainer>
        <AnimateComponent>
          <Logo />
          <HStack justify="flex-end" px="14rem">
            <Button to="/znajdz-zawod" as={Link} variant="ghost">
              Znajdź zawód
            </Button>
            <Button variant="ghost">Mentoring</Button>
            <Button
              as={ChakraLink}
              isExternal
              variant="ghost"
              href={pracujLink}
            >
              Oferty Pracy
            </Button>

            <Button
              as={ChakraLink}
              isExternal
              variant="ghost"
              href={coderslabLink}
            >
              Rozwój
            </Button>
          </HStack>
        </AnimateComponent>

        <AnimateComponent transition={{ delay: 0.1 }}>
          <HStack justify="space-between" pt={16} pb={12}>
            <Box maxW="45%">
              <Heading as="h2" size="xl">
                Dołącz do społeczności, która pomoże Ci osiągnąć sukces.
              </Heading>
              <Text fontSize="2xl" mt={4}>
                Rozwijaj się i odkryj jaki możesz mieć wpływ!
              </Text>
            </Box>
            <Center flexGrow={1}>
              <Image
                objectFit="cover"
                src={readingPerson}
                alt="Person reading illustration"
              />
            </Center>
          </HStack>
        </AnimateComponent>
      </PageContainer>

      <AnimateComponent transition={{ delay: 0.3 }}>
        <Wave color="brand.200" />
        <Center bg="brand.200" flexDirection="column" color="white" py={20}>
          <Container textAlign="center">
            <Heading as="h2" size="lg">
              Znajdź zawód dla siebie
            </Heading>
            <Text fontSize="lg" my={6}>
              Jesteś osobą z niepełnosprawnością i nie do końca wiesz co rynek
              pracy może Ci zaoferować? Odpowiedz na kilka pytań i sprawdź jakie
              zawody do Ciebie pasują.
            </Text>
          </Container>
          <ButtonTeal to="/znajdz-zawod" as={Link} mt="6">
            Znajdź zawód
          </ButtonTeal>
        </Center>
        <Wave
          color="brand.200"
          style={{ transform: "translateY(-1px) scaleX(-1) rotate(180deg)" }}
        />

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
              Czasami potrzebujemy, by ktoś nakierował nas na odpowiednią
              ścieżkę. Dzięki programowi mentorskiemu masz szanse spotkać się i
              porozmawiać z ludźmi, którzy mają podobne doświadczenia i zmagają
              się z podobnymi wyzwaniami.
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
              uzupełnij swoją wiedzę materiałami które dla Ciebie
              przygotowaliśmy
            </Text>
            <Box>
              <ButtonTeal
                as={ChakraLink}
                isExternal
                mt="6"
                href={coderslabLink}
              >
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
      </AnimateComponent>
    </Box>
  );
};
