import getJobSuggestion from './getJobSuggestion';
import jobsJson from "../data/jobs.json"

test("return jobs that match conditions", () => {
  const suggestions = getJobSuggestion({ disabilities: ["movement.nervous_system.brain", "sight", "intellectual"], interests: ["design", "caretaker"], jobs: jobsJson })
  expect(suggestions.length).toEqual(2);
  expect(suggestions.map(s => s.value)).toEqual(['hr_specialist', 'scrum_master'])
});

test("handle no interests case", () => {
  const suggestions = getJobSuggestion({ disabilities: [], interests: [] })
  expect(suggestions.length).toEqual(0);
});

test("handle no disabilities case", () => {
  const suggestions = getJobSuggestion({ disabilities: [], interests: ["programming"] })
  expect(suggestions.length).toEqual(3);
  expect(suggestions.map(s => s.value)).toEqual(['scientist', 'ux_ui_designer', 'software_engineer'])
});
