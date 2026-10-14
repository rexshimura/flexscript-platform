import { topicOldTech01 } from './01-ajax/topic';
import { topicOldTech02 } from './02-jquery/topic';
import { topicOldTech03 } from './03-jsonp/topic';

// Raw Old Technologies modules (Not progress-related, informational reference)
export const rawOldTechTopics = [
  topicOldTech01,
  topicOldTech02,
  topicOldTech03
];

// Normalized Old Tech topics matching the SYLLABUS_TOPICS schema
export const OLD_TECH_TOPICS = rawOldTechTopics.map((topic) => ({
  ...topic,
  snippet: topic.exemplarCode,
  whatYouNeedToKnow: topic.expectedToLearn || topic.cards.map((card) => card.keyTakeaway || card.description),
  keyConcepts: (topic.cards || []).map((card) => ({
    title: card.title,
    explanation: card.description,
    code: card.codeSample
  }))
}));
