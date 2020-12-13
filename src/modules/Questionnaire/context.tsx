import * as React from "react";

export interface QuestionnaireState {
  step: QuestionnaireSteps;
  setStep(step: QuestionnaireSteps): void;
  chosenInterests: string[];
  setChosenInterests(interests: string[]): void;
  disabilities: string[];
  setDisabilities(interests: string[]): void;
}
export type QuestionnaireSteps =
  | "start"
  | "interests"
  | "disabilities"
  | "result";

const QuestionnaireStateContext = React.createContext<QuestionnaireState>({
  step: "start",
  setStep: () => {},
  chosenInterests: [],
  setChosenInterests: () => {},
  disabilities: [],
  setDisabilities: () => {},
});

export const QuestionnaireProvider: React.FC<{
  children: React.ReactChildren | ((values: QuestionnaireState) => any);
}> = ({ children }) => {
  const [step, setStep] = React.useState<QuestionnaireSteps>("start");
  const [chosenInterests, setChosenInterests] = React.useState<string[]>([]);
  const [disabilities, setDisabilities] = React.useState<string[]>([]);

  const value = {
    step,
    setStep,
    chosenInterests,
    setChosenInterests,
    disabilities,
    setDisabilities,
  };

  return (
    <QuestionnaireStateContext.Provider value={value}>
      {typeof children === "function" ? children(value) : children}
    </QuestionnaireStateContext.Provider>
  );
};

export function useQuestionnaireState() {
  const context = React.useContext(QuestionnaireStateContext);
  if (context === undefined) {
    throw new Error(
      "useQuestionnaireState must be used within a QuestionnaireProvider"
    );
  }
  return context;
}
