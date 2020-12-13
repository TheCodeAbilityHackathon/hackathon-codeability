import * as React from "react";
import { VStack, HStack } from "@chakra-ui/react";
import { ButtonTeal } from "./Button";

export const BooleanQuestionField = ({
  onClick,
}: {
  onClick(value: boolean): void;
}) => {
  return (
    <VStack spacing={8}>
      <HStack spacing="24px">
        <ButtonTeal onClick={() => onClick(true)} type="button">
          Tak
        </ButtonTeal>
        <ButtonTeal onClick={() => onClick(false)} type="button">
          Nie
        </ButtonTeal>
      </HStack>
    </VStack>
  );
};
