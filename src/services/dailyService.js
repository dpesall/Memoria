/**
 * Daily Challenge Service
 * Handles Supabase queries for daily challenge results
 */

import { supabase } from '../config/supabase';

/**
 * Check if user has already played today's daily challenge
 * @param {string} userId - User's UUID
 * @param {string} dateString - Date in YYYY-MM-DD format
 * @returns {Promise<{ played: boolean, result: Object|null, error: Object|null }>}
 */
export async function checkAlreadyPlayed(userId, dateString) {
  try {
    const { data, error } = await supabase
      .from('daily_results')
      .select('*')
      .eq('user_id', userId)
      .eq('played_date', dateString)
      .single();

    if (error) {
      // PGRST116 = no rows found, which is expected if not played
      if (error.code === 'PGRST116') {
        return { played: false, result: null, error: null };
      }
      console.error('Error checking daily status:', error);
      return { played: false, result: null, error };
    }

    return { played: true, result: data, error: null };
  } catch (err) {
    console.error('Exception checking daily status:', err);
    return { played: false, result: null, error: err };
  }
}

/**
 * Save daily challenge result
 * @param {string} userId - User's UUID
 * @param {string} dateString - Date in YYYY-MM-DD format
 * @param {Object} results - Game results
 * @param {number} results.score - Total score
 * @param {number} results.correctAnswers - Number of correct answers
 * @param {number} results.wrongAnswers - Number of wrong answers
 * @param {number} results.longestStreak - Longest correct answer streak
 * @param {number} results.bestAnswer - Highest single question score
 * @returns {Promise<{ data: Object|null, error: Object|null }>}
 */
export async function saveDailyResult(userId, dateString, results) {
  try {
    const { data, error } = await supabase
      .from('daily_results')
      .insert({
        user_id: userId,
        played_date: dateString,
        score: results.score,
        correct_answers: results.correctAnswers,
        wrong_answers: results.wrongAnswers,
        longest_streak: results.longestStreak,
        best_answer: results.bestAnswer,
      })
      .select()
      .single();

    if (error) {
      // 23505 = unique constraint violation (already played)
      if (error.code === '23505') {
        return {
          data: null,
          error: { message: 'You have already completed today\'s challenge' },
        };
      }
      console.error('Error saving daily result:', error);
      return { data: null, error };
    }

    await updateProfileDailyStats(userId, dateString, results.score);

    return { data, error: null };
  } catch (err) {
    console.error('Exception saving daily result:', err);
    return { data: null, error: err };
  }
}

/**
 * Get user's daily challenge history
 * @param {string} userId - User's UUID
 * @param {number} limit - Max results to return
 * @returns {Promise<{ data: Array|null, error: Object|null }>}
 */
export async function getDailyHistory(userId, limit = 10) {
  try {
    const { data, error } = await supabase
      .from('daily_results')
      .select('*')
      .eq('user_id', userId)
      .order('played_date', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Error fetching daily history:', error);
      return { data: null, error };
    }

    return { data, error: null };
  } catch (err) {
    console.error('Exception fetching daily history:', err);
    return { data: null, error: err };
  }
}

/**
 * Get leaderboard for a specific date
 * @param {string} dateString - Date in YYYY-MM-DD format
 * @param {number} limit - Max results to return
 * @returns {Promise<{ data: Array|null, error: Object|null }>}
 */
export async function getDailyLeaderboard(dateString, limit = 20) {
  try {
    const { data, error } = await supabase
      .from('daily_results')
      .select(
        `
        score,
        correct_answers,
        longest_streak,
        best_answer,
        user_id,
        profiles!inner(username)
      `
      )
      .eq('played_date', dateString)
      .order('score', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Error fetching leaderboard:', error);
      return { data: null, error };
    }

    return { data, error: null };
  } catch (err) {
    console.error('Exception fetching leaderboard:', err);
    return { data: null, error: err };
  }
}

/**
 * Get streak leaderboard (players with highest current streaks)
 * @param {number} limit - Max results to return
 * @returns {Promise<{ data: Array|null, error: Object|null }>}
 */
export async function getStreakLeaderboard(limit = 20) {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('id, username, current_streak, total_daily_games, highest_daily_score')
      .gt('total_daily_games', 0)
      .order('current_streak', { ascending: false })
      .order('total_daily_games', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Error fetching streak leaderboard:', error);
      return { data: null, error };
    }

    return { data, error: null };
  } catch (err) {
    console.error('Exception fetching streak leaderboard:', err);
    return { data: null, error: err };
  }
}

