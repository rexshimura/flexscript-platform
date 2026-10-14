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
import { topic11 } from './11-web-apis/topic';
import { topic12 } from './12-advanced-oop/topic';
import { topic13 } from './13-engine-internals/topic';
import { topic14 } from './14-projects/topic';
import { topic15 } from './15-versions/topic';
import { topic16 } from './16-html-dom/topic';
import { topic17 } from './17-html-events/topic';
import { topic18 } from './18-web-apis/topic';
import { topic19 } from './19-advanced-functions/topic';
import { topic20 } from './20-objects-prototypes/topic';
import { topic21 } from './21-classes/topic';
import { topic22 } from './22-asynchronous/topic';
import { topic23 } from './23-modules/topic';
import { topic24 } from './24-typed-arrays/topic';
import { topic25 } from './25-dom-navigation/topic';
import { topic26 } from './26-graphics/topic';

// Raw topic modules (All 26 Objectives spanning Basic, Intermediate, Advanced, and Expert)
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
  topic10,
  topic11,
  topic12,
  topic13,
  topic14,
  topic15,
  topic16,
  topic17,
  topic18,
  topic19,
  topic20,
  topic21,
  topic22,
  topic23,
  topic24,
  topic25,
  topic26
];

// Normalized course syllabus topics with full backwards-compatibility for existing views
export const SYLLABUS_TOPICS = rawTopics.map((topic) => ({
  ...topic,
  snippet: topic.exemplarCode,
  whatYouNeedToKnow: topic.expectedToLearn || topic.cards.map((card) => card.keyTakeaway || card.description),
  keyConcepts: (topic.cards || []).map((card) => ({
    title: card.title,
    explanation: card.description,
    code: card.codeSample
  }))
}));

import { OLD_TECH_TOPICS } from './old-tech/oldTechRegistry';

export { OLD_TECH_TOPICS };

// Master collection combining 26 core syllabus chapters + 3 old technologies modules
export const ALL_TOPICS = [...SYLLABUS_TOPICS, ...OLD_TECH_TOPICS];

// Helper to look up a topic by numeric ID, string ID, or slug
export function getTopicById(id) {
  const numericId = Number(id);
  return ALL_TOPICS.find((topic) => topic.id === numericId || topic.slug === id || String(topic.id) === String(id)) || null;
}

// Sequential Progression Rule:
// Informational / Old Tech topics are always unlocked.
// Module 1 is always unlocked by default.
// Subsequent modules (ID: N) are unlocked IF AND ONLY IF all preceding modules (1 to N-1) are completed.
export function isObjectiveUnlocked(objectiveId, completedList, syllabusList = SYLLABUS_TOPICS) {
  const targetId = Number(objectiveId);
  const targetTopic = ALL_TOPICS.find((t) => t.id === targetId || t.slug === objectiveId || String(t.id) === String(objectiveId));
  
  // Informational Old Technologies topics are never locked
  if (targetTopic?.isInformational) {
    return true;
  }

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

