import { topic01 } from './01-introduction/topic';
import { topic02 } from './02-variables/topic';
import { topic03 } from './03-operators/topic';
import { topic04 } from './04-control-flow/topic';
import { topic05 } from './05-functions/topic';
import { topic06 } from './06-arrays/topic';
import { topic07 } from './07-objects/topic';
import { topic08 } from './08-dom-manipulation/topic';
import { topic09 } from './09-event-handling/topic';
import { topic10 } from './10-async-javascript/topic';

// Raw topic modules
const rawTopics = [
  topic01,
  topic02,
  topic03,
  topic04,
  topic05,
  topic06,
  topic07,
  topic08,
  topic09,
  topic10
];

// Normalized course syllabus topics with full backwards-compatibility for existing views
export const SYLLABUS_TOPICS = rawTopics.map((topic) => ({
  ...topic,
  snippet: topic.exemplarCode,
  whatYouNeedToKnow: topic.cards.map((card) => card.keyTakeaway || card.description),
  keyConcepts: topic.cards.map((card) => ({
    title: card.title,
    explanation: card.description,
    code: card.codeSample
  }))
}));

// Helper to look up a topic by numeric or string ID
export function getTopicById(id) {
  const numericId = Number(id);
  return SYLLABUS_TOPICS.find((topic) => topic.id === numericId) || null;
}

// Sequential Progression Rule:
// Module 1 is always unlocked by default.
// Subsequent modules (ID: N) are unlocked IF AND ONLY IF all preceding modules (1 to N-1) are completed.
export function isObjectiveUnlocked(objectiveId, completedList, syllabusList = SYLLABUS_TOPICS) {
  const targetId = Number(objectiveId);
  const targetIndex = syllabusList.findIndex((item) => item.id === targetId);
  
  if (targetIndex <= 0) {
    return true; // First objective is always unlocked
  }

  // Check if ALL preceding objectives in the syllabus array are present in completedList
  for (let i = 0; i < targetIndex; i++) {
    const precedingId = syllabusList[i].id;
    if (!completedList.includes(precedingId)) {
      return false;
    }
  }

  return true;
}
