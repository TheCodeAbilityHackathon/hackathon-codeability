import * as React from "react";
import { VStack, HStack } from "@chakra-ui/react";
import { Button } from "./Button";

export const BooleanQuestionField = ({
  onClick,
}: {
  onClick(value: boolean): void;
}) => {
  return (
    <VStack spacing={8}>
      <HStack spacing="24px">
        <Button onClick={() => onClick(true)} type="button">
          Tak
        </Button>
        <Button onClick={() => onClick(false)} type="button">
          Nie
        </Button>
      </HStack>
    </VStack>
  );
};
