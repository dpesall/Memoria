/**
 * Seeded random number generation utilities for deterministic daily questions.
 * Uses mulberry32 PRNG to ensure same seed = same sequence across all devices.
 */

/**
 * Mulberry32 - A fast, high-quality 32-bit PRNG
 * @param {number} seed - Integer seed value
 * @returns {function} Function that returns next random number (0-1)
 */
export function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Simple string hash function (djb2 variant)
 * @param {string} str - String to hash
 * @returns {number} Positive integer hash
 */
export function hashString(str) {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 33) ^ str.charCodeAt(i);
  }
  return Math.abs(hash);
}

/**
 * Fisher-Yates shuffle using a seeded PRNG
 * @param {Array} array - Array to shuffle
 * @param {function} rng - Random number generator function (returns 0-1)
 * @returns {Array} New shuffled array (original unchanged)
 */
export function seededShuffle(array, rng) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Get today's date as YYYY-MM-DD string in local timezone
 * @returns {string} Date string
 */
export function getTodayDateString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Calculate days since epoch date (Jan 1, 2024)
 * @param {string} dateString - Date in YYYY-MM-DD format
 * @returns {number} Number of days since epoch
 */
export function getDayNumber(dateString) {
  const epochDate = new Date('2024-01-01T00:00:00');
  const targetDate = new Date(dateString + 'T00:00:00');
  const diffMs = targetDate - epochDate;
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}
