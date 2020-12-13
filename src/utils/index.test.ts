import { getNextBranchId } from './';

const ids = [
  "movement",
  "movement.limbs",
  "movement.nervous_system",
  "movement.nervous_system.brain",
  "movement.nervous_system.muscle",
  "movement.nervous_system.heine_medina",
  "movement.nervous_system.multiple_sclerosis",
  "movement.skeleton",
  "movement.joints",
  "intellectual",
  "sight",
  "mental",
  "hearing",
  "speech",
];

test("return next minor branch when value is true", () => {
  expect(getNextBranchId(true, ids, ids[0])).toEqual("movement.limbs");
  expect(getNextBranchId(true, ids, ids[2])).toEqual("movement.nervous_system.brain");
});

test("return next major branch when value is false", () => {
  const id = getNextBranchId(false, ids, ids[2]);
  expect(id).toEqual("movement.skeleton");
});

test("return next major branch when value is false 2", () => {
  const id = getNextBranchId(false, ids, ids[4]);
  expect(id).toEqual("movement.nervous_system.heine_medina");
});

test("return undefined for last value", () => {
  const id = getNextBranchId(false, ids, ids[13]);
  expect(id).toEqual(undefined);
});
