import jobsJson from "../data/jobs.json";

interface Job {
  value: string;
  label: string;
  cannot_perform_with_disabilities: string[]; // expected subset of disabilities array
  can_perform_with_interests: string[]; // expected subset of interests array
  show_always?: boolean;
  description: string;
}

interface Attributes {
  jobs?: Job[];
  disabilities: string[];
  interests: string[];
}

export default function getJobSuggestion({ disabilities = [], interests = [], jobs = jobsJson }: Attributes): Job[] {
  return jobs.filter((job) => {
    let interestsOverlap = false;
    let cannotPerformJob = false;

    if (job.show_always) {
      return true;
    }

    job.can_perform_with_interests.forEach(interest => {
      if (!interestsOverlap) {
        interestsOverlap = interests.includes(interest)
      }
    })
    
    job.cannot_perform_with_disabilities.forEach(disability => {
      if (!cannotPerformJob) {
        cannotPerformJob = !!disabilities.find(d => d.startsWith(disability));
      }
    })

    return interestsOverlap && !cannotPerformJob;
  });
}