/**
 * Update user's profile stats after completing a daily challenge
 * @param {string} userId - User's UUID
 * @param {string} dateString - Date in YYYY-MM-DD format
 * @param {number} score - Score achieved
 */
/**
 * Get friends' daily leaderboard for a specific date
 * @param {string} userId - Current user's UUID
 * @param {string} dateString - Date in YYYY-MM-DD format
 * @returns {Promise<{ data: Array|null, error: Object|null }>}
 */
export async function getFriendsDailyLeaderboard(userId, dateString) {
  try {
    // First get the user's friends
    const { data: friendships, error: friendsError } = await supabase
      .from('friendships')
      .select('requester_id, addressee_id')
      .eq('status', 'accepted')
      .or(`requester_id.eq.${userId},addressee_id.eq.${userId}`);

    if (friendsError) throw friendsError;

    // Get friend IDs (include the current user too)
    const friendIds = [userId];
    (friendships || []).forEach((f) => {
      if (f.requester_id === userId) {
        friendIds.push(f.addressee_id);
      } else {
        friendIds.push(f.requester_id);
      }
    });

    // Get daily results for friends
    const { data, error } = await supabase
      .from('daily_results')
      .select(`
        score,
        correct_answers,
        longest_streak,
        best_answer,
        user_id,
        profiles!inner(username)
      `)
      .eq('played_date', dateString)
      .in('user_id', friendIds)
      .order('score', { ascending: false });

    if (error) throw error;

    return { data: data || [], error: null };
  } catch (error) {
    console.error('Error fetching friends daily leaderboard:', error);
    return { data: [], error };
  }
}

/**
 * Get friends' streak leaderboard
 * @param {string} userId - Current user's UUID
 * @returns {Promise<{ data: Array|null, error: Object|null }>}
 */
export async function getFriendsStreakLeaderboard(userId) {
  try {
    // First get the user's friends
    const { data: friendships, error: friendsError } = await supabase
      .from('friendships')
      .select('requester_id, addressee_id')
      .eq('status', 'accepted')
      .or(`requester_id.eq.${userId},addressee_id.eq.${userId}`);

    if (friendsError) throw friendsError;

    // Get friend IDs (include the current user too)
    const friendIds = [userId];
    (friendships || []).forEach((f) => {
      if (f.requester_id === userId) {
        friendIds.push(f.addressee_id);
      } else {
        friendIds.push(f.requester_id);
      }
    });

    // Get profile/streak data for friends
    const { data, error } = await supabase
      .from('profiles')
      .select('id, username, current_streak, total_daily_games, highest_daily_score')
      .in('id', friendIds)
      .gt('total_daily_games', 0)
      .order('current_streak', { ascending: false })
      .order('total_daily_games', { ascending: false });

    if (error) throw error;

    return { data: data || [], error: null };
  } catch (error) {
    console.error('Error fetching friends streak leaderboard:', error);
    return { data: [], error };
  }
}

async function updateProfileDailyStats(userId, dateString, score) {
  try {
    const { data: profile, error: fetchError } = await supabase
      .from('profiles')
      .select('current_streak, max_streak, last_played_date, total_daily_games, highest_daily_score')
      .eq('id', userId)
      .single();

    if (fetchError) {
      console.error('Error fetching profile for stats update:', fetchError);
      return;
    }

    const today = new Date(dateString);
    const lastPlayed = profile?.last_played_date
      ? new Date(profile.last_played_date)
      : null;

    let newStreak = 1;
    if (lastPlayed) {
      const timeDiff = today.getTime() - lastPlayed.getTime();
      const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

      if (daysDiff === 1) {
        newStreak = (profile.current_streak || 0) + 1;
      }
    }

    const newTotalGames = (profile?.total_daily_games || 0) + 1;
    const newHighestScore = Math.max(score, profile?.highest_daily_score || 0);
    const newMaxStreak = Math.max(newStreak, profile?.max_streak || 0);

    const { error: updateError } = await supabase
      .from('profiles')
      .update({
        current_streak: newStreak,
        max_streak: newMaxStreak,
        last_played_date: dateString,
        total_daily_games: newTotalGames,
        highest_daily_score: newHighestScore,
      })
      .eq('id', userId);

    if (updateError) {
      console.error('Error updating profile stats:', updateError);
    }
  } catch (err) {
    console.error('Exception updating profile stats:', err);
  }
}
