/**
 * Deterministic Daily Question Generator
 *
 * Generates the same 10 questions for all players on a given date.
 * Questions don't repeat until entire pool is exhausted, then new cycle begins.
 * Each cycle has a unique question order.
 */

import questions from '../constants/Questions.json';
import {
  mulberry32,
  hashString,
  seededShuffle,
  getDayNumber,
} from './seededRandom';

// Build question pools on module load (runs once)
const { easyPool, hardPool } = buildQuestionPools();

/**
 * Build question pools separated by difficulty
 * Easy: difficulty 1-5, Hard: difficulty 6-10
 * Each entry includes globalIndex for stable identification
 */
function buildQuestionPools() {
  const easy = [];
  const hard = [];

  // Sort topic names for deterministic ordering
  const topicNames = Object.keys(questions).sort();

  let globalIndex = 0;
  topicNames.forEach((topicName) => {
    const topicQuestions = questions[topicName].questions;
    topicQuestions.forEach((q) => {
      const entry = { globalIndex, question: q };
      if (q.difficulty >= 1 && q.difficulty <= 5) {
        easy.push(entry);
      } else {
        hard.push(entry);
      }
      globalIndex++;
    });
  });

  return { easyPool: easy, hardPool: hard };
}

/**
 * Calculate cycle info for a question pool
 * @param {number} poolSize - Total questions in pool
 * @param {number} questionsPerDay - Questions drawn per day from this pool
 * @param {number} dayNumber - Days since epoch
 * @returns {{ cycleNumber: number, dayInCycle: number, usableCount: number }}
 */
function getCycleInfo(poolSize, questionsPerDay, dayNumber) {
  const daysPerCycle = Math.floor(poolSize / questionsPerDay);
  const usableCount = daysPerCycle * questionsPerDay;
  const cycleNumber = Math.floor(dayNumber / daysPerCycle);
  const dayInCycle = dayNumber % daysPerCycle;

  return { cycleNumber, dayInCycle, usableCount };
}

/**
 * Get questions for a specific pool on a given day
 * @param {Array} pool - Question pool (easy or hard)
 * @param {string} poolName - 'easy' or 'hard' (for seed uniqueness)
 * @param {number} dayNumber - Days since epoch
 * @param {number} count - Number of questions to select
 * @returns {Array} Selected questions for today
 */
function getQuestionsFromPool(pool, poolName, dayNumber, count) {
  const { cycleNumber, dayInCycle, usableCount } = getCycleInfo(
    pool.length,
    count,
    dayNumber
  );

  // Create seed unique to this pool and cycle
  const seed = hashString(`${poolName}-cycle-${cycleNumber}`);
  const rng = mulberry32(seed);

  // Only use questions that fit evenly into cycles
  const usablePool = pool.slice(0, usableCount);

  // Shuffle the pool with this cycle's seed
  const shuffled = seededShuffle(usablePool, rng);

  // Get today's slice
  const startIdx = dayInCycle * count;
  return shuffled.slice(startIdx, startIdx + count);
}

/**
 * Shuffle answer options for a question (for display variety)
 * Uses a combination of question index and day for deterministic but varied order
 * @param {Object} question - Question object
 * @param {number} globalIndex - Question's global index
 * @param {number} dayNumber - Days since epoch
 * @returns {Object} Question with shuffled answer options
 */
function shuffleAnswerOptions(question, globalIndex, dayNumber) {
  const seed = hashString(`answers-${globalIndex}-${dayNumber}`);
  const rng = mulberry32(seed);

  // answers[0] = correct answer, answers[1] = array of 4 options
  const shuffledOptions = seededShuffle([...question.answers[1]], rng);

  return {
    ...question,
    answers: [question.answers[0], shuffledOptions],
  };
}

/**
 * Get daily questions for a specific date
 * @param {string} dateString - Date in YYYY-MM-DD format
 * @returns {Array} Array of 10 question objects (5 easy + 5 hard)
 */
export function getDailyQuestions(dateString) {
  const dayNumber = getDayNumber(dateString);

  // Get 5 questions from each pool
  const easyQuestions = getQuestionsFromPool(easyPool, 'easy', dayNumber, 5);
  const hardQuestions = getQuestionsFromPool(hardPool, 'hard', dayNumber, 5);

  // Combine and shuffle answer options for each
  const allQuestions = [...easyQuestions, ...hardQuestions];

  return allQuestions.map(({ globalIndex, question }) =>
    shuffleAnswerOptions(question, globalIndex, dayNumber)
  );
}

/**
 * Get information about today's daily challenge
 * @param {string} dateString - Date in YYYY-MM-DD format
 * @returns {Object} Challenge info (day number, cycles, etc.)
 */
export function getDailyChallengeInfo(dateString) {
  const dayNumber = getDayNumber(dateString);

  const easyInfo = getCycleInfo(easyPool.length, 5, dayNumber);
  const hardInfo = getCycleInfo(hardPool.length, 5, dayNumber);

  return {
    date: dateString,
    dayNumber,
    easyPool: {
      total: easyPool.length,
      cycle: easyInfo.cycleNumber + 1,
      dayInCycle: easyInfo.dayInCycle + 1,
      daysPerCycle: Math.floor(easyPool.length / 5),
    },
    hardPool: {
      total: hardPool.length,
      cycle: hardInfo.cycleNumber + 1,
      dayInCycle: hardInfo.dayInCycle + 1,
      daysPerCycle: Math.floor(hardPool.length / 5),
    },
  };
}

export default getDailyQuestions;